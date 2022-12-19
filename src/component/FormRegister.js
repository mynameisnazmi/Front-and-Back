import { useState } from 'react'

function FormRegister(props) {

    const [NIK, setNIK] = useState(0)
    const [password, setPassword] = useState('')
    const [Nameuser, setName] = useState('')


    const handleSubmit = (e) => { // arrow function
        e.preventDefault() //prevent default behavior

        const register = { //create object
            nik: NIK,
            name: Nameuser,
            password: password
        }

        props.ondataregister(register) //send data to caller

    }

    return (
        <>
            <div className="bg-emerald-500 grid place-content-center h-screen">
                <form className='flex flex-col' onSubmit={handleSubmit}>
                    <label>NIK</label>
                    <input type='number' value={NIK} onChange={(e) => setNIK(e.target.value)} />
                    <label>Name</label>
                    <input type='text' value={Nameuser} onChange={(e) => setName(e.target.value)} />
                    <label>Password</label>
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button>Sign In</button>
                </form>
                {props.dataarr.map((data) => (
                    <div className='flex flex-row' key={data.a}>
                        <h2>{data.b}</h2>
                        <span>{data.c}</span>
                    </div>
                ))}
            </div>
        </>
    );
}

export default FormRegister;
