import "./App.css";
function SimpleCard [{ title, content }] {
  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h2>Hello World!</h2>
    </div>
  );
}
export default App;