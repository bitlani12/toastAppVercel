import React from 'react';
import { FlexBetween, FlexRow } from 'ui/Flex';
const RadioForAddons = (props) => {
  return (
    <div>
      <div class="radio-item" onClick={(e) => props.onchange(e, props.size)}>
        <input type="radio" checked={props.checked ? 'checked' : ''} />

        <label></label>
        <style>{`
 .radio-item {
  display: inline-block;
  position: relative;
  padding: 0 6px;
  margin: -10px 0 0;
}

.radio-item input[type='radio'] {
  display: none;
}

.radio-item label {
  color: #666;
  font-weight: normal;
}

.radio-item label:before {
  content: " ";
  display: inline-block;
  position: relative;
  top: 5px;
  margin: 0 5px 0 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #3CBCB4;
  background-color: transparent;
}

.radio-item input[type=radio]:checked + label:after {
  border-radius: 50%;
  width: 12px;
  height: 12px;
  position: absolute;
  top: 11px;
  left: 11.5px;
  content: " ";
  display: block;
  background: #3CBCB4;
}
  
  `}</style>
      </div>
    </div>
  );
};
export default RadioForAddons;
