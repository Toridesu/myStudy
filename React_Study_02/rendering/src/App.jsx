import { useState, useCallback } from 'react';
import './App.css';
import { ChildArea } from './ChildArea';
import { InlineStyle } from './components/InlineStyle';
import { StyledJsx } from './components/StyledJsx';

function App() {
  const [text, setText] = useState('');
  const [open, setOpen] = useState('false');

  const onChangeText = (e) => setText(e.target.value);
  const onClickOpen = () => setOpen(!open);
  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  return (
    <div className='App'>
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
      <InlineStyle />
      <StyledJsx />
    </div>
  );
}

export default App;
