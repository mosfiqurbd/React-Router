import {createBrowserRouter} from "react-router";
import App from "../App";
import About from "../pages/About";
import Root from "../pages/RootLayout";
import Team from "../pages/Team";
import RootLayout from "../pages/RootLayout";
import PostList from "../pages/PostList";
import PostDetails from "../pages/PostDetails";

export const rootRouter = createBrowserRouter([
     {path:'/',element:<RootLayout/>,children:[
        {path:'/',element:<App/>},
        {path:'/about',element:<About/>},
  {path:'/Team',element:<Team/>},
  {path:'/Posts',element:<PostList/>},
  {path:'/posts/:id',element:<PostDetails/>},  
], 
     }, 
     //  {path:'/login',element:<Login/>},
]);
  