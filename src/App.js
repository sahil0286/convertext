import { Route, Routes } from 'react-router-dom';
import './App.css';
import Ad1 from './components/Ad1';
import Footer from './components/Footer';
import Inputarea from './components/Inputarea';
import Reverse from './components/Reverse';
import Navbar from './components/Navbar';
import Morsecode from './components/Morsecode';
import Binary from './components/Binary';

function App() {
  return (
    <>
        <Navbar title="converText" sbTitle1="Reverse Text Generator" sbTitle2="Morse Code Translator" sbTitle3="Binary Code Translator" sbTitle4="Alternating Case"/>
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
          <Route path='/morsecode' element=
          {
            <div>
              <Morsecode inpHeading="Morse Code Translator" inpSubHeading="To use the morse code translator simply enter the text on the left column and you will see that it is automatically getting translated on the right column. Likewise, if you want to decode morse code, then you can enter the morse code on the right handside of the Morse Code converter and see it get translated back to English. Not only can you convert your text into morse code you are actually able to use the audio too via the ‘morse code translator audio play button’. Simply type in the text you want converting or decoding and then hit the Convert Text In Morse Code button to get output in Morse Code." btName="Convert Text In Morse Code" />
              <Ad1 ad1="https://global-uploads.webflow.com/5f6cc9cd16d59d990c8fca33/61d30ac833d72078f141fb47_team-seas-raised-30-million-come-back.jpg" ad2="https://u4d2z7k9.rocketcdn.me/wp-content/uploads/2022/01/rsz_191026-theoceancleanup_malaysia-1099294.jpg"/>
              <Footer/>
            </div>
          }/>
          <Route path='/binary' element=
          {
            <div>
              <Binary inpHeading="Binary Code Translator" inpSubHeading="You can use this handy online binary code translation tool to quickly convert your English text into a binary code. Simply enter the regular text as you would in the left column panel and then you will see it automatically get translated into a series of binary code on the right. Likewise, if you have binary code - enter it into the right panel of the binary translator and get the english translation." btName="Convert Text In Binary Code" />
              <Ad1 ad1="https://global-uploads.webflow.com/5f6cc9cd16d59d990c8fca33/61d30ac833d72078f141fb47_team-seas-raised-30-million-come-back.jpg" ad2="https://u4d2z7k9.rocketcdn.me/wp-content/uploads/2022/01/rsz_191026-theoceancleanup_malaysia-1099294.jpg"/>
              <Footer/>
            </div>
          }/>
          <Route path='/alternating' element=
          {
            <div>
              <Binary inpHeading="Alternating Case" inpSubHeading="The alternating case converter will allow you to transform your text (no matter the current format) into text that alternates between lower case and upper case. It will generate a capital letter and then a lower case letter within the same word." btName="Alternating Text Convert" />
              <Ad1 ad1="https://global-uploads.webflow.com/5f6cc9cd16d59d990c8fca33/61d30ac833d72078f141fb47_team-seas-raised-30-million-come-back.jpg" ad2="https://u4d2z7k9.rocketcdn.me/wp-content/uploads/2022/01/rsz_191026-theoceancleanup_malaysia-1099294.jpg"/>
              <Footer/>
            </div>
          }/>
        </Routes>
    </>
  );
}

export default App;