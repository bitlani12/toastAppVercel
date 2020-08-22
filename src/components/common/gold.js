import React from 'react';
import { FlexRow, FlexBetween } from '../../ui/Flex';
const Gold = (props) => {
  const i = 1;
  return (
    <div className="container_1">
      <img
        src="/static/Group 406.svg"
        alt="not avaliable"
        style={{ marginLeft: 10 }}
      />
      <div>
        <FlexBetween className="p10">
          <FlexRow>
            <div className="ml10">Zomato Gold member?</div>
          </FlexRow>
          <FlexRow style={{ marginTop: 10 }}>
            {/* <img src="/static/noun_Info_1736324.svg" /> */}
          </FlexRow>
        </FlexBetween>

        <FlexBetween>
          {' '}
          <div
            className="ad"
            style={{ marginLeft: 20, marginBottom: 10, marginTop: -10 }}
          >
            Add your visit ID to get Zomato gold discount.
          </div>
        </FlexBetween>

        <style>{`
        .container_1{
          display:flex;
        }
        .ad{
            font: Medium var(--unnamed-font-size-10)/var(--unnamed-line-spacing-14) var(--unnamed-font-family-manrope);
            letter-spacing: var(--unnamed-character-spacing-0);
            color: var(--unnamed-color-999999);
            text-align: left;
            font: Medium 10px/14px Manrope;
            letter-spacing: 0px;
            color: #999999;
            opacity: 1;
          
        }
      `}</style>
      </div>
    </div>
  );
};
export default Gold;
