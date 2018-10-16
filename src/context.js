import React, { createContext } from 'react';

export const Store = createContext();

export const withStore = WrappedComponent => props => (
  <Store.Consumer>{store => <WrappedComponent {...props} store={store} />}</Store.Consumer>
);
