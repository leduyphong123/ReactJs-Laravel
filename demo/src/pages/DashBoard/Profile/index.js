import { Link } from "react-router-dom";


import { FaUserAlt } from 'react-icons/fa';
import { Avatar } from 'flowbite-react';
import token from "../../../token";

function Profile() {

    return (
        <>
        
            <div className="flex justify-between items-center ">
                <div className="flex flex-row items-center text-lg">
                    <FaUserAlt className="text-pink-500" />
                    <h3 className="ml-3">My Profile</h3>
                </div>
                <div className="text-sm text-pink-600 bg-pink-300 px-5 py-2 rounded-lg hover:cursor-pointer">
                    <Link to="/profile/edit">Edit Profile</Link>
                </div>
            </div>

            {/* avatar */}
            <div className='flex flex-col justify-between items-center my-4 md:flex-row'>
                <div className='w-full md:w-1/2 '>
                    <div className="bg-white flex items-center px-5 py-4 rounded-lg shadow-lg">
                        <Avatar
                            img={token.imgUser == null ? null : token.imgUser}
                            rounded={true}
                            size="lg"
                        />
                        <div className='ml-6'>
                            <h3 className='text-lg '>{token.fullName}</h3>
                            <h4 className='text-sm ColorP'>{token.birthDay == null ? "Age 18+" :"Age " + token.birthDay +"+"}</h4>
                        </div>
                    </div>
                </div>
                <div className="  grid grid-col-2 grid-flow-col gap-2 my-4 w-full items-center md:w-[46%]">
                    <div className='bg-white flex flex-col items-center py-4 rounded-lg shadow-lg'>
                        <p className='text-pink-500 pb-3'>16</p>
                        <p className='ColorP text-sm text-center'>All<br/>Oder</p>
                    </div>
                    <div className='bg-white flex flex-col items-center py-4 rounded-lg shadow-lg'>
                        <p className='text-pink-500 pb-3'>03</p>
                        <p className='ColorP text-sm text-center'>Awaiting<br/>Payments</p>
                    </div>
                    
                </div>
            </div>
            {/* end avatar */}

            <div className='w-full'>
            <div className='px-5 py-4 bg-white md:grid grid-flow-col grid-cols-4 grap-2 rounded-lg shadow-lg'>
                <div className='px-5 py-4'>
                    <p className='ColorP text-sm'>Full Name</p>
                    <p>{token.fullName}</p>
                </div>
                <div className='px-5 py-4'>
                    <p className='ColorP text-sm'>Email</p>
                    <p>{token.email}</p>
                </div>
                <div className='px-5 py-4'>
                    <p className='ColorP text-sm'>Phone</p>
                    <p>{token.phone == null ? "000000000" : token.phone}</p>
                </div>
                <div className='px-5 py-4'>
                    <p className='ColorP text-sm'>Birth date</p>
                    <p>{token.birthDay == null ? "20/12/2010" : token.birthDay}</p>
                </div>
            </div>


            </div>
        </>
    );
}

export default Profile;