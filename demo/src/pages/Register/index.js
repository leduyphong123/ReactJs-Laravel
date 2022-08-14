import $ from 'jquery/dist/jquery.js';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import token from '../../token';
function Register() {
    const [eros,setEros]=useState();
    let navigate=useNavigate();

    const hendleCreate = () =>{
        var name=$("#name").val();
        var email=$("#email").val();
        var password=$("#password").val();
        var cfPassword=$("#cfPassword").val();
        if(password===cfPassword){
         $.ajax({
            type: "post",
            url: "http://127.0.0.1:8000/api/create",
            data: {
                name:name,
                email:email,
                password:password
            },
            success: function (response) {
                if(response.status==200){
                    token.email = response.email;
                    token.token = response.token;
                    token.fullName = response.name;
                    token.phone =response.phone;
                    token.imgUser = response.imgUser;
                    token.birthDay = response.birthDay;
                    navigate("/");
                }
            }
         });
        }else{
            alert("password khong khop");
        }
        
    }
 
    return (
        <div className="container text-center w-full h-full bg-slate-100 flex justify-center items-center">
            <div className=" w-full my-10 shadow-xl  md:w-5/12">
                <div className="px-10 py-8 bg-white rounded-md">
                    <div className="my-6">
                        <h2 className="text-xl font-medium">Create Your Account</h2>
                        <p className="text-xs mt-2">Please fill all forms to continued</p>
                    </div>
                    <div className="items-start justify-start flex flex-col">

                        <p>Full name</p>
                        <input type="text" id="name" className="rounded-md w-full mt-2 mb-3 BorderP hover:cursor-pointer hover:border-[#2b3445]" placeholder="Name" />

                        <p>Email</p>
                        <input type="text" id="email" className="rounded-md w-full mt-2 mb-3 BorderP hover:cursor-pointer hover:border-[#2b3445]" placeholder="Email" />
                        {eros}
                        <p>Password</p>
                        <input type="text" id="password" className="rounded-md w-full my-2 BorderP hover:cursor-pointer hover:border-[#2b3445]" placeholder="*******" />

                        <p>Confirm Password</p>
                        <input type="text" id="cfPassword" className="rounded-md w-full my-2 BorderP hover:cursor-pointer hover:border-[#2b3445] outline-white" placeholder="*******" />

                    </div>


                    <button className="text-center bg-red-500 text-white w-full rounded-lg py-3 mt-5"
                    onClick={hendleCreate}
                    >Create Account</button>
                    <div className="flex justify-center items-center mt-4">
                        <span className="w-20 border-b mt-1"></span>
                        <p className="mx-4 text-slate-500">on</p>
                        <span className="w-20 border-b mt-1"></span>
                    </div>

                    <button className="text-center bg-[#3b5998] text-white w-full rounded-lg py-3 mt-5">Facebook</button>
                    <button className="text-center bg-[#4285f4] text-white w-full rounded-lg py-3 mt-5">Google</button>


                </div>
                <div className="py-5 bg-slate-200 flex justify-center items-center rounded-b-md">
                    <h3 className="text-slate-500 mr-2">Already have account?</h3>
                    <a href="#" className="hover:cursor-pointer hover:text-pink-500">Log in</a>
                </div>
            </div>

        </div>
    );
}

export default Register;


