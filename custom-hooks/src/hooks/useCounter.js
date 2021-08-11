import React, { useState, useEffect } from "react";
const useCounter = (lalleFlag = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (lalleFlag === true) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [lalleFlag]);

  return counter;
};

export default useCounter;
