import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <div className="page-wrapper">
        <Home />
      </div>
      <Footer />
    </>
  );
}
export default App;
