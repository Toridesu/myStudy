import styled from 'styled-components';
import { SearchInput } from '../molecules/SearchInput';
import { UserCard } from '../organism/user/UserCard';
import { SecondaryButton } from '../atoms/button/SecondaryButton';
import { useContext } from 'react';
import { UserContext } from '../../providers/UserProvider';

const users = [...Array(20).keys()].map((val) => {
  return {
    id: val,
    name: `とり${val}`,
    image: '/nadi-whatisdelirium-fZ8uf_L52wg-unsplash.jpg',
    email: '12345@example.com',
    phone: '090-1111-2222',
    company: {
      name: 'テスト株式会社',
    },
    website: 'https://google.com',
  };
});

export const Users = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin });
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
