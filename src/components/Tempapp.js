import React, { useEffect, useState } from "react";
import "./css/style.css";
const Tempapp = () => {

    const[city, setCity] = useState(null);
    const[search,setSearch]= useState("Mumbai");

    useEffect( () => {
        const fetchApi = async () =>{
        //    const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=9bde5a22ec719110710f630aa52aa035`
           const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=85cc598ccdce6f3d59f9c30b595136f2
           `
           const response = await fetch(url) 
           
            const resJson = await response.json();
            // console.log(resJson);

            setCity(resJson.main);
        } ;
        fetchApi();

    },[search] )
  return (
    <>
      <div className="box">
        <div className="inputData">
            <input 
            type="search"
            className="inputField"            
            // default value=""
            onChange = { (event) =>{ setSearch(event.target.value) }}
            />
        </div>

        {! city ? (
            <p> NO Data Found</p>
        ) : (
            <div>
            <div className="info">
            <h2 className="location">
            <i className="fas fa-duotone fa-street-view"></i>{search}
            </h2>
            <h1 className="temp">
            {city.temp}°Cel
            </h1>
            <h3 className="tempmin_max">
                Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel 
            </h3>
      </div>
      <div className="wave -one"></div>
      <div className="wave -two"></div>
      <div className="wave -three"></div>
            </div>
        )

        }
      
      
      </div>
    </>
  );
};


export default Tempapp;