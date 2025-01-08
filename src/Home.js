import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null)
    const [isloading, setisloading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:8000/blogs")
            .then(res => {
                return res.json()
            })
            .then((data) => {
                setBlogs(data);
                setisloading(false);
            }
            )

    }, [])

    return (
        <div className="home">
            {isloading && <div><h1>Loading...</h1></div>}
            {blogs && <BlogList blogs={blogs} title="All the Bloges" />}
        </div>
    );
}

export default Home;