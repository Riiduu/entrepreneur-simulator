import {Route} from "react-router-dom";

const Home = () => {
    const logout = () => {
        localStorage.clear();
        window.location.reload();
    }

    return (
        <div>
            <h1 className="text-2xl">Home Page</h1>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Home