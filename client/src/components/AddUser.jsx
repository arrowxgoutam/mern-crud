import React from 'react'

const AddUser = () => {
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
                <input type="text" placeholder='Nmae' />
              </div>
              <div className="input-box">
                <label htmlFor="">Email</label>
                <input type="email" placeholder='Email' />
              </div>
            </div>
          </form>
          <h1>Add User</h1>
        </div>
      </div>
    </>
  )
}

export default AddUser;