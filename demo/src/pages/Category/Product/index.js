import React from "react";
import $ from "jquery/dist/jquery.js";
import { Pagination } from "flowbite-react";



class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ProductData: [],
            page: null,
            pageCount: null
        };
    }
    getPageNumber(pageNumber = 0) {
        const url = `http://127.0.0.1:8000/api/category/pageNumber=${pageNumber}`;
        fetch(url, {
            "method": "get",
            // headers: {
            //     'Content-Type': 'application/json',
            //   },
            //   body: JSON.stringify(page)
        })
            .then(response => response.json())
            .then(response => {

                console.log(response);

                this.setState({
                    ProductData: response.data,
                    page: response.page,
                    pageCount: response.pageCount
                });
            })
            .catch(err => {
                console.log(err)
            })
    }
    componentDidMount() {
        this.getPageNumber();
    }


    render() {
        // const panigate=[];
        //     for(var i=1;i<=this.state.pageCount;i++){
        //         panigate.push(<div key={i} 
        //             onClick={(Contro)=>{this.getPageNumber(Contro)}}
        //             className="px-2 py-2 border-r hover:cursor-pointer hover:bg-slate-100" Contro={i}>{i}</div>);
        //     }



        const element = <div> <div className='grid grid-flow-row grid-cols-2 gap-2 px-2 md:grid-cols-4'>
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
            <div className="flex mt-6 items-center justify-center">
                <div className="flex border rounded-lg  items-center shadow-sm">
                    <div className="px-2 py-2 border-r hover:cursor-pointer hover:bg-slate-100"
                        onClick={() => { this.state.page < 1 ? this.getPageNumber(this.state.page = 0) : this.getPageNumber(this.state.page - 1) }}
                    >Previous</div>

                    {/* {panigate.map((item)=>{
                       
                        return item;
                    })} */}


                    {/* <div className="px-2 py-2 border-r hover:cursor-pointer hover:bg-slate-100">1</div>
                    <div className="px-2 py-2 border-r hover:cursor-pointer hover:bg-slate-100">2</div> */}
                    <div className="px-2 py-2 hover:cursor-pointer hover:bg-slate-100"
                        onClick={() => { this.state.page > this.state.pageCount - 2 ? this.getPageNumber(this.state.page = this.state.pageCount - 1) : this.getPageNumber(this.state.page + 1); window.scrollTo(0, 0); }}
                    >next</div>
                </div>
            </div>
        </div>

        return element;
    }
}






export default Product;