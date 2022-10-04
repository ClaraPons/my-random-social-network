import React from 'react'

import { useContext } from 'react'
import { FriendsContext } from '../context/Friends'


const Friends = () => {

    const { friends, setFriends } = useContext(FriendsContext)

    console.log(friends);

  return (
    <>
    <h1 className='text-center my-10 text-teal-500 font-semibold text-6xl'>Friends</h1>
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
    </>
  )
}

export default Friends