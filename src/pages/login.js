import Reavt, { useState } from 'react';
import React from 'react';
import { H3 } from './../ui/headings';
import { FlexRow, FlexBetween } from './../ui/Flex';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import styled from 'styled-components';
import Layout from 'components/layout';
import { IoMdArrowDropdown } from 'react-icons/io';
import Input from '../components/common/input';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendOtp_action } from './../redux/actions/authAction';
import { ToastContainer, toast } from 'react-toastify';
import cookie from 'js-cookie';
import { check_auth } from '../utils/auth';
import { ButtonBottomFix } from 'components/common/button';
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
  right: 10px;
  color: #3cbcb4;
  font-size: 12px;
`;
const BackgroundImage = styled.div`
  background-image: url('${(props) => props.path}');
  background-repeat: no-repeat;
  background-position: ${(props) => props.pos};
  min-height: 100vh;
  background-position-x: ${(props) => props.posx};
  background-position-y:  ${(props) => props.posy};
  margin-top: -20px;
`;
const Login = (props) => {
  const [login, setlogin] = useState('');
  const [name, setname] = useState('');
  // const onsubmit_name = () => {
  //   props.updatename_action(name);
  // };
  const onchange = (value) => {
    setlogin(value);
  };
  const setname_func = (name) => {
    if (name === ' ') {
      return null;
    } else setname(name);
  };
  const onsubmit_login = () => {
    if (login.length === 10 && name.length !== 0) {
      cookie.set('name', name, { expires: 365 });
      props.sendOtp_action(login);
    } else if (login.length !== 10) {
      toast.error('Please enter a valid number', {
        position: 'top-right',
        autoClose: 3000,
      });
    } else if (name.length === 0) {
      toast.error('Please enter a valid name', {
        position: 'top-right',
        autoClose: 3000,
      });
    }
  };
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  return (
    <Layout>
      <div>
        {' '}
        <BackgroundImage
          path="/static/Path 636.svg"
          posx={'-89px'}
          posy="-92px"
          pos="top"
        >
          <BackgroundImage
            path="/static/Path 3891.svg"
            posx={'27vh'}
            posy="71vh"
            pos="bottom"
          >
            <div style={{ marginTop: 20, padding: 10 }}>
              <div
                style={{
                  color: '#404040',
                  fontSize: 14,
                  fontWeight: 700,
                  marginTop: 60,
                  marginBottom: 10,
                  fontWeight: 500,
                  marginLeft: 20,
                }}
              >
                Welcome
              </div>
              <img src="/static/text_dark.svg" style={{ marginLeft: 20, width: "40%" }} />
              <div style={{ marginLeft: 22 }}>
                <p
                  style={{
                    color: '#404040',
                    marginTop: 100,
                    fontWeight: 700,

                    fontSize: 18,
                  }}
                >
                  Sign-in
                </p>
                <h4 className="fo13"> Phone Number</h4>
                <FlexBetween>
                  <FlexRow>
                    <div style={{ position: 'relative', marginRight: 10 }}>
                      <select id="cars" className="option_layout" style={iOS ?  {fontSize:16}: {}}>
                        <option className="option_layout" selected >
                          +91
                        </option>
                      </select>
                      {/* <i class="arrow down"> */}
                      <IoMdArrowDropdown
                        style={{
                          position: 'absolute',
                          marginTop: 10,
                          right: 4,
                          fontSize: 22,
                        }}
                      />
                    </div>
                    <Input
                      width={183}
                      text={login}
                      onchange={onchange}
                      type="number"
                      style={iOS  ? {fontSize:"16px"}: {}}
                    />
                    {/* </i> */}
                    
                  </FlexRow>
                </FlexBetween>

                <h4 className="fo13">What should we call you?</h4>
                <FlexBetween>
                  <FlexRow>
                    <Input
                      width={249}
                      value={name}
                      placeholder="Tell us your name"
                      onchange={(e) => setname_func(e)}
                      type="text"
                      style={iOS ? {fontSize:"16px"}: {}}
                    />
                  </FlexRow>
                  {/* <input
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                    placeholder="Tell us your name"
                    style={{
                      border: 'none',
                      borderBottom: 'solid #999999 0.8px',
                      fontSize: 16,
                      outline: 'none',
                    }}
                  /> */}
                </FlexBetween>
              </div>
              {/* <div>
      <CheckoutText>CHECKOUT</CheckoutText>
      <SetFilterIcon>
        <FiChevronRight style={{ fontSize: 34, color: 'white' }} />
      </SetFilterIcon>
    </div> */}
            </div>
          </BackgroundImage>
        </BackgroundImage>
      </div>
      <div>
        <CheckoutText style={{ right: 25 }}>LOGIN</CheckoutText>
        <SetFilterIcon onClick={onsubmit_login}>
          <FiChevronRight style={{ fontSize: 34, color: 'white' }} />
        </SetFilterIcon>
      </div>
      <style>
        {`
        ${ `input[type='text'],
        input[type='number'],
        textarea {
          font-size: 16px;
        }`}
       select {
        -webkit-appearance: none;
        -moz-appearance: none;
        text-indent: 1px;
        text-overflow: '';
    }
          .option_layout{
            background: #9999991a;
            padding: 8px 25px 10px 8px;
            color: #404040;
            font-weight: 500;
            border: solid #99999926 1px;
            border-radius:8px;
          }
          .arrow {
            border: solid black;
            border-width: 0 3px 3px 0;
            display: inline-block;
            padding: 3px;
          }
          .down {
            transform: rotate(45deg);
            -webkit-transform: rotate(45deg);
          }
          
          `}
      </style>
    </Layout>
  );
};

Login.getInitialProps = async (ctx) => {
  const qrc_check = check_auth(ctx);
  return { qrc_check };
};
const mapDispatchToProps = (dispatch) => ({
  sendOtp_action: bindActionCreators(sendOtp_action, dispatch),
});
export default connect(null, mapDispatchToProps)(Login);
// export default ;
