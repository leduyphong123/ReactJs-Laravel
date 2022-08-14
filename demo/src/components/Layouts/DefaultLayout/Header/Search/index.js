// import { useState } from 'react';
import React from 'react';
import { BiSearch } from 'react-icons/bi';
// import { TiDelete } from 'react-icons/ti';


// function Search() {
//   // const [search, setSearch] = useState(false);

//   function hendleProduct(e){
//     console.log(e);
//   }

//   return (
//     <li className={`transition duration-500 ease-in mr-2 `}>

//       <div className='flex justify-between items-center'>
//         <input className='rounded-2xl text-center border-2 mr-1 md:ml-8 md:w-80 ' placeholder='Search' onChange={(e) => hendleProduct(e.target.value)}></input>
//         <BiSearch className='text-xl hover:cursor-pointer' />
//       </div>
//     </li>
//   );
// }
var datatye;
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ProductData: [],
      Data : datatye
    };
  }
  getPageNumber(e) {
    const url = `http://127.0.0.1:8000/api/category/search`;
    fetch(url, {
      "method": "post",
      headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state.Data)
    })
      .then(response => response.json())
      .then(response => {

        console.log(response);

        // this.setState({
        //   ProductData: response.data,
         
        // });
      })
      .catch(err => {
        console.log(err)
      })
  }
  componentDidMount() {
    this.getPageNumber();
  }

  render() {
      function hendleProduct(e){
    datatye =e;
    console.log(datatye);
  }

    return (
          <li className={`transition duration-500 ease-in mr-2 `}>
      
            <div className='flex justify-between items-center'>
              <input className='rounded-2xl text-center border-2 mr-1 md:ml-8 md:w-80 ' placeholder='Search' onChange={(e) => hendleProduct(e.target.value)}></input>
              <BiSearch className='text-xl hover:cursor-pointer' />
            </div>
          </li>
        );
  }

}

export default Search;