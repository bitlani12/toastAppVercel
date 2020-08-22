import React from 'react';
import { FlexRow, FlexBetween } from '../../ui/Flex';
import Veg from './Veg';
// import { MdArrowDropDown } from 'react-icons/fa';
const CompalintsCard = (props) => {
  const i = 1;
  return (
    <div style={{ margin: 15 }}>
      <FlexBetween className="p10">
        <FlexRow>
          <Veg />
          <div className="ml10">
            <b>Item Name</b>
          </div>
        </FlexRow>
        <FlexRow>
          <div>₹79</div>
        </FlexRow>
      </FlexBetween>
      <div
        style={{
          display: 'flex',
          marginRight: 15,
          marginLeft: 15,
          marginTop: 0,
          marginBottom: 6,
        }}
      >
        <p className="pa">
          Blended with Frozen mango & pineapple, topped with <br />
          fresh fruit,goji berries,fresh coconut,and house...
        </p>
      </div>
      <hr className="line" />
      <FlexBetween>
        <FlexRow>
          <div
            style={{
              marginLeft: 15,
              marginRight: 15,
              color: '#404040',
              fontSize: '16px',
              marginTop: -10,
            }}
          >
            <p>What was not Right ?</p>
          </div>
        </FlexRow>
        <FlexRow>
          <img
            src="/static/arrow_drop_down-24px(1) (1).svg"
            alt="Not Available"
            style={{ marginTop: -12, marginRight: 15 }}
          ></img>
          {/* <MdArrowDropDown/> */}
        </FlexRow>
      </FlexBetween>
      <style>
        {`
                .line {
                    border:  1px solid #BFBFBF80;
                  }
                  .pa{
                    font: Medium var(--unnamed-font-size-12)/var(--unnamed-line-spacing-16) var(--unnamed-font-family-manrope);
                    letter-spacing: var(--unnamed-character-spacing-0);
                    color: var(--unnamed-color-999999);
                    text-align: left;
                    font: Medium 12px/16px Manrope;
                    letter-spacing: 0px;
                    color: #999999;
                    opacity: 1;
                  }`}
      </style>
    </div>
  );
};
export default CompalintsCard;
