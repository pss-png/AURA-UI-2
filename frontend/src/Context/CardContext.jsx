// src/Context/CardContext.jsx
import React, { createContext, useContext, useState, useMemo } from "react";

const CardContext = createContext();

export const useCardContext = () => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error("useCardContext must be used within CardProvider");
  }
  return context;
};

export const CardProvider = ({ children }) => {
  // UI-related state
  const [showCode, setShowCode] = useState({});
  const [copiedCode, setCopiedCode] = useState("");

  // Logic/state for Card behaviors
  const [cardStates, setCardStates] = useState({
    loading: false,
    toggle: false,
    counter: 0,
  });

  // Toggle code visibility
  const toggleCode = (cardId) => {
    setShowCode((prev) => ({
      ...prev,
      [cardId]: !prev[cardId],
    }));
  };

  // Copy code to clipboard
  const copyToClipboard = async (code, cardId) => {
    if (!navigator.clipboard) {
      console.error("Clipboard API not supported");
      return;
    }

    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(cardId);
      setTimeout(() => setCopiedCode(""), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err.message);
    }
  };

  // Update specific Card state
  const updateCardState = (key, value) => {
    setCardStates((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // Card action handlers
  const handleLoading = async () => {
    updateCardState("loading", true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    updateCardState("loading", false);
  };

  const handleToggle = () => {
    updateCardState("toggle", !cardStates.toggle);
  };

  const handleCounter = () => {
    updateCardState("counter", cardStates.counter + 1);
  };

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      showCode,
      copiedCode,
      cardStates,
      toggleCode,
      copyToClipboard,
      updateCardState,
      handleLoading,
      handleToggle,
      handleCounter,
    }),
    [showCode, copiedCode, cardStates]
  );

  return (
    <CardContext.Provider value={contextValue}>{children}</CardContext.Provider>
  );
};
