import React from 'react';
const Veg = (props) => {
  return (
    <div
      style={{
        border: `solid ${props.color} 1px`,
        padding: '1.5px',
        flex: 'none',
        height: 'fit-content',
      }}
    >
      <div
        style={{
          width: 8,
          height: 8,
          background: ` ${props.color} 0% 0% no-repeat padding-box`,
          borderRadius: 100,
        }}
      ></div>
    </div>
  );
};
export default Veg;
Veg.defaultProps = {
  color: '#007436',
};
