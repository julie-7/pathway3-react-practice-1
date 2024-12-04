import { useState } from "react";

const Home = () => {
    const [name, setname] = useState(`hi julie`)

    const handleclick = () => {
        setname(`goodbye, Julie`);

    }

    return (
        <div className="Home">
            <h2>Homepage</h2>
            <p>{name} have a great day</p>
            <button onClick={handleclick}>click me</button>
        </div>
    );
}

export default Home;