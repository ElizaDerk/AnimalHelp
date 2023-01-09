import './App.css';
import Header from "./moduls/Header";
import Title from "./moduls/Title";
import AboutUs from "./moduls/AboutUs";
import Photos from "./moduls/Photos";
import MyForm from "./moduls/Form";
import Contact from "./moduls/Contact";


function App() {
  return (
    <div className="App">
        <Header/>
        <Title />
        <AboutUs />
        <Photos />
        <MyForm />
        <Contact />
    </div>
  );
}

export default App;
