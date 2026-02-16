import {Link} from "react-router";

const Navbar = () => {
  return (
      <nav className='navbar'>
        <Link className='navbar-brand' to='/'>
          <p className='text-2xl font-bold text-gradient'>RESUMED</p>
        </Link>
        <Link to='/upload' className="primary-button w-fit">
          Upload Resume
        </Link>
      </nav>
  )
}
export default Navbar
