import { useContext } from "react";
import { AuthContext } from "../../assets/Provider/AuthProvider";
import { Link, NavLink } from "react-router-dom";
import toast from "react-hot-toast";

 
 
 const Nav=()=>{
    const {user,logOut}=useContext(AuthContext)

    const links = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/update'>Update profile</NavLink></li>
    {user &&
      <>
        <li><NavLink to='/user'>User Profile</NavLink></li>
        <li><NavLink to='/usersettings'>User Settings</NavLink></li>
      </>
    }
    <li><NavLink to='/addspot'>Addspot</NavLink></li>
    <li><NavLink to='/contact'>Contact us</NavLink></li>
  </>

const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("Sign-out successfully.")
        toast.success('sing Out successfully')
      })
      .catch((error) => {
        console.log(error.message)
      });
  }


return (
<div className="navbar bg-base-100 fixed z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl"><span className="text-red-500">Apartment</span> Avenue</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        {
          user ? 
          <>
            <span className="text-sm font-bold">{user.photoURL ?
              <>
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    {/* ---------------------------- */}

                    <div className="tooltip" data-tip="hello">
                      <img alt="" src={user.photoURL} />
                    </div>
                    {/* ---------------------------- */}
                  </div>
                </div>
              </>
              : "Anonymous User"}</span>
            <button className="btn btn-primary mx-2" onClick={handleLogOut}>LogOut</button>
          </>
            :
            <Link to='/login'><button className="btn btn-primary mx-10">Sing-in</button></Link>
        }

      </div>
    </div>
)
}

export default Nav;