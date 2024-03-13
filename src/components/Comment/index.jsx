import { Trash } from 'phosphor-react';
import styles from './index.module.css';
import { ThumbsUp } from '@phosphor-icons/react';
import Avatar from '../Avatar';
import { useState } from 'react';

function index({comentario, onDelete}) {
  const [like, setLike] = useState(0)

  function curtir() {
    setLike(like => like + 1)
  }
  return (
    <div className={styles.comment}>
      <Avatar FotoAvatar='https://avatars.githubusercontent.com/u/135155805?v=4' />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.author}>
              <strong>Everton</strong>
              <time>Publicado há 1h</time>
            </div>
            <button title='Deletar comentário' onClick={onDelete}>
              <Trash size={20} color='gray' />
            </button>
          </header>
          <p>{comentario}</p>
        </div>
        <footer className={styles.footer}>
          <button title='Curtir comentário' onClick={curtir}>
            <ThumbsUp size={20} color='gray' />
            Aplaudir <span style={{color: '#8D8D99'}}>{like}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

export default index;
