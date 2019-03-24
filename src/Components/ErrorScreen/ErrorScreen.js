import React from "react";
import "./ErrorScreen.css";
import image from "./dead-error.svg";
export default function ErrorScreen(props) {
    return (
        <section className="error-screen">
            <img className="error-screen__img" src={image} alt={props.message} />
            <p>
                {props.message} 
            </p>
        </section>
    );
}
