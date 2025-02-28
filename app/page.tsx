"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Settings, RefreshCw, Send, Paperclip } from "lucide-react";
import ChatInput from "@/components/chat/input";
import ChatMessages from "@/components/chat/messages";
import ChatHeader from "@/components/chat/header";
import useApp from "@/hooks/use-app";

export default function Chat() {
  const {
    messages,
    handleInputChange,
    handleSubmit,
    input,
    isLoading,
    indicatorState,
    clearMessages,
  } = useApp();
  
  const messagesEndRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [theme, setTheme] = useState("light");
  const [showSettings, setShowSettings] = useState(false);
  
  // Handle responsive layout
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  
  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark");
  };
  
  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ctrl+Enter to submit
      if (e.ctrlKey && e.key === "Enter") {
        handleSubmit(e);
      }
      // Escape to close settings
      if (e.key === "Escape" && showSettings) {
        setShowSettings(false);
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleSubmit, showSettings]);

  return (
    <div className={`flex flex-col h-screen ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      <ChatHeader 
        clearMessages={clearMessages} 
        toggleTheme={toggleTheme} 
        theme={theme}
        toggleSettings={() => setShowSettings(!showSettings)}
      />
      
      <AnimatePresence>
        {showSettings && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute right-4 top-16 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 z-10 border border-gray-200 dark:border-gray-700"
          >
            <h3 className="font-medium mb-2">Settings</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span>Dark Mode</span>
                <button 
                  onClick={toggleTheme}
                  className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ${theme === "dark" ? "bg-blue-600" : "bg-gray-300"}`}
                >
                  <div className={`w-4 h-4 rounded-full bg-white transform transition-transform duration-300 ${theme === "dark" ? "translate-x-6" : "translate-x-0"}`} />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span>Notifications</span>
                <button className="w-12 h-6 rounded-full p-1 bg-blue-600">
                  <div className="w-4 h-4 rounded-full bg-white transform translate-x-6" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <main className="flex-1 overflow-hidden flex flex-col">
        <div className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="max-w-3xl mx-auto w-full h-full">
            {messages.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <MessageSquare className="w-12 h-12 text-gray-400 mb-4" />
                <h2 className="text-xl font-semibold mb-2">Start a new conversation</h2>
                <p className="text-gray-500 dark:text-gray-400 max-w-md">
                  Ask a question or type a command to begin chatting
                </p>
              </div>
            ) : (
              <ChatMessages 
                messages={messages} 
                indicatorState={indicatorState} 
                theme={theme}
                isMobile={isMobile}
              />
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-4">
          <div className="max-w-3xl mx-auto">
            <ChatInput
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
              input={input}
              isLoading={isLoading}
              theme={theme}
            />
            <div className="flex justify-between items-center mt-2 text-xs text-gray-500 dark:text-gray-400 px-2">
              <div>
                <kbd className="px-1 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono">Ctrl</kbd>
                +
                <kbd className="px-1 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono">Enter</kbd>
                to send
              </div>
              <div>
                {messages.length} messages
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
