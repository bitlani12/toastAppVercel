import React from 'react';
import { FlexRow, FlexBetween } from '../../ui/Flex';
const Radio = (props) => {
  const coupon = props.couponList;

  return (
    <div>
      {/* <div>
        <input
          type="radio"
         
        /> */}
      <div class="radio-item">
        <input
          type="radio"
          id="ritema"
          name="ritem"
          value="ropt1"
          checked={coupon.checked ? 'checked' : ''}
        />
        <label>
          <div>
            <FlexBetween>
              <FlexRow>
                <div
                  style={{
                    display: 'flex',
                    textAlign: 'left',
                    marginLeft: 44,
                    fontSize: '10px',
                    color: '#999999',
                    marginTop: -80,
                  }}
                >
                  PROMO CODE:
                  <p style={{ color: '#F7B239', marginTop: 0 }}>
                    {' '}
                    {coupon.coupon_code}
                  </p>
                </div>
              </FlexRow>
            </FlexBetween>
            <FlexBetween>
              <FlexRow>
                <div
                  style={{
                    marginLeft: 44,
                    marginTop: -35,
                    color: '#404040',
                    fontSize: '14px',
                    fontWeight: 800,
                  }}
                >
                  {' '}
                  {coupon.coupon_title}
                  <div
                    style={{ color: '#999999', fontSize: '12px', marginTop: 5 }}
                  >
                    {coupon.coupon_description}
                  </div>
                </div>
              </FlexRow>
            </FlexBetween>
          </div>
        </label>
      </div>

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
  top: 11.2px;
  left: 12.4px;
  content: " ";
  display: block;
  background: #3CBCB4;
}
  
  `}</style>
    </div>
  );
};
export default Radio;
