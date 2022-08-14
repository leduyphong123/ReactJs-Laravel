import FlashDeals from './FlashDeals';
import TopProduct from './TopProduct';
import token from '../../token';
import NewProduct from './NewProduct';
import SiderCategory from './SiderCategory';
import ItemProduct from './ItemProduct';
import Banner from '../../components/Layouts/DefaultLayout/Banner';

function Home() {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const history=useNavigate();

    // const handleSubmit = ()=>{            
    //       axios({
    //         method:'post',
    //         url:'api/home',
    //         data:{
    //           email: email,
    //           password: password
    //         }
    //       }).then((response)=>{
    //         alert('login success')
    //         token.token= response.data.token;
    //         history('/profile');
    //       }).catch((error)=>{           
    //         alert(error);           
    //       });
    // }

    return (

        <>
            {/* banner */}
            <Banner />
            {/* end banner */}

            <div className='bg-slate-100 py-8'>
                {/* flash deals */}
                <FlashDeals />
                {/* end flash deals */}

                {/* Top Categories */}
                <TopProduct />
                {/* end Top Categories */}

                {/* NewProduct */}
                <NewProduct />
                {/* end NewProduct */}

                {/* danh muc category */}
                <div className='flex justify-between items-start mx-2 mt-6 mb-2 relative'>
                    <SiderCategory />
                    <ItemProduct />
                </div>
                {/* end danh muc category */}
            </div>
        </>
    );
}

export default Home;
