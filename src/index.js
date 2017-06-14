// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCnwJ6kYI_68f6byuaff4BnU68NOlcF0fg';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
