import React from 'react';
import './App.css';
import myImage from "./techsource.jpg";
import './style.css';
function App() {
  return (
    <div className="App">
<div style={{border:'solid 1px black',maxWidth:'100vw'}}>
<h1 className="title red">Mariam Maalej</h1>
<br ></br >
<div className="pictures" style={{display:'flex', justifyContent:'space-around'}}>
<img src="/techpublic.jpg" height="400px" alt="tech"/>
<img src={myImage} height="400px" alt="tech"/>
</div>
  </div>
<div className="videos">
<video width="320" height="240" controls>
<source src="myVideo.mp4" type="video/mp4"/>
</video>
</div>
    </div>
  );
}
export default App;
