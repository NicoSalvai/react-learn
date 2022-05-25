import React from 'react'
import './form.css'

export default function Form() {
    const [form, setForm] = React.useState({
        username: {
            value:"",
            valid:true,
            validate: ((input, prev) => input.length != 0)
        },
        password:{
            value:"",
            valid:true,
            validate: ((input, prev) => input.length != 0)
        },
        password_repeat:{
            value:"",
            valid:true,
            validate: ((input, prev) => input === prev.password.value)
        },
        remember:{
            value:false,
            valid:true,
            validate: ((input, prev) => true)
        },
        employment:{
            value:"",
            valid:true,
            validate: ((input, prev) => input.length != 0)
        },
        city:{
            value:"",
            valid:true,
            validate: ((input, prev) => input.length != 0)
        }
    })

    function handleChange(event){
        const {name, value, type, checked} = event.target; // Object destructuring to extract name value and tpye
        const actualValue = type === "checkbox"? checked : value;

        setForm(prev => {
            return {
                ...prev,
                [name]: {
                    ...prev[name],
                    value: actualValue,
                    valid: prev[name].validate(actualValue, prev)
                }
            }
        });
    }

    function handleSubmit(event){
        event.preventDefault();

        setForm(prev => {
            Object.keys(prev).forEach( key => {
                prev[key].valid = prev[key].validate(prev[key].value, prev)
            })
            return {
                ...prev,
            };
        })

        if(Object.keys(form).every(key => form[key].valid)){
            console.log("submit")
        }
    }

    return ( 
        <form onSubmit={handleSubmit}>

            <div className='inputGroup'>
                <label htmlFor="username" className={form.username.valid?"valid":"invalid"}>Username: </label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    value={form.username.value}
                    placeholder="Username"
                    onChange={handleChange}
                />
            </div>

            <div className='inputGroup'>
                <label htmlFor="password" className={form.password.valid?"valid":"invalid"}>Password: </label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={form.password.value}
                    placeholder="******"
                    onChange={handleChange}
                />           
            </div>

            <div className='inputGroup'>
                <label htmlFor="password_repeat" className={form.password_repeat.valid?"valid":"invalid"}>Repeat Password: </label>
                <input
                    type="password"
                    name="password_repeat"
                    id="password_repeat"
                    value={form.password_repeat.value}
                    placeholder="******"
                    onChange={handleChange}
                />
            </div>
            
            <div className='inputGroup'>
                <label htmlFor="remember">Remember user?</label>
                <input
                    type="checkbox"
                    name="remember"
                    id="remember"
                    checked={form.remember.value}
                    onChange={handleChange}
                />
            </div>

            <fieldset>
                <legend className={form.employment.valid?"valid":"invalid"}>Current employment status</legend>

                <div className='inputGroup'>
                    <input
                        type="radio"
                        name="employment"
                        id="unemployed"
                        value="unemployed"
                        onChange={handleChange}
                        checked={form.employment.value === "unemployed"}
                    />
                    <label htmlFor="unemployed">Unemployed</label>
                </div>

                <div className='inputGroup'>
                    <input
                        type="radio"
                        name="employment"
                        id="part-time"
                        value="part-time"
                        onChange={handleChange}
                        checked={form.employment.value === "part-time"}
                    />
                    <label htmlFor="part-time">Part time</label>
                </div>

                <div className='inputGroup'>
                    <input
                        type="radio"
                        name="employment"
                        id="full-time"
                        value="full-time"
                        onChange={handleChange}
                        checked={form.employment.value === "full-time"}
                    />
                    <label htmlFor="full-time">Full time</label>
                </div>
            </fieldset>

            <div className='inputGroup'>
                <label htmlFor="city" className={form.city.valid?"valid":"invalid"}>City: </label>
                <select
                    name="city"
                    id="city"
                    value={form.city.value}
                    onChange={handleChange}
                >
                    <option value="">-- Choose --</option>
                    <option value="cba">Cordoba</option>
                    <option value="bs.as">Bs As</option>
                    <option value="chaco">Chacho</option>
                </select>
            </div>

            <input 
                type="submit"
                name="submit"
                value="Login"
                className="login"
            />
        </form>
    )

}