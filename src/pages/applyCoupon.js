import React, { useEffect, useState } from 'react';
import { TitleCenter } from './../ui/Text';
import Layout from 'components/layout';
import { CardLayout } from './../components/SpecialMenuCard/style';
import { FlexRow } from './../ui/Flex';
import { UnCheckedCoupons, CheckedCoupons } from '../components/common/coupons';
import { ButtonBottomFix } from '../components/common/button';
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Router from 'next/router';
import {
  applyCoupon_action,
  getCoupon_action,
} from './../redux/actions/orderAction';
import { auth } from '../utils/auth';
import cookie from 'js-cookie';
const Complaints = (props) => {
  const [couponId, setCouponID] = useState('');
  useEffect(() => {
    if (props.get_coupon.length === 0) {
      props.getCoupon_action(cookie.get('qr_code'), 'applyCode');
    }
  }, []);

  const checkedItem = (value) => {
    console.log(value);
    props.get_coupon.forEach((e) => {
      if (e.coupon_id === value) {
        e.checked = true;
      } else {
        e.checked = false;
      }
      setCouponID(value);
    });
  };
  const applyCoupon = () => {
    props.applyCoupon_action(cookie.get('qr_code'), couponId);
  };
  console.log(props);
  return (
    <Layout>
      <div
        style={{
          background: '#E4E4E4',
          minHeight: '100vh',
          padding: 0,
          marginBottom: 50,
        }}
      >
        <div style={{ background: '#FFFFFF', display: 'flex' }}>
          <TitleCenter
            style={{
              top: '81px',
              textAlign: 'left',
              fontSize: 20,
              color: '#404040',
              marginBottom: 0,
              paddingTop: 20,
              marginTop: 30,
            }}
          >
            Apply Coupons
            <p
              style={{
                color: '#999999',
                marginTop: 15,
                fontSize: '12px',
                fontFamily: 'Manrope',
              }}
            >
              Select any one coupon to avail discounts..
            </p>
          </TitleCenter>
        </div>
        {console.log(props.get_coupon, "this is get coupen")}
        {props.get_coupon.status === 'failure' ? <div style={{ textAlign: "center", marginTop: 50 }}>No Coupons Found</div>
          :
          props.get_coupon !== undefined ? (
            props.get_coupon.map((e) => (
              <div
                style={{ display: 'flex' }}
                onClick={() => checkedItem(e.coupon_id)}
              >
                <CardLayout style={{ background: 'white' }}>
                  <CheckedCoupons couponList={e} />
                </CardLayout>
              </div>
            ))
          ) : (
              <div></div>
            )}
        {/* <div style={{ display: 'flex', marginTop: -10 }}>
          <CardLayout style={{ background: 'white' }}>
            <UnCheckedCoupons />
          </CardLayout>
        </div>
        <div style={{ display: 'flex', marginTop: -10 }}>
          <CardLayout style={{ background: 'white' }}>
            <UnCheckedCoupons />
          </CardLayout>
        </div>
        <div style={{ display: 'flex', marginTop: -10 }}>
          <CardLayout style={{ background: 'white' }}>
            <UnCheckedCoupons />
          </CardLayout>
        </div>
        <div style={{ display: 'flex', marginTop: -10 }}>
          <CardLayout style={{ background: 'white' }}>
            <UnCheckedCoupons />
          </CardLayout>
        </div> */}
        {props.get_coupon.status === 'failure' ? <div> </div> :
          <div onClick={applyCoupon}>
            <ButtonBottomFix title="APPLY COUPONS" />
          </div>
        }
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
Complaints.getInitialProps = async (ctx) => {
  console.log('this is ctx');
  const token = auth(ctx);
  return { token };
};
const mapStateToProps = (state) => ({
  get_coupon: state.orderReducer.get_coupon,
  apply_coupon: state.orderReducer.apply_coupon,
});
const mapDispatchToProps = (dispatch) => ({
  applyCoupon_action: bindActionCreators(applyCoupon_action, dispatch),
  getCoupon_action: bindActionCreators(getCoupon_action, dispatch),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Complaints));
