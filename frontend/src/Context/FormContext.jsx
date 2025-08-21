// src/Context/FromContext.jsx
import React, { createContext, useContext, useState, useMemo } from "react";

const FromContext = createContext();

export const useFromContext = () => {
  const context = useContext(FromContext);
  if (!context) {
    throw new Error("useFromContext must be used within FromProvider");
  }
  return context;
};

export const FromProvider = ({ children }) => {
  // UI-related state
  const [showCode, setShowCode] = useState({});
  const [copiedCode, setCopiedCode] = useState("");

  // Logic/state for From behaviors
  const [FromStates, setFromStates] = useState({
    loading: false,
    toggle: false,
    counter: 0,
  });

  // Toggle code visibility
  const toggleCode = (FromId) => {
    setShowCode((prev) => ({
      ...prev,
      [FromId]: !prev[FromId],
    }));
  };

  // Copy code to clipboard
  const copyToClipboard = async (code, FromId) => {
    if (!navigator.clipboard) {
      console.error("Clipboard API not supported");
      return;
    }

    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(FromId);
      setTimeout(() => setCopiedCode(""), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err.message);
    }
  };

  // Update specific From state
  const updateFromState = (key, value) => {
    setFromStates((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // From action handlers
  const handleLoading = async () => {
    updateFromState("loading", true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    updateFromState("loading", false);
  };

  const handleToggle = () => {
    updateFromState("toggle", !FromStates.toggle);
  };

  const handleCounter = () => {
    updateFromState("counter", FromStates.counter + 1);
  };

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      showCode,
      copiedCode,
      FromStates,
      toggleCode,
      copyToClipboard,
      updateFromState,
      handleLoading,
      handleToggle,
      handleCounter,
    }),
    [showCode, copiedCode, FromStates]
  );

  return (
    <FromContext.Provider value={contextValue}>{children}</FromContext.Provider>
  );
};
