import React, { useState } from 'react';


const RegisterForm = props => {
    const [formState, setFormState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const onChangeHandler = event => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });
    }
    const onSubmitHandler = event => {
        event.preventDefault();
        console.log(formState);
    }
    // const validate = (email) => {
    //     const expression = ^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$
    // }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <div class="box">
                    <label>First Name</label>
                    <input type="text" name="firstName" onChange={onChangeHandler} />
                    {formState.firstName.length > 0 && formState.firstName.length < 5 && (<span>Name not long enough</span>)}
                    <br />
                </div>
                <div class="box">
                    <label>Last Name</label>
                    <input type="text" name="lastName" onChange={onChangeHandler} />
                    {formState.lastName.length > 0 && formState.lastName.length < 5 && (<span>Not long enough</span>)}
                    <br />
                </div>
                <div class="box">
                    <label>Email</label>
                    <input type="email" name="email" onChange={onChangeHandler} />
                    {formState.email.length > 2 && (<span>email must be a least 2 characters</span>)}
                    <br />
                </div>
                <div class="box">
                    <label>Password</label>
                    <input type="password" name="password" onChange={onChangeHandler} />
                    {formState.password.length > 0 && formState.password.length < 8 && (<span>password not long enough</span>)}
                    <br />
                </div>
                <div class="box">
                    <label>Confirm Password</label>
                    <input type="password" name="confirmPassword" onChange={onChangeHandler} />
                    {formState.password !== formState.confirmPassword && (<span>Password must match</span>)}
                    <br />
                </div>
                <input class="submit_button" type="submit" />
            </form>
            <div class="text">
                <p>First Name:{formState.firstName}</p>
                <p>Last Name:{formState.lastName}</p>
                <p>Email: {formState.Email}</p>
                <p>Password: {formState.password}</p>
            </div>
        </div>
    );
}
export default RegisterForm;