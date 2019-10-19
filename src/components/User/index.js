import React, { useState, useEffect } from 'react';

import './index.scss';

const getTime = () => new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

function User() {
  const [time, setTime] = useState(getTime());

  useEffect(() => {
    let interval = null;
    setTimeout(() => {
      interval = setInterval(() => {
        setTime(getTime());
      }, 1000);
    }, (60 - new Date().getSeconds()) * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="user-comp">
      <div>
        <img alt="profile icon" src="https://ca.slack-edge.com/T025DU6HX-W615Z9Z2T-g109cc8aeaae-48" />
      </div>
      <h2>Rakesh Rai</h2> <div>{time}</div>
    </div>
  );
}

export default User;
