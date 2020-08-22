import React, { useEffect } from 'react';
import { TitleCenter } from './../ui/Text';
import BillingCard from './../components/common/BillingCard';
import Layout from 'components/layout';
import Tip from './../components/common/Tip';
import Gold from './../components/common/gold';
import ZomatoPopup from './../page-components/zomatoGold/ZomatoPopup';
import { GrandTotal, Coupon, ZigZag } from './../components/common/Total';
import {
  CardLayout,
  FullWidthCard,
} from './../components/SpecialMenuCard/style';
import { ButtonBottomFix } from './../components/common/button';
import { FlexRow, FlexBetween } from './../ui/Flex';
import { withRouter } from 'next/router';
import Router from 'next/router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getBilling_action,
  final_Amount,
  getCoupon_action,
} from './../redux/actions/orderAction';
import { auth } from '../utils/auth';
import { useState } from 'react';
import cookie from 'js-cookie';
const BillingDetails = (props) => {
  const [orderName, setOrderName] = useState([]);
  const [data, setData] = useState([]);
  const [couponData, setCouponData] = useState([]);
  useEffect(() => {
    let c_id = cookie.get('customer_id');
    let o_id = cookie.get('order_id');
    props.getBilling_action(o_id, c_id, props.token);
  }, []);

  useEffect(() => {
    setOrderName(props.billing_data.order_details_id_name_map);
    setData(props.billing_data);
    setCouponData(props.get_coupon);
  }, [props.billing_data, props.get_coupon]);

  console.log(
    props.billing_data && props.billing_data.order_details_id_name_map
  );
  const selectPayment = () => {
    // props.finalAmount(data.payment_details.payment_amount);
    // Router.push('/select_payment');
    props.final_Amount(data.payment_details.payment_amount);
    Router.push('/select_payment');
  };
  const handleCoupon = () => {
    props.getCoupon_action(cookie.get('qr_code'), 'billing_details');
  };
  return (
    <Layout>
      <div
        style={{
          background: '#E4E4E4',
          minHeight: '100vh',
          padding: 0,
          paddingBottom: '5rem',
        }}
      >
        <TitleCenter
          style={{
            textAlign: 'left',
            fontSize: 20,
            color: '#404040',
            paddingTop: 20,
          }}
        >
          Billing Details
        </TitleCenter>
        {orderName &&
          orderName.map((e) => (
            <div style={{ display: 'flex' }}>
              <CardLayout style={{ background: 'white', marginTop: 0 }}>
                <BillingCard orderData={e} billing_data={data} />
              </CardLayout>
            </div>
          ))}
        <div style={{ display: 'flex' }}>
          <CardLayout style={{ background: 'white', marginTop: 0 }}>
            <ZomatoPopup parent={<Gold />} />
          </CardLayout>
        </div>
        <div style={{ display: 'flex' }}>
          <CardLayout style={{ background: 'white', marginTop: 0 }}>
            <Coupon
              billing_data={data.discount_details}
              couponData={couponData}
              onClick={() => handleCoupon()}
            />
          </CardLayout>
        </div>
        <div style={{ display: 'flex' }}>
          <CardLayout style={{ background: 'white', marginTop: 0 }}>
            <Tip />
          </CardLayout>
        </div>
        {data && (
          <div style={{ display: 'flex' }}>
            <FullWidthCard style={{ background: 'white', marginTop: 0 }}>
              <GrandTotal billing_data={data} />
            </FullWidthCard>
          </div>
        )}
        <a onClick={() => selectPayment()}>
          <FlexBetween>
            <ButtonBottomFix title="CONTINUE TO PAYMENT" />
          </FlexBetween>
        </a>
        <style>{`
        body {
          margin: 0px;
          padding: 0px;
          margin-top:-20px;
        }
      `}</style>
      </div>
    </Layout>
  );
};
BillingDetails.getInitialProps = async (ctx) => {
  console.log('this is ctx');
  const token = auth(ctx);
  return { token };
};
const mapStateToProps = (state) => ({
  billing_data: state.orderReducer.billing_data,
  get_coupon: state.orderReducer.get_coupon,
});
const mapDispatchToProps = (dispatch) => ({
  getBilling_action: bindActionCreators(getBilling_action, dispatch),
  final_Amount: bindActionCreators(final_Amount, dispatch),
  getCoupon_action: bindActionCreators(getCoupon_action, dispatch),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(BillingDetails));
