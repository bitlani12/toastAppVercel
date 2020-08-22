import React from 'react';
import Layout from 'components/layout';
import { FullWidthCard, FullCard } from '../components/SpecialMenuCard/style';
import {
  SideButton,
  AddSidebutton,
  ButtonBottomFix,
} from '../components/common/button';
import { TitleCenter, SubTitle } from '../ui/Text';
import Veg from '../components/common/Veg';
import { FlexBetween, FlexRow } from 'ui/Flex';
import styled from 'styled-components';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import BottomDrawer from 'ui/BottomDrawer';
const dishSelection = () => {
  return (
    <Layout>
      <BottomDrawer title="dish selection">
        <div style={{ margin: 20, marginTop: -20 }}>
          <div>
            <FlexBetween>
              <FlexRow>
                <Veg />
                <TitleCenter>Aloha Acai</TitleCenter>
              </FlexRow>
              <FlexRow>
                <img src="/static/close-24px(2).svg" />
              </FlexRow>
            </FlexBetween>
            <div>
              <p style={{ color: '#999999', marginTop: -10 }} className="para">
                Blended with frozen mango & pineapple, topped with fresh
                <br /> fruit, goji berries, fresh coconut, and house granola.
              </p>
            </div>
          </div>
          <hr className="line" />
          <SubTitle>Select Size</SubTitle>
          <p className="p">Select your preferred size</p>
          <FlexBetween>
            <FlexRow>
              <FlexRow style={{ marginRight: 10 }}>
                <img src="/static/radio_button_checked-24px.svg" />
              </FlexRow>
              Medium
            </FlexRow>
            <FlexRow>
              <FlexRow style={{ marginRight: 10 }}>₹410</FlexRow>
            </FlexRow>
          </FlexBetween>
          <div style={{ marginTop: 10, marginBottom: 10 }}>
            <FlexBetween>
              <FlexRow>
                <FlexRow style={{ marginRight: 10 }}>
                  <img src="/static/radio_button_checked-24px.svg" />
                </FlexRow>
                Large
              </FlexRow>
              <FlexRow>
                <FlexRow style={{ marginRight: 10 }}>₹480</FlexRow>
              </FlexRow>
            </FlexBetween>
          </div>
        </div>
        <FullWidthCard style={{ marginTop: -10 }}>
          <p className="pi">Medium Aloha Acai</p>
        </FullWidthCard>
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
        .layoutselecteditem {
            background: transparent linear-gradient(174deg, var(--unnamed-color-78ffd6) 0%, var(--unnamed-color-007991) 100%) 0% 0% no-repeat padding-box;
            background: transparent linear-gradient(174deg, #78FFD6 0%, #007991 100%) 0% 0% no-repeat padding-box;
            opacity: 1;
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
          .para{
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
      </BottomDrawer>
    </Layout>
  );
};
export default dishSelection;
