import { useState } from 'react';

import { BiUser } from 'react-icons/bi';
import { Link } from 'react-router-dom';

import token from "../../../../../token";
import $ from "jquery/dist/jquery.js";

// const values= false;
function hendleLogout(){

  $.ajax({
    type: "post",
    url: "http://127.0.0.1:8000/api/logout",
    data: {
      tokens: token.token
    },
    success: function (response) {
      token.email = null;
      token.token = null;
      token.fullName = null;
      token.phone = null;
      token.imgUser = null;
      token.birthDay = null;
      window.location.href = ("/login");
        
    }
  });
}

function User() {
  const [userMenu, setUserMenu] = useState(false);


  function Dashbr() {
    if (token.token == null) {
      return (
        <>
          <li className="mx-3 py-3 hover:text-pink-500 border-b border-slate-300"><Link to='/login'>Login</Link></li>
          <li className="mx-3 py-3 hover:text-pink-500"><Link to='/register'>Register</Link></li>
        </>
      )
    } else {
      return (
        <>
          <li className="mx-3 py-3 hover:text-pink-500 border-b border-slate-300" onClick={() => setUserMenu(!userMenu)}><Link to='/profile'>DashBroard</Link></li>
          <li className="mx-3 py-3 hover:text-pink-500 hover:cursor-pointer border-b border-slate-300 " onClick={hendleLogout} >logout</li>
        </>
      )
    }
  }



  return (

    <li className={`md:w-10 w-7 transition duration-500 ease-in ${userMenu ? 'hover:text-pink-500' : 'hover:text-zinc-800 relative'}`}>

      <BiUser className='text-xl hover:cursor-pointer' onClick={() => setUserMenu(!userMenu)} />
      <ul className={`absolute right-3 w-1/3 my-4 shadow-xl bg-white rounded-md text-slate-900 ${userMenu ? '' : 'hidden'}
                 md:w-1/6 md:border-2 md:shadow-xl z-10
                `}>

        <Dashbr/>

      </ul>
    </li>
  );
}

export default User;