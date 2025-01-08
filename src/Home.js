import { useState } from "react";
const Home = () => {
    const [name, setName] = useState('ali')
    const handleClickWelcome = () => {
        setName("Ali Mohammed Salem Basonbul")
    }

    return (
        <div className="Home">
            <h1>Home</h1>
            <h2>{name}</h2>
            <button onClick={handleClickWelcome}>Welcome message</button>
            <br />
        </div>
    );
}

export default Home;