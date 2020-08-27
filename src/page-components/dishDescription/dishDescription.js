import React, { useState, useEffect } from 'react';
import Layout from 'components/layout';
import { FullCard } from './../../components/SpecialMenuCard/style';
import { SideButton, AddSidebutton } from './../../components/common/button';
import { TitleCenter, SubTitle } from './../../ui/Text';
import Veg from './../../components/common/Veg';
import { FlexBetween, FlexRow } from 'ui/Flex';
import SliderCommon from '../../components/common/slider/slider';
import BottomDrawer from '../../ui/BottomDrawer';
import { connect } from 'react-redux';
import AddItem from 'components/common/AddItem';
import styled from 'styled-components';
import SetItemImage from '../../components/common/SetItemImage';
import ClipLoader from 'react-spinners/ClipLoader';
const DishDescription = React.memo((props) => {
  const {
    selected_menu_data,
    handle_initial_selected,
    get_item_review,
  } = props;
  const [review, setReview] = useState([]);
  console.log(props);
  useEffect(() => {
    setReview([]);
  }, []);
  useEffect(() => {
    setReview(get_item_review);
  }, [get_item_review]);
  const ImageSet = styled.div`
    background-image: url(${(props) => props.img});
    height: 190px;
    background-repeat: no-repeat;
    width: 100%;
    background-position: center;
    background-size: cover;
  `;
  console.log(props.load_item_review, 'this isisisisis');
  return (
    // <BottomDrawer>
    <div style={{ overflowY: 'hidden' }}>
      {handle_initial_selected && (
        <div style={{ width: '100%' }}>
          {/* <SliderCommon imge={selected_menu_data.item_image_url} /> */}

          <SetItemImage
            img={selected_menu_data.item_image_url}
            height={'46vh'}
            radiusNone={true}
          />
          <FullCard style={{ position: 'relative', padding: 0 }}>
            <div
              style={{ overflow: 'auto', height: '56vh', paddingBottom: 50, padding: "5px 20px" }}
            >
              <div>
                <FlexBetween>
                  <FlexRow style={{ marginBottom: 10 }}>
                    {selected_menu_data.item_type === 'nonveg' ||
                      selected_menu_data.item_type === 'non-veg' ? (
                        <Veg color={'#be0000'} />
                      ) : (
                        <Veg color={'#007436'} />
                      )}
                    <TitleCenter
                      style={{
                        marginTop: 0,
                        marginBottom: 0,
                        textAlign: 'left',
                      }}
                    >
                      {selected_menu_data.item_name}
                    </TitleCenter>
                  </FlexRow>
                  <FlexRow onClick={(e) => props.handleToggle(e)} style={{ width: 25 }}>
                    <img src="/static/close-24px(2).svg" style={{ width: 25, position: "absolute", right: 10 }} />
                  </FlexRow>
                </FlexBetween>
                <div>
                  <h5 style={{ color: '#000000', marginTop: -10, fontSize: 15, fontWeight: 300, }} className="h">
                    {selected_menu_data.item_description}
                  </h5>
                </div>
              </div>
              <FlexBetween>
                <FlexRow>
                  <div style={{ display: 'flex' }}>
                    {selected_menu_data.tags.map((val, i) => {
                      if (i === 0) {
                        return <SideButton title={val} />;
                      }
                      return (
                        <div style={{ marginLeft: 6 }}>
                          <SideButton title={val} />
                        </div>
                      );
                    })}
                  </div>
                </FlexRow>
              </FlexBetween>
              <hr className="line" />
              <SubTitle>Available Variants</SubTitle>
              {/* <p className="p">Select your preferred size</p> */}
              {selected_menu_data.item_price_details.map((val, i) => (

                <FlexBetween style={{ marginBottom: 10 }}>
                  <FlexRow style={{ fontSize: 16 }}>{val.item_size}</FlexRow>
                  <FlexRow>
                    <FlexRow style={{ marginRight: 10, fontSize: 16 }}>
                      ₹ {val.item_price}
                    </FlexRow>
                    {/* <AddItem val_data={selected_menu_data} /> */}
                    {/* <AddSidebutton title="add" /> */}
                  </FlexRow>
                </FlexBetween>
              )

              )}

              {/* <div style={{ marginTop: 10, marginBottom: 10 }}>
            <FlexBetween>
              <FlexRow>Large</FlexRow>
              <FlexRow>
                <FlexRow style={{ marginRight: 10 }}>₹480</FlexRow>
                <AddSidebutton title="add" />
              </FlexRow>
            </FlexBetween>
          </div> */}
              {/* <hr className="line" />
              <FlexBetween>
                <SubTitle>Top Reviews</SubTitle>
              </FlexBetween> */}
              {/* <FlexBetween>
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
            </FlexBetween> */}
              {/* {props.load_item_review === false ? (
                review.length !== 0 ? (
                  review.map((e) => (
                    <div>
                      <div style={{ marginTop: 10 }}>
                        <FlexBetween>
                          <FlexRow>
                            <img
                              src={
                                e.customer_profile_picture ||
                                '/static/jyyywsc2.png'
                              }
                              style={{
                                borderRadius: '100%',
                                height: 20,
                                width: 20,
                              }}
                              alt="not available"
                            ></img>
                            <FlexRow style={{ marginLeft: 6 }}>
                              <b>
                                {e.customer_name}{' '}
                                <span style={{ fontSize: 12, fontWeight: 600 }}>
                                  (Level {e.customer_level} Reviewer)
                                </span>
                              </b>
                              {console.log(e)}
                            </FlexRow>
                          </FlexRow>
                          <FlexRow>
                            <img
                              src={`/static/${
                                e.item_rating === 1
                                  ? '003-sick.svg'
                                  : e.item_rating === 2
                                    ? '005-arrogant.svg'
                                    : e.item_rating === 3
                                      ? '002-confused.svg'
                                      : e.item_rating === 4
                                        ? '004-happy.svg'
                                        : e.item_rating === 5 && '001-happy-1.svg'
                                }`}
                              alt="not available"
                            ></img>
                          </FlexRow>
                        </FlexBetween>
                        <FlexBetween>
                          <div style={{ marginLeft: 25 }}>{e.item_review}</div>
                        </FlexBetween>
                      </div>
                      <FlexBetween>
                        <FlexRow style={{ margin: 10, marginLeft: 25 }}>
                          {e.item_review_img_list.map((e) => (
                            <FlexRow style={{ marginRight: 5 }}>
                              <img
                                src="/static/fxhgyrnf.png"
                                alt="not availale"
                              ></img>
                            </FlexRow>
                          ))}
                        </FlexRow>
                      </FlexBetween>
                    </div>
                  ))
                ) : (
                    <div style={{ padding: 29, textAlign: 'center' }}>
                      No Reviews Found
                    </div>
                  )
              ) : (
                  <div style={{ padding: 20, textAlign: 'center' }}>
                    <ClipLoader
                      // css={override}
                      size={33}
                      color={'#123abc'}
                      loading={props.load_item_review}
                    />
                  </div>
                )} */}

              {/* <div style={{ marginTop: 10 }}>
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
              </div> */}
            </div>
          </FullCard>
        </div>
      )}
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
    </div>
    // </BottomDrawer>
  );
});
const mapStateToProps = (state) => ({
  selected_menu_data: state.orderReducer.selected_menu_data,
  handle_initial_selected: state.orderReducer.handle_initial_selected,
  get_item_review: state.orderReducer.get_item_review,
  load_item_review: state.orderReducer.load_item_review,
});
const mapDispatchToProps = (dispatch) => ({
  // dish_description: bindActionCreators(dish_description, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(DishDescription);
