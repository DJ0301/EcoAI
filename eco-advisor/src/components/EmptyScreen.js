export function EmptyScreen({ submitMessage }) {
  return (
    <div className="empty-screen">
      <h2>Welcome to Eco Advisor</h2>
      <p>Your AI-powered assistant for sustainable product choices</p>
      <div className="button-container">
        <button 
          onClick={() => submitMessage('search product')}
          className="example-button"
        >
          🔍 Search for an eco-friendly product
        </button>
        <button 
          onClick={() => submitMessage('Tell me about sustainable materials')}
          className="example-button"
        >
          🌱 Learn about sustainable materials
        </button>
        <button 
          onClick={() => submitMessage('How can I reduce my carbon footprint?')}
          className="example-button"
        >
          🌍 Carbon footprint tips
        </button>
      </div>
    </div>
  );
}
