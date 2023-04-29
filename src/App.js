import './App.css';
import Inputarea from './components/Inputarea';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar title="converText" inpHeading="Accidentally left the caps lock on and typed something, but can't be bothered to start again and retype it all?" inpSubHeading="Simply enter your text and choose the case you want to convert it to."/>
      <Inputarea/>
    </>
  );
}

export default App;