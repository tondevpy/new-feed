import Avatar from '../Avatar';
import style from './index.module.css';
import { Pen } from '@phosphor-icons/react';

function Sidebar() {
  return (
    <aside className={style.sidebar}>
      <img
        src="https://images.pond5.com/internet-things-4k-tech-background-084182297_prevstill.jpeg"
        alt="foto capa"
      />
      <div className={style.avatar}>
        <Avatar FotoAvatar='https://avatars.githubusercontent.com/u/135155805?v=4' />
      </div>
      <div className={style.avatar_info}>
        <div>
          <strong>Everton</strong>
          <span>Dev Full-Stack</span>
        </div>
      </div>
      <div className={style.line}></div>
      <div className={style.profile}>
        <a href="https://github.com/tondevpy" target='blank'><Pen size={20}/> Editar seu perfil</a>
      </div>
    </aside>
  );
}

export default Sidebar;
