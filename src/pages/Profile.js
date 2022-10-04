import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { Navigate, useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'

import { useContext } from 'react'
import { UserContext } from '../context/User'
import { FriendsContext } from '../context/Friends'

const Profile = () => {

    const { user } = useContext(UserContext)
    const [hover, setHover ] = useState("1")
    const { friends, setFriends } = useContext(FriendsContext)
    const navigate = useNavigate()

    useEffect(() => {
       if(user === null){
            navigate(`/`)
       }
    },[])
    
    const handleHover1 = () =>{
        setHover("1")
    }
    const handleHover2 = () =>{
        setHover("2")
    }

    const handleHover3 = () =>{
        setHover("3")
    }

    const handleHover4 = () =>{
        setHover("4")
    }

    const handleHover5 = () =>{
        setHover("5")
    }

    const handleHover6 = () =>{
        setHover("6")
    }
    // console.log(hover);
    // console.log(user);


  const fetchData = async () => {
    const random = Math.floor(Math.random() * 20) + 1
    const request = await fetch(`https://randomuser.me/api/?results=${random}`)
    const response = await request.json()
    setFriends(response.results)
}

console.log(friends);

  return (
    <div className='flex items-center flex-col my-20 py-10 w-[762px] m-auto border-2'>
            <img className='rounded-full w-[160px] my-9' src={user.picture.large}/>
            {hover === "1" && <><h5 className='text-gray-400 font-semibold text-xl py-2'>Hi, my name is</h5> <h1 className='font-semibold text-5xl py-5'>{user?.name.first} {user?.name.last}</h1></>}
            {hover === "2" && <><h5 className='text-gray-400 font-semibold text-xl py-2'>My address email is</h5> <h1 className='font-semibold text-5xl py-5'>{user?.email}</h1></>}
            {hover === "3" && <><h5 className='text-gray-400 font-semibold text-xl py-2'>My birthday is</h5> <h1 className='font-semibold text-5xl py-5'>{moment(user?.dob.date).format('DD/MM/YYYY')}</h1></>}
            {hover === "4" && <><h5 className='text-gray-400 font-semibold text-xl py-2'>My address is</h5> <h1 className='font-semibold text-5xl py-5'>{user?.location.street.number} {user?.location.street.name}</h1></>}
            {hover === "5" && <><h5 className='text-gray-400 font-semibold text-xl py-2'>My phone number is</h5> <h1 className='font-semibold text-5xl py-5'>{user?.phone}</h1></>}
            {hover === "6" && <><h5 className='text-gray-400 font-semibold text-xl py-2' >My password is</h5> <h1 className='font-semibold text-5xl py-5'>{user?.login.password}</h1></>}
        <div className='flex gap-10 my-10 '>
            <svg onMouseOver={handleHover1} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-[45px] h-[45px] ${hover === "1" && 'text-teal-500'}`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        
            <svg onMouseOver={handleHover2} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-[45px] h-[45px] ${hover === "2" && 'text-teal-500'}`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>

            <svg onMouseOver={handleHover3} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-[45px] h-[45px] ${hover === "3" && 'text-teal-500'}`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
            </svg>

            <svg onMouseOver={handleHover4} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-[45px] h-[45px] ${hover === "4" && 'text-teal-500'}`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
            </svg>

            <svg onMouseOver={handleHover5} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-[45px] h-[45px] ${hover === "5" && 'text-teal-500'}`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>

            <svg onMouseOver={handleHover6} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-[45px] h-[45px] ${hover === "6" && 'text-teal-500'}`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
        </div>
        {friends === null ?
        (<>
            <section className="flex justify-center py-1.5">
                <button onClick={fetchData} className="text-white bg-teal-500 rounded py-2 px-10 hover:bg-teal-700 my-4">Add friends</button>
            </section>  
        </>
        ) : (
            <>
            <section className="flex flex-wrap gap-20 justify-center py-5 px-3">
            {friends.map(friend => {
                return(
                    <div className='flex flex-col items-center border-2 p-5 border-gray-300 rounded-lg'>
                        <img className='rounded-full w-[150px]' src={friend?.picture.large}/>
                        <h5 className='text-center py-3'>{friend?.name.first} {friend?.name.last}</h5>
                    </div>
                    )
                })}
            </section>
            <Link to={`/friends`}>
                <section className="flex justify-center py-1.5">
                    <button className="text-white bg-teal-500 rounded py-2 px-10 hover:bg-teal-700 my-4">See my friends</button>
                </section> 
            </Link> 
            </>
        )
        }
    </div>
  )
}

export default Profile