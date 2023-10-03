import React from 'react'

const Alerts = (props) => {
  const Capitalize=(word)=>
  {
    let str= word.toLowerCase();
    return str.charAt(0).toUpperCase()+str.slice(1)
  }
  return (
    <div style={{height:"50px"}}>
  {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{Capitalize(props.alert.type)}</strong> {props.alert.msg}
  </div>}
  </div>
  )
}

export default Alerts
