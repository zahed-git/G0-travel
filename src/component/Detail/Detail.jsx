import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";


const Detail = () => {
    // const spotData=useLoaderData()
    const { _id } = useParams()
    const [spotData, setSpotData] = useState({})
    const navigate = useNavigate()
    // console.log(_id)

    const { image, tourists_spot_name, country_Name, location, description, averageCost, seasonality, travel_Time, total_Visitors_Per_Year } = spotData || {}

    const handleDelete = (_id) => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/places/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            navigate('/')
                            Swal.fire({
                                title: "Deleted!",
                                text: "Location has been deleted.",
                                icon: "success"


                            });

                        }
                    })

            }
        });


    }



    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("http://localhost:5000/places")
            const data = await res.json()
            // console.log(data)
            const singledata = data?.find(spotData => spotData._id == _id)
            setSpotData(singledata)
        }
        fetchData()
    }, [_id])
    // console.log(spotData)



    return (
        <div >
            <div className="card lg:card-side bg-base-100 shadow-xl m-14">
                <figure className='bg-slate-100 p-14 m-6 rounded-xl'><img className='max-w-[400px] max-h-[650px]' src={image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{tourists_spot_name}</h2>
                    <p>Country : {country_Name}</p>
                    <hr />
                    <p><span className='text-xl font-semibold'> Price : </span>  {averageCost} $</p>
                    <hr />
                    <p><span className='text-xl font-semibold'>Details : </span>  {description}</p>
                    <div className="flex gap-3 my-4">
                        <p className="font-bold">Tag :</p>
                        <div className="badge badge-outline p-4 text-green-600 font-bold bg-slate-100">#{country_Name}</div>
                        <div className="badge badge-outline p-4 text-green-600 font-bold bg-slate-100">#{total_Visitors_Per_Year}</div>
                    </div>
                    <hr />
                    <div>
                        {/* ----------- */}
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>

                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    <tr>
                                        <td>Location :</td>

                                        <td>{location}</td>
                                    </tr>
                                    {/* row 2 */}
                                    <tr>
                                        <td>Sensationality:</td>

                                        <td>{seasonality}</td>
                                    </tr>
                                    {/* row 3 */}
                                    <tr>
                                        <td>Travel time:</td>

                                        <td>{travel_Time}</td>
                                    </tr>


                                    <tr>
                                        <td>Visitors:</td>

                                        <td>{total_Visitors_Per_Year}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {/* -------------- */}
                    </div>
                    <div className="card-actions justify-start">
                        <button onClick={() => handleDelete(_id)} className="btn btn-primary">Delete</button>
                        <Link to={`/update/${_id}`}><button className="btn btn-primary">Update</button></Link>
                        <Link to={'/'}><button className="btn btn-primary">Return to Home</button></Link>

                    </div>
                </div>
            </div>


        </div>
    )
}
export default Detail;