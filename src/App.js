import image from './imageInSrc/source.jpg'
import './css/cosmoStyle.css'
import './App.css';


function App() {
  return (
    
    <div>
    <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
      <h1 className="titlered">Cosmos Waves</h1>
      <br />
      <img src={image} alt="source.jpg"/>
      <br />
      <img src={"/imageInPublic/public.jpg"} alt="public"/>
    </div>
    <video src="/video/Cosmos.mp4" width={600} height={300} controls autoplay="true">
  
    </video>
    </div>
  );
}

export default App;


