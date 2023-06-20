import dayjs from "dayjs";
import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export const GlobalContext = ({ children }) => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(true);
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [smallCallenderMonth, setSmallCallenderMonth] = useState(null);

  useEffect(() => {
    if (smallCallenderMonth !== null) {
      setMonthIndex(smallCallenderMonth);
    }
  }, [smallCallenderMonth]);

  return (
    <AppContext.Provider
      value={{
        isOpenSidebar,
        monthIndex,
        setIsOpenSidebar,
        setMonthIndex,
        smallCallenderMonth,
        setSmallCallenderMonth,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default useGlobalContext;
