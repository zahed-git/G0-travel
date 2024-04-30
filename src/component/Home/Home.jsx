import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Countrys from "../Countrys/Countrys";
import Spots from "../Spots/Spots";
import { useLoaderData } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import 'animate.css'
import { Typewriter } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";


const Home = () => {
    const [countrys, setCountrys] = useState([])
    const [mongoSpots, setMongospots] = useState([])
    const [searchData, setSearchdata] = useState([])
    useEffect(() => {
        fetch('./countrys.json')
            .then(res => res.json())
            .then(data => setCountrys(data))

    }, [])
    useEffect(() => {
        fetch('https://server-10-for-render.onrender.com/places')
            .then(res => res.json())
            .then(data => {
                setMongospots(data)
                setSearchdata(data)
            })

    }, [])

    return (
        <div>
            <Banner></Banner>

            <div className="mx-auto text-center sm:max-w-[350px] lg:max-w-[800px] my-10">
                <h1 className="sm:text-2xl  md:text-5xl font-semibold my-6 animate__animated animate__bounce">About Us</h1>
                <p className="mb-6 sm:text-xs md:text-base font-semibold text-wrap text-slate-400">Travel with a Cause, the not-for-profit agency we <span className="text=xl font-bold text-red-400">Trake Tide </span> making a difference through travel.
                    Our mission is to save the environment by promoting sustainable tourism practices..</p>
            </div>
            <div className="mx-auto text-center sm:max-w-[350px] lg:max-w-[800px] my-10">
                <h1 className="sm:text-2xl  md:text-5xl font-semibold my-6 animate__animated animate__bounce"><h3>
                    <Typewriter
                        cursorStyle={{}}
                        delaySpeed={1000}
                        deleteSpeed={25}
                        loop={1}
                        typeSpeed={100}
                        words={[


                            'Interactive Destination Search'

                        ]}
                    />
                </h3></h1>

            </div>
            <Link to="section1" smooth={true} duration={500}>
                <div className="grid sm:grid-cols-1 lg:grid-cols-6 gap-2">

                    {
                        countrys && countrys.map((country, idx) => <Countrys key={idx} country={country} mongoSpots={mongoSpots} setSearchdata={setSearchdata}></Countrys>)
                    }
                </div>
            </Link>
            <div className="mx-auto text-center sm:max-w-[350px] lg:max-w-[800px] mt-20 mb-10">
                <h1 className="sm:text-2xl  md:text-5xl font-semibold my-6 animate__animated animate__bounce">Our Online Partners</h1>
            </div>
            <Marquee>
                <div className="max-w-[150px] mx-3 "><img className="rounded-full w-full" src="https://i.postimg.cc/PJbwpsD6/7.jpg" alt="" /></div>
                <div className="max-w-[150px] mx-3 "><img className="rounded-full w-full" src="https://i.postimg.cc/2yx1jdpM/645.jpg" alt="" /></div>
                <div className="max-w-[150px] mx-3 "><img className="rounded-full w-full" src="https://i.postimg.cc/3R5NgfYz/313895-P931-Z5-594.jpg" alt="" /></div>
                <div className="max-w-[150px] mx-3 "><img className="rounded-full w-full" src="https://i.postimg.cc/V6WfXY7b/2590433.jpg" alt="" /></div>
                <div className="max-w-[150px] mx-3 "><img className="rounded-full w-full" src="https://i.postimg.cc/vHcyZLdn/6862818.jpg" alt="" /></div>
                <div className="max-w-[150px] mx-3 "><img className="rounded-full w-full" src="https://i.postimg.cc/br4BJnQ0/7889364.jpg" alt="" /></div>
                <div className="max-w-[150px] mx-3 "><img className="rounded-full w-full" src="https://i.postimg.cc/3wWfg9nj/christmas-2012-new-6747.jpg" alt="" /></div>
                <div className="max-w-[150px] mx-3 "><img className="rounded-full w-full" src="" alt="" /></div>
                <div className="max-w-[150px] mx-3 "><img className="rounded-full w-full" src="https://i.postimg.cc/C544yfcL/m011t0447-b-social-sign-18sep22.jpg" alt="" /></div>
            </Marquee>
            <div className="mx-auto text-center sm:max-w-[350px] lg:max-w-[800px] my-10">
                <h1 className="sm:text-2xl  md:text-5xl font-semibold my-6 animate__animated animate__bounce">Choos Your Destination</h1>
                <p className="mb-6 sm:text-xs md:text-base font-semibold text-wrap text-slate-400">Lorem ipsum dolor sit amet, ea pro error pertinacia, nam id munere detraxit. Wisi decore discere eum an, autem erant usu eu, per ubique legendos intellegam in. An est melius vivendo. Hinc temporibus nec te, vero consetetur an qui nam.</p>
            </div>
            <Element name="section1">
                <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-2 my-6">
                    {
                        searchData && searchData.map((spot, idx) => <Spots key={idx} spot={spot}></Spots>)

                    }
                </div>
            </Element>
            {/* ----------------------------------------------------- */}
            <div className="mx-auto text-center sm:max-w-[350px] lg:max-w-[800px] mt-20 mb-10">
                <h1 className="sm:text-2xl  md:text-5xl font-semibold my-6 animate__animated animate__bounce">Expert Travel Tips & Advice</h1>
            </div>
            <div className="relative mx-auto text-center  sm:w-[330px] md:w-[550px] lg:w-[550px] sm:h-[330px] md:h-[550px] lg:h-[450px] mb-32 ">

                <div className="w-full ">
                    <img className="h-full w-full object-cover" src="https://picsum.photos/id/1018/2000" alt="Winding mountain road" />
                </div>


                <div className="w-full  bg-white absolute z-10 sm:bottom-0 sm:left-0  lg:bottom-10 lg:left-52">
                    <div className="flex flex-col p-12 ">
                        <h2 className="sm:text-xl lg:text-2xl font-medium uppercase text-green-800 ">Winding Mountain Road</h2>
                        <p className="mt-4">
                            <Fade cascade>
                                <p>Our mission is simple...</p>
                                <p>...to help you enjoy all the fun...</p>
                                <p>...of exploring our fascinating world...!</p>
                            </Fade>
                        </p>

                        <div className="mt-8">
                            <a href="#"
                                className="inline-block w-full text-center text-lg font-medium text-gray-100 bg-green-600 border-solid border-2 border-gray-600 py-4 px-10 hover:bg-green-800 hover:shadow-md md:w-48">Read
                                More</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Home;