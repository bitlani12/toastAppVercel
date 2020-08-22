import react from 'react';
import { FlexRow, FlexBetween } from '../../ui/Flex';
import Veg from './Veg';
import { IncreaseItem, DecreaseItem } from './button';
import AddItem from 'components/common/AddItem';
const OrderList = (props) => {
  const { value_data } = props;

  let item_price = 0;
  let addonprice = 0;
  console.log(
    value_data.item_total_price,
    'this is value data +++++++++22222222222222 3333333'
  );
  value_data.item_price_details &&
    value_data.item_price_details.map((e) => {
      console.log(
        e,
        value_data.item_price_details,
        value_data,
        'item price needs to be fixed'
      );
      const x = value_data.addon_details.forEach((addon) => {
        return (addonprice = addonprice + parseInt(addon.addon_price));
      });
      const check_addon_price =
        value_data.addon_details.length > 0 ? parseInt(addonprice) : 0;
      item_price = (check_addon_price + e.item_price) * value_data.qty;
      console.log(x, addonprice, item_price, 'this is item pricem price');
    });
  return (
    <FlexBetween style={{ alignItems: 'baseline' }}>
      <div
        style={{
          width: `${props.pastOrder === false && '67%'}`,
        }}
      >
        <div className="item">
          <div className="item_name">
            {value_data.item_type === 'nonveg' ||
            value_data.item_type === 'non-veg' ? (
              <Veg color={'#be0000'} />
            ) : (
              <Veg color={'#007436'} />
            )}
            <span style={{ marginLeft: 5 }}>{value_data.item_name}</span>
          </div>
          <div className="addon_details">
            {props.pastOrder === false &&
              value_data.addon_details.map(
                (e, i) =>
                  e.addon_name +
                  `${value_data.addon_details.length - 1 > i ? ',' : ''} `
              )}
          </div>
        </div>
      </div>
      <FlexRow
        style={{
          width: `${props.pastOrder === false && 110}`,
        }}
      >
        {props.pastOrder ? (
          <div className="qty-price">
            <div>{value_data.qty}</div>
            <div style={{ display: 'flex' }}>
              <span>₹ </span> <span> {value_data.item_total_price}</span>
            </div>
          </div>
        ) : (
          <div style={{ display: 'flex', width: 50 }}>
            <span>₹ </span> <span> {item_price} </span>
          </div>
        )}
        {props.pastOrder === false && (
          <FlexRow>
            <div onClick={(e) => props.handlevalue_decrease(e, value_data)}>
              <DecreaseItem />
            </div>
            {value_data.qty}
            <div onClick={(e) => props.handlevalue_increase(e, value_data)}>
              <IncreaseItem />
            </div>
            {/* <AddItem handleToggle={props.handleToggle} val_data={value_data} /> */}
          </FlexRow>
        )}
      </FlexRow>
      <style>{`.item{ 
        flex-direction: column;
        padding:10px 10px 10px 2px;
        align-items: flex-start;
        }
        .item_name{
        display: flex;
        align-items: baseline;}
        .addon_details{
          margin-top:8px;
          color:gray;
          margin-left:15px;
          font-size:12px;
          
        }
  
        .qty-price{
          display:flex;
          width: 110px;
          padding-left: 10px;
          justify-content:space-between;
        }`}</style>
    </FlexBetween>
  );
};
export default OrderList;
