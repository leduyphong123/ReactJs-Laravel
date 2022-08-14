import Product from "./Product";

import { AiFillThunderbolt, AiFillCaretRight } from 'react-icons/ai';

function FlashDeals() {
    return (
        <div>
            <div className='flex items-center justify-between px-2 mb-2 relative'>
                <div className='flex items-center'>
                    <AiFillThunderbolt className='text-lg text-pink-500 mr-1 mt-1' />
                    <h2 className='text-2xl'>Flash Deals</h2>
                </div>
                <div className='flex items-center text-sm text-[#7d879c]'>
                    <h3 className='mr-1 mt-3'>View all</h3>
                    <AiFillCaretRight className='mt-3' />
                </div>
            </div>

            {/* product */}
            <Product />
            {/* end product */}
        </div>
    );
}

export default FlashDeals;