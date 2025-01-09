import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Welcome Page</h1>
            <div className="links">
                <Link to="/">Home </Link>
                <Link to="/create" style={{
                    color: "white",
                    background: "#f1356d",
                    borderRadius: "8px"
                }}>Create Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;