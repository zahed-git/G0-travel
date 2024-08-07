import { useContext } from "react";
import { AuthContext } from "../../assets/Provider/AuthProvider";
import { Link, NavLink } from "react-router-dom";
import toast from "react-hot-toast";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'



const Nav = () => {
  const { user, logOut } = useContext(AuthContext)
  // console.log(user)
  const links = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/allspots'>All Tourists Spot</NavLink></li>
    {user &&
      <>
        <li><NavLink to='/addspot'>Add Spots</NavLink></li>
        <li><NavLink to='/mylist'>My List</NavLink></li>
        <li><NavLink to='/user'>User Profile</NavLink></li>
        <li><NavLink to='/usersettings'>User Settings</NavLink></li>
      </>
    }

    <li><NavLink to='/contact'>Contact us</NavLink></li>
    <button data-toggle-theme="dark,light" data-act-class="ACTIVECLASS"><input type="checkbox" className="toggle" checked /></button>
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
    <div className="navbar bg-base-100 fixed z-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl"><span className="text-red-500">Trek</span>Tide</a>
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

                      <a data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName}>
                        <img alt="" src={user.photoURL} />
                      </a>


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