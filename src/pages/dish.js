import React from 'react';
import Layout from 'components/layout';
import { FullWidthCard } from './../components/SpecialMenuCard/style';
import { SideButton, AddSidebutton } from './../components/common/button';
import { TitleCenter, SubTitle } from './../ui/Text';
import Veg from './../components/common/Veg';
import Checkbox from './../components/common/checkbox';
import { FlexBetween, FlexRow } from 'ui/Flex';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import BottomDrawer from 'ui/BottomDrawer';
import SliderCommon from '../components/common/slider/slider';
const dishDescription = () => {
  return (
    <Layout>
      <BottomDrawer title="open dishes">
        <div style={{ margin: 20, marginTop: -30 }}>
          <div>
            <FlexBetween>
              <FlexRow>
                <Veg />
                <TitleCenter>Aloha Acai (Medium)</TitleCenter>
              </FlexRow>
              <FlexRow>
                <img src="/static/close-24px(2).svg" />
              </FlexRow>
            </FlexBetween>
            <div>
              <h5 className="h" style={{ marginTop: -10 }}>
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
          <FlexRow>
            <SubTitle>Add Toppings </SubTitle>
            <FlexRow className="op" style={{ marginLeft: 10 }}>
              {' '}
              (optional)
            </FlexRow>
          </FlexRow>
          <p className="p" style={{ marginTop: -10 }}>
            Select a maximum of 3 toppings
          </p>
          <div style={{ marginTop: 10 }}>
            <FlexBetween>
              <FlexRow style={{ marginLeft: -10 }}>
                <div style={{ display: 'flex', marginTop: -31 }}>
                  <Checkbox />
                </div>
                <Veg />
                <FlexRow style={{ marginLeft: 10 }}>Fresh Fruit</FlexRow>
              </FlexRow>
              <FlexRow>₹25</FlexRow>
            </FlexBetween>
            <FlexBetween style={{ marginTop: 20 }}>
              <FlexRow style={{ marginLeft: -10 }}>
                <FlexRow style={{ display: 'flex', marginTop: -31 }}>
                  <Checkbox />
                </FlexRow>
                <Veg />
                <FlexRow style={{ marginLeft: 10 }}>Chia Seeds</FlexRow>
              </FlexRow>
              <FlexRow>₹25</FlexRow>
            </FlexBetween>

            <FlexBetween style={{ marginTop: 20 }}>
              <FlexRow style={{ marginLeft: -10 }}>
                <FlexRow style={{ display: 'flex', marginTop: -31 }}>
                  <Checkbox />
                </FlexRow>
                <Veg />
                <FlexRow style={{ marginLeft: 10 }}>Coconut Flakes</FlexRow>
              </FlexRow>
              <FlexRow>₹25</FlexRow>
            </FlexBetween>
            {/*    <FlexBetween>
              <FlexRow style={{ marginLeft: -10, marginTop: -10 }}>
                <FlexRow style={{ marginTop: 20 }}>
                  <Checkbox />
                </FlexRow>
                <Veg />
                <FlexRow style={{ marginLeft: 10 }}>Coconut Flakes</FlexRow>
              </FlexRow>
              <FlexRow>₹25</FlexRow>
            </FlexBetween>
            <FlexBetween>
              <FlexRow style={{ marginLeft: -10, marginTop: -10 }}>
                <FlexRow style={{ marginTop: 20 }}>
                  <Checkbox />
                </FlexRow>
                <Veg />
                <FlexRow style={{ marginLeft: 10 }}>House Granola</FlexRow>
              </FlexRow>
              <FlexRow>₹25</FlexRow>
            </FlexBetween>
            <FlexBetween>
              <FlexRow style={{ marginLeft: -10, marginTop: -10 }}>
                <FlexRow style={{ marginTop: 20 }}>
                  <Checkbox />
                </FlexRow>
                <Veg />
                <FlexRow style={{ marginLeft: 10 }}>Goji Berries</FlexRow>
              </FlexRow>
              <FlexRow>₹25</FlexRow>
            </FlexBetween>
            <FlexBetween>
              <FlexRow style={{ marginLeft: -10, marginTop: -10 }}>
                <FlexRow style={{ marginTop: 20 }}>
                  <Checkbox />
                </FlexRow>
                <Veg />
                <FlexRow style={{ marginLeft: 10 }}>Almonds</FlexRow>
              </FlexRow>
              <FlexRow>₹25</FlexRow>
            </FlexBetween> */}
            {/* <FlexBetween>
       
       <FlexRow style={{marginLeft:-10 ,marginTop:-10}}><FlexRow style={{marginTop:20}}><Checkbox/></FlexRow><Veg/><FlexRow style={{marginLeft:10}}>Cacoa Nibs</FlexRow></FlexRow>
       <FlexRow>₹25</FlexRow>

   </FlexBetween> */}
          </div>
        </div>{' '}
        <div style={{ marginTop: -10 }}>
          <FullWidthCard style={{ marginTop: 10 }}>
            {/* <FlexRow style={{ marginLeft: 240 }}> +0 Add-ons</FlexRow> */}
          </FullWidthCard>
        </div>
        <div
          style={{
            position: 'fixed',
            bottom: 0,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            width: '100%',
            padding: 15,
            opacity: 1,
          }}
          className="layoutselecteditem"
        >
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div style={{ color: 'white', marginRight: 100 }} className="tl">
              Total ₹410.00
            </div>
            <div style={{ color: 'white' }} className="tl">
              Add to tray (1/2)
            </div>
            <div style={{ color: 'white' }}>
              <FiChevronRight />
            </div>
          </div>
        </div>
        <style>{`
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
        .h{
            font: Medium var(--unnamed-font-size-12)/var(--unnamed-line-spacing-16) var(--unnamed-font-family-manrope);
            letter-spacing: var(--unnamed-character-spacing-0);
            color: var(--unnamed-color-999999);
            text-align: left;
            font: Medium 12px/16px Manrope;
            letter-spacing: 0px;
            color: #999999;
            opacity: 1;
        }
        .layoutselecteditem {
            background: transparent
              linear-gradient(170deg, #36c0db 0%, #007991 100%) 0% 0% no-repeat
              padding-box;
            width: '100%';
          }
          .pi{
            font: Medium var(--unnamed-font-size-12)/var(--unnamed-line-spacing-16) var(--unnamed-font-family-manrope);
            letter-spacing: var(--unnamed-character-spacing-0-36);
            text-align: left;
            font: Medium 12px/16px Manrope;
            letter-spacing: 0.36px;
            color: #40404099;
            opacity: 1;
          }
          .tl{
            font: SemiBold var(--unnamed-font-size-16)/var(--unnamed-line-spacing-22) var(--unnamed-font-family-manrope);
            letter-spacing: var(--unnamed-character-spacing-0);
            color: var(--unnamed-color-ffffff);
            text-align: left;
            font: SemiBold 16px/22px Manrope;
            letter-spacing: 0px;
            color: #FFFFFF;
            opacity: 1;
          }
          .op{
            font: SemiBold var(--unnamed-font-size-10)/var(--unnamed-line-spacing-12) var(--unnamed-font-family-manrope);
            letter-spacing: var(--unnamed-character-spacing-0-8);
            color: var(--unnamed-color-999999);
            text-align: left;
            font: SemiBold 10px/12px Manrope;
            letter-spacing: 0.8px;
            color: #999999;
            text-transform: uppercase;
            opacity: 1;
        
          }
          
      `}</style>
      </BottomDrawer>
    </Layout>
  );
};
export default dishDescription;
