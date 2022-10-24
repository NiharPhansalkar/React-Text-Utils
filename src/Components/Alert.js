import React from 'react'

function Alert(props) {
  const capitalize = function (word) {
    return word.charAt(0).toUpperCase() + word.substring(1);
  }; 
    
  return (
    <div style={{height: '45px'}}>
      {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>
          {capitalize(props.alert.type)}!{" "}
        </strong>
          {props.alert.msg}
      </div>}
    </div>
  );
}

export default Alert
