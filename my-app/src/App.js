import "./App.css";
import YoutubeList from "./components/youtube/YoutubeList";

function App() {
  const name = "envdev";
  // console.log(YoutubeData);
  return (
    <YoutubeList>
      {name}
    </YoutubeList>
  );
}

export default App;
