import React from 'react';
import './App.css';


class AppWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
      quote: "",
      author: "",
      color: ""
    };
    this.displayRandomQuote = this.displayRandomQuote.bind(this);
  }

  componentDidMount() {
    // Display the quote on page load
    this.displayRandomQuote();
  }

  getRandomQuote() {
    const quotes = [
      { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
      { quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.", author: "Martin Luther King Jr." },
      { quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
      { quote: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.", author: "Buddha" },
      { quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
      { quote: "It always seems impossible until it’s done.", author: "Nelson Mandela" }
    ];
    var randomIndex = Math.floor(Math.random() * quotes.length);
    while(this.state.quote===quotes[randomIndex]){
      randomIndex = Math.floor(Math.random() * quotes.length);
    }
    return quotes[randomIndex];
  }

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  displayRandomQuote() {
    const randomQuote = this.getRandomQuote();
    const newColor = this.getRandomColor();
    document.body.style.backgroundColor = newColor;
    
    this.setState({
      quote: randomQuote.quote,
      author: randomQuote.author,
      color: newColor
    });
  }

  render() {
    const { quote, author, color } = this.state;

    const style = {
      backgroundColor: color,
      color: color
    };

    return (
      <div className="container-md">
        <div className="position-absolute top-50 start-50 translate-middle" style={style}>
          <div id="quote-box" className="card">
            <div className="card-body">
              <div className="row">
                <p id="text" style={{ color }}>{quote}</p>
              </div>
              <div className="row">
                <span id="author" style={{ color }}>{author}</span>
              </div>
              <div className="row d-flex justify-content-between mt-3">
                <div className="col-auto">
                  <button id="new-quote" className="btn text-white" style={{ backgroundColor: color }} onClick={this.displayRandomQuote}>
                    New Quote
                  </button>
                </div>
                <div className="col-auto">
                  <a href="https://twitter.com/intent/tweet" target="_top" className="btn text-white" id="tweet-quote" style={{ backgroundColor: color }}>
                    Tweet Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



export default AppWrapper;
