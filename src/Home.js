import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'Omar', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Ali', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Omar', id: 3 }
    ])
    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => id !== blog.id);
        setBlogs(newBlogs);
    }

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All the Bloges" handleDelete={handleDelete} />
            <BlogList blogs={blogs.filter((blog) => blog.author === "Omar")} title="All the Bloges from Omar" />

        </div>
    );
}

export default Home;