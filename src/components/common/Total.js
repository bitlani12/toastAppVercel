import React, { useState, useEffect } from 'react';
import { FlexRow, FlexBetween } from '../../ui/Flex';
import { FiChevronRight } from 'react-icons/fi';
import Link from 'next/link';
import Router from 'next/router';
import { CardLayout, FullWidthCard } from './../SpecialMenuCard/style';
export const Coupon = (props) => {
  let discount = {};
  if (props.billing_data !== undefined) {
    discount = props.billing_data;
  }

  return (
    <div>
      {props.billing_data !== undefined &&
        props.billing_data.coupon_id === null ? (
          <FlexBetween
            style={{ padding: ' 15px 10px 15px 10px' }}
            className="p10"
          >
            <div className="add-coupon" onClick={() => props.onClick()}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src="/static/code.svg" style={{ paddingRight: 8 }} />
              Add Coupon
            </div>{' '}
              <FiChevronRight
                style={{ color: '#3CBCB4', width: 20, height: 20 }}
              />
            </div>
          </FlexBetween>
        ) : (
          <div onClick={() => props.onClick()}>
            <FlexBetween
              className="p10"
              style={{ padding: ' 15px 10px 15px 10px' }}
            >
              <FlexRow>
                <img src="/static/code.svg" style={{ paddingRight: 8 }} /> Coupon
              applied:
              <div className="ml10" style={{ color: '#F7B239' }}>
                  {discount.coupon_title}
                </div>
              </FlexRow>
              <FlexRow className="ta">
                {/* 25% off{' '} */}
                <FlexRow style={{ color: '#3CBCB4', marginLeft: 8 }}>
                  {' '}
                ₹{discount.coupon_discount}
                </FlexRow>{' '}
                <FlexRow>
                  <FiChevronRight style={{ color: '#3CBCB4' }} />
                </FlexRow>
              </FlexRow>
            </FlexBetween>
          </div>
        )}
    </div>
  );
};

export const GrandTotal = (props) => {
  console.log(props);

  const [data, setData] = useState({
    discount_details: {},
    order_details: {},
    payment_details: {},
    restraunt_details: {},
    tax_details: {},
    tip_details: {},
  });

  useEffect(() => {
    setData({
      ...data,
      discount_details: props.billing_data.discount_details,
      order_details: props.billing_data.order_details,
      payment_details: props.billing_data.payment_details,
      restraunt_details: props.billing_data.restraunt_details,
      tax_details: props.billing_data.tax_details,
      tip_details: props.billing_data.tip_details,
    });
  }, [props.billing_data]);

  const i = 1;
  return (
    <>
      {data.discount_details && (
        <div>
          <FlexBetween className="p10">
            <FlexRow>Item total</FlexRow>
            <FlexRow>₹{data.order_details.order_amount}</FlexRow>
          </FlexBetween>
          {console.log(data.tax_details, "this is tax details")}
          {props.billing_data.tax_details && props.billing_data.tax_details.map((val) => (
            <FlexBetween className="p10">
              <FlexRow className="ta" >{val.tax_name}</FlexRow>
              <FlexRow >₹{val.tax_amount}  <span style={{ fontWeight: 8 }}>  ({val.tax_percentage}%)</span></FlexRow>
            </FlexBetween>
          ))}
          {/* <FlexBetween className="p10">
            <FlexRow className="ta">GST</FlexRow>
            <FlexRow>₹{data.tax_details.gst_amount}</FlexRow>
          </FlexBetween> */}
          {/* <FlexBetween className="p10">
            <FlexRow className="ta">GST</FlexRow>
            <FlexRow>₹{data.tax_details.gst_amount}</FlexRow>
          </FlexBetween>
          <FlexBetween className="p10">
            <FlexRow className="ta">Service Tax</FlexRow>
            <FlexRow>₹{data.tax_details.service_tax_amount}</FlexRow>
          </FlexBetween> */}
          {data.discount_details.restraunt_discount_amount !== 0 && (
            <FlexBetween className="p10">
              <FlexRow className="ta">Restaurant Discount</FlexRow>
              <FlexRow style={{ color: '#3CBCB4' }}>
                ₹-{data.discount_details.restraunt_discount_amount}
              </FlexRow>
            </FlexBetween>
          )}
          {data.discount_details.coupon_discount !== 0 && (
            <FlexBetween className="p10">
              <FlexRow className="ta">Coupon discount</FlexRow>
              <FlexRow style={{ color: '#3CBCB4' }}>
                - ₹{data.discount_details.coupon_discount}
              </FlexRow>
            </FlexBetween>
          )}
          {data.discount_details.zomato_gold_discount !== 0 && (
            <FlexBetween className="p10">
              <FlexRow className="ta">Zomato Gold discount</FlexRow>
              <FlexRow style={{ color: '#3CBCB4' }}>
                - ₹{data.discount_details.zomato_gold_discount}
              </FlexRow>
            </FlexBetween>
          )}
          {data.tip_details.tip_amount !== 0 && (
            <FlexBetween className="p10">
              <FlexRow className="ta">Tip</FlexRow>
              <FlexRow>₹{data.tip_details.tip_amount}</FlexRow>
            </FlexBetween>
          )}
          <hr className="line" />
          <FlexBetween className="gr p10" style={{ paddingTop: 5 }}>
            <FlexRow style={{ fontSize: 16 }}>Grand Total</FlexRow>
            <FlexRow style={{ fontSize: 16 }}>
              ₹{data.payment_details.payment_amount}
            </FlexRow>
          </FlexBetween>
          <style>{`
                .line{
                    border: 1px solid #BFBFBF80;
                    opacity: 1;
                }
                .ad{
                    font: Medium var(--unnamed-font-size-10)/var(--unnamed-line-spacing-14) var(--unnamed-font-family-manrope);
                    letter-spacing: var(--unnamed-character-spacing-0);
                    color: var(--unnamed-color-999999);
                    text-align: left;
                    font: Medium 10px/14px Manrope;
                    letter-spacing: 0px;
                    color: #999999;
                    opacity: 1;

          
                    }
                .ta{
                    ont: Medium var(--unnamed-font-size-10)/var(--unnamed-line-spacing-14) var(--unnamed-font-family-manrope);
                    letter-spacing: var(--unnamed-character-spacing-0);
                    color: var(--unnamed-color-999999);
                    text-align: left;
                    font: Medium 10px/14px Manrope;
                    letter-spacing: 0px;
                    color: #999999;
                    opacity: 1;
                    }
                .gr{
                        font: SemiBold var(--unnamed-font-size-14)/var(--unnamed-line-spacing-20) var(--unnamed-font-family-manrope);
                        letter-spacing: var(--unnamed-character-spacing-0);
                        color: var(--unnamed-color-404040);
                        text-align: left;
                        font: SemiBold 14px/20px Manrope;
                        letter-spacing: 0px;
                        color: #404040;
                        opacity: 1;
                    }
                    .add-coupon{
                      display:flex;
                      justify-content:space-between;
                      width:100%;
                      
                    }
                   
     `}</style>
        </div>
      )}
    </>
  );
};
