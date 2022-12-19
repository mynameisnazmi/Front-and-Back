import { Link } from "react-router-dom";

function Dashbord() {
    function fecthdataHandler() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => {
            return response.json()
        }).then(data => {
            console.log(data[0].name)
        })
    }

    return (
        <>
            <h2>Dashbord!!</h2>
            <ul>
                <li>
                    <Link to="/Login">Login</Link>
                </li>
            </ul>
            <div className="bg-amber-400 grid place-content-center h-screen">
                <button onClick={fecthdataHandler}>fetch data</button>

            </div>
        </>
    );
}

export default Dashbord;
