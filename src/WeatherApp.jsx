import React, { useEffect, useState } from 'react';

// http://api.openweathermap.org/data/2.5/weather?q=delhi&appid=d44b81bcfee4e3e434c0b6c0d69443dc
function WeatherApp() {

    const[name,setName]=useState(null);
    const[search,setSearch]=useState('mumbai');

    const apiKey="d44b81bcfee4e3e434c0b6c0d69443dc";
    
    useEffect(()=>{
        const fetchApi= async ()=>{
            const apiUrl=`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${apiKey}`;
            const response = await fetch(apiUrl);
            const resJson = await response.json();
            // console.log(resJson);
            setName(resJson.main);
        }
        fetchApi();
    },[search]);

    return (
        <>
            <h1 className="heading">Weather App</h1>
            <div className="mainDiv">
                <div className="allContent">
                    <div className="inputDiv">
                        <input type="search" onChange={(e)=>{setSearch(e.target.value)}} />
                    </div>
                    {
                        !name ? (
                            <div className="noDataFound">
                                <h1>No data Found</h1>
                                <p>please enter valid city name</p>
                            </div>
                        ):(
                    <div className="contentDiv">
                        <div className="cityName">
                            <span className="cloudIcon"><i className="fas fa-cloud-sun-rain"></i></span>
                            <h1>{search}</h1>
                        </div>
                        <div className="temp">
                            <h2>{name.temp}°c</h2>
                        </div>
                        <div className="minMax">
                            <p>Min-{name.temp_max}°c | Max-{name.temp_min}°c</p>
                        </div>

                    </div>
                        )
                    }
                </div>
            </div>
        </>
    );
}

export default WeatherApp;