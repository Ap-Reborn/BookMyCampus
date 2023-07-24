
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import React from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

import { useContext } from "react";

const Admission = () => {
    const notify = () => toast("Added Successfully!");
    const { user } = useContext(AuthContext)
    // const handleAdmission=(event) =>{


    // }
    const handleAdmission = (e) => {
        e.preventDefault();
        console.log("Hii");
        const toyName = e.target.toyName.value;
        const sellerName = e.target.sellerName.value;
        const photo = e.target.photo.value;
        const rating = e.target.rating.value;
        const quantity = e.target.quantity.value;
        const email = e.target.email.value;
        const price = e.target.price.value;
        const desc = e.target.desc.value;
        const category = e.target.category.value;

        const toy = {
            toyName, sellerName, photo, rating, quantity, email, price, desc, category
        }
        console.log(toy
        );
        fetch("http://localhost:5173/addToy", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(toy),
        }).then(res => res.json()).then(data => console.log(data))
        e.target.reset();
    }
    return (
        <div>
            <form onSubmit={handleAdmission}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">toy name</span>
                        </label>
                        {/* <input type="text" name="name" defaultValue={user?.displayName} placeholder="name" className="input input-bordered" /> */}
                        <input type="text" name="toyName" placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">seller name</span>
                        </label>
                        {/* <input type="text" name="name" defaultValue={user?.displayName} placeholder="name" className="input input-bordered" /> */}
                        <input type="text" defaultValue={user?.displayName} name="sellerName" placeholder="sellerName" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        {/* <input type="text" name="name" defaultValue={user?.displayName} placeholder="name" className="input input-bordered" /> */}
                        <input type="text" name="photo" placeholder="photo URL" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            Rating
                        </label>
                        <input
                            name="rating"
                            id="rating"
                            type="number"
                            placeholder="Enter Rating Of One Number Under 5"
                            className="w-full rounded-md input input-bordered text-black"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available quantity</span>
                        </label>
                        <input type="text" name="quantity" placeholder="Available quantity" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Select category</span>
                        </label>
                        <select name='category' className="select select-bordered w-full ">
                            <option selected>Elepent </option>
                            <option>Ziraf</option>
                            <option>Pig</option>
                            <option>dog</option>
                            <option>teddy</option>
                            <option>rabbit</option>
                            <option>danesour</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" readOnly defaultValue={user?.email} name="email" placeholder="Enter Email" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">price</span>
                        </label>
                        <input type="number" name="price" placeholder="Enter price" className="input input-bordered" />

                    </div>
                    <div className="col-span-full">
                        <label className="label">
                            Description
                        </label>

                        <textarea
                            name="desc"
                            className="textarea textarea-bordered w-full h-36"
                            placeholder="toys Description"
                        ></textarea>
                    </div>

                </div>
                <div>
                    <button onClick={notify}  type="submit" className='btn btn-block'>Add Toy</button>
                </div>
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Admission;