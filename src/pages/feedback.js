import React from 'react';
import { FlexRow } from './../ui/Flex';
import { FiChevronLeft } from 'react-icons/fi';
import styled from 'styled-components';
import { auth } from '../utils/auth';
import Layout from 'components/layout';
import { Router } from 'next/router';
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
  font-weight: 600;
  right: 10px;
  color: #3cbcb4;
  font-size: 12px;
`;
const BackgroundImage = styled.div`
  background-image: url('/static/Layer 2.svg');
  background-repeat: no-repeat;
  background-position: bottom;
  min-height: 100vh;
  position: fixed;
  background-position-x: inherit;
  overflow: hidden;
`;
{
  /* <img src="/static/Layer 2/Layer 2.png" /> */
}
const Feedback = () => {
  return (
    <Layout>
      <CouponPopupState />
      <BackgroundImage>
        <div style={{ marginTop: 20, padding: 25 }}>
          <div
            style={{
              color: '#404040',
              fontSize: 18,
              fontWeight: 600,
              marginTop: 2,
            }}
          >
            {' '}
            Thank You for your feedback!{' '}
          </div>
          <h5 style={{ color: '#999999' }}>
            Your feedback directly send to the manager.We <br />
            assure you to help you as much as we can.
          </h5>

          <p
            className="pt20"
            style={{ color: '#3CBCB4', marginTop: 400, fontWeight: 600 }}
          >
            <FlexRow
              style={{ marginTop: -150, fontSize: 18 }}
              onClick={() => Router.push('/')}
            >
              <FiChevronLeft
                style={{ marginRight: 0, fontSize: 18, fontWeight: 600 }}
              />{' '}
              Back to Home
            </FlexRow>
          </p>
          <div></div>
        </div>
      </BackgroundImage>
    </Layout>
  );
};
Feedback.getInitialProps = async (ctx) => {
  console.log('this is ctx');
  const token = auth(ctx);
  return { token };
};
export default Feedback;

class CouponPopupState extends React.Component {
  componentDidUpdate() {
    window.onpopstate = (e) => {
      // history.replaceState(null, null, '/');
      history.go(0);
      // this.Router.push('/');
    };
  }
  render() {
    return <div></div>;
  }
}
