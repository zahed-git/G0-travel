import { Link } from "react-router-dom"


const Countrys = ({ country }) => {

    const { id, country_name, img, category } = country || {}
    console.log(country_name)
    return (
        <div className="mt-8">
            <Link to={`/spots/${country_name}`}>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="max-h-[500px] p-14"><img src={img} alt={country_name} /></figure>
                    <div className="card-body">
                        <h2 className="card-title mt-4">
                            {country_name}

                        </h2>
                        <p className="flex justify-start mt-4"></p>
                        <hr />
                        <div className="flex justify-between text-center mt-4 font-bold">
                            <div className="">{category}</div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )

}
export default Countrys