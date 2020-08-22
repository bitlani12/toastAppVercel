// @Output() OtpInput = new EventEmitter();
import React, { useState } from 'react';
import { render } from 'react-dom';
import Layout from 'components/layout';
import OtpInput from 'components/common/OtpInput';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import styled from 'styled-components';
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { jointable_action } from './../redux/actions/orderAction';
import { auth } from '../utils/auth';
import cookie from 'js-cookie';
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
  font-weight: 500;
  right: 17px;
  color: #3cbcb4;
  font-size: 12px;
`;
const JoinTable = (props) => {
  const [code, setcode] = useState('');
  const joindtable = () => {
    props.jointable_action(code, props.router.query.qr_code, 'join_table');
    cookie.set('qr_code', props.router.query.qr_code, { expires: 365 });
  };
  const setJoinCode = (otp) => {
    setcode(otp);
    cookie.set('join_code', otp, { expires: 365 });
  };
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  return (
    <Layout>
      <div style={{ padding: 20 }}>
        <div style={{ padding: 10 }}>
          <div className="fo15" style={{ fontWeight: 500, color: '#404040' }}>
            It looks like there's already someone on this table. To join, you
            need to ask the person for the 4 digit code.
          </div>
          <h3 style={{ fontSize: 18, color: '#656565' }}>
            Join your friends on this table
          </h3>
          <small className="fo12 secondText">
            Enter the 4 digit code displayed on your friend's screen
          </small>
          <div style={{ marginTop: 20 }}>
            <OtpInput
              onChange={(otp) => setJoinCode(otp)}
              numInputs={4}
              value={code}
              separator={<span style={{ marginRight: 10 }}></span>}
              containerStyle="containerstyle"
              inputStyle={iOS ? 'inputstyle_ios' : 'inputstyle'}
              shouldAutoFocus={true}
              focusStyle="focusstyle"
              isInputNum={false}
              keyboardType="default"
            />
          </div>

          <div>
            <CheckoutText>Let's go</CheckoutText>
            <SetFilterIcon onClick={joindtable}>
              <FiChevronRight style={{ fontSize: 34, color: 'white' }} />
            </SetFilterIcon>
          </div>
        </div>
      </div>
      <style>{`
        .containerstyle{
            display: flex;
        }
        .inputstyle{
          border: none;
  border-bottom: solid #999999 1.5px;
  font-size: 20px;
  color:black;
      }
      .inputstyle_ios{
        border: none;
        border-bottom: solid #999999 1.5px;
        font-size: 20px;
        color:black;
        width:2em !important;
      }
        .focusstyle{
            border: none;
            outline: none;
            border-bottom: solid #3CBCB4 1.5px;
        }
        `}</style>
    </Layout>
  );
};
JoinTable.getInitialProps = async (ctx) => {
  console.log('this is ctx');
  const token = auth(ctx);
  return { token };
};
const mapDispatchToProps = (dispatch) => ({
  jointable_action: bindActionCreators(jointable_action, dispatch),
});
export default connect(null, mapDispatchToProps)(withRouter(JoinTable));

// export default JoinTable;
