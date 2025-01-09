import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
const BlogDetails = () => {
    const { id } = useParams()
    const { Data, isloading, haveError } = useFetch('http://localhost:8000/blogs/' + id)
    return (
        <div className="blog-details">
            {haveError && <div><h1>{haveError}</h1></div>}
            {isloading && <div><h1>Loading...</h1></div>}
            {Data && <article>
                <h2>{Data.title}</h2>
                <p>Written by {Data.author}</p>
                <div>{Data.body}</div>
            </article>}
        </div>
    );
}

export default BlogDetails;