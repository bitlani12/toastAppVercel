import React from 'react';
import Layout from 'components/layout';
import { FullCard } from './../components/SpecialMenuCard/style';
import { SideButton, AddSidebutton } from './../components/common/button';
import { TitleCenter, SubTitle } from './../ui/Text';
import Veg from './../components/common/Veg';
import { FlexBetween, FlexRow } from 'ui/Flex';
import SliderCommon from '../components/common/slider/slider';
const dishDescription = () => {
  return (
    <Layout>
      <div style={{ width: '100%', overflowX: 'hidden' }}>
        <SliderCommon />
        <FullCard>
          <div>
            <FlexBetween>
              <FlexRow style={{ marginBottom: 10 }}>
                <Veg />

                <TitleCenter style={{ marginTop: 0, marginBottom: 0 }}>
                  Aloha Acai
                </TitleCenter>
              </FlexRow>
              <FlexRow>
                <img src="/static/close-24px(2).svg" />
              </FlexRow>
            </FlexBetween>
            <div>
              <h5 style={{ color: '#999999', marginTop: -10 }}>
                Blended with frozen mango & pineapple, topped with fresh
                <br /> fruit, goji berries, fresh coconut, and house granola.
              </h5>
            </div>
          </div>
          <FlexBetween>
            <FlexRow>
              <div style={{ display: 'flex' }}>
                <SideButton title="VEGAN" />
                <div style={{ marginLeft: 6 }}>
                  <SideButton title="gluten free" style={{ margin: '10px' }} />
                </div>
              </div>
            </FlexRow>
          </FlexBetween>
          <hr className="line" />
          <SubTitle>Select Size</SubTitle>
          <p className="p">Select your preferred size</p>
          <FlexBetween>
            <FlexRow>Medium</FlexRow>
            <FlexRow>
              <FlexRow style={{ marginRight: 10 }}>₹410</FlexRow>
              <AddSidebutton title="add" />
            </FlexRow>
          </FlexBetween>
          <div style={{ marginTop: 10, marginBottom: 10 }}>
            <FlexBetween>
              <FlexRow>Large</FlexRow>
              <FlexRow>
                <FlexRow style={{ marginRight: 10 }}>₹480</FlexRow>
                <AddSidebutton title="add" />
              </FlexRow>
            </FlexBetween>
          </div>
          <hr className="line" />
          <FlexBetween>
            <SubTitle>Top Reviews</SubTitle>
          </FlexBetween>
          <FlexBetween>
            <FlexRow>
              <img src="/static/t5ldz341.png" alt="not available"></img>
              <FlexRow style={{ marginLeft: 6 }}>
                <b>Shweta Ganesh</b>
              </FlexRow>
            </FlexRow>
            <FlexRow>
              <img src="/static/001-happy-1.svg" alt="not available"></img>{' '}
            </FlexRow>
          </FlexBetween>
          <FlexBetween>
            <div style={{ marginLeft: 25 }}>So fresh, so healthy!👏</div>
          </FlexBetween>
          <div style={{ marginTop: 10 }}>
            <FlexBetween>
              <FlexRow>
                <img src="/static/jyyywsc2.png" alt="not available"></img>
                <FlexRow style={{ marginLeft: 6 }}>
                  <b>Username</b>
                </FlexRow>
              </FlexRow>
              <FlexRow>
                <img src="/static/001-happy-1.svg" alt="not available"></img>{' '}
              </FlexRow>
            </FlexBetween>
            <FlexBetween>
              <div style={{ marginLeft: 25 }}>
                Acai bowl is just the answer to beat Hyderabad
                <br /> summers.
              </div>
            </FlexBetween>
          </div>
          <FlexBetween>
            <FlexRow style={{ margin: 10, marginLeft: 25 }}>
              <FlexRow style={{ marginRight: 5 }}>
                <img src="/static/fxhgyrnf.png" alt="not availale"></img>
              </FlexRow>
              <FlexRow style={{ marginRight: 5 }}>
                <img src="/static/fy1qh542.png" alt="not availale"></img>
              </FlexRow>
              <FlexRow>
                <img src="/static/zrpl20ak.svg" alt="not availale"></img>
              </FlexRow>
            </FlexRow>
          </FlexBetween>
          <div style={{ marginTop: 10 }}>
            <FlexBetween>
              <FlexRow>
                <img src="/static/jyyywsc2.png" alt="not available"></img>
                <FlexRow style={{ marginLeft: 6 }}>
                  <b>Username</b>
                </FlexRow>
              </FlexRow>
              <FlexRow>
                <img src="/static/001-happy-1.svg" alt="not available"></img>{' '}
              </FlexRow>
            </FlexBetween>
            <FlexBetween>
              <div style={{ marginLeft: 25 }}>
                Acai bowl is just the answer to beat Hyderabad
                <br /> summers.
              </div>
            </FlexBetween>
          </div>
        </FullCard>
      </div>
      <style>{`
      .slick-dots{
        margin-bottom:40px;
      }
      .slick-dots li.slick-active button:before{
        color:#fff;
      }
        .line {
          border:  1px solid #BFBFBF80;
        }
        .p{
          font: Medium var(--unnamed-font-size-10)/var(--unnamed-line-spacing-14) var(--unnamed-font-family-manrope);
          letter-spacing: var(--unnamed-character-spacing-0);
          color: var(--unnamed-color-999999);
          text-align: left;
          font: Medium 10px/14px Manrope;
          letter-spacing: 0px;
          color: #999999;
          opacity: 0.6;
        }
      `}</style>
    </Layout>
  );
};
export default dishDescription;
