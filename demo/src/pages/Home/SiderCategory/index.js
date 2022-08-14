import {useState} from 'react';
import Brands from './Brands';
import Shops from './Shops';

function SiderCategory() {
    const [siderBrands,setSiderBrands]=useState(true);
    
    return (
      <div className="w-1/5 bg-white md:flex flex-col justify-between items-center hidden rounded-md shadow-xl px-4 py-4">
        <div className="flex items-center text-center mx-auto">
            <div className={`px-6 text-xl my-3 border-r border-gray-400 hover:cursor-pointer ${siderBrands==true ? 'text-slate-400' : 'text-black'}`}
            onClick={()=>{setSiderBrands(true)}}
            >Brands</div>
            <div className={`px-6 text-xl my-3 hover:cursor-pointer  ${siderBrands==false ? 'text-slate-400' : 'text-black'}`}
            onClick={()=>{setSiderBrands(false)}}
            >Shops</div>
        </div>
        <div className={`flex justify-between items-center flex-col w-full ${siderBrands==true ? '' : 'hidden'}`}>
        <Brands/>
        </div>
        <div className={`flex justify-between items-center flex-col w-full ${siderBrands==false ? '' : 'hidden'}`}>
        <Shops/>
        </div>
        
        

      </div>
    );
}

export default SiderCategory;