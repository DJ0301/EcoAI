import { useRef, useState, useEffect } from 'react';
// import Textarea from 'react-textarea-autosize';
// import { SendIcon } from 'lucide-react';
import { handleChat } from '../api/chat';  // Add this import
import { EmptyScreen } from './EmptyScreen';  // Add this import
import ReactMarkdown from 'react-markdown';

export function EcoAdvisor() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showLinkInput, setShowLinkInput] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const messageInputRef = useRef(null);
  const messagesEndRef = useRef(null);

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

  // Auto-scroll to the bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className={`chat-container ${isMinimized ? 'minimized' : ''}`}>
      <div className="chat-header">
        <h2>Eco Advisor</h2>
        <button 
          className="minimize-button" 
          onClick={() => setIsMinimized(!isMinimized)}
        >
          {isMinimized ? '🔼' : '🔽'}
        </button>
      </div>
      {!isMinimized && (
        <>
          {messages.length === 0 ? (
            <EmptyScreen submitMessage={handleSubmit} />
          ) : (
            <div className="messages">
              {messages.map((message) => (
                <div 
                  key={message.id} 
                  className={`message ${message.role} ${message.role === 'user' ? 'user-message' : 'assistant-message'}`}
                >
                  <ReactMarkdown
                    components={{
                      a: ({ node, ...props }) => (
                        <a {...props} target="_blank" rel="noopener noreferrer">
                          {props.children}
                        </a>
                      ),
                    }}
                  >
                    {message.content}
                  </ReactMarkdown>
                </div>
              ))}
              {isLoading && <div className="message assistant-message">...</div>}
              <div ref={messagesEndRef} />
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
        </>
      )}
    </div>
  );
}
