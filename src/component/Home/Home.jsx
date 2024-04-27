import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Countrys from "../Countrys/Countrys";
import Spots from "../Spots/Spots";

const Home = () => {
    const [countrys, setCountrys] = useState([])
    useEffect(() => {
        fetch('./countrys.json')
            .then(res => res.json())
            .then(data => setCountrys(data))
           
    }, [])
    console.log(countrys)
    return (
        <div>
            <Banner></Banner>
            <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
                {
                    countrys && countrys.map((country, idx) => <Countrys key={idx} country={country}></Countrys>)
                }
            </div>
            <div >
                <Spots></Spots>
            </div>


        </div>
    )
}
export default Home;