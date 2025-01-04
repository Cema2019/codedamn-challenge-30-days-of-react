/* Write a simple component called App that displays a button with the text "Click me!" and logs a Clicked! message to the console when clicked.*/

const App = () => {
  return (
    <button data-testid="button" onClick={() => console.log("Clicked!")}>
      Click me!
    </button>
  );
};

export default App;

