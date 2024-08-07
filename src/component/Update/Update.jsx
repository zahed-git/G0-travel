import { Helmet } from "react-helmet";
import { Link,  useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {
    const navigate =useNavigate()
    const updateFor = useLoaderData({}) || {}

    const {_id, image, tourists_spot_name, country_Name, location, description, averageCost, seasonality, travel_Time, total_Visitors_Per_Year } = updateFor || {}
    
    const handleUpdateData = (e) => {
        e.preventDefault()
        const tourists_spot_name = e.target.name.value;
        const location = e.target.location.value;
        const seasonality = e.target.seasonality.value;
        const country_Name = e.target.country.value;
        const averageCost = e.target.cost.value;
        const travel_Time = e.target.travel_time.value;
        const description = e.target.description.value;
        const image = e.target.photo.value;
        const total_Visitors_Per_Year = e.target.totalVisitorsPerYear.value;


        const updateLocation = { image, tourists_spot_name, country_Name, location, description, averageCost, seasonality, travel_Time, total_Visitors_Per_Year }
        console.log(updateLocation)
// ------------------
Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, update it!"
}).then((result) => {
    if (result.isConfirmed) {
// -----------------------



        e.target.reset();
        fetch(`https://server-10-for-render.onrender.com/places/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateLocation)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.modifiedCount>0){
                    navigate('/')
                    Swal.fire({
                        title: "Updated!",
                        text: "Location has been Updated.",
                        icon: "success"
                       

                    })
                }
                
            })
     } })
    }
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Update</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
                <h1 className="text-xl font-bold text-white capitalize dark:text-white">Update Your Location</h1>
                <form onSubmit={handleUpdateData}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-white dark:text-gray-200" for="username">Name</label>
                            <input name="name" defaultValue={tourists_spot_name} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-white dark:text-gray-200" for="emailAddress">Location</label>
                            <input name="location" defaultValue={location} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-white dark:text-gray-200" >Seasonality</label>
                            <input name="seasonality" defaultValue={seasonality} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-white dark:text-gray-200" >Travel Time</label>
                            <input name="travel_time" defaultValue={travel_Time} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200" >Total Visitors Per Year</label>
                            <input name="totalVisitorsPerYear" defaultValue={total_Visitors_Per_Year} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-white dark:text-gray-200" >Conuntry Name</label>
                            <input name="country" type="text" defaultValue={country_Name} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>


                        <div>
                            <label className="text-white dark:text-gray-200" for="passwordConfirmation">Description</label>
                            <textarea type="textarea" name="description" defaultValue={description} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200" >Average Cost</label>
                            <input name="cost" type="text" defaultValue={averageCost} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200" >Photo URL</label>
                            <input name="photo" type="text" defaultValue={image} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white">
                                Image
                            </label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                <div className="space-y-1 text-center">
                                    <svg className="mx-auto h-12 w-12 text-white" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div className="flex text-sm text-gray-600">
                                        <label for="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                            <span className="">Upload a file</span>
                                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                        </label>
                                        <p className="pl-1 text-white">or drag and drop</p>
                                    </div>
                                    <p className="text-xs text-white">
                                        PNG, JPG, GIF up to 10MB
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex mt-6  text-xl p-2 justify-center rounded-xl bg-lime-400 btn">
                        <input type="submit" value="Update" />
                    </div>
                    <div className="bg-slate-300 btn w-full my-2 text-xl font-bold text-green-400">
    
                    <Link to={'/'}><button>Return to Home</button></Link>
                    </div>
                    
                </form>
            </section>

        </div>
    )
}
export default Update;