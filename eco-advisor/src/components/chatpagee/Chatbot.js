// import React, { useState } from 'react';
// import { Button, Card } from 'flowbite-react';

// export const Chatbot = () => {
//   const [chats, setChats] = useState([
//     { id: 1, user: 'How does AI work?', response: 'AI works by processing large amounts of data and learning from patterns within that data...' },
//     { id: 2, user: 'What is Flowbite UI?', response: 'Flowbite is an open-source UI component library built for Tailwind CSS...' },
//   ]);
//   const [input, setInput] = useState('');

//   const handleSend = (e) => {
//     e.preventDefault();
//     if (!input.trim()) return;

//     const newChat = { id: chats.length + 1, user: input, response: "I'm a placeholder response!" };
//     setChats([...chats, newChat]);
//     setInput('');
//   };

//   return (
//     <>
//       <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900">
        
//         {/* Main Chat Area */}
//         <main className="flex-1 overflow-y-auto p-6 space-y-4 bg-white dark:bg-gray-900">
//           {chats.map((chat) => (
//             <React.Fragment key={chat.id}>
//               <Card className="bg-gray-200 dark:bg-gray-700 p-4 rounded-md shadow-md">
//                 <p><strong>User:</strong> {chat.user}</p>
//               </Card>
//               <Card className="bg-gray-100 dark:bg-gray-600 p-4 rounded-md shadow-md">
//                 <p><strong>ECOAURA:</strong> {chat.response}</p>
//               </Card>
//             </React.Fragment>
//           ))}
//         </main>

//         {/* Prompt Input Section (Fixed to the Bottom) */}
//         <div className="p-4 bg-gray-50 border-t border-gray-200 dark:bg-gray-800 dark:border-gray-700">
//           <form onSubmit={handleSend} className="flex items-center space-x-2">
//             <input
//               type="text"
//               placeholder="Type your prompt here..."
//               className="flex-1 p-3 rounded-md border border-gray-300 dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring focus:ring-green-500"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//             />
//             <Button
//               type="submit"
//               color="success"
//               className="p-3"
//             >
//               Send
//             </Button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };