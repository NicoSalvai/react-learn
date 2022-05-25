import React from 'react'
import './form.css'

export default function Form() {
    const [form, setForm] = React.useState({
        username:"",
        password:""
    })

    function handleChange(event){
        setForm(prev => {
            prev[event.target.id] = event.target.value;
            return prev
        });
    }

    return ( 
        <form>
            <label for="username">Username: </label>
            <input
                type="text"
                id="username"
                placeholder="Username"
                onChange={handleChange}
            />
            <label for="password">Password: </label>
            <input
                type="password"
                id="password"
                placeholder="******"
                onChange={handleChange}
            />
        </form>
    )

}