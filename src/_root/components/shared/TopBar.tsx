import white from '../../../../public/assets/bseven-white.png'
//import black from '../../../../public/assets/bseven-black.png'
import menu from '../../../../public/assets/menu-.png'
const TopBar = () => {
  return (
    <div className="mali">
    <div className='claus'>
      <img 
      src={white}
      alt='Block7'
      className='logo-top'
      />
      Block 7 
    </div>

      <div className='digii'>
        ecosystem
      </div>

      <img 
        src={menu}
      />
    </div>
  )
}

export default TopBar