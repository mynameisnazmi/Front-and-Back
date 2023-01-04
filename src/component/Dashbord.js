import { useState } from "react";
import { Link } from "react-router-dom";

function Dashbord() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [isLoading, setisLoading] = useState(false);

  function fecthdataHandler() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setName(data[0].name);
      });
  }

  async function fecthdataHandlerasync() {
    setisLoading(true); //true status loading

    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json(); //get data as json
    const transformedData = data.map((usedata) => {
      // convert data from object to array and select data
      return {
        id: usedata.id,
        name: usedata.name,
        email: usedata.email,
        addressstrt: usedata.address.street,
      };
    });
    setData(transformedData);
    //console.log(transformedData);

    setisLoading(false); //false status loading
  }

  return (
    <>
      <h2>Dashbord!!</h2>
      <ul>
        <li>
          <Link to="/Login">Login</Link>
        </li>
      </ul>
      <div>{name}</div>

      {!isLoading &&
        data.length > 0 &&
        data.map((data) => (
          <div className="flex flex-row" key={data.id}>
            <h2>{data.name}</h2>
            <span>{data.email}</span>
            <span>{data.addressstrt}</span>
          </div>
        ))}
      {!isLoading && data.length === 0 && <div>No Data</div>}
      {isLoading && <div>loading</div>}

      <div className="bg-amber-400 grid place-content-center h-screen">
        <button onClick={fecthdataHandler}>fetch data sync</button>
        <button onClick={fecthdataHandlerasync}>fetch data async</button>
      </div>
    </>
  );
}

export default Dashbord;
