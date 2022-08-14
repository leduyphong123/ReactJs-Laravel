import {CgAdidas} from 'react-icons/cg';


function Shops() {
    return ( 
        
        <>
            <div className="bg-slate-100 flex items-center w-full text-center px-5 py-3 text-xl mb-4 shadow-md rounded-md hover:bg-white hover:cursor-pointer">
            <CgAdidas className='ml-2 text-blue-500'/>
            <h3 className='ml-6'>Adidas</h3>
            </div>
    
            <div className="bg-slate-100 flex items-center w-full text-center px-5 py-3 text-xl mb-4 shadow-md rounded-md hover:bg-white hover:cursor-pointer">
            <CgAdidas className='ml-2 text-blue-500'/>
            <h3 className='ml-6'>Adidas</h3>
            </div>
        </>
        
      
        
     );
}

export default Shops;