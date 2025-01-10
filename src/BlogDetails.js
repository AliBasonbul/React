import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";
const BlogDetails = () => {
    const { id } = useParams();
    const { Data, isloading, haveError } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleClickDelete = () => {
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })

    }
    return (
        <div className="blog-details">
            {haveError && <div><h1>{haveError}</h1></div>}
            {isloading && <div><h1>Loading...</h1></div>}
            {Data && <article>
                <h2>{Data.title}</h2>
                <p>Written by {Data.author}</p>
                <div>{Data.body}</div>
                <button onClick={handleClickDelete}>Delete</button>
            </article>}
        </div>
    );
}

export default BlogDetails;