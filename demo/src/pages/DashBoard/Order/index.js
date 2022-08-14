import { FiShoppingBag } from 'react-icons/fi';

function Order() {
    return (
        <>

            <div className="flex justify-between items-center ">
                <div className="flex flex-row items-center text-lg">
                    <FiShoppingBag className="text-pink-500" />
                    <h3 className="ml-3">My Orders</h3>
                </div>

            </div>
            <div className='grid grid-flow-row grid-cols-4 gap-4 px-5 ColorP my-3'>
                <p>Order #</p>
                <p>Status</p>
                <p>Date purchased</p>
                <p>Total</p>
            </div>

            <div className='bg-white px-5 py-3 mb-4 rounded-lg grid grid-flow-row grid-cols-4 gap-4 hover:cursor-pointer '>
                <p>123123AS</p>
                <p className='flex'><div className='bg-slate-200 px-3 rounded-xl py-1 text-sm'>Pending</div></p>
                <p>21/12/2022</p>
                <p>350$</p>
            </div>
            <div className='bg-white px-5 py-3 mb-4 rounded-lg grid grid-flow-row grid-cols-4 gap-4 hover:cursor-pointer '>
                <p>123123AS</p>
                <p className='flex'><div className='bg-slate-200 px-3 rounded-xl py-1 text-sm'>Pending</div></p>
                <p>21/12/2022</p>
                <p>350$</p>
            </div>
            <div className='bg-white px-5 py-3 mb-4 rounded-lg grid grid-flow-row grid-cols-4 gap-4 hover:cursor-pointer '>
                <p>123123AS</p>
                <p className='flex'><div className='bg-slate-200 px-3 rounded-xl py-1 text-sm'>Pending</div></p>
                <p>21/12/2022</p>
                <p>350$</p>
            </div>
            <div className='bg-white px-5 py-3 mb-4 rounded-lg grid grid-flow-row grid-cols-4 gap-4 hover:cursor-pointer '>
                <p>123123AS</p>
                <p className='flex'><div className='bg-[#11ff60] bg-opacity-5 px-3 rounded-xl py-1  hover:cursor-pointer text-sm text-[#33d067] shadow-sm'>Delivered</div></p>
                <p>21/12/2022</p>
                <p>350$</p>
            </div>
        </>
    );
}

export default Order;