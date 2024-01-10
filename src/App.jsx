import Toolbar from "./components/Toolbar";
import Homepage from "./components/homepage";

function App() {
  return (
    <div>
          <Toolbar/>

      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
        <h1>
          <Homepage/>
        </h1>
      </header>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
