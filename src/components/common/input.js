import React from 'react';
const Input = (props) => {
  function AvoidSpace(event) {
    console.log('this is 22');
    if (window !== undefined) {
      console.log('this is ');
      var k = event ? event.which : window.event.keyCode;
      if (k == 32) return false;
    }
  }

  return (
    <input
      style={{
        background: '#99999926',
        borderRadius: 10,
        width: props.width ? props.width : '100%',
        border: 'solid #99999926 1px',
        padding: 8,
       ...props.style 
      }}
      placeholder={props.placeholder}
      type={props.type}
      value={props.value}
      onChange={(e) => props.onchange(e.target.value)}
      onkeypress={AvoidSpace}
    />
  );
};
export default Input;
Input.defaultProps = {
  type: 'text',
};
