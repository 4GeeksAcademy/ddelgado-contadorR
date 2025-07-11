import { useEffect, useState } from "react";
import SecondsCounter from "./components/SecondsCounter";


const Home = () => {
    const [counter, setCounter] = useState(0)
    useEffect(() => {
        const timer = setInterval(() => {
            setCounter(prevCounter => prevCounter + 1)
        }, 1000)
        return () => clearInterval(timer)
    }, [])
    return (
        <div className="text-center">
            <SecondsCounter seconds={counter} />
        </div>
    );
};

export default Home;