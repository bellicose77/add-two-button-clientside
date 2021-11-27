import React from 'react';
import { Button } from 'react-bootstrap';

const DisplayUser = (props) => {
    const { _id, name, email } = props.user;
    const handleDelete = id => {
        const url = `http://localhost:5000/users/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert("deleted successfully")
                }
            })
    }
    return (
        <div>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Email</th>
                    <th>Action</th>

                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="text-danger">{name}</td>
                    <td>{email}</td>
                    <td><Button onClick={() => handleDelete(_id)}>Delete</Button></td>

                </tr>


            </tbody>
        </div>
    );
};

export default DisplayUser;