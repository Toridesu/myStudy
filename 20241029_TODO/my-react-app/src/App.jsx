import './App.css';

function App() {
  return (
    <>
      <div className='App'>
        <div className='input-area'>
          <input placeholder='TODOを入力' />
          <button>追加</button>
        </div>
        <div className='incomplete-area'>
          <p className='title'>未完了のTODO</p>
          <ul>
            <li>
              <div className='list-row'>
                <p className='todo-item'>todoです</p>
                <button>完了</button>
                <button>削除</button>
              </div>
            </li>
          </ul>
        </div>
        <div className='complete-area'>
          <p className='title'>完了済みのTODO</p>
          <ul>
            <li>
              <div className='list-row'>
                <p className='todo-item'>todoでした</p>
                <button>戻す</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;