import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SecondaryButton } from './components/atoms/button/SecondaryButton';
import { SearchInput } from './components/molecules/SearchInput';
import { UserCard } from './components/organism/user/UserCard';
import { HeaderOnly } from './components/templates/HeaderOnly';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

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
    <BrowserRouter>
      <HeaderOnly>
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <br />
        <SearchInput />
        <UserCard user={user} />
      </HeaderOnly>
    </BrowserRouter>
  );
}

export default App;
