import React from 'react'

const MyMessage = (props) => {
  return (
    <div className='my-message'>
        <br />
        <p>clientID : {props.client_id}</p>
        <p>{props.message}</p>
        <br />
    </div>
  )
}

export default MyMessage