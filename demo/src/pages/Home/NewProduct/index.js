import { AiFillCaretRight } from 'react-icons/ai';
import {MdOutlineFiberNew} from 'react-icons/md';

import Product from "../NewProduct/Product";

function NewProduct() {
    return ( 
        <div>
            <div className='flex items-center justify-between px-2 mb-2'>
                <div className='flex items-center mt-4 mb-2'>
                    <MdOutlineFiberNew className='text-xl text-white mr-1 mt-1 bg-[#68c944] rounded-full' />
                    <h2 className='text-2xl'>New Product</h2>
                </div>
                <div className='flex items-center text-sm text-[#7d879c]'>
                    <h3 className='mr-1 mt-3'>View all</h3>
                    <AiFillCaretRight className='mt-3' />
                </div>
            </div>

            {/* product */}
                <Product/>
                

            {/* end product */}
        </div>
     );
}

export default NewProduct;