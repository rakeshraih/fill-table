import React, { useContext, useState } from 'react';
import { AppContext, FillerContext } from '../../AppContext';

import './index.scss';

const TableDimension = { height: 450, width: 825 };

const Td = function Td({ height, width, paint }) {
  const [item, setTdItem] = useState(null);
  const [clicked, setClicked] = useState(false);
  const { filler } = useContext(FillerContext);
  const { component, name } = filler;
  return (
    <td
      tabIndex="0"
      role="button"
      aria-pressed={clicked}
      onClick={
        !paint && (component || name === 'E')
          ? () => {
              if (component !== item) {
                setTdItem(component);
                setClicked(!clicked);
              }
            }
          : undefined
      }
      onMouseEnter={
        paint && (component || name === 'E')
          ? () => {
              if (component !== item) {
                setTdItem(component);
                setClicked(!clicked);
              }
            }
          : undefined
      }
      style={{ height: `${height}px`, width: `${width}px` }}
      className={height <= 35 || width <= 55 ? 'break-1' : ''}
    >
      {item}
    </td>
  );
};

const createRows = ({ height, width, paint }) => {
  const trArray = [];
  const tdProps = {
    height: TableDimension.height / height,
    width: TableDimension.width / width,
    paint,
  };
  for (let i = 0; i < height; i++) {
    const tdArray = [];
    for (let j = 0; j < width; j++) {
      tdArray.push(<Td key={`${i}${j}`} {...tdProps} />);
    }
    trArray.push(<tr key={i}>{tdArray}</tr>);
  }
  return trArray;
};
function Table() {
  const app = useContext(AppContext);
  return (
    <div className="table-comp">
      <table>
        <tbody>{createRows(app)}</tbody>
      </table>
    </div>
  );
}

export default Table;
