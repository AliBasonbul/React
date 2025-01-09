import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const { Data, isloading, haveError } = useFetch('http://localhost:8000/blogs');
    return (
        <div className="home">
            {haveError && <div><h1>{haveError}</h1></div>}
            {isloading && <div><h1>Loading...</h1></div>}
            {Data && <BlogList blogs={Data} title="All the Bloges" />}
        </div>
    );
}

export default Home;