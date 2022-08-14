import { useState } from 'react';

import { BiFoodMenu } from 'react-icons/bi';
import { FaRegUser } from 'react-icons/fa';
import { TiDelete } from 'react-icons/ti';

import { Link } from "react-router-dom";

function Siderbar({children}) {
    const [dashBoard, setDashBoard] = useState(false);
    const [profile, setProfile] = useState(true);
    const [order, setOrder] = useState(false);

    const hendleProfile = () => {
        if (order) {
            setOrder(false);
        }
        if (dashBoard) {
            setDashBoard(!dashBoard)
        }
        return setProfile(true)
    }
    const hendleOrder = () => {
        if (profile) {
            setProfile(false)
        }
        if (dashBoard) {
            setDashBoard(!dashBoard)
        }
        return setOrder(true);
    }

    return ( 
        <div className="bg-slate-100 px-4 py-5">
        <div className="flex justify-between">

            <div className={
                `bg-white rounded-md flex-col shadow-lg py-6
            fixed top-0 left-0 w-2/3 h-screen z-10
            md:flex md:static md:w-1/5 md:h-min
            ${dashBoard ? '' : 'hidden'}
            
        `}>
                <TiDelete className='md:hidden text-xl absolute top-3 right-3' onClick={() => { setDashBoard(!dashBoard) }} />

                <h3 className="px-6 py-3 text-xs text-slate-500 w-full">DASHBOARD</h3>
                <Link to="/profile" onClick={hendleProfile}>

                    <div className={`flex px-6 my-2 justify-between items-center hover:cursor-pointer 
            ${profile == true ? 'border-l-2 border-pink-500 text-pink-500' : ''}
            `}

                    >
                        <div className="flex items-center">
                            <FaRegUser className={`text-sm ${profile == true ? 'text-pink-500' : 'ColorP'}`} />
                            <p className="ml-3">Profile</p>
                        </div>
                        <div>12</div>
                    </div>
                </Link>
                <Link to="/order" onClick={hendleOrder}>
                    <div className={`flex px-6 my-2 justify-between items-center hover:cursor-pointer 
            ${order == true ? 'border-l-2 border-pink-500 text-pink-500' : ''}
            `}

                    >

                        <div className="flex items-center">
                            <FaRegUser className={`text-sm ${order == true ? 'text-pink-500' : 'ColorP'}`} />
                            <p className="ml-3">Order</p>
                        </div>
                        <div>12</div>

                    </div>
                </Link>
            </div>

            <div className="w-full md:w-[77%]">
            <div className='md:hidden mb-3 flex items-center bg-white w-1/3 px-2 py-2 rounded-lg shadow-lg hover:cursor-pointer'
              onClick={() => { setDashBoard(!dashBoard) }}  
            >
                <BiFoodMenu className='text-xl' />
                <h3>DASHBOARD</h3>
                
            </div>

           {children}
        </div>
            <div className={`fixed top-0 right-0 md:hidden h-screen w-1/3 bg-black/30 ${dashBoard ? '' : 'hidden'}`}></div>

        </div>
    </div>
     );
}

export default Siderbar;