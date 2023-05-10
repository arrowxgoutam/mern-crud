import {useState} from 'react'

import { addUser } from '../service/api';

const userData = {
  name: '',
  username: '',
  email: '',
  phone: ''
}

const AddUser = () => {

  const[user, setUser] = useState(userData);

  const onValueChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
    console.log(user);
  }

  const addUserData = async () => {
    await addUser(user);
  }

  return (
    <>
      <div className="add-user">
        <div className="container">
          <div className="title">
            <h1>Add User</h1>
            <div className="underline"></div>
          </div>

          <form action="">
            <div className="input-group">
              <div className="input-box">
                <label htmlFor="">Name</label>
                <input onChange={(e)=> onValueChange(e)} name="name" type="text" placeholder='Nmae' />
              </div>
              <div className="input-box">
                <label htmlFor="">username</label>
                <input onChange={(e)=> onValueChange(e)} name="username"  type="text" placeholder='username' />
              </div>
              <div className="input-box">
                <label htmlFor="">Email</label>
                <input onChange={(e)=> onValueChange(e)} name="email" type="email" placeholder='Email' />
              </div>
              <div className="input-box">
                <label htmlFor="">Phone</label>
                <input onChange={(e)=> onValueChange(e)} name="phone" type="text" placeholder='Phone' />
              </div>
            </div>
            <div className="submit-btn">
              <button onClick={()=> addUserData()}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddUser;