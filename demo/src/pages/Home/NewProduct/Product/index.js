import React from "react";
import $ from "jquery/dist/jquery.js";

class Product extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ProductData: []
        }
    }

    componentDidMount() {
        fetch("http://127.0.0.1:8000/api/newProducts", {
            "method": "get"
        })
            .then(response => response.json())
            .then(response => {
                this.setState({
                    ProductData: response.data
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {

        const element = <div className='grid grid-flow-row grid-cols-2 gap-2 px-2 md:grid-cols-6'>

            {this.state.ProductData.map((item) => {
                const img = item.imgProduct;
                const items = <div key={item.idProduct} className='bg-white py-1 px-1 shadow-xl rounded-md relative hover:border-pink-500 hover:border hover:px-0 hover:py-0 hover:cursor-pointer'>
                    <div className={`absolute bg-pink-500 text-white px-3 py-1 rounded-full top-2 left-2 text-xs md:text-sm md:px-4
                 ${item.sale == null ? "hidden" : ""}`}>{item.sale}%</div>
                    <img src={`${img}`} className="w-full rounded-md h-[194px] md:h-[204px]" />
                    <div className='px-2 flex flex-col relative min-h-[75px]'>

                        <h4 className='text-sm my-1'>{item.nameProduct.length >= 19 ? item.nameProduct.slice(0, 19) + "..." : item.nameProduct}</h4>
                        <p className={`bg-orange-400 w-[76px] text-xs text-white px-auto text-start pl-1 ${item.promotion == null ? "hidden" : ""}`} >Discount {item.promotion}$</p>

                        <div className='flex justify-between items-center absolute bottom-1 right-2 left-2'><p className='text-pink-600'>{item.price}$</p> <span className='text-xs font-thin'>sold {item.sold}</span></div>
                    </div>
                </div>
                return items;
            })}
        </div>


        return element;
    }
}
export default Product;