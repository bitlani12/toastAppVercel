import React, { useState } from 'react';
import Layout from 'components/layout';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updatename_action } from './../redux/actions/authAction';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
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
  right: 10px;
  color: #3cbcb4;
  font-size: 12px;
`;
const UpdateName = (props) => {
  const [name, setname] = useState('');
  const onsubmit_name = () => {
    //append the values with key, value pair
    props.updatename_action(name);
  };
  return (
    <Layout>
      <BackgroundImage>
        <div style={{ padding: 20 }}>
          <img src="/static/Component 47 – 3.svg" />
        </div>
        <div style={{ position: 'fixed', bottom: 100, left: 20 }}>
          <h3 style={{ fontWeight: 800, fontSize: 18, color: '#404040' }}>
            What should we call you?{' '}
          </h3>
          <input
            value={name}
            onChange={(e) => setname(e.target.value)}
            placeholder="Tell us your name"
            style={{
              border: 'none',
              borderBottom: 'solid #999999 0.8px',
              fontSize: 16,
            }}
          />
        </div>
      </BackgroundImage>
      <div>
        <CheckoutText>Let's Go</CheckoutText>
        <SetFilterIcon onClick={onsubmit_name}>
          <FiChevronRight style={{ fontSize: 34, color: 'white' }} />
        </SetFilterIcon>
      </div>
      <style>{`
      ::placeholder{
          font-size:14px;
          margin-bottom:5px;
      }`}</style>
    </Layout>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updatename_action: bindActionCreators(updatename_action, dispatch),
});
export default connect(null, mapDispatchToProps)(UpdateName);
