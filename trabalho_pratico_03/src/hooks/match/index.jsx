import React, { createContext, useContext, useState } from "react";

// import Modal from "../../components/Modal";

const ModalContext = createContext({});
const MatchProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [modalOptions, setModalOptions] = useState({});

  const showModal = React.useCallback((options = {}) => {
    setModalOptions(options);
    setIsVisible(true);
  }, []);

  const hideModal = () => {
    setIsVisible(false);
  };

  return (
    <ModalContext.Provider
      value={{
        showModal,
        hideModal,
      }}
    >
      <Modal
        isVisible={isVisible}
        onPressConfirmButton={hideModal}
        toggleModal={() => setIsVisible(!isVisible)}
        type={"mono"}
        {...modalOptions}
      />
      {children}
    </ModalContext.Provider>
  );
};

function useModal() {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModal must be used within a MatchProvider");
  }

  return context;
}

export { MatchProvider, useModal };
