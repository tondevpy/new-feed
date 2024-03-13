import style from './index.module.css'

function Avatar({FotoAvatar}) {
  return (
    <img
          src={FotoAvatar}
          alt="foto perfil"
        />
  )
}

export default Avatar