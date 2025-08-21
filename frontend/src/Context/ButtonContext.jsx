// src/context/ButtonContext.jsx
import React, { createContext, useContext, useState, useMemo } from "react";

const ButtonContext = createContext();

export const useButtonContext = () => {
  const context = useContext(ButtonContext);
  if (!context) {
    throw new Error("useButtonContext must be used within ButtonProvider");
  }
  return context;
};

export const ButtonProvider = ({ children }) => {
  // UI-related state
  const [showCode, setShowCode] = useState({});
  const [copiedCode, setCopiedCode] = useState("");

  // Logic/state for button behaviors
  const [buttonStates, setButtonStates] = useState({
    loading: false,
    toggle: false,
    counter: 0,
  });

  // Toggle code visibility
  const toggleCode = (buttonId) => {
    setShowCode((prev) => ({
      ...prev,
      [buttonId]: !prev[buttonId],
    }));
  };

  // Copy code to clipboard
  const copyToClipboard = async (code, buttonId) => {
    if (!navigator.clipboard) {
      console.error("Clipboard API not supported");
      return;
    }

    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(buttonId);
      setTimeout(() => setCopiedCode(""), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err.message);
    }
  };

  // Update specific button state
  const updateButtonState = (key, value) => {
    setButtonStates((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // Button action handlers
  const handleLoading = async () => {
    updateButtonState("loading", true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    updateButtonState("loading", false);
  };

  const handleToggle = () => {
    updateButtonState("toggle", !buttonStates.toggle);
  };

  const handleCounter = () => {
    updateButtonState("counter", buttonStates.counter + 1);
  };

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      showCode,
      copiedCode,
      buttonStates,
      toggleCode,
      copyToClipboard,
      updateButtonState,
      handleLoading,
      handleToggle,
      handleCounter,
    }),
    [showCode, copiedCode, buttonStates]
  );

  return (
    <ButtonContext.Provider value={contextValue}>
      {children}
    </ButtonContext.Provider>
  );
};
