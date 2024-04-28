import { Link } from "react-router-dom";



const AllspotCard =({spot})=>{
    const {_id, image, tourists_spot_name, country_Name, location, description, averageCost, seasonality, travel_Time, total_Visitors_Per_Year } = spot || {}
    return(
        <div data-aos="fade-up">
            <div className="sm:max-w-[340px] max-w-[450px] max-h-[600px] my-12 mx-auto" >
           
            <div className="card w-full h-full bg-base-100 shadow-xl">
                <div className="">
                <figure className=" rounded-xl"><img src={image} alt={tourists_spot_name} /></figure>
                </div>
                
                <div className="card-body">
                    <div className="card-actions justify-left mt-4">
                        <div className="badge badge-outline font-semibold text-green-500 p-3 bg-slate-200">{travel_Time} tour</div>
                        <br />
                        <div className="badge badge-outline font-semibold text-green-500 p-3 bg-slate-200">Visitor Countings :{total_Visitors_Per_Year}</div>
                    </div>
                    <h2 className="card-title mt-4 text-fuchsia-500 text-bold">
                        {tourists_spot_name}

                    </h2>
                    <p className="flex justify-start mt-4"><span className="font-semibold text-emerald-500">{seasonality}</span> </p>
                    <hr />
                    <div className="flex justify-between text-center mt-4">
                        <div className="">{location}</div>
                    </div>
                </div>
                <div className="flex justify-center mb-4">
                <Link to={`/detail/${_id}`}><button className="btn btn-primary">View Detail</button></Link>
                </div>
            </div>
            
        </div>
            
        </div>
    )
}
export default AllspotCard;