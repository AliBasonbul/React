import { Link } from "react-router-dom";

const ErrorNotFound = () => {
    return (
        <div className="error-not-found">
            <h2>Sorry</h2>
            <p>The Page Not Found '404'</p>
            <Link to="/">Back to the Homepage</Link>
        </div>
    );
}

export default ErrorNotFound;