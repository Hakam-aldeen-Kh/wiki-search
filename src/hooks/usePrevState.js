import { useEffect, useRef } from "react";

import React from "react";

const usePrevState = (state) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = state;
  });

  return ref.current;
};

export default usePrevState;
