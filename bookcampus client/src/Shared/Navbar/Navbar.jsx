// import React from 'react';
import { useContext } from 'react';
// import navicon from '../../assets/navicon.svg'
import { Link } from "react-router-dom";
import { AuthContext } from '../../Provider/AuthProvider';
import './Navbar.css';
import  cslogo from'../../assets/cslogo.svg';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { 
           
            })
            .catch(error => console.log(error))
    }
    console.log(user)
    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>Colleges</Link></li>
        <li><Link to='/addadmission'>Admission</Link></li>
        <li><Link to='/mycollages'>My Collage</Link></li>
{ user?.email ? <>
    {/* <li><Link to='/mytoys'>My class</Link></li> */}
        {/* <li><Link to='/addtoys'>Add A admison</Link></li> */}
<div className='flex  items-center gap-4'>

        <div>
        <p>{user?.displayName}</p>
        </div>
<div className="avatar">
    <div className="w-12 rounded-full">
      <img title={user?.displayName}  src={user?.photoURL} />
    </div>
  </div>
        <button onClick={handleLogOut}>LogOut</button>
</div>
</>
:
<div>

        <li><Link to='/login'>Login</Link></li>
</div>
        }
    </>
       
    return (
        <div className="navbar bg-base-100 h-28 mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="font-bold text-blue-900 menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl"> <img src={cslogo} alt="" /> </Link>
                <ul className='text-2xl font-bold text-blue-900'>
                    BookMyCampus
                </ul>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="font-bold text-blue-900 menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            
        </div>
    );
};

export default Navbar;