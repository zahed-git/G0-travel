import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

const Root=()=>{
    return(
        <div >
           
            <Nav></Nav>
             <div >
                <p>outlet</p>
                <div className="mt-10 flex">
                    <div className="mx-auto">
                        <Outlet></Outlet>
                        </div>
                
                </div>
             
             </div>
             <Footer></Footer>
            </div>
             
            
            
      
    )
}
export default Root;