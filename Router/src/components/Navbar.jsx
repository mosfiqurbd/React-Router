import{Link} from 'react-router';

const Navbar = () => {
  return (
    <ul>
       <li>
       <Link to="/">Home</Link>
       </li>
       <li>
       <Link to="/about">About</Link>
       </li> 
       <li>
        <Link to="/Team">Team</Link>
       </li>
       <li>
        <Link to="/posts">Posts</Link>
       </li>
    </ul>

  )
}

export default Navbar