import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  // transitions from one mode to the next
  function transition(newMode, replace) {
    if (replace) {
      setHistory((prev) => {
        const initialHist = [...prev];
        initialHist.pop();

        return initialHist;
      });
    }

    setMode(newMode);

    // tracks history of state for back function to utilize
    setHistory((prev) => {
      const newHistory = [...prev];
      newHistory.push(newMode);
      return newHistory;
    });
  }

  // returns mode to immediate previous state
  function back() {
    if (history.length < 2) {
      return;
    }
    const newHistory = [...history];
    newHistory.pop();
    setHistory(newHistory);
    setMode(newHistory.slice(-1).pop());
  }

  // ***** return signature *****
  return {
    mode,
    transition,
    back,
  };
}
