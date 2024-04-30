import { Helmet } from "react-helmet";
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { useContext, useState } from "react";
import { AuthContext } from "../../assets/Provider/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const User = () => {
    const loadedUsers = useLoaderData()
    const [users, setUsers] = useState(loadedUsers)

    const { user } = useContext(AuthContext)


    const handleDelete = id => {
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
        fetch(`http://localhost:5000/user/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    console.log('deleted successfully');
                    // remove the user from the UI
                    const remainingUsers = users.filter(user => user._id !== id);
                    setUsers(remainingUsers);
                    Swal.fire({
                        title: "Deleted!",
                        text: "Location has been deleted.",
                        icon: "success"


                    });
                }
            })
        }
    })

    }
    return (
        <div>
            <Helmet>
                <title>update-profile</title>
            </Helmet>
            <Helmet>
                <title>user</title>
            </Helmet>
            <div className="md:flex lg:flex justify-between gap-6">
                {/* ---------------for-fire-base */}
                <div className="sm:max-w-[320px] md:max-w-[980px] lg:max-w-[1250px] mt-10">

                    <div className="bg-white relative shadow rounded-lg w-full  mx-auto">
                        <div className="flex justify-center">
                            <img src={user.photoURL} alt="" className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110" />
                        </div>

                        <div className="mt-16">
                            <h1 className="font-bold text-center text-3xl text-gray-900">{user.displayName}</h1>
                            <p className="text-center text-sm text-gray-400 font-medium">{user.email}</p>
                            <p>
                                <span>

                                </span>
                            </p>
                            <div className="my-5 px-6">
                                <a href="#" className="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white">Connect with <span className="font-bold">@pantazisoft</span></a>
                            </div>
                            <div className="flex justify-between items-center my-5 px-6">
                                <a href="" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Facebook</a>
                                <a href="" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Twitter</a>
                                <a href="" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Instagram</a>
                                <a href="" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Email</a>
                            </div>

                            <div className="w-full">
                                <h3 className="font-medium text-gray-900 text-left px-6">Recent activites</h3>
                                <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                                    <a href="#" className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                        <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" className="rounded-full h-6 shadow-md inline-block mr-2" />
                                        Updated his status
                                        <span className="text-gray-500 text-xs">24 min ago</span>
                                    </a>

                                    <a href="#" className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                        <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" className="rounded-full h-6 shadow-md inline-block mr-2" />
                                        Added new profile picture
                                        <span className="text-gray-500 text-xs">42 min ago</span>
                                    </a>

                                    <a href="#" className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                        <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" className="rounded-full h-6 shadow-md inline-block mr-2" />
                                        Posted new article in <span className="font-bold">#Web Dev</span>
                                        <span className="text-gray-500 text-xs">49 min ago</span>
                                    </a>

                                    <a href="#" className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                        <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" className="rounded-full h-6 shadow-md inline-block mr-2" />
                                        Edited website settings
                                        <span className="text-gray-500 text-xs">1 day ago</span>
                                    </a>

                                    <a href="#" className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150 overflow-hidden">
                                        <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" className="rounded-full h-6 shadow-md inline-block mr-2" />
                                        Added new rank
                                        <span className="text-gray-500 text-xs">5 days ago</span>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* ---------------for-fire-base */}
                {/* ---------------for-mongo */}
                <div className="sm:max-w-[33px] lg:max-w-[550px]">
                    <h2>Users: {loadedUsers.length}</h2>
                    <div className="overflow-x-auto w-full">
                        <table className="table">
                            head
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Email</th>
                                    <th>Created At</th>
                                    <th>Last Logged In</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map(user => <tr key={user._id}>
                                        <th>1</th>
                                        <td>{user.email}</td>
                                        <td>{user.createdAt}</td>
                                        <td>{user.lastLoggedAt}</td>
                                        <td>
                                            <button  onClick={() => handleDelete(user._id)} className="btn">X</button>
                                            <Link to={`/userupdate/${user._id}`}><button className="btn btn-primary mx-2">Update</button></Link>
                                        </td>
                                    </tr>)
                                }

                            </tbody>
                        </table>
                    </div>
                </div> 
                 {/* ---------------for-mongo */}
            </div>

        </div>
    )
}
export default User;