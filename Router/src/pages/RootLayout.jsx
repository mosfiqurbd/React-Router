import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
export default function RootLayout() {
  return (
    <>
      <div id="sidebar">
         <Navbar/>
        <h1>React Router Contacts</h1>
       
        </div>
        
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
