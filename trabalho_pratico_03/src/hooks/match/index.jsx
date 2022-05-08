import React, { createContext, useContext, useState } from "react";

const MatchContext = createContext({});
const MatchProvider = ({ children }) => {
  const [matchState, setMatchState] = useState({
    description: "",
    numberOfSets: "",
    pair1player1: "",
    pair1player2: "",
    pair2player1: "",
    pair2player2: "",
    superTieBreak: "",
    whichPairBegins: "",
    pair1GamePoints: 0,
    pair2GamePoints: 0,
    pair1SetPoints: [0],
    pair2SetPoints: [0],
    pair1MatchPoints: 0,
    pair2MatchPoints: 0,
  });

  // const [isVisible, setIsVisible] = useState(false);
  // const [modalOptions, setModalOptions] = useState({});

  // const showModal = React.useCallback((options = {}) => {
  //   setModalOptions(options);
  //   setIsVisible(true);
  // }, []);

  // const hideModal = () => {
  //   setIsVisible(false);
  // };

  return (
    <MatchContext.Provider
      value={{
        matchState,
        setMatchState,
      }}
    >
      {children}
    </MatchContext.Provider>
  );
};

function useMatch() {
  const context = useContext(MatchContext);

  if (!context) {
    throw new Error("useModal must be used within a MatchProvider");
  }

  return context;
}

export { MatchProvider, useMatch };
