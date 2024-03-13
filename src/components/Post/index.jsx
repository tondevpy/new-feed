import style from './index.module.css';
import Comment from '../Comment/index';
import { Smiley } from 'phosphor-react';
import Avatar from '../Avatar';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function Post({ url, name, role, tittle, paragraph1, paragraph2 }) {
  const [comments, setComments] = useState([]);

  function newComment() {
    event.preventDefault();

    const comentario = event.target.textarea.value;

    setComments([...comments, comentario]);
    event.target.textarea.value = '';
    toast("Comentário publicado ");
  }

  function deleteComment(index) {
    const updatedComments = [...comments];
    updatedComments.splice(index, 1);
    setComments(updatedComments);
    toast("Comentário deletado...");
  }

  return (
    <div className={style.post}>
      <ToastContainer
      theme='dark' />
      <div className={style.header}>
        <div className={style.avatar}>
          <div className={style.img}>
            <Avatar FotoAvatar={url} />
          </div>
          <div className={style.info_name}>
            <strong>{name}</strong>
            <span>{role}</span>
          </div>
        </div>
        <span style={{ color: '#8D8D99', fontSize: '14px' }}>
          Públicado há 1h
        </span>
      </div>
      <div className={style.contentPost}>
        <p>{tittle}</p>
        <p>{paragraph1}</p>
        <p> {paragraph2}</p>
        <p>
          <a href="">#projeto</a>
        </p>
      </div>
      <form onSubmit={newComment} className={style.commentForm}>
        <strong>Deixe seu FeedBack</strong>

        <textarea placeholder="Deixe um comentário" name="textarea"></textarea>
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={style.commentList}>
        {comments.map((comentario, index) => (
          <Comment 
          key={index} 
          comentario={comentario}
          onDelete={() => deleteComment(index)}
           />
        ))}
      </div>
    </div>
  );
}

export default Post;
