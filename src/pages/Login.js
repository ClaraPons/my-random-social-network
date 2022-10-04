import React from 'react'
import { useFormik } from 'formik'
import Input from '../component/Input'
import * as Yup from 'yup'

import { useContext } from 'react'
import { UserContext } from '../context/User'

import { Navigate, useNavigate } from "react-router-dom"

const Login = () => {

    const navigate = useNavigate()
    const { user, setUser } = useContext(UserContext)

    const formik = useFormik({
        initialValues: {
            email: "claragapons@gmail.com",
            password: "Hello123!",
        }, 
        validationSchema: Yup.object().shape({
            email: Yup.string()
                .required("Email est requis")
                .email("Email est invalide"),
            password: Yup.string()
                .required("Password est requis")
                .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-])/, "Password doit avoir au moins une min, une maj, un nombre et un charactère spécial"),
        }),
        onSubmit: async (values) => {
                const request = await fetch(`https://randomuser.me/api`);
                const response = await request.json();
                console.log(response.results);
                setUser(response.results[0])

                navigate(`/profile`)
            } 
        })
        
        console.log(user);

  return (
    <>
        <h1 className='text-center my-10 text-teal-500 font-semibold text-6xl'>Login</h1>
        <form onSubmit={formik.handleSubmit} className='my-10 flex-col flex'>
            <Input type="text" label="Email" name="email" placeholder="Enter your email" value={formik.values.email} handleChange={formik.handleChange} error={formik.errors.email}/>
            <Input type="password" label="Password" name="password" placeholder="Enter your password" value={formik.values.password} handleChange={formik.handleChange} error={formik.errors.password}/>
            <section className="my-5 flex justify-center py-1.5">
            <button className="text-white bg-teal-500 rounded py-2 px-10 hover:bg-teal-700 my-4 disabled:opacity-60 disabled:cursor-not-allowed">Log in</button>
            </section>        
        </form>
    </>
  )
}

export default Login