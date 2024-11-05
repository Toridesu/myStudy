import { Link, useParams } from 'react-router-dom';

export const Page2 = () => {
  const { id } = useParams(); // URLパラメーターを取得

  return (
    <div>
      <h1>Page2です</h1>
      <Link to={'/page2/100'}>UrlParameter</Link>
      {/* パラメーターの表示 */}
      {id && <p>パラメーターは {id} です</p>}
    </div>
  );
};
