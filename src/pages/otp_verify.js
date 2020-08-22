import React, { Component } from 'react';
import OtpInput from 'react-otp-input';
import Layout from 'components/layout';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  verifyotp_action,
  updatename_action,
} from './../redux/actions/authAction';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Cookie from 'js-cookie';
import styled from 'styled-components';
import { withRouter } from 'next/router';
import { useRouter } from 'next/router';
import { check_auth } from '../utils/auth';
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
class OtpVerify extends Component {
  state = { otp: '' };
  onverify_otp = () => {
    const callBack = () => {
      console.log('this is callback');
      this.props.updatename_action(Cookie.get('name'));
    };
    this.props.verifyotp_action(
      this.state.otp,
      this.props.router.query.mobile,
      callBack
    );
  };
  static async getInitialProps() {
    console.log('this is ctx');
    const token = auth(ctx);
    return { token };
  }
  render() {
    // const {
    //   query: { mobile },
    // } = useRouter();
    console.log(this.props.router.query.mobile, 'this is mobile');
    const { otp } = this.state;
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    console.log(iOS, 'this is ios ss');
    return (
      <Layout>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            height: '100vh',
          }}
        >
          <div style={{ padding: 20 }}>
            <div
              style={{ color: '#404040', fontSize: 18, fontWeight: 'inherit' }}
            >
              Verify OTP
            </div>
            <h4 className="fo14" style={{ lineHeight: 1.3 }}>
              A one time password has been sent to your phone number. Please
              enter the same to login.
            </h4>
            <div>
              <OtpInput
                onChange={(otp) => this.setState({ otp: otp })}
                numInputs={6}
                value={otp}
                separator={<span style={{ marginRight: 10 }}></span>}
                containerStyle="containerstyle"
                inputStyle={iOS ? 'inputstyle_ios' : 'inputstyle'}
                isInputNum={true}
                shouldAutoFocus={true}
                focusStyle="focusstyle"
              />
            </div>
          </div>

          <div>
            <CheckoutText>Let's go</CheckoutText>
            <SetFilterIcon onClick={this.onverify_otp}>
              <FiChevronRight style={{ fontSize: 34, color: 'white' }} />
            </SetFilterIcon>
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
            color:black;
        }
        input{
          color:black;
        }
        input, select, textarea{
          color: #000;
      }
      input:focus{
        color:black;
      }
        `}</style>
      </Layout>
    );
  }
  static getInitialProps({ query }) {
    return query;
  }
}
OtpVerify.getInitialProps = async (ctx) => {
  const qrc_check = check_auth(ctx);
  return { qrc_check };
};

const mapDispatchToProps = (dispatch) => ({
  verifyotp_action: bindActionCreators(verifyotp_action, dispatch),
  updatename_action: bindActionCreators(updatename_action, dispatch),
});
export default connect(null, mapDispatchToProps)(withRouter(OtpVerify));
// export default OtpVerify;
