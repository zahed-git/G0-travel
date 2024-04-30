import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { themeChange } from "theme-change";
import { useEffect } from "react";
import '../../them.css'



const Root=()=>{
    useEffect (() => {
        themeChange(false)
      }, [])
    return(
        <div className="bg-var(--my-color)" style={{backgroundImage: 'url(https://i.postimg.cc/CKqRFbqv/toppng-com-colorful-confettis-png-clipart-images-3508x2540.png)'}}>
           
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