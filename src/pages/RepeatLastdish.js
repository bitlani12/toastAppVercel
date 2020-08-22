import React from 'react';
import Layout from 'components/layout';
import { NewButton, NeButton } from '../components/common/button';
import { TitleCenter, SubTitle } from '../ui/Text';
import Veg from '../components/common/Veg';
import { FlexBetween, FlexRow } from 'ui/Flex';
import BottomDrawer from 'ui/BottomDrawer';
const RepeatLastdish = () => {
  return (
    <Layout>
      <BottomDrawer title="repeat last dish">
        <div style={{ margin: 20, marginTop: -20 }}>
          <div>
            <div>
              <FlexBetween>
                <SubTitle>Repeat Last Customization?</SubTitle>
                <FlexRow>
                  <img src="/static/close-24px(2).svg" />
                </FlexRow>
              </FlexBetween>
            </div>

            <div>
              <hr className="line" />
              <FlexBetween>
                <FlexRow>
                  <Veg />
                  <TitleCenter>Aloha Acai</TitleCenter>
                </FlexRow>
              </FlexBetween>
            </div>
            <FlexBetween>
              <FlexRow>
                <div style={{ display: 'flex' }}>
                  <div className="to">Toppings:</div>
                  <div className="fre">Fresh Fruits, Goji Berries</div>
                </div>
              </FlexRow>
            </FlexBetween>
            <FlexBetween>
              <div style={{ display: 'flex', marginTop: 20 }}>
                <NewButton
                  title="add new"
                  style={{
                    paddingRight: 15,
                    paddingLeft: 15,
                    paddingTop: 10,
                    paddingBottom: 13,
                  }}
                  className="adnew"
                />
                <div style={{ marginLeft: 18 }}>
                  <NeButton
                    title="repeat last"
                    style={{
                      margin: '10px',
                      paddingRight: 15,
                      paddingLeft: 15,
                      paddingTop: 10,
                      paddingBottom: 13,
                    }}
                  />
                </div>
              </div>
            </FlexBetween>
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
          .fre{
            font: Medium var(--unnamed-font-size-12)/var(--unnamed-line-spacing-16) var(--unnamed-font-family-manrope);
            letter-spacing: var(--unnamed-character-spacing-0);
            color: var(--unnamed-color-999999);
            text-align: left;
            font: Medium 12px/16px Manrope;
            letter-spacing: 0px;
            color: #999999;
          }
          .to{
            font: Medium var(--unnamed-font-size-12)/var(--unnamed-line-spacing-16) var(--unnamed-font-family-manrope);
            letter-spacing: var(--unnamed-character-spacing-0);
            text-align: left;
            font: Medium 12px/16px Manrope;
            letter-spacing: 0px;
            opacity: 1;
          }
          .adnew{
            background: transparent linear-gradient(167deg, var(--unnamed-color-78ffd6) 0%, var(--unnamed-color-007991) 100%) 0% 0% no-repeat padding-box;
            background: transparent linear-gradient(167deg, #78FFD6 0%, #007991 100%) 0% 0% no-repeat padding-box;
            box-shadow: 0px 3px 6px #00000029;
            border-radius: 10px;
            opacity: 1;
          }
      `}</style>
      </BottomDrawer>
    </Layout>
  );
};
export default RepeatLastdish;
