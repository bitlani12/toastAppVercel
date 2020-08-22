import React, { useState, useEffect } from 'react';
import { H3 } from '../../ui/headings';
import Layout from 'components/layout';
import styled from 'styled-components';
import { withRouter } from 'next/router';
import { useRouter } from 'next/router';
import Router from 'next/router';
import { connect } from 'react-redux';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { bindActionCreators } from 'redux';
import {
  orderCheckout_action,
  getBilling_action,
} from '../../redux/actions/orderAction';
import cookie from 'js-cookie';
import RazorPayInt from './Razorpay';
import { check_qr_not_avail } from '../../utils/auth';
const PaymentSetLayout = styled.div`
  padding: 10px;
  margin-top: 10px;
  border: ${(props) =>
    props.active ? '1.5px solid #3cbcb480' : '1.5px solid #BFBFBF80'};
  border-radius: 10px;
`;
const BackgroundImage = styled.div`
  background-image: url('/static/Group 1113.svg');
  background-repeat: no-repeat;
  background-position: center;
  min-height: 100vh;
  background-position-x: center;
`;
export const SetFilterIcon = styled.div`
  position: fixed;
  bottom: 50px;
  right: 20px;
  opacity: 0.8;
  background: transparent linear-gradient(172deg, #78ffd6 0%, #007991 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
  padding: 5px 5px;
  display: flex;
  border-radius: 100px;
  box-shadow: 0 0 5px #70707029;
`;
const CheckoutText = styled.div`
  position: fixed;
  bottom: 30px;
  font-weight: 700;
  right: 18px;
  color: #3cbcb4;
  font-size: 12px;
`;
const SelectPayment = (props) => {
  const router = useRouter();
  const [payType, setPayType] = useState('');
  const qr_code = cookie.get('qr_code');
  let finalAmount = '';

  const selectPayType = (type) => {
    setPayType(type);
  };
  useEffect(() => {
    if (props.final_amount === '') {
      let c_id = cookie.get('customer_id');
      let o_id = cookie.get('order_id');
      let token = cookie.get('token');
      props.getBilling_action(o_id, c_id, token);
    }
  }, []);
  if (props.billing_data.payment_details !== undefined) {
    finalAmount = props.billing_data.payment_details.payment_amount;
  }

  console.log(finalAmount);
  const proceedPay = () => {
    const callBack = () => {
      if (payType === 'online') {
      } else {
        cookie.remove('qr_code');
        Router.push('/payment_done');
      }
    };
    if (payType !== '') {
      props.orderCheckout_action(qr_code, payType, callBack);
    } else {
    }
  };
  return (
    <Layout title="Login">
      <div className="p10">
        <H3>Payment</H3>
        <div className="p10">
          <div className=" secondText fo12">
            Your net payable amount including taxes is
          </div>
          <h4 className="pt10  fo16" style={{ display: 'flex' }}>
            ₹{props.final_amount || finalAmount}
            <img
              src="/static/noun_Info_1736324.svg"
              style={{ marginLeft: 18 }}
            />
          </h4>
          <div className=" secondText fo12">Select payment method</div>
          <PaymentSetLayout
            className="pt10"
            active={payType === 'cash'}
            onClick={() => selectPayType('cash')}
          >
            <div class="radio-item" style={{ padding: '0px 5.6px ' }}>
              <input
                type="radio"
                id="ritema"
                name="ritem"
                value={payType}
                checked={payType === 'cash'}
              />
              <label>
                <div>
                  {' '}
                  <h3>Pay Using Cash</h3>
                </div>
              </label>
            </div>
          </PaymentSetLayout>
          <PaymentSetLayout
            className="pt10"
            active={payType === 'pos'}
            onClick={() => selectPayType('pos')}
          >
            {' '}
            <div class="radio-item" style={{ padding: ' 0.15px 5.2px' }}>
              <input
                type="radio"
                id="ritema"
                name="ritem"
                value={payType}
                checked={payType === 'pos'}
              />
              <label>
                <div>
                  {' '}
                  <h3>Request for POS [Card Payment]</h3>
                </div>
              </label>
            </div>
          </PaymentSetLayout>
          <PaymentSetLayout
            className="pt10"
            active={payType === 'online'}
            onClick={() => selectPayType('online')}
          >
            <div class="radio-item">
              <input
                type="radio"
                id="ritema"
                name="ritem"
                value={payType}
                checked={payType === 'online'}
              />
              <label>
                <div>
                  {' '}
                  <h3 style={{ marginTop: -1 }}>Pay Online</h3>
                  <div className=" secondText fo12 ">
                    {' '}
                    Wallet , Card , Net Banking
                  </div>
                </div>
              </label>
            </div>
          </PaymentSetLayout>
        </div>
        {payType !== 'online' ? (
          <div onClick={() => proceedPay()}>
            <CheckoutText>Proceed</CheckoutText>
            <SetFilterIcon>
              <FiChevronRight style={{ fontSize: 34, color: 'white' }} />
            </SetFilterIcon>
          </div>
        ) : (
          <RazorPayInt
            amount={props.final_amount || finalAmount}
            proceedPay={proceedPay}
          />
        )}
      </div>
      <style>{`
  .radio-item {
    display: inline-block;
    position: relative;
    padding: 0 5.2px;
  }
  
  .radio-item input[type='radio'] {
    display: none;
  }
  
  .radio-item label {
    color: #666;
    display:flex;
    font-weight: normal;
    align-items: center;
  }
  
  .radio-item label:before {
    content: " ";
    display: inline-block;
    position: relative;
    margin: 0 10px 0 0;
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
    top: 1.044rem;
    left: 0.75rem;
    content: " ";
    display: block;
    background: #3CBCB4;
  }
  `}</style>
    </Layout>
  );
};
SelectPayment.getInitialProps = async (ctx) => {
  console.log('this is ctx');
  const token = check_qr_not_avail(ctx);
  return { token };
};
const mapStateToProps = (state) => ({
  final_amount: state.orderReducer.final_amount,
  billing_data: state.orderReducer.billing_data,
});
const mapDispatchToProps = (dispatch) => ({
  orderCheckout_action: bindActionCreators(orderCheckout_action, dispatch),
  getBilling_action: bindActionCreators(getBilling_action, dispatch),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SelectPayment));
