const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Welcome Page</h1>
            <div className="links">
                <a href="/">Home </a>
                <a href="/" style={{
                    color: "white",
                    background: "#f1356d",
                    borderRadius: "8px"
                }}>contact</a>
            </div>
        </nav>
    );
}

export default Navbar;