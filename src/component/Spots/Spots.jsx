import {  Link, useParams } from "react-router-dom"


const Spots = ({spot}) => {
const {_id,image,tourists_spot_name,country_Name,location,description,averageCost,seasonality,travel_Time,total_Visitors_Per_Year}=spot || {}
    const { country_name } = useParams()
    console.log(country_name)


    return (

        <div>
            <div className="max-w-[340px] max-h-[550px] my-12 mx-auto">
           
            <div className="card w-full h-full bg-base-100 shadow-xl">
                <div className="">
                <figure className=" rounded-xl"><img src={image} alt={tourists_spot_name} /></figure>
                </div>
                
                <div className="card-body">
                    <div className="card-actions justify-left mt-4">
                        <div className="badge badge-outline font-semibold text-green-500 p-3 bg-slate-200">{travel_Time}</div>
                        <div className="badge badge-outline font-semibold text-green-500 p-3 bg-slate-200">Visitor Countings :{total_Visitors_Per_Year}</div>
                    </div>
                    <h2 className="card-title mt-4">
                        {tourists_spot_name}

                    </h2>
                    <p className="flex justify-start mt-4">Best Time : {seasonality}</p>
                    <hr />
                    <div className="flex justify-between text-center mt-4">
                        <div className="">{location}</div>
                    </div>
                </div>
                <div>
                <Link ><button className="btn btn-primary">View Detail</button></Link>
                </div>
            </div>
            
        </div>
            
        </div>
    )

}
export default Spots