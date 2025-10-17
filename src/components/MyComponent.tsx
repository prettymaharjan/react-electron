export default function MyComponent({ username = "Developer" }) {
  return (
    <div className="welcome-container">
      <h1>🚀 Welcome, {username}!</h1>
      <p>✅ Everything is wired up and ready to go.</p>
      <p>🧠 Built with modern packages. No deprecated warnings anytime soon.</p>
      <p>✨ Customize and build your next big thing!</p>
    </div>
  );
}
