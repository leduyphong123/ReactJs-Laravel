import Home from "../pages/Home";
import Category from "../pages/Category";
import Profile from "../pages/DashBoard/Profile";
import Edit from "../pages/DashBoard/Profile/Edit";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Order from "../pages/DashBoard/Order";

import Sider from "../components/Layouts/DefaultLayout/Siderbar";
import CategorySider from "../components/Layouts/DefaultLayout/Category";



//page k can login
const publicRoutes=[
    { path: '/', component: Home},
    { path: '/register', component: Register, layout: null},
    { path: '/login', component: Login, layout: null},

    { path: '/category', component: Category, CategorySider: CategorySider},
    { path: '/profile', component: Profile, sider : Sider},
    { path: '/profile/edit', component: Edit, sider : Sider},
    { path: '/order', component: Order, sider : Sider},
    
]

//page can login
const privatedRoutes=[
    
    
]


export{publicRoutes,privatedRoutes}