import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const CreatePost = () => {
  const dispatch = useDispatch()
  const [values, setValues] = useState({
      title: '',
      body: ''
  })
  const [showPost, setShowPost] = useState(false)
  const {title, body} = values

  const handleSubmit = () => {

  }

  return (
    <div className='w-full'>
      <form className='w-full'>
        <h1>create post</h1>
        <input className='border w-[300px] p-2 mx-auto' placeholder='enter title' type='text' value={title} onChange={(e) => setValues({ ...values, title:e.target.value })}/>
        <br />
        <input className='border p-2 mx-auto' placeholder='enter body' type='textarea' value={body} onChange={(e) => setValues({ ...values, body:e.target.value })}/>
        <br />
        <div className='w-full my-4 flex items-center justify-center gap-4'>
          <Link to='/'>go back</Link>
          <button onClick={handleSubmit} className='text-sm px-3 py-2 bg-blue-300'>submit</button>
        </div>
      </form>
    </div>
  )
}

export default CreatePost