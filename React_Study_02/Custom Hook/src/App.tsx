import React from 'react';
import './App.css';
import { UserCard } from './components/UserCard';

const user = {
  id: 1,
  name: "とりもと",
  email: "12345@567.com",
  address: "ADDRESS"
}

function App() {
  return (
    <div className="App">
      <UserCard user={user}/>
    </div>
  );
}

export default App;
