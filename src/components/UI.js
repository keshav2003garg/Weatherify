import React from 'react'
import "./UI.css"

export default function UI(props) {
    return (
        <>
            <div className="container">
                <div className="input"><input type="text" placeholder="Enter location" onChange={props.onChange} value={props.input} /><i onClick={props.getApi} className="fas fa-search fa-lg" style={{cursor: "pointer"}}></i></div>
                <div className="weather-box">
                    <div className="weather-icon"><i className="fas fa-sun fa-5x"></i></div>
                    <div className="location"><i className="fas fa-street-view fa-2x street-view-icon"></i><h1>{props.weather.location} {props.weather.country}</h1></div>
                    <div className="wea-info"><p>Wed | Oct {new Date().getDate()} | {new Date().getHours()}:{new Date().getMinutes()} PM</p>
                    <h2>{props.weather.temp} &#8451;</h2>
                    <small>Min {props.weather.temp_min} &#8451; | Max {props.weather.temp_max} &#8451;</small></div>
                </div>
            </div>
        </>
    )
}
