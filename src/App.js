import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import DefaultLayout from './layouts';

function App() {
   return (
      <BrowserRouter>
         <div className="app">
            <Routes>
               {publicRoutes.map((route, index) => {
                  const Layout = route.layout === null ? Fragment : route.layout || DefaultLayout;
                  const Page = route.component;

                  let props = {}
                  if(route.layout) {
                     props = {
                        SearchOn: route.SearchOn,
                        WideScreen: route.WideScreen
                     }
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
                     />
                  );
               })}
            </Routes>
         </div>
      </BrowserRouter>
   );
}

export default App;
