import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Countrys from "../Countrys/Countrys";
import Spots from "../Spots/Spots";
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const [countrys, setCountrys] = useState([])
    // const mongoSpots= useLoaderData() || []
    const [mongoSpots,setMongospots]=useState ([])
    useEffect(() => {
        fetch('./countrys.json')
            .then(res => res.json())
            .then(data => setCountrys(data))
           
    }, [])
    useEffect (()=>{
        fetch('http://localhost:5000/places')
        .then(res=>res.json())
        .then(data=> setMongospots(data))

    },[])
    console.log(countrys)
    return (
        <div>
            <Banner></Banner>
            <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
                {
                    countrys && countrys.map((country, idx) => <Countrys key={idx} country={country}></Countrys>)
                }
            </div>
            <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-2">
                {
                   mongoSpots && mongoSpots.map((spot,idx)=><Spots key={idx} spot={spot}></Spots>) 
                }
                {/* <Spots></Spots> */}
            </div>


        </div>
    )
}
export default Home;