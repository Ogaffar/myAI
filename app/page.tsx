"use client";

import ChatInput from "@/components/chat/input";
import ChatMessages from "@/components/chat/messages";
import ChatHeader from "@/components/chat/header";
import useApp from "@/hooks/use-app";

export default function Chat() {
  const {
    messages,
    input,
    isLoading,
    indicatorState,
    handleInputChange,
    handleSubmit,
    clearMessages,
  } = useApp();

  return (
    <div className="flex flex-col h-screen">
      <ChatHeader clearMessages={clearMessages} />
      
      <main className="flex-1 overflow-hidden">
        <div className="container mx-auto h-full max-w-screen-lg flex flex-col p-4">
          <div className="flex-1 overflow-y-auto">
            <ChatMessages 
              messages={messages} 
              indicatorState={indicatorState} 
            />
          </div>
        </div>
      </main>

      <footer className="border-t">
        <div className="container mx-auto max-w-screen-lg p-4">
          <ChatInput
            input={input}
            isLoading={isLoading}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        </div>
      </footer>
    </div>
  );
}
