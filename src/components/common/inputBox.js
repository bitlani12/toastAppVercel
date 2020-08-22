import React from 'react';
import { FlexRow, FlexBetween } from '../../ui/Flex';
const InputBox = (props) => {
  const i = 1;
  return (
    <div className="p10" style={{ width: '100%' }}>
      <input
        type="text"
        className="input"
        value={props.input}
        onChange={(e) => props.onChange(e.target.value)}
        placeholder="Something else? Mention it here."
        style={{
          padding: 12,
          border: 'none',
          outline: 'none',
          borderRadius: 10,
          width: '100%',
        }}
      />

      <style>{`
  .input{
    background: var(--unnamed-color-999999) 0% 0% no-repeat padding-box;
    background: #999999 
    border-radius: 10px;
    background:rgb(153, 153, 153,0.1) 0% 0% no-repeat padding-box;
   
    
  }
  `}</style>
    </div>
  );
};
export default InputBox;
