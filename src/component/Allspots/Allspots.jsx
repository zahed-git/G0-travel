import { Link, useLoaderData } from "react-router-dom";
import AllspotCard from "../AllspotCard/AllspotCard";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";


const Allspots =()=>{
const [mongospots,setMongospots]=useState([])
    useEffect (()=>{
        fetch('https://server-10-for-render.onrender.com/places')
        .then(res=>res.json())
        .then(data=> setMongospots(data))

    },[])
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>ALL-Places</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-10">
            {
mongospots && mongospots.map((spot,idx)=> <AllspotCard key={idx} spot={spot}></AllspotCard>)
            }
            </div>
            
        </div>
    )
}
export default Allspots;