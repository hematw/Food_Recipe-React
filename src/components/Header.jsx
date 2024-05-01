import { useEffect, useState } from "react"
import Loader from "./Loader"


export default function Header({ sendData }) {
    const [inputText, setInputText] = useState(null)
    const [foodName, setFoodName] = useState(null)
    const [isLoading, setIsLoading] = useState(false)


    function handleChange(e) {
        setInputText(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        setFoodName(inputText)
    }


    useEffect(() => {
        setIsLoading(true); // Set loading state to true before fetch request
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
            .then(res => res.json())
            .then(data => {
                sendData(data.meals);
                setIsLoading(false); // Set loading state to false after successful fetch
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setIsLoading(false); // Set loading state to false in case of error
            });
    }, [foodName]);


    return (
        <>
            <header className="px-8 py-4 sm:px-14 flex justify-center md:justify-start items-center border-b border-gray-700 flex-wrap">
                <img className="w-14 md:w-16 bg-white rounded-full"
                    src="/atom_food.png" alt="Atom Food Logo." />

                <div className="ml-6 ">
                    <h1 className="brand text-3xl font-semibold">Atom Foods</h1>
                    <p>Make your Dream food with us</p>
                </div>

                <div className="m-auto sm:ml-auto mt-6 sm:m-0 bg-sky-950 w-full sm:w-fit">
                    <form
                        className="flex h-10 border border-sky-700 rounded-md w-full"
                        onSubmit={handleSubmit}
                    >
                        <input
                            className="bg-transparent outline-none indent-4 w-full"
                            type="text"
                            name="foodName"
                            placeholder="Bean..."
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
            {
                isLoading &&
                <Loader />
            }
        </>
    )
}