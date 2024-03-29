import React from 'react';
import { FlexRow, FlexBetween } from '../../ui/Flex';
const CheckBox = (props) => {
  return (
    <div>
      <div>
        <label class="container " style={{ fontWeight: 500, fontSize: 14 }}>
          {props.label}
          <input type="checkbox" checked={props.checked ? 'checked' : ''} />
          <span
            class="checkmark"
            onClick={() => props.handlechecked(props.index)}
          ></span>
        </label>
      </div>
      <style>
        {`
          .container {
            display: block;
            position: relative;
            padding-left: 35px;
            margin-bottom: 12px;
            cursor: pointer;
            font-size: 16px;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
          
          /* Hide the browser's default checkbox */
          .container input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
          }
          
          /* Create a custom checkbox */
          .checkmark {
            position: absolute;
            top: 0;
            left: 0;
            height: 20px;
            width: 20px;
            background-color: #eee;
          }
          
          /* On mouse-over, add a grey background color */
          .container:hover input ~ .checkmark {
            background-color: #ccc;
          }
          
          /* When the checkbox is checked, add a blue background */
          .container input:checked ~ .checkmark {
            background-color: #3CBCB4;
          }
          
          /* Create the checkmark/indicator (hidden when not checked) */
          .checkmark:after {
            content: "";
            position: absolute;
            display: none;
          }
          
          /* Show the checkmark when checked */
          .container input:checked ~ .checkmark:after {
            display: block;
          }
          
          /* Style the checkmark/indicator */
          .container .checkmark:after {
            left: 6px;
            top: 1px;
            width: 5px;
            height: 11px;
            border: solid white;
            border-width: 0 2px 2px 0;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
          }
          `}
      </style>
    </div>
  );
};
export default CheckBox;
