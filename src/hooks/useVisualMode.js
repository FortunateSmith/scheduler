import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace) {
    if (replace) {
      setHistory((prev) => {
        const initialHist = [...prev];
        initialHist.pop();
        // console.log("Initial history: ", initialHist);
        return initialHist;
      });
    }

    setMode(newMode);

    // to set history with only array variable, must create a copy
    // const newHistory = [...history];
    // setHistory(newHistory);

    // to set history with function use prev function to create newHistory variable that is spread prev and push the new mode
    setHistory((prev) => {
      const newHistory = [...prev];
      newHistory.push(newMode);
      return newHistory;
    });
  }

  // back must pop last index of array and return mode to previous (current last index)
  function back() {
    if (history.length < 2) {
      return;
    }
    const newHistory = [...history];
    // pop last item and return newHistory array [first, second, third]
    newHistory.pop();
    // set history with current newHistory array [first, second]
    setHistory(newHistory);
    // set mode to last item of current newHistory array [second]
    setMode(newHistory.slice(-1).pop());
    // console.log("newHistory: ", newHistory);
    // console.log("current mode: ", mode);
  }
  console.log("history: ", history, "mode: ", mode);
  // return signature
  return {
    // mode: current state
    mode,
    // functions: can be used
    transition,
    back,
  };
}
