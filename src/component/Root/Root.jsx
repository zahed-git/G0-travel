import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";

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
            </div>
             
            
            
      
    )
}
export default Root;