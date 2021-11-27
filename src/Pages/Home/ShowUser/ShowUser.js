import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import DisplayUser from '../DisplayUser/DisplayUser';
import './ShowUser.css'

const ShowUser = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))

    }, [users]);
    // const handleDelete = id => {
    //     const url = `http://localhost:5000/users/${id}`;
    //     fetch(url, {
    //         method: 'DELETE'
    //     })
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }
    console.log(users)

    return (
        <>
            <h2>All user are in here:{users.length}</h2>
            <div className="table-align">
                <Table striped bordered hover size="sm">
                    {
                        users?.map(user => <DisplayUser key={user._id} user={user}>
                        </DisplayUser>)
                    }
                </Table>
            </div>
        </>
    );
};

export default ShowUser;