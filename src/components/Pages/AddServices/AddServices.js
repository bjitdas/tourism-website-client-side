import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddServices = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data)
        axios.post('https://pacific-springs-80495.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Successfully added tourism service');
                    reset()
                };
            });

    };



    return (
        <div >
            <h1 className="mt-4 text-light text-decoration-underline">Please, add a service</h1>
            <form className="d-flex flex-column w-50 mx-auto m-5" onSubmit={handleSubmit(onSubmit)}>
                <input className="mt-3 p-2 border-1 rounded" {...register("Name", { required: true, maxLength: 20 })} placeholder="name" />
                <textarea className="mt-3 p-2 border-1 rounded" {...register("Description")} placeholder="description" />
                <input className="mt-3 p-2 border-1 rounded" {...register("img")} placeholder="image-url" />
                <input className="mt-3 bg-primary rounded text-light fs-4" type="submit" />
            </form>
        </div>
    );
};

export default AddServices;