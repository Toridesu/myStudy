
import './App.css';
import { Router } from './router/Router';

const user = {
  name: 'とり',
  image: '/nadi-whatisdelirium-fZ8uf_L52wg-unsplash.jpg',
  email: '12345@example.com',
  phone: '090-1111-2222',
  company: {
    name: 'テスト株式会社',
  },
  website: 'https://google.com',
};

function App() {
  return (
    <Router />
  );
}

export default App;
