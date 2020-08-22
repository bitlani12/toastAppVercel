import React from 'react';
const Switch = (props) => {
  return (
    <div style={{ fontSize: 12 }}>
      <input
        class="switch right"
        type="checkbox"
        checked={props.checked}
        disabled={props.disable}
      />
      <style>
        {`
          input.switch {
            font-size: 1.25em;
            height: 0.7em;
            display: inline-flex;
            align-items: center;
            width: 1.65em;
            position: relative;
            margin: 0.3em 0;

            cursor: pointer;
          }

          .switch::before {
            content: '';
            display: inline-flex;
            position: absolute;

            height: 0.8em;
            width: 1.4em;
            padding: 0 0.2em;
            background: #bdb9a6;
            border-radius: 1em;

            box-shadow: inset 0 0.1em 0.3em rgba(0, 0, 0, 0.3);
            -webkit-transition: all 300ms;
            -moz-transition: all 300ms;
            transition: all 300ms;
          }

          .switch::after {
            content: '';
            display: inline-flex;
            position: absolute;

            height: 1em;
            width: 1em;
            border-radius: 1em;
            background: #3CBCB4;
            box-shadow: 0 0.1em 0.3em rgba(0, 0, 0, 0.3);
            -webkit-transition: all 300ms;
            -moz-transition: all 300ms;
            transition: all 300ms;
          }

          input.switch:checked::after {
            -webkit-transform: translateX(80%);
            -moz-transform: translateX(80%);
            transform: translateX(80%);
          }

          input.switch:checked::before {
            background: #3CBCB4;
          }

          input.switch:disabled::before,
          input.switch:disabled::after {
            background: #ccc;
            cursor: not-allowed;
          }
          /* End Swich*/
        `}
      </style>
    </div>
  );
};
export default Switch;
