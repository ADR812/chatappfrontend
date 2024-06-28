import React from 'react'

const AnotherMess = (props) => {
  return (
    <div className='another-message'>
        <br />
        <p>clientID : {props.client_id}</p>
        <p>{props.message}</p>
        <br />
    </div>
  )
}

export default AnotherMess