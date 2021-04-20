import DeviceOrientation, { Orientation } from 'react-screen-orientation'
import './App.css';
import SignaturePad from 'react-signature-pad-wrapper'
import FloatButton from './component/FloatButton'

function App() {

  return (
    <DeviceOrientation lockOrientation={'landscape'}>
        {/* Will only be in DOM in landscape */}
        <Orientation orientation='landscape' alwaysRender={false}>
          <SignaturePad redrawOnResize={true} options={{minWidth: 5, maxWidth: 10, penColor: 'rgb(66, 133, 244)'}} />
          <FloatButton/>
        </Orientation>
        {/* Will stay in DOM, but is only visible in portrait */}
        <Orientation orientation='portrait' alwaysRender={false}>
          <div>
            <p>Para assinar o documento, vire a tela do seu aparelho</p>
          </div>
        </Orientation>
      </DeviceOrientation>
  );
}

export default App;
