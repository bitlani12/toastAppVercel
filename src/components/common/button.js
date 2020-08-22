import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
// import Add from './../../../public/static/add.svg'
const Buttonbottonfix = styled.div`
  background: transparent linear-gradient(174deg, #36c0db 0%, #007991 100%) 0%
    0% no-repeat padding-box;
  opacity: 1;
  padding: 15px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width:100%;
  color: white;
  font-size: 15px;
  text-align: center;
  user-select: none;
`;
export const ButtonBottomFix = (props) => {
  return <Buttonbottonfix>{props.title}</Buttonbottonfix>;
};
export const IncreaseItem = () => {
  return (
    <div className="ml10 ">
      {' '}
      <div style={{background:"#3cbcb4",color:"white", fontWeight:"bolder", fontSize:25, display:"flex", height:21, padding:"4px 3px 4px 3px", borderRadius:5, alignItems:"center"}}>+</div> 
      {/* <img src="/static/add.svg" /> */}
    </div>
  );
};

export const DecreaseItem = () => {
  return (
    <div className="ml10 mr10">
     <div style={{background:"#ef4b4b",color:"white", fontWeight:"bolder", fontSize:33, display:"flex", height:21, padding:"0px 4px 3px 4px", borderRadius:5, alignItems:"center"}}>-</div> 
      
      {/* <img src="/static/less/add.svg" /> */}
    </div>
  );
};
export const AddSidebutton = (props) => {
  return (
    <div>
      <button
        type="button"
        style={{
          paddingTop: 8,
          paddingBottom: 8,
          paddingRight: 15,
          paddingLeft: 15,
        }}
        className="add"
      >
        {props.title}
      </button>
      <style jsx>
        {`
          .add {
            font: Bold var(--unnamed-font-size-10) /
              var(--unnamed-line-spacing-12) var(--unnamed-font-family-manrope);
            letter-spacing: var(--unnamed-character-spacing-1);
            color: var(--unnamed-color-ffffff);
            text-align: left;
            font: Bold 10px/12px Manrope;
            letter-spacing: 1px;
            color: #ffffff;
            text-transform: uppercase;
            background: #3cbcb4 0% 0% no-repeat padding-box;
            border-radius: 10px;

            opacity: 1;
          }
        `}
      </style>
    </div>
  );
};
export const SideButton = (props) => {
  return (
    <div>
      <button
        type="button"
        style={{
          paddingTop: 6,
          paddingBottom: 6,
          paddingRight: 10,
          paddingLeft: 10,
        }}
        className="bt"
      >
        {props.title}
      </button>

      <style jsx>
        {`
          .bt {
            font: SemiBold var(--unnamed-font-size-10) /
              var(--unnamed-line-spacing-12) var(--unnamed-font-family-manrope);
            letter-spacing: var(--unnamed-character-spacing-0-8);
            color: var(--unnamed-color-ffffff);
            text-align: left;
            font: SemiBold 10px/12px Manrope;
            letter-spacing: 0.8px;
            color: #ffffff;
            text-transform: uppercase;
            background: #99c9d3;
            border-radius: 10px;
          }
        `}
      </style>
    </div>
  );
};
export const NewButton = (props) => {
  return (
    <div style={{ width: '50%' }}>
      <button
        type="button"
        style={{
          paddingTop: 13,
          paddingBottom: 13,
          paddingRight: 15,
          paddingLeft: 15,
          width: '100%',
        }}
        onClick={props.onHandleAddNew}
        className="btt"
      >
        {props.title}
      </button>

      <style jsx>
        {`
          .btt {
            background: transparent
              linear-gradient(
                167deg,
                var(--unnamed-color-78ffd6) 0%,
                var(--unnamed-color-007991) 100%
              )
              0% 0% no-repeat padding-box;
            background: transparent
              linear-gradient(167deg, #78ffd6 0%, #007991 100%) 0% 0% no-repeat
              padding-box;
            box-shadow: 0px 3px 6px #00000029;
            border-radius: 10px;
            opacity: 1;
            font: Bold var(--unnamed-font-size-13) /
              var(--unnamed-line-spacing-16) var(--unnamed-font-family-manrope);
            letter-spacing: var(--unnamed-character-spacing-1-3);
            color: var(--unnamed-color-ffffff);
            text-align: center;
            font: Bold 13px/16px Manrope;
            letter-spacing: 1.3px;
            color: #ffffff;
            text-transform: uppercase;
          }
        `}
      </style>
    </div>
  );
};
export const NeButton = (props) => {
  return (
    <div style={{ width: '100%' }}>
      <button
        type="button"
        style={{
          paddingTop: 13,
          paddingBottom: 13,
          paddingRight: 15,
          paddingLeft: 15,
          width: '100%',
        }}
        className="btt"
        onClick={() => {
          props.repeat_last_addon(), props.toggleDrawer();
        }}
      >
        {props.title}
      </button>

      <style jsx>
        {`
          .btt {
            background: transparent
              linear-gradient(
                167deg,
                var(--unnamed-color-656565) 0%,
                var(--unnamed-color-007991) 100%
              )
              0% 0% no-repeat padding-box;
            background: transparent
              linear-gradient(167deg, #656565 0%, #007991 100%) 0% 0% no-repeat
              padding-box;
            box-shadow: 0px 3px 6px #00000029;
            border-radius: 10px;
            opacity: 1;
            font: Bold var(--unnamed-font-size-13) /
              var(--unnamed-line-spacing-16) var(--unnamed-font-family-manrope);
            letter-spacing: var(--unnamed-character-spacing-1-3);
            color: var(--unnamed-color-ffffff);
            text-align: center;
            font: Bold 13px/16px Manrope;
            letter-spacing: 1.3px;
            color: #ffffff;
            text-transform: uppercase;
          }
        `}
      </style>
    </div>
  );
};
export const NewButtonBottomFix = (props) => {
  return <Buttonbottonfix>{props.title}</Buttonbottonfix>;
};
const NewButtonbottonfix = styled.div`
  background: transparent
    linear-gradient(
      174deg,
      var(--unnamed-color-78ffd6) 0%,
      var(--unnamed-color-007991) 100%
    )
    0% 0% no-repeat padding-box;
  background: transparent linear-gradient(174deg, #78ffd6 0%, #007991 100%) 0%
    0% no-repeat padding-box;
  opacity: 1;
  padding: 10px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  color: white;
  font-size: 15px;
  text-align: center;
`;
