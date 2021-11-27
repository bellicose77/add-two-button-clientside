import axios from 'axios';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AddUser.css';

const AddUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    // const [isdisabled, setIsdisabled] = useState(false)

    const handleName = e => {
        const nameValue = e.target.value;
        setName(nameValue);


    };
    const handleEmail = e => {
        const emailValue = e.target.value;
        setEmail(emailValue);
        // console.log(emailValue);

    };
    const handleSubmit = e => {
        console.log("Add button worked");
        const newUser = { name, email };
        axios.put('http://localhost:5000/users', newUser)
            .then(res => {
                if (res.data.upsertedId) {
                    alert("form successfully submitted");
                    e.target.reset();
                }
            })
        // setIsdisabled(true);
        console.log(newUser);
        e.preventDefault();
    };
    // console.log(namedata);
    // console.log(emaildata);

    return (
        <div>
            <h2 className="text-h2"> Add your name for something</h2>
            <div className="form-handling">
                <form onSubmit={handleSubmit}>
                    <input onChange={handleName} className="width-inp" type="text" placeholder="Your Name" name="name"></input>
                    <br />
                    <input className="width-inp" onChange={handleEmail} type="email" placeholder="Your Email" name="email"></input>
                    <br />
                    <input disabled={!email || !name} className="w-50%" type="submit" value="submit" ></input>
                </form>
            </div>
            <Link to='/showuser'>
                <Button>ShowUser</Button>
            </Link>

        </div>
    );
};

export default AddUser;