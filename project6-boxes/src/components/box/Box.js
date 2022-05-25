import React from "react"
import './box.css'

export default function Box(props) {
    return (
        <div 
            className={props.on?"box":"box on"}
            onClick={props.toggle}
        >
        </div>
    )
}