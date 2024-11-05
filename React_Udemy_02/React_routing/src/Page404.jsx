import { Link } from 'react-router-dom';

export const Page404 = () => {
  return (
    <div
      style={{
        textAlign: 'center',
        padding: '50px',
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1 style={{ fontSize: '72px', margin: '0' }}>404</h1>
      <h2 style={{ color: '#666' }}>ページが見つかりません</h2>
      <p style={{ color: '#888', marginBottom: '20px' }}>お探しのページは削除されたか、URLが間違っている可能性があります。</p>
      <Link to='/'>TOPに戻る</Link>
    </div>
  );
};
