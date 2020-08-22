import React, { useState } from 'react';
import { FlexRow, FlexBetween } from '../../ui/Flex';
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  addTip_action,
  getBilling_action,
} from '../../redux/actions/orderAction';
import cookie from 'js-cookie';
const Tip = (props) => {
  const [amount, setAmount] = useState('');
  const addTip = (amount) => {
    if (amount !== 0) {
      let c_id = cookie.get('customer_id');
      let o_id = cookie.get('order_id');
      let token = cookie.get('token');
      const callBack = () => {
        props.getBilling_action(o_id, c_id, token);
      };
      props.addTip_action(parseInt(amount), callBack);
    }
  };

  const handleAddTip = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div>
      <FlexBetween className="p10">
        <FlexRow>
          <div style={{ display: 'flex' }}>
            {' '}
            <img src="/static/Component-tip.svg" style={{ paddingRight: 11 }} />
            Add tip
          </div>
        </FlexRow>
        <FlexBetween style={{ width: 209 }}>
          <FlexRow>
            <button
              onClick={() => {
                addTip(50);
              }}
              type="button"
              className="bt"
              style={{
                paddingTop: 6,
                paddingBottom: 6,
                paddingRight: 8,
                paddingLeft: 8,
                color: '#3cbcb4',
              }}
            >
              + ₹50{' '}
            </button>
          </FlexRow>
          <FlexRow>
            <button
              onClick={() => {
                addTip(100);
              }}
              type="button"
              className="bt"
              style={{
                paddingTop: 6,
                paddingBottom: 6,
                paddingRight: 8,
                paddingLeft: 8,
                marginLeft: -40,
                color: '#3cbcb4',
              }}
            >
              + ₹100{' '}
            </button>
          </FlexRow>
          <FlexRow>
            <input
              className="b"
              value={amount}
              onChange={(e) => handleAddTip(e)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  addTip(amount);
                }
              }}
              style={{
                paddingTop: 6,
                paddingBottom: 6,
                paddingRight: 8,
                width: 93,
                paddingLeft: 8,
                marginLeft: -40,
                color: '#656565',
              }}
              placeholder="Enter amount"
            />
          </FlexRow>
        </FlexBetween>
      </FlexBetween>
      <style>
        {`
        .bt{
            background: var(--unnamed-color-3cbcb4) 0% 0% no-repeat padding-box;
            border-radius: 10px;
            background:rgb(60, 188, 180,0.15) 0% 0% no-repeat padding-box;

        }
        .b{
            background: var(--unnamed-color-999999) 0% 0% no-repeat padding-box;
            background: rgb(153, 153, 153,0.15) 0% 0% no-repeat padding-box;
            border-radius: 10px;
            border:none;
            outline:none;
        }
        `}
      </style>
    </div>
  );
};
const mapStateToProps = (state) => ({
  add_tip: state.orderReducer.add_tip,
});
const mapDispatchToProps = (dispatch) => ({
  addTip_action: bindActionCreators(addTip_action, dispatch),
  getBilling_action: bindActionCreators(getBilling_action, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Tip));
