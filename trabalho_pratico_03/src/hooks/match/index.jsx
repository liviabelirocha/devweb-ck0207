/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useContext, useState, useEffect } from "react";

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
    pair1HasWon: false,
    pair2HasWon: false,
    inTieBreak: false,
    pair1TieBreakPoints: 0,
    pair2TieBreakPoints: 0,
    callHelper: null,
    callHelper2: null,
  });

  const gamePoints = [0, 15, 30, 40];

  const startNewSet = () => {
    const arr1 = matchState.pair1SetPoints.slice(0)
    arr1.push(0)
    const arr2 = matchState.pair2SetPoints.slice(0)
    arr2.push(0)
    setMatchState({
      ...matchState,
      pair1SetPoints: arr1,
      pair2SetPoints: arr2,
      callHelper2: null,
    });
  }

  const addMatchPoint = (pair) => {
    if (matchState.numberOfSets === "Set Único") {
      if (pair === 1) {
        setMatchState({ ...matchState, pair1HasWon: true });

        return;
      }

      setMatchState({ ...matchState, pair2HasWon: true });

      return;
    }

    if (pair === 1) {
      // if (matchState.pair1MatchPoints === 1) {
      //   setMatchState({ ...matchState, pair1HasWon: true });

      //   return;
      // }
      
      setMatchState({
        ...matchState,
        pair1MatchPoints: matchState.pair1MatchPoints + 1,
        callHelper2: pair
      });

      return;
    }

    // if (matchState.pair2MatchPoints === 1) {
    //   setMatchState({ ...matchState, pair2HasWon: true });

    //   return;
    // }

    setMatchState({
      ...matchState,
      pair2MatchPoints: matchState.pair2MatchPoints + 1,
      callHelper2: pair
    });
  };

  const addGamePoint = (pair) => {
    if (matchState.inTieBreak) {
      if (pair === 1) {
        if (matchState.pair1TieBreakPoints === 6) {
          //win
          addSetPoint(1);
          addMatchPoint(1);
          setMatchState({
            ...matchState,
            pair1TieBreakPoints: 0,
            pair2TieBreakPoints: 0,
          });
          return;
        }

        setMatchState({
          ...matchState,
          pair1TieBreakPoints: matchState.pair1TieBreakPoints + 1,
        });

        return;
      }

      if (matchState.pair2TieBreakPoints === 6) {
        //win
        addSetPoint(2);
        addMatchPoint(2);

        setMatchState({
          ...matchState,
          pair1TieBreakPoints: 0,
          pair2TieBreakPoints: 0,
        });
        return;
      }

      setMatchState({
        ...matchState,
        pair2TieBreakPoints: matchState.pair2TieBreakPoints + 1,
      });

      return;
    }

    if (pair === 1) {
      if (matchState.pair1GamePoints === 40) {
        setMatchState({
          ...matchState,
          pair1GamePoints: 0,
          pair2GamePoints: 0,
          callHelper: pair
        });

        return;
      }

      gamePoints.map((key, index) => {
        let hasMadeChange = false;
        if (matchState.pair1GamePoints === key && !hasMadeChange) {
          setMatchState({
            ...matchState,
            pair1GamePoints: gamePoints[index + 1],
          });

          hasMadeChange = true;
        }
      });

      return;
    }

    if (matchState.pair2GamePoints === 40) {
      setMatchState({
        ...matchState,
        pair1GamePoints: 0,
        pair2GamePoints: 0,
        callHelper: pair
      });

      return;
    }

    gamePoints.map((key, index) => {
      let hasMadeChange = false;
      if (matchState.pair2GamePoints === key && !hasMadeChange) {
        setMatchState({
          ...matchState,
          pair2GamePoints: gamePoints[index + 1],
        });

        hasMadeChange = true;
      }
    });
  };

  const addSetPoint = (team) => {
    const len = matchState.pair1SetPoints.length
    const currentSet = (team === 1) ? matchState.pair1SetPoints[len-1] : matchState.pair2SetPoints[len-1];
    const currentSetAdv = (team !== 1) ? matchState.pair1SetPoints[len-1] : matchState.pair2SetPoints[len-1];
    
    if(team === 1) {
      const setPoints = matchState.pair1SetPoints.slice(0)
      setPoints[len-1] = currentSet + 1
      setMatchState({...matchState, pair1SetPoints: [...setPoints], callHelper: null})      
    } else {
      const setPoints = matchState.pair2SetPoints.slice(0)
      setPoints[len-1] = currentSet + 1
      setMatchState({...matchState, pair2SetPoints: [...setPoints], callHelper: null})
    }
    if(currentSet >= 6 && currentSetAdv < currentSet - 1) {
      addMatchPoint(team)
      return
    } else if (currentSet === 6 && currentSetAdv === 6) {
      // tiebrake
      setMatchState({...matchState, inTieBrake: true, callHelper: null})
    }
  }

  useEffect(() => {
    if(matchState.callHelper) addSetPoint(matchState.callHelper)
  }, [matchState.callHelper])

  useEffect(() => {
    if(matchState.callHelper2) startNewSet()
  }, [matchState.callHelper2])

  useEffect(() => {console.log(matchState.pair1SetPoints)}, [matchState.pair1SetPoints]);

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
        addGamePoint
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
