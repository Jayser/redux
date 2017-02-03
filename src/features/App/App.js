import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function App({ children }) {
  return (
    <div>
      <header>
        { '' }
      </header>
      <main>
        {
          children ? children : (
            <div>
              <h1>Home page</h1>
              <Link to='contacts'>Contacts</Link>
            </div>
          )
        }
      </main>
      <footer>
        { '' }
      </footer>
    </div>
  )
}

App.propTypes = {
  children: PropTypes.node
};

export default App;
