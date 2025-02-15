import { useRef, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { handleChat } from '../api/chat';
import ReactMarkdown from 'react-markdown';
import botIcon from '../boticon.png';

export function EcoAdvisor() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [showInitialBubbles, setShowInitialBubbles] = useState(true);
  const [isRecording, setIsRecording] = useState(false);
  const messageInputRef = useRef(null);
  const messagesEndRef = useRef(null);
  const recognitionRef = useRef(null);
  const location = useLocation();
  const prefillProcessed = useRef(false);

  useEffect(() => {
    if (location.state?.prefillMessage && messages.length === 0 && !prefillProcessed.current) {
      const prefillMessage = location.state.prefillMessage;
      handleSubmit(prefillMessage);
      prefillProcessed.current = true; // Mark prefill as processed
    }
  }, [location.state, messages.length]);

  const handleSubmit = async (message, productLink) => {
    if (showInitialBubbles) setShowInitialBubbles(false);

    try {
      setIsLoading(true);
      setMessages(prev => [...prev, {
        id: Date.now(),
        role: 'user',
        content: message
      }]);

      const response = await handleChat(message, productLink, messages);
      
      const assistantMessageId = Date.now() + 1;
      setMessages(prev => [...prev, {
        id: assistantMessageId,
        role: 'assistant',
        content: ''
      }]);

      await simulateTypingEffect(response, assistantMessageId);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const simulateTypingEffect = async (text, messageId) => {
    for (let i = 0; i <= text.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 6));
      setMessages(prev => prev.map(msg => 
        msg.id === messageId ? { ...msg, content: text.substring(0, i) } : msg
      ));
    }
  };

  const startVoiceRecognition = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert('Your browser does not support speech recognition. Please try a different browser.');
      return;
    }

    if (isRecording) {
      recognitionRef.current.stop();
      setIsRecording(false);
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      messageInputRef.current.value = transcript;
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
      setIsRecording(false);
    };

    recognition.onend = () => {
      setIsRecording(false);
    };

    recognitionRef.current = recognition;
    recognition.start();
    setIsRecording(true);
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className={`chat-container ${isMinimized ? 'minimized' : ''} bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6 rounded-lg shadow-lg h-full flex flex-col`} style={{ height: '600px', width: '1200px' }}>
        <div className="flex-grow overflow-y-auto mb-2" style={{ maxHeight: '500px' }}>
          {!isMinimized && (
            <>
              {messages.length === 0 && !isLoading ? (
                <div className="empty-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-12 m-12 rounded-lg shadow-lg text-center">
                  <h2 className="text-4xl font-bold mb-4 text-green-700 dark:text-green-400 font-sans">Welcome to Eco Advisor</h2>
                  <p className="mb-6 font-light text-lg">Your AI-powered assistant for sustainable product choices</p>
                  <div className="button-container flex flex-row gap-4 flex-wrap justify-center">
                    <button 
                      onClick={() => handleSubmit('Can you help me find an eco-friendly product?')}
                      className="example-button bg-green-600 text-white hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 font-medium py-3 px-5 rounded-lg transition-all duration-300 text-lg"
                    >
                      🔍 Search for an eco-friendly product
                    </button>
                    <button 
                      onClick={() => handleSubmit('What are some sustainable materials I should know about?')}
                      className="example-button bg-green-600 text-white hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 font-medium py-3 px-5 rounded-lg transition-all duration-300 text-lg"
                    >
                      🌱 Learn about sustainable materials
                    </button>
                    <button 
                      onClick={() => handleSubmit('What are some tips to reduce my carbon footprint?')}
                      className="example-button bg-green-600 text-white hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 font-medium py-3 px-5 rounded-lg transition-all duration-300 text-lg"
                    >
                      🌍 Carbon footprint tips
                    </button>
                  </div>
                </div>
              ) : (
                <div className="messages space-y-4">
                  {messages.map((message) => (
                    <div 
                      key={message.id} 
                      className={`message ${message.role === 'user' ? 'user-message bg-green-100 dark:bg-green-800 text-right ml-auto' : 'assistant-message bg-gray-100 dark:bg-gray-800 text-left mr-auto'} p-4 rounded-lg shadow-sm max-w-lg font-serif text-lg`}
                    >
                      <div className="message-header text-base font-semibold flex items-center justify-start">
                        {message.role === 'assistant' && (
                          <>
                            <img src={botIcon} alt="Bot Icon" className="mr-2 w-8 h-8" />
                            <span className="text-xl font-bold font-sans">AURA</span>
                          </>
                        )}
                      </div>
                      <ReactMarkdown
                        components={{
                          a: ({ node, ...props }) => (
                            <a {...props} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">
                              {props.children}
                            </a>
                          ),
                        }}
                      >
                        {message.content}
                      </ReactMarkdown>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              )}
            </>
          )}
        </div>
        
        <div className="mt-auto">
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              const message = messageInputRef.current.value;
              if (message.trim()) {
                handleSubmit(message);
                messageInputRef.current.value = '';
              }
            }}
            className="flex items-center space-x-4 bg-white dark:bg-gray-900 p-4 border-t border-gray-300 dark:border-gray-700"
          >
            <input
              ref={messageInputRef}
              type="text"
              placeholder="How can Aura help you today?"
              disabled={isLoading}
              className="flex-grow p-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 font-mono text-lg"
            />
            <button 
              type="button"
              onClick={startVoiceRecognition}
              className={`bg-yellow-300 text-white hover:bg-yellow-400 dark:bg-yellow-300 dark:hover:bg-yellow-400 font-medium py-3 px-5 rounded-lg transition-all duration-300 flex items-center justify-center text-lg ${isRecording ? 'opacity-50' : ''}`}
              disabled={isRecording}
            >
              🎤
            </button>
            <button 
              type="submit" 
              disabled={isLoading}
              className="bg-green-600 text-white hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 font-medium py-3 px-5 rounded-lg transition-all duration-300 flex items-center justify-center text-lg"
            >
              <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}