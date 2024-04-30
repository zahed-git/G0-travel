import { useContext } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../assets/Provider/AuthProvider";
import MylistCard from "../MylistCard/MylistCard";


const Mylist =()=>{
const {user} =useContext(AuthContext)
    const data= useLoaderData()

    // const [places,setPlases]=useState([])
    
    const searchByEmail = data.filter(place=> place.userEmail === user.email)
    // setPlases(searchByEmail) //this line
    //React Router caught the following error during render Error: 
    //Too many re-renders. React limits the number of renders to prevent an infinite loop.

    console.log(user.email,searchByEmail)
    return(
        <div> 
            <Helmet>
                <meta charSet="utf-8" />
                <title>MYlsit</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
           
           <div >
            {
              searchByEmail?.map((data,idx)=> <MylistCard key={idx} data={data}></MylistCard>)  
            }
           </div>
        </div>
    )
}
export default Mylist;