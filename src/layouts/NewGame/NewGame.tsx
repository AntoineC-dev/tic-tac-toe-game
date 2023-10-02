import * as React from 'react';

import styles from './NewGame.module.css';
import Logo from '../../assets/logo.svg?react';
import IconX from '../../assets/icon-x.svg?react';
import IconO from '../../assets/icon-o.svg?react';
import { Mark } from '../../types';

function NewGame() {
  const [mark, setMark] = React.useState<Mark>('x');
  const handleNewGame = (param: 'cpu' | 'player') => () => console.log(param);

  return (
    <div className={styles.container}>
      <Logo className={styles.logo} />
      <div className={styles.markPicker}>
        <h2>Pick player 1’s mark</h2>
        <div className={styles.switch}>
          <button data-active={mark === 'x'} onClick={() => setMark('x')}>
            <IconX />
          </button>
          <button data-active={mark === 'o'} onClick={() => setMark('o')}>
            <IconO />
          </button>
        </div>
        <p>Remember : x goes first</p>
      </div>
      <div className={styles.actions}>
        <button className="btn btn-primary" onClick={handleNewGame('cpu')}>
          New game (vs cpu)
        </button>
        <button className="btn btn-secondary" onClick={handleNewGame('player')}>
          New game (vs player)
        </button>
      </div>
    </div>
  );
}

export default NewGame;
