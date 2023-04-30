import './App.css';
import Ad1 from './components/Ad1';
import Inputarea from './components/Inputarea';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
        <Navbar title="converText"/>
        <Inputarea inpHeading="Accidentally left the caps lock on and typed something, but can't be bothered to start again and retype it all?" inpSubHeading="Simply enter your text and choose the case you want to convert it to."/>
        <Ad1/>
      </>
  );
}

export default App;