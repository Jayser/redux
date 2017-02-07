import React, { PropTypes } from 'react';

function App({ children }) {
  return (
    <div>
      <header>
        { ' ' }
      </header>
      <main>
        { children }
      </main>
      <footer>
        { ' ' }
      </footer>
    </div>
  )
}

App.propTypes = {
  children: PropTypes.node
};

export default App;
