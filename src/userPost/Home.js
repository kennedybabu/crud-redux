import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deletePost, getPost, setEdit, updatePost } from '../redux/features/postSlice'
import LoadingCard from './LoadingCard'

const Home = () => {
  const [id, setId] = useState()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [bodyText, setBodyText] = useState('')
  const {loading, post, edit, body} =useSelector((state) => ({...state.app}))
  console.log(post)

  const fetchUserPost = () => {
    if(!id){
      window.alert('Please Enter an id')
    } else {
      dispatch(getPost({id}))
      setId('')
    }
  }

  useEffect(() => {
    if(body){
      setBodyText(body)
    }
  }, [])

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

      {loading ? (<LoadingCard /> ) : (
        <>
          <div className='w-full flex flex-col items-center'>
              <p>{post[0]?.title}</p>
              {edit ? 
              <>
                <input className='border p-2' type="textarea" value={bodyText} onChange={(e) => setBodyText(e.target.value)} />
                <div className='w-full my-2 flex justify-center items-center gap-4'>
                  <button className='text-sm px-3 py-2 bg-green-400' 
                  onClick={() => {
                  dispatch(
                    updatePost({
                      id: post[0].id,
                      title: post[0].title,
                      body: bodyText
                    })
                    )
                    dispatch(setEdit({ edit: false, body:''}))}}
                  >save</button>
                  <button className='text-sm px-3 py-2 bg-red-400' onClick={() => dispatch(setEdit({edit: false, body:''}))}>cancel</button>
                </div>
              </> : 
              (<p>{post[0]?.body}</p>)}              
              {/* <small>{post[0]?.id}</small> */}
            { post[0] && !edit ? <div className='w-full flex items-center justify-center my-4 gap-4'>
                <button className='text-sm px-3 py-2 bg-red-400' onClick={() => dispatch(deletePost({id: post[0].id}))}>Delete</button>
                <button className='text-sm px-3 py-2 bg-yellow-200' onClick={() => dispatch(setEdit({edit:true, body:post[0].body}))}>Edit</button>
              </div> : null }
          </div>         
        </>
      )}
    </div>
  )
}

export default Home