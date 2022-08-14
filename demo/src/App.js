import {Fragment} from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { publicRoutes,privatedRoutes } from './routes'
import DefaultLayout from './components/Layouts/DefaultLayout';


import token from './token';
function App() {

  return (
    <Router>    
        <Routes>
          {publicRoutes.map((route, index) => {
            const Layout = route.layout===null ? Fragment : DefaultLayout;
            const Sider = route.sider;
            const Category =route.CategorySider;
            const Page = route.component;
            if(Sider){
              return <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Sider>
                    <Page/>
                  </Sider>
                </Layout>}
            />
            }
            if(Category){
              return <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Category>
                    <Page/>
                  </Category>
                </Layout>}
            />
            }
            return <Route
              key={index}
              path={route.path}
              element={
                <Layout>           
                  <Page />
                </Layout>}
            />
          })}

{/* {privatedRoutes.map((route, index) => {
            const Layout = route.layout===null ? Fragment : DefaultLayout;
            const Sider = route.sider;
            const Page = route.component;
            if(token.token){
              if(Sider){
                return <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Sider>
                      <Page/>
                    </Sider>
                  </Layout>}
              />
              }
            }        
          })} */}
        </Routes>
    </Router>
  );
}

export default App;
