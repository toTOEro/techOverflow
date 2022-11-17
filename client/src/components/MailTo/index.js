import React from "react";
import { Link } from "react-router-dom";


const MailTo = ({ email, label }) => {
    return (
        <Link
            to="#"
            onClick={(e) => {
                e.preventDefault()
                window.location= `mailto:${email}`;
            }}
        >
            {label}
        </Link>
    )
}

export default MailTo