import { ReactNode, createContext, useState } from "react";

interface ChatContextType {
  room: string | null;
  currentActiveUser: { name: string; id: string } | null;
}

const ChatContext = createContext<ChatContextType>({
  room: null,
  currentActiveUser: null,
});

export const ChatProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [room, setRoom] = useState<string | null>(null);
  const [currentActiveUser, setCurrentActiveUser] = useState<{
    name: string;
    id: string;
  } | null>(null);
  const [messages, setMessages] = useState<any[]>([]);

  return (
    <ChatContext.Provider
      value={{
        room,
        currentActiveUser,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
