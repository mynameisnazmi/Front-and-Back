import { Link } from "react-router-dom";
import FormRegister from "./FormRegister";

function Register() {

    const dataregister = (enterdata) => {
        console.log(enterdata)
    }

    const arrobjs = [
        {
            a: 1,
            b: "Joni",
            c: "Motor"
        },
        {
            a: 2,
            b: "Roni",
            c: "Mobil"
        },
        {
            a: 3,
            b: "Geni",
            c: "Kereta"
        }
    ]

    return (
        <>
            <h2>Register!!</h2>
            <ul>
                <li>
                    <Link to="/Login">Login</Link>
                </li>
            </ul>
            {/* receive it on ondataregister and call function */}
            <FormRegister dataarr={arrobjs} ondataregister={dataregister} />

        </>
    );
}

export default Register;
