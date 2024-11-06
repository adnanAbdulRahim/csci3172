import logo from './logo.svg';
import './App.css';
{/*Adnan Abdul Rahim B00898433*/}
function App() {
  return (
    <div className="App">
      <header>
        <div className="name">Adnan</div>
        <h1>My Artwork Showcase</h1>
      </header>
      <main>
        <div className="art-gallery">
          {/*Using alt on images following WCG guidelines*/}
          <img src="/images/Cat1.jpg" alt="Artwork of a Cat"></img>
          <img src="/images/Cat2.jpg" alt="Artwork of a Cat2"></img>
          <img src="/images/Girl1.jpg" alt="Artwork of a Girl"></img>
          <img src="/images/Girl2.jpg" alt="Artwork of a Girl2"></img>
          <img src="/images/Boy.jpg" alt="Artwork of a Boy"></img>
          <img src="/images/Boy2.jpg" alt="Artwork of a Boy2"></img>
          <img src="/images/Bear.jpg" alt="Artwork of a Bear"></img>
          <img src="/images/Legs.jpg" alt="Artwork of a Legs"></img>
          <img src="/images/Hands.jpg" alt="Artwork of a Hands"></img>
        </div>
      </main>
      <footer>
        <p>Follow me on Instagram <a href="https://instagram.com/adnan.arts" target="_blank">@adnan.arts</a></p>
      </footer>
    </div>
  );
}

export default App;
