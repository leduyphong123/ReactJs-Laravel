import { Link } from "react-router-dom";

import { FaUserAlt } from 'react-icons/fa';
import { HiCamera } from 'react-icons/hi';
import { Avatar } from 'flowbite-react';
import token from "../../../../token";

function Edit() {
    // const imgUser = ["https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg",
    //     "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
    // ]
    return (
        <>

            <div className="flex justify-between items-center ">
                <div className="flex flex-row items-center text-lg">
                    <FaUserAlt className="text-pink-500" />
                    <h3 className="ml-3">Edit Profile</h3>
                </div>
                <div className="text-sm text-pink-600 bg-pink-300 px-5 py-2 rounded-lg hover:cursor-pointer">
                    <Link to="/profile">Back to Profile</Link>
                </div>
            </div>

            <div className="bg-white px-4 py-4 mt-4 shadow-xl rounded-lg">
                <div className="flex items-end relative pl-4">
                    <Avatar
                        img={token.imgUser}
                        rounded={true}
                        size="lg"
                    />
                    <HiCamera className="absolute bottom-0 bg-slate-200 px-2 py-2 text-blue-900 text-4xl rounded-full" />
                </div>

                <div>
                    <div className="items-start justify-start flex flex-col md:grid md:grid-flow-row md:grid-cols-2 md:gap-5">

                        <div className="w-full md:pr-5">
                            <p>Full name</p>
                            <input type="text" className="rounded-md w-full mt-2 mb-3 md:mb-0 md:mt-2 BorderP hover:cursor-pointer hover:border-[#2b3445]" placeholder="" />
                        </div>

                        <div className="w-full md:pl-5">
                            <p>Email</p>
                            <input type="text" className="rounded-md w-full mt-2 mb-3 md:mb-0 md:mt-2 BorderP hover:cursor-pointer hover:border-[#2b3445]" placeholder="" />
                        </div>

                        <div className="w-full md:pr-5">
                            <p>Phone</p>
                            <input type="text" className="rounded-md w-full mt-2 mb-3 md:mb-0 md:mt-2 BorderP hover:cursor-pointer hover:border-[#2b3445]" placeholder="" />
                        </div>

                        <div className="w-full md:pl-5">
                            <p>Birth Date</p>
                            <input type="text" className="rounded-md w-full mt-2 mb-3 md:mb-0 md:mt-2 BorderP hover:cursor-pointer hover:border-[#2b3445]" placeholder="" />

                        </div>   
                    </div>
                    <div className=" py-3 mt-1 md:mt-4 flex">
                        <p className="px-4 py-3 bg-pink-500 rounded-lg text-white text-sm hover:cursor-pointer">Save Changes</p>
                    </div>
                </div>

            </div>

        </>
    );
}

export default Edit;


// import token from "../../../token";

// const tokens = { tokens: "123" };

// class Profile extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             ProductData: []
//         }
//     }

//     componentDidMount() {
//         fetch("http://127.0.0.1:8000/api/profile", {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(tokens)
//         })
//             .then(response => response.json())
//             .then(response => {
//                 this.setState({
//                     ProductData: response
//                 });
//                 token.imgUser=response.imgUser;
//             })
//             .catch(err => {
//                 console.log(err);
//             });
//     }

//     render() {

//         const element = <>

//             <div className="flex justify-between items-center ">
//                 <div className="flex flex-row items-center text-lg">
//                     <FaUserAlt className="text-pink-500" />
//                     <h3 className="ml-3">My Profile</h3>
//                 </div>
//                 <div className="text-sm text-pink-600 bg-pink-300 px-5 py-2 rounded-lg hover:cursor-pointer">
//                     <Link to="/profile/edit">Edit Profile</Link>
//                 </div>
//             </div>

//             {/* avatar */}
//             <div className='flex flex-col justify-between items-center my-4 md:flex-row'>
//                 <div className='w-full md:w-1/2 '>
//                     <div className="bg-white flex items-center px-5 py-4 rounded-lg shadow-lg">
//                         <Avatar
//                             img={this.state.ProductData.imgUser == null ? null : this.state.ProductData.imgUser}
//                             rounded={true}
//                             size="lg"
//                         />
//                         <div className='ml-6'>
//                             <h3 className='text-lg '>{this.state.ProductData.name}</h3>
//                             <h4 className='text-sm ColorP'>{this.state.ProductData.birthDay == null ? "18+" : this.state.ProductData.birthDay}</h4>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="  grid grid-col-2 grid-flow-col gap-2 my-4 w-full items-center md:w-[46%]">
//                     <div className='bg-white flex flex-col items-center py-4 rounded-lg shadow-lg'>
//                         <p className='text-pink-500 pb-3'>16</p>
//                         <p className='ColorP text-sm text-center'>All<br />Oder</p>
//                     </div>
//                     <div className='bg-white flex flex-col items-center py-4 rounded-lg shadow-lg'>
//                         <p className='text-pink-500 pb-3'>03</p>
//                         <p className='ColorP text-sm text-center'>Awaiting<br />Payments</p>
//                     </div>

//                 </div>
//             </div>
//             {/* end avatar */}

//             <div className='w-full'>
//                 <div className='px-5 py-4 bg-white md:grid grid-flow-col grid-cols-4 grap-2 rounded-lg shadow-lg'>
//                     <div className='px-5 py-4'>
//                         <p className='ColorP text-sm'>Full Name</p>
//                         <p>{this.state.ProductData.name}</p>
//                     </div>
//                     <div className='px-5 py-4'>
//                         <p className='ColorP text-sm'>Email</p>
//                         <p>{this.state.ProductData.email}</p>
//                     </div>
//                     <div className='px-5 py-4'>
//                         <p className='ColorP text-sm'>Phone</p>
//                         <p>{this.state.ProductData.phone == null ? "000000000" : this.state.ProductData.phone}</p>
//                     </div>
//                     <div className='px-5 py-4'>
//                         <p className='ColorP text-sm'>Birth date</p>
//                         <p>{this.state.ProductData.birthDay == null ? "21/12/2010" : this.state.ProductData.birthDay}</p>
//                     </div>
//                 </div>


//             </div>
//         </>


//         return element;
//     }
// }
