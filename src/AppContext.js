import React from 'react';

const AppContext = React.createContext({});
export const AppProvider = AppContext.Provider;
export const AppConsumer = AppContext.Consumer;

const FillerContext = React.createContext({});
export const FillerProvider = FillerContext.Provider;
export const FillerConsumer = FillerContext.Consumer;

export { FillerContext, AppContext };
