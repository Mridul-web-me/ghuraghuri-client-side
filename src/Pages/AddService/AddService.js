
import axios from 'axios';
import React from 'react'
import { useForm } from "react-hook-form";
const Service = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:8080/packages', data)
            .then(res => {
                console.log(res);
                if (res.data.insertId) {
                    alert('added successfully')
                    reset();
                }
            })
    };
    return (
        <div>
            <h2>Add Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="name" />
                <input {...register("location")} placeholder="Location" />
                <input {...register("description")} placeholder="Description" />
                <input {...register("review")} placeholder="Review" />
                <input {...register("duration")} placeholder="Duration" />
                <input type="number" {...register("price")} placeholder="price" />
                <input {...register("imgUrl")} placeholder="Image Url" />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Service
