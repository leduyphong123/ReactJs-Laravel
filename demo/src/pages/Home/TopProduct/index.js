import { AiTwotoneAppstore, AiFillCaretRight } from 'react-icons/ai';

import Product from './Product';

function TopProduct() {
    return (
        <>
            <div className='flex items-center justify-between px-2 mb-2'>
                <div className='flex items-center mt-4 mb-2'>
                    <AiTwotoneAppstore className='text-lg text-pink-500 mr-1 mt-1' />
                    <h2 className='text-2xl'>Top Product</h2>
                </div>
                <div className='flex items-center text-sm text-[#7d879c]'>
                    <h3 className='mr-1 mt-3'>View all</h3>
                    <AiFillCaretRight className='mt-3' />
                </div>
            </div>

            {/* product */}
                <Product/>
                

            {/* end product */}
        </>
    );
}

export default TopProduct;