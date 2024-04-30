import { Link } from "react-router-dom"
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Countrys = ({ country, mongoSpots,setSearchdata }) => {
    useEffect(() => {
        Aos.init()
    }, [])

    const { id, country_name, img, category } = country || {}
    // console.log(country_name)

    const handleSurch = country_name => {
        console.log(country_name)
        console.log(mongoSpots)
        const searchfor = [...mongoSpots].filter(mongoSpots => mongoSpots.country_Name === country_name)
        setSearchdata(searchfor)
    }
    return (

        <div className="mt-8 p-8 rounded-2xl max-w-[200px] max-h-[350px] mx-auto bg-center" data-aos="flip-right" style={{ backgroundImage: `url(${img})` }}>

            <div className="card w-full h-full bg-base-100 shadow-xl bg-[hsla(0,0%,100%,0.35)] bg-[hsla(0,0%,100%,0.7)]" >
                <div className="">
                    <h2 className=" text-2xl font-bold text-lime-600 mt-4">
                        {country_name}

                    </h2>
                    <p className="flex justify-start mt-4"></p>
                    <hr />
                    <div className="flex justify-between text-center mt-4 font-bold">
                        <div className="">{category}</div>
                    </div>
                    <div className="flex"><button onClick={() => handleSurch(country_name)} className="brn btn-ghost p-2 rounded-md mx-auto font-bold">search</button></div>
                </div> 
            </div>

        </div>

    )

}
export default Countrys