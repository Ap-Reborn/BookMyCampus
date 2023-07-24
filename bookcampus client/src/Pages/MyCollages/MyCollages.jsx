// import React from 'react';

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const MyCollages = () => {
    const { user } = useContext(AuthContext);
    console.log(user?.email);
    const [myAdmissions, setmyAdmissions] = useState([]);
    // const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5173/myAdmission?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setmyAdmissions(data));
            // setRefresh(!refresh)
    // }, [user?.email, refresh])
    }, [])
    console.log(myAdmissions);
    const handleDelete = (id)=> {
        fetch(`http://localhost:5173/myAdmission/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            }
        }).then(res => res.json())
        .then(data => {
            // setRefresh(refresh)
            console.log(data);
            alert("Delete Successfully")
        })
    }
    return (
        <div>
            <div>
                {
                    !myAdmissions && <h3>No admission Found yet</h3>
                }
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    myAdmissions.map((admission) => (
                        <div key={admission._id} className="card w-96 bg-base-100 shadow-xl">
                            <figure><img className="rounded" src={admission.photo} /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{admission.admissionName}</h2>
                                <p>Rating {admission.rating}</p>
                                <p>price: {admission.price}</p>
                                <div className="card-actions flex justify-between">
                                    {/* <Link to={`/singleadmission/${admission._id}`}> */}
                                        {/* </Link> */}
                                       <Link to={`/update/${admission._id}`}> <button  className="btn btn-primary btn-sm">Update</button></Link>
                                    <button onClick={()=> handleDelete(admission._id)} className="btn btn-danger btn-sm">Delete</button>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default MyCollages;