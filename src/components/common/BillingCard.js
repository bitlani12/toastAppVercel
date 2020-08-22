import React from 'react';
import { FlexRow, FlexBetween } from '../../ui/Flex';
import Veg from './Veg';
const BillingCard = (props) => {
  const i = 1;
  return (
    <div>
      <FlexBetween className="p10">
        <FlexRow>
          {/* <img src="/static/bsz69iom.png" alt="not avaliable" /> */}
          <div className="ml10">{props.orderData.id_name}</div>
        </FlexRow>
      </FlexBetween>
      {props.billing_data.order_details[props.orderData.id].map((e) => (
        <FlexBetween className="p10" style={{ alignItems: 'baseline' }}>
          <FlexRow style={{ alignItems: 'baseline' }}>
            {e.item_type === 'nonveg' ? (
              <Veg color={'#be0000'} />
            ) : (
              <Veg color={'#007436'} />
            )}
            <div className="ml10">{e.item_name}</div>
          </FlexRow>
          <FlexRow>
            <div className="qty-price">
              <div>{e.qty}</div>
              <div> ₹{e.item_total_price}</div>
            </div>
          </FlexRow>
        </FlexBetween>
      ))}
      <style>{`
      .qty-price{
        display:flex;
        width: 20%;
        width: 100px;
        padding-left: 10px;
        justify-content:space-between;
      }`}</style>
    </div>
  );
};
export default BillingCard;
