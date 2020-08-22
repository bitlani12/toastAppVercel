import React, { useEffect, useState } from 'react';
import { TitleCenter } from './../ui/Text';
import ComplaintsCard2 from './../components/common/ComplaintsCard2';
import ComplaintsCard from './../components/common/ComplaintsCard';
import Layout from 'components/layout';
import { CardLayout } from './../components/SpecialMenuCard/style';
import { ButtonBottomFix } from 'components/common/button';
import { withRouter } from 'next/router';
import { bindActionCreators } from 'redux';
import {
  getBilling_action,
  complaints_action,
} from './../redux/actions/orderAction';
import { connect } from 'react-redux';
import { auth } from '../utils/auth';
import cookie from 'js-cookie';
const Complaints = (props) => {
  const [orderName, setOrderName] = useState([]);
  const [data, setData] = useState([]);
  let complaints = [];
  const { billing_data } = props;
  useEffect(() => {
    let c_id = cookie.get('customer_id');
    let o_id = cookie.get('order_id');
    props.getBilling_action(o_id, c_id, props.token);
  }, []);
  useEffect(() => {
    setOrderName(props.billing_data.order_details_id_name_map);
    setData(props.billing_data);
  }, [props.billing_data]);

  const handleSetComplaints = (value) => {
    if (complaints.length === 0) {
      complaints.push(value);
    }
    complaints.forEach((e, i) => {
      if (e.item_id === value.item_id) {
        e.pushed = true;
        complaints.splice(i, 1, value);
      } else if (e.pushed === undefined) {
        e.pushed = true;
        complaints.push(value);
      }
    });
  };

  const addComplaints = () => {
    if (complaints.length !== 0) {
      props.complaints_action(cookie.get('qr_code'), complaints);
    }
  };
  return (
    <Layout>
      <div
        style={{
          background: 'rgb(250, 250, 250)',
          minHeight: '100vh',
          padding: 0,
        }}
      >
        <div style={{ background: '#FFFFFF', display: 'flex' }}>
          <TitleCenter
            style={{
              top: '81px',
              textAlign: 'left',
              fontSize: 20,
              color: '#404040',
              paddingTop: 10,
              marginLeft: 20,
              marginTop: 10,
              paddingBottom: 0,
              marginRight: 10,
            }}
          >
            Complaints
            <p
              style={{
                color: '#999999',
                marginTop: 15,
                fontSize: '12px',
                fontFamily: 'Manrope',
              }}
            >
              Feel free to tell us what went wrong :(
            </p>
          </TitleCenter>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', padding: 0 }}>
          {orderName &&
            orderName.map((e) =>
              data.order_details[e.id].map((e) => (
                <CardLayout
                  style={{
                    background: 'white',
                    boxShadow: 'none',
                    border: 'none',
                  }}
                >
                  <ComplaintsCard2
                    orderData={e}
                    handleSetComplaints={(value) => handleSetComplaints(value)}
                  />
                </CardLayout>
              ))
            )}
        </div>
        <div style={{ display: 'flex', marginTop: -10 }}>
          <CardLayout style={{ background: 'white' }}>
            {/* <ComplaintsCard /> */}
          </CardLayout>
        </div>
        <div onClick={addComplaints}>
          <div style={{ padding: 30 }}></div>
          <ButtonBottomFix title="Submit"></ButtonBottomFix>
        </div>
      </div>
      <style>{`
              .paa{
                font: Medium var(--unnamed-font-size-12)/var(--unnamed-line-spacing-16) var(--unnamed-font-family-manrope);
              letter-spacing: var(--unnamed-character-spacing-0);
              color: var(--unnamed-color-999999);
              text-align: left;
              font: Medium 12px/16px Manrope;
              letter-spacing: 0px;
              color: #999999;
              opacity: 1;
            }
              `}</style>
    </Layout>
  );
};
Complaints.getInitialProps = async (ctx) => {
  console.log('this is ctx');
  const token = auth(ctx);
  return { token };
};
const mapStateToProps = (state) => ({
  billing_data: state.orderReducer.billing_data,
});
const mapDispatchToProps = (dispatch) => ({
  getBilling_action: bindActionCreators(getBilling_action, dispatch),
  complaints_action: bindActionCreators(complaints_action, dispatch),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Complaints));
