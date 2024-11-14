import './App.css';

{/*Adnan Abdul Rahim B:00898433*/}
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
          <div className="art-item">
            <img src="/images/Cat1.jpg" alt="Artwork of a Cat"></img>
            <form className="comment-form">
              <input type="text" placeholder="Write a comment..."></input>
              <button type="submit">Post</button>
            </form>
          </div>

          <div className="art-item">
          <img src="/images/Cat2.jpg" alt="Artwork of a Cat2"></img>
          <form className="comment-form">
              <input type="text" placeholder="Write a comment..."></input>
              <button type="submit">Post</button>
          </form>
          </div>

          <div className="art-item">
          <img src="/images/Girl1.jpg" alt="Artwork of a Girl"></img>
          <form className="comment-form">
              <input type="text" placeholder="Write a comment..."></input>
              <button type="submit">Post</button>
          </form>
          </div>

          <div className="art-item">
          <img src="/images/Girl2.jpg" alt="Artwork of a Girl2"></img>
          <form className="comment-form">
              <input type="text" placeholder="Write a comment..."></input>
              <button type="submit">Post</button>
          </form>
          </div>

          <div className="art-item">
          <img src="/images/Boy.jpg" alt="Artwork of a Boy"></img>
          <form className="comment-form">
              <input type="text" placeholder="Write a comment..."></input>
              <button type="submit">Post</button>
          </form>
          </div>

          <div className="art-item">
          <img src="/images/Boy2.jpg" alt="Artwork of a Boy2"></img>
          <form className="comment-form">
              <input type="text" placeholder="Write a comment..."></input>
              <button type="submit">Post</button>
          </form>
          </div>

          <div className="art-item">
          <img src="/images/Bear.jpg" alt="Artwork of a Bear"></img>
          <form className="comment-form">
              <input type="text" placeholder="Write a comment..."></input>
              <button type="submit">Post</button>
          </form>
          </div>

          <div className="art-item">
          <img src="/images/Legs.jpg" alt="Artwork of a Legs"></img>
          <form className="comment-form">
              <input type="text" placeholder="Write a comment..."></input>
              <button type="submit">Post</button>
          </form>
          </div>

          <div className="art-item">
          <img src="/images/Hands.jpg" alt="Artwork of a Hands"></img>
          <form className="comment-form">
              <input type="text" placeholder="Write a comment..."></input>
              <button type="submit">Post</button>
          </form>
          </div>

        </div>
      </main>
      <footer>
        <p>Follow me on Instagram <a href="https://instagram.com/adnan.arts" target="_blank" rel="noopener noreferrer">@adnan.arts</a></p>
      </footer>
    </div>
  );
}

export default App;
