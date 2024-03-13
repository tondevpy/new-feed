import style from './index.module.css'
import Logo from '../../assets/logo.svg'
function Header() {
  return (
    <div className={style.feed}>
      <img src={Logo} alt="" />
      <span>Feed</span>
    </div>
  )
}

export default Header