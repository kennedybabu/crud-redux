import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Home = () => {
  const [id, setId] = useState()
  const navigate = useNavigate()

  const fetchUserPost = () => {}



  return (   
    <div className='w-full py-5 items-center flex flex-col'>
      <p>fetch post</p>
      <div className='w-full flex items-center my-2'>
          <input className='text-sm border mx-auto w-[400px] p-2' type="number" placeholder='Enter user id' value={id} onChange={(e) => setId(e.target.value)} />
      </div>
      <div className='w-full flex items-center justify-center gap-4'>
        <button className='text-sm px-3 py-2 bg-blue-400' onClick={fetchUserPost}>Fetch user post</button>
        <Link className='text-sm px-3 py-2 bg-blue-400' to={'/createpost'}>create user post</Link>
      </div>
    </div>
  )
}

export default Home