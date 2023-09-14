import Footer from "./components/FooterBox/Footer";
import Jobs from "./components/JobBox/Jobs";
import NavBar from "./components/NavBar/NavBar";
import Search from "./components/SearchBox/Search";
import Value from "./components/ValueBox/Value";

const App = () => {
  return (
    <div className="w-[85%] m-auto bg-white">
      <NavBar />
      <Search />
      <Jobs />
      <Value /> 
      <Footer />
    </div>
  );
};

export default App;
