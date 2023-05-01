import { Route, Routes } from 'react-router-dom';
import './App.css';
import Ad1 from './components/Ad1';
import Footer from './components/Footer';
import Inputarea from './components/Inputarea';
import Reverse from './components/Reverse';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
        <Navbar title="converText" sbTitle1="Reverse Text Generator"/>
        <Routes>
          <Route path='/' element=
          {
            <div>
              <Inputarea inpHeading="Accidentally left the caps lock on and typed something, but can't be bothered to start again and retype it all?" inpSubHeading="Simply enter your text and choose the case you want to convert it to."/>
              <Ad1 ad1="https://global-uploads.webflow.com/5f6cc9cd16d59d990c8fca33/61d30ac833d72078f141fb47_team-seas-raised-30-million-come-back.jpg" ad2="https://u4d2z7k9.rocketcdn.me/wp-content/uploads/2022/01/rsz_191026-theoceancleanup_malaysia-1099294.jpg"/>
              <Footer/>
            </div>
          }/>
          <Route path='/smalltextgenerator' element=
          {
            <div>
              <Reverse inpHeading="Backwards Text Generator" inpSubHeading="Normal front facing text to backwards text. A simple online backward text generator tool that allows you to switch the way your text is facing. Simply write or paste the text in the left column and see it get converted in the right." btName="Convert Text In Reverse" />
              <Ad1 ad1="https://global-uploads.webflow.com/5f6cc9cd16d59d990c8fca33/61d30ac833d72078f141fb47_team-seas-raised-30-million-come-back.jpg" ad2="https://u4d2z7k9.rocketcdn.me/wp-content/uploads/2022/01/rsz_191026-theoceancleanup_malaysia-1099294.jpg"/>
              <Footer/>
            </div>

          }/>
        </Routes>
    </>
  );
}

export default App;