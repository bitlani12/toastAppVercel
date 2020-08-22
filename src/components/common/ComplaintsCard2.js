import React, { useEffect, useState } from 'react';
import { FlexRow, FlexBetween } from '../../ui/Flex';
import ComplaintsCard from './ComplaintsCard';
import Veg from './Veg';
import CheckBox from './checkbox';
import InputBox from './inputBox';
const ComplaintsCard2 = (props) => {
  const item = props.orderData;
  const [checkBoxData, setCheckBoxData] = useState([
    { checked: false, label: 'Order taking too long' },
    { checked: false, label: 'Order as not mentioned' },
    { checked: false, label: 'Missing Items' },
  ]);
  const [update, setUpdate] = useState(0);
  const [itemShow, setItemShow] = useState(true);
  const [input, setInput] = useState('');
  let complaints = [];
  const handleComplaints = (value, t) => {
    console.log(value);
    let type = t;
    if (value.length === 0) {
      type = 'checkBox';
    }
    setInput(value);
    if (value.length === 0 && type === 'checkBox') {
      checkBoxData.map((e) => {
        if (e.checked === true) {
          complaints.push(e.label);
        }
      });
    } else {
      complaints.push(value);
    }

    const data = {
      item_id: item.item_id,
      item_image_url: null,
      item_type: item.item_type,
      contains_egg: false,
      complaint: complaints,
      item_name: item.item_name,
      item_order_id: item.item_order_id,
    };
    props.handleSetComplaints(data);
  };
  const handleChecked = (e) => {
    checkBoxData.forEach((data, i) => {
      if (e === i && (data.checked === false || data.checked === undefined)) {
        data.checked = true;
      } else {
        data.checked = false;
      }
    });
    handleComplaints(input, 'checkBox');
    setCheckBoxData(checkBoxData);
    setUpdate(update + 1);
  };
  return (
    <div style={{ margin: 15 }}>
      <FlexBetween className="p10">
        <FlexRow>
          {item.item_type === 'nonveg' ? (
            <Veg color={'#be0000'} />
          ) : (
            <Veg color={'#007436'} />
          )}
          <div className="ml10">
            <b>{item.item_name}</b>{' '}
          </div>
        </FlexRow>
        <FlexRow>
          <div>₹{item.item_price}</div>
        </FlexRow>
      </FlexBetween>
      <div
        style={{
          display: 'flex',
          marginRight: 15,
          marginLeft: 15,
          marginBottom: 6,
        }}
      >
        <p className="pa">{item.item_description}</p>
      </div>
      <hr className="line" />

      <FlexBetween onClick={() => setItemShow(!itemShow)}>
        <FlexRow>
          <div
            style={{
              marginLeft: 15,
              marginRight: 15,
              color: '#404040',
              fontSize: '16px',
              marginTop: -15,
            }}
          >
            <p>What was not Right ?</p>
          </div>
        </FlexRow>

        <FlexRow>
          <img
            src={
              itemShow
                ? '/static/arrow_drop_down-24px(1).svg'
                : '/static/arrow_drop_up-24px.svg'
            }
            alt="Not Available"
            style={{ marginTop: -12, marginRight: 15 }}
          />
        </FlexRow>
      </FlexBetween>
      {
        <div hidden={itemShow}>
          <div>
            {checkBoxData.map((e, i) => (
              <FlexBetween style={{ marginTop: 5 }}>
                <FlexRow>
                  <CheckBox
                    checked={e.checked}
                    label={e.label}
                    handlechecked={(e) => handleChecked(e)}
                    index={i}
                  />
                  <br />
                </FlexRow>
              </FlexBetween>
            ))}
            {/* <FlexBetween>
              <FlexRow>" Order taking too long"
                <div style={{ display: 'flex' }}>
                  <CheckBox label=" Order as not mentioned" />
                </div>
              </FlexRow>
            </FlexBetween>
            <FlexBetween>
              <FlexRow>
                <div style={{ display: 'flex' }}>
                  <CheckBox label="Missing Items" />
                </div>
              </FlexRow>
            </FlexBetween> */}
          </div>
          <FlexBetween style={{ width: '100%', marginTop: 8 }}>
            <FlexRow style={{ marginTop: -10, width: '100%' }}>
              <InputBox
                value={input}
                onChange={(value) => {
                  handleComplaints(value, 'input');
                }}
              />
            </FlexRow>
          </FlexBetween>
        </div>
      }
      <style>
        {`
                .line{
                    border: 1px solid #BFBFBF80;
                    opacity: 1;
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
                  }
            `}
      </style>
    </div>
  );
};
export default ComplaintsCard2;
