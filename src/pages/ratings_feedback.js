import React from 'react';
import { H3 } from './../ui/headings';
import { FlexRow } from './../ui/Flex';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Layout from './../components/layout';
import styled from 'styled-components';
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
  background-image: url('/static/Layer 2/feedback-Layer-2.svg');
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
const RatingsFeedBack = () => {
  return (
    <Layout>
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
            Thank you for your review!
          </div>
          <h5 style={{ color: '#999999' }}>
            Your review has been added. You can see your review along with
            others in respective items. Keep reviewing. Happy toasting!
          </h5>

          <p
            className="pt20"
            style={{ color: '#3CBCB4', marginTop: 150, fontWeight: 600 }}
          >
            <FlexRow style={{ fontSize: 18 }}>
              <FiChevronLeft
                style={{ marginRight: 0, fontSize: 18, fontWeight: 600 }}
              />{' '}
              Back to Menu
            </FlexRow>
          </p>
          <div></div>
          {/* <div>
          <CheckoutText>CHECKOUT</CheckoutText>
          <SetFilterIcon>
            <FiChevronRight style={{ fontSize: 34, color: 'white' }} />
          </SetFilterIcon>
        </div> */}
        </div>
      </BackgroundImage>
    </Layout>
  );
};
export default RatingsFeedBack;
