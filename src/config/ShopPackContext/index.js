import React, { useState, createContext } from 'react';

export const ShopPackContext = createContext();

const ShopPackContextProvider = ({ children = null }) => {
  const [selectedShopPackIndex, setSelectedShopPackIndex] = useState(-1);

  return (
    <ShopPackContext.Provider
      value={{
        selectedShopPackIndex,
        setSelectedShopPackIndex,
      }}
    >
      {children}
    </ShopPackContext.Provider>
  );
};

export default ShopPackContextProvider;
