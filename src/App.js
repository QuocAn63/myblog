import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import DefaultLayout from './layouts';
import ScrollToTop from './components/ScrollToTop';

function App() {
   return (
      <BrowserRouter>
         <ScrollToTop>
            <div className="app">
               <Routes>
                  {publicRoutes.map((route, index) => {
                     const Layout = route.layout === null ? Fragment : route.layout || DefaultLayout;
                     const Page = route.component;

                     let props = {};
                     if (route.layout) {
                        props = {
                           SearchOn: route.SearchOn,
                           WideScreen: route.WideScreen,
                        };
                     }

                     return (
                        <Route
                           key={index}
                           path={route.path}
                           element={
                              <Layout {...props}>
                                 <Page />
                              </Layout>
                           }
                        >
                           {route.subPath &&
                              route.subPath.map((item, index) => {
                                 const SubPage = item.component;
                                 return <Route key={index} index={item.index} path={item.path} element={<SubPage />} />;
                              })}
                        </Route>
                     );
                  })}
               </Routes>
            </div>
         </ScrollToTop>
      </BrowserRouter>
   );
}

export default App;
