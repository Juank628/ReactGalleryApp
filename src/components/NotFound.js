import React from 'react'

export default function NotFound() {
    return (
        <div className = "page-not-found">
            <img src={require("../images/error.png")} alt="error" /> 
            <p>Page not found</p>
        </div>
    )
}
