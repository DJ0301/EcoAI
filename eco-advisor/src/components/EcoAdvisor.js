import { useRef, useState } from 'react';
// import Textarea from 'react-textarea-autosize';
// import { SendIcon } from 'lucide-react';
import { handleChat } from '../api/chat';  // Add this import
import { EmptyScreen } from './EmptyScreen';  // Add this import

export function EcoAdvisor() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [showLinkInput, setShowLinkInput] = useState(false);
  const messageInputRef = useRef(null);

  const handleSubmit = async (message, productLink = '') => {
    try {
      setIsLoading(true);
      
      // Add user message to chat
      setMessages(prev => [...prev, {
        id: Date.now(),
        role: 'user',
        content: message
      }]);

      // Get AI response
      const response = await handleChat(message, productLink, messages);
      
      // Add AI response to chat
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        role: 'assistant',
        content: response
      }]);

    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.'
      }]);
    } finally {
      setIsLoading(false);
      setShowLinkInput(false);
    }
  };

  return (
    <div className="chat-container">
      {messages.length === 0 ? (
        <EmptyScreen submitMessage={handleSubmit} />
      ) : (
        <div className="messages">
          {messages.map((message) => (
            <div 
              key={message.id} 
              className={`message ${message.role}`}
            >
              {message.content}
            </div>
          ))}
          {isLoading && <div className="message assistant">...</div>}
        </div>
      )}
      
      <form 
        onSubmit={(e) => {
          e.preventDefault();
          const message = messageInputRef.current.value;
          if (message.trim()) {
            handleSubmit(message);
            messageInputRef.current.value = '';
          }
        }}
      >
        <input
          ref={messageInputRef}
          type="text"
          placeholder="Type your message..."
          disabled={isLoading}
        />
        <button type="submit" disabled={isLoading}>
          Send
        </button>
      </form>
    </div>
  );
}
