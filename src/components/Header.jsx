import { useEffect, useState } from "react"

export default function Header({ sendData }) {
    const [foodName, setFoodName] = useState(null)

    function handleChange(e) {
        setFoodName(() => {
            return e.target.value
        })
    }


    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
            .then(res => res.json())
            .then(data => {
                sendData(data)
            })

    }, [foodName])

    console.log()

    return (
        <header className="px-4 py-4 sm:px-14 flex justify-center md:justify-start items-center border-b border-gray-700 text-cyan-100 flex-wrap">
            <img className="w-16 bg-white rounded-full"
                src="./src/assets/atom_food.png" alt="Atom Food Logo." />

            <div className="ml-6 ">
                <h1 className="brand text-3xl font-semibold">Atom Food</h1>
                <p>Make your Dream food</p>
            </div>

            <div className="m-auto sm:ml-auto mt-6 bg-sky-950 w-full">
                <form className="flex h-10 border border-sky-700 rounded-md w-full">
                    <input
                        className="bg-transparent outline-none indent-4"
                        type="text"
                        name="foodName"
                        onChange={handleChange}
                    />
                    <button
                        className="px-2 ml-auto border border-sky-700">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </button>
                </form>
            </div>
        </header>
    )
}