import Navigation from "./components/Heading/Navigation";
import Player from "./components/Content/Player";
import ThemeProvider from "./components/Heading/ThemeContext";

function App() {
  return (
    <ThemeProvider>
    <Navigation></Navigation>
    <Player></Player>
    </ThemeProvider>
  );
}

export default App;
