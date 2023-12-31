import { Link } from 'react-router-dom';
import '../style/commonStyle.css';

const Navbar = () => {
  return (
    <div className='commonWrapper navbarWrapper'>
      <div className='logoContainer'>
        <Link to='/'>
          <img src='/food.png' alt='logo' width={'80px'} height={'20px'}/>
        </Link>
      </div>
      <div className='navLinkContainer'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/menu'>Menu</Link>
        <Link to='/gallery'>Gallery</Link>
        <Link to='/addRecipe'>Add Recipe</Link>
        {/* <Link to='/signUp'>SignUp</Link> */}
        {/* <Link to='/login'>Login</Link> */}
      </div>
    </div>
  )
}

export default Navbar;