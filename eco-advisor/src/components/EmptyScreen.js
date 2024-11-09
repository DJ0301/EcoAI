// export function EmptyScreen({ submitMessage }) {
//   return (
//     <div className="empty-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-12 m-12 rounded-lg shadow-lg text-center">
//       <h2 className="text-3xl font-bold mb-4 text-green-700 dark:text-green-400">Welcome to Eco Advisor</h2>
//       <p className="mb-6">Your AI-powered assistant for sustainable product choices</p>
//       <div className="button-container flex flex-row gap-4 flex-wrap justify-center">
//         <button 
//           onClick={() => submitMessage('search product')}
//           className="example-button bg-green-600 text-white hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 font-medium py-2 px-4 rounded-lg transition-all duration-300"
//         >
//           🔍 Search for an eco-friendly product
//         </button>
//         <button 
//           onClick={() => submitMessage('Tell me about sustainable materials')}
//           className="example-button bg-green-600 text-white hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 font-medium py-2 px-4 rounded-lg transition-all duration-300"
//         >
//           🌱 Learn about sustainable materials
//         </button>
//         <button 
//           onClick={() => submitMessage('How can I reduce my carbon footprint?')}
//           className="example-button bg-green-600 text-white hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 font-medium py-2 px-4 rounded-lg transition-all duration-300"
//         >
//           🌍 Carbon footprint tips
//         </button>
//       </div>
//     </div>
//   );
// }