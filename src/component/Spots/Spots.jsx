import {  Link, useParams } from "react-router-dom"


const Spots = ({spot}) => {
const {_id,image,tourists_spot_name,country_Name,location,description,averageCost,seasonality,travel_Time,total_Visitors_Per_Year}=spot || {}
    const { country_name } = useParams()
    console.log(country_name)


    return (

        <div>
            <h1>
            <div className="mx-6 my-10">
            <Link to={`/detail/${_id}`}>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="max-h-[500px] p-14"><img src={image} alt={tourists_spot_name} /></figure>
                <div className="card-body">
                    <div className="card-actions justify-left mt-4">
                        <div className="badge badge-outline font-semibold text-green-500 p-3 bg-slate-200">{travel_Time}</div>
                        <div className="badge badge-outline font-semibold text-green-500 p-3 bg-slate-200">Visitor Countings :{total_Visitors_Per_Year}</div>
                    </div>
                    <h2 className="card-title mt-4">
                        {tourists_spot_name}

                    </h2>
                    <p className="flex justify-start mt-4">Description : {seasonality}</p>
                    <hr />
                    <div className="flex justify-between text-center mt-4">
                        <div className="">{location}</div>
                        <div className="flex gap-2">{country_Name} <span className="mt-1"></span> </div>
                    </div>
                </div>
            </div>
            </Link>
        </div>
            </h1>
        </div>
    )

}
export default Spots