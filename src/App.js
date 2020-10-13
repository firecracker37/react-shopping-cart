//Feature 1
import React from 'react';
import data from './data.json'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    };
  }
  render(){
    return (
      <div className="App">
        <div className="grid-container">
          <header>
            <a href="/">React Shopping Cart</a>
          </header>
          <main>
            <div className="content">
              <div className="main">Products</div>
              <div className="sidebar">Cart Items</div>
            </div>
          </main>
          <footer>
            All Rights Reserved
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
