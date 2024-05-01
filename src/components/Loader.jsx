import { Oval } from "react-loader-spinner"

export default function Loader() {
    return (
        <div className="m-auto h-screen flex items-center justify-center">
            <Oval
                visible={true}
                height="80"
                width="80"
                color="#1C8BFF"
                secondaryColor="#43C3FF"
                ariaLabel="oval-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    )
}