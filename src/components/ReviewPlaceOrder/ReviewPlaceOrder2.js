import React, { useEffect, useState } from 'react';
import { TitleCenter } from '../../ui/Text';
import { FlexRow, FlexBetween } from '../../ui/Flex';
import { CardLayout } from 'components/SpecialMenuCard/style';
import Avatar from '../../ui/Avatar.js';
import Link from 'next/link';
import Cookie from 'js-cookie';
import OrderList from './../common/OrderList';
import { ButtonBottomFix } from 'components/common/button';
import {
  add_item,
  add_item_increase_place_order,
  placeOrder_action,
  add_item_decrease_place_order,
  getBilling_action,
} from 'redux/actions/orderAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { auth } from '../../utils/auth';
import Router from 'next/router';
import Input from 'components/common/input';

const ReviewPlaceOrder = React.memo((props) => {
  const [newAddItem, setAddItem] = useState([]);
  const [orderName, setOrderName] = useState([]);
  const [textBox, setTextBox] = useState('');
  const [data, setData] = useState([]);
  const i = 6;
  const { val_data, addItem } = props;

  // if (addItem.length !== 0) {
  //   const checkItem = addItem.findIndex(
  //     (val) => val.item_id === val_data.item_id
  //   );
  // }
  useEffect(() => {
    let c_id = Cookie.get('customer_id');
    let o_id = Cookie.get('order_id');
    let token = Cookie.get('token');
    props.getBilling_action(o_id, c_id, token);
  }, []);
  useEffect(() => {
    setOrderName(props.billing_data.order_details_id_name_map);
    setData(props.billing_data);
  }, [props.billing_data]);

  const handlevalue_increase = (e, value) => {
    e.stopPropagation();
    props.add_item_increase_place_order(value);
  };
  const handlevalue_decrease = (e, value) => {
    e.stopPropagation();
    props.add_item_decrease_place_order(value);
  };

  const placeOrder = () => {
    if (addItem.length !== 0) {
      addItem.map((e) => {
        e.item_price_details.map((p) => {
          console.log(e);
          newAddItem.push({
            item_size: p.item_size,
            item_id: e.item_id,
            qty: e.qty,
            addons: e.addon_details,
          });
        });
        setAddItem(newAddItem);
      });
      const callBack = () => {
        console.log('order-success');
        // Router.push('/order_success');
      };
      setTimeout(() => {
        props.placeOrder_action(
          Cookie.get('qr_code'),
          newAddItem,
          textBox,
          callBack
        );
      }, 20);
    } else {
      Router.push('/billing_details');
    }
  };

  let price = 0;
  let totalPastPrice = 0;
  let totalPastQty = 0;
  let totalItem = 0;
  if (data.order_details !== undefined) {
    totalPastPrice = data.order_details.order_amount;
    orderName.map((e) =>
      data.order_details[e.id].map((e) => (totalPastQty += parseInt(e.qty)))
    );
  }
  console.log(props, 'sdjfsjkfn');

  addItem.map((e) => {
    e.item_price_details.map((p) => {
      price += p.item_price * e.qty;
      totalItem += e.qty;
    });
  });
  return (
    <div>
      {addItem.length !== 0 || totalPastQty !== 0 ? (
        <div>
          <div style={{ marginTop: -40, marginBottom: 60 }}>
            <FlexBetween>
              <div></div>
              <div style={{ marginLeft: 22 }}>
                <TitleCenter>Review & Place Order </TitleCenter>
              </div>
              <img
                src="/static/close-24px(2).svg"
                onClick={props.handleToggle}
              />
            </FlexBetween>
            {addItem.length !== 0 && (
              <CardLayout>
                <div className="p10">
                  <FlexRow>
                    {/* <Avatar /> */}
                    <div className="ml10 ">Your Current Order</div>
                  </FlexRow>

                  {addItem.map((e) => (
                    <OrderList
                      pastOrder={false}
                      value_data={e}
                      handlevalue_increase={handlevalue_increase}
                      handlevalue_decrease={handlevalue_decrease}
                    />
                  ))}
                </div>
                <div style={{ padding: 10 }}>
                  <Input
                    value={textBox}
                    placeholder="Any Request? Customize your dish."
                    onchange={(value) => setTextBox(value)}
                  />
                </div>
              </CardLayout>
            )}
            {totalPastQty !== 0 && (
              <div>
                <p style={{ textAlign: 'center' }} className="pt20">
                  Placed Orders
                </p>
                <CardLayout style={{ display: 'flex' }}>
                  <div className="p10">
                    {orderName &&
                      orderName.map((e) =>
                        data.order_details[e.id].map((e) => (
                          <OrderList
                            pastOrder={true}
                            value_data={e}
                            handleSetComplaints={(value) =>
                              handleSetComplaints(value)
                            }
                          />
                        ))
                      )}
                  </div>
                </CardLayout>
              </div>
            )}
            <FlexBetween className="p10">
              <h4>Total: {parseInt(totalItem) + totalPastQty} Items</h4>
              <h4> ₹{price + totalPastPrice}</h4>
            </FlexBetween>
            <Link href="/complaints">
              <a className="pt20" style={{ color: '#3CBCB4' }}>
                Have any complaints?
              </a>
            </Link>
          </div>
          <div onClick={placeOrder}>
            {addItem.length !== 0 ?
           <div
           style={{
             background: `transparent linear-gradient(174deg, #36c0db 0%, #007991 100%) 0%
             0%`,
             position: 'fixed',
             bottom: 0,
             fontSize: 15,
             padding: 15,
             width: '100%',
             opacity: 1,
             color: 'white',
           }}
           >
             PLACE ORDER

             
           </div>
           :
           <div
           style={{
             background: `transparent linear-gradient(174deg, #36c0db 0%, #007991 100%) 0%
             0%`,
             position: 'fixed',
             bottom: 0,
             fontSize: 15,
             padding: 15,
             width: '100%',
             opacity: 1,
             color: 'white',
           }}>
             CHECKOUT
             </div>
           // <ButtonBottomFix
             // title={'CHECKOUT'}
           // />
           }
          </div>
        </div>
      ) : (
        <div className="no-order">You haven't ordered anything yet.</div>
      )}
      <style>{`
      .no-order{
        display: flex;
    justify-content: center;
    align-items: center;
    height: 94vh;
      }
      
      `}</style>
    </div>
  );
});

ReviewPlaceOrder.getInitialProps = async (ctx) => {
  console.log('this is ctx');
  const token = auth(ctx);
  return { token };
};
const mapStateToProps = (state) => ({
  addItem: state.orderReducer.addItem,
  place_order: state.orderReducer.place_order,
  billing_data: state.orderReducer.billing_data,
});
const mapDispatchToProps = (dispatch) => ({
  placeOrder_action: bindActionCreators(placeOrder_action, dispatch),
  add_item: bindActionCreators(add_item, dispatch),
  add_item_increase_place_order: bindActionCreators(
    add_item_increase_place_order,
    dispatch
  ),
  add_item_decrease_place_order: bindActionCreators(
    add_item_decrease_place_order,
    dispatch
  ),
  getBilling_action: bindActionCreators(getBilling_action, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(ReviewPlaceOrder);
