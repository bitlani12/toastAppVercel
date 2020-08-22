import React, { useState } from 'react';
import Layout from 'components/layout';
import { FullWidthCard } from './../../components/SpecialMenuCard/style';
import {
  SideButton,
  AddSidebutton,
  IncreaseItem,
  DecreaseItem,
  NewButton,
  NeButton,
} from './../../components/common/button';
import { TitleCenter, SubTitle } from './../../ui/Text';
import Veg from './../../components/common/Veg';
import Checkbox from './../../components/common/checkbox';
import RadioForAddOns from './../../components/common/RadioForAddOns';
import { FlexBetween, FlexRow } from 'ui/Flex';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import BottomDrawer from 'ui/BottomDrawer';
import RadioButton from './../../components/common/radiobutton';
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  add_item,
  add_item_increase,
  add_item_decrease,
  repeat_last_addon,
  add_to_tray,
  add_item_decrease_addon,
} from '../../redux/actions/orderAction';
import Drawer, {
  DrawerContainer,
  MainContentContainer,
  DrawerOverlay,
} from 'react-swipeable-drawer';
import { ToastContainer, toast } from 'react-toastify';
import AddOnMaterialDrawer from './AddOnsMaterialDrawer';
const AddBtn = styled.button`
  background: var(--unnamed-color-3cbcb4) 0% 0% no-repeat padding-box;
  background: #3cbcb4 0% 0% no-repeat padding-box;
  border-radius: 10px;
  opacity: 1;
  padding: 5px 10px;
  color: white;
`;
import SliderCommon from '../../components/common/slider/slider';
import styled from 'styled-components';
import MaterialDrawer from 'components/common/MaterialDrawer';
const AddOns = (props) => {
  const [open, setopen] = useState(false);
  const [checked, setchecked] = useState(false);
  const [addon_list, set_addon_list] = useState([]);
  const [addon_again, set_addon_again] = useState(false);
  const [increase_reducer, set_increase_reducer] = useState(false);
  const [itemSize, set_itemSize] = useState(
    props.val_data.item_price_details[0]
  );
  const same_item_id_detail = props.addItem.filter((val) => {
    return val.item_id === props.val_data.item_id;
  });
  const toggleDrawer = (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setopen(!open);
  };
  console.log(addon_list, 'this is add ons +++++++++==');
  const handleaddon = (event, toggleDrawer) => {
    // event.stopPropagation();
    set_addon_again(false);
  };
  const handle_addtotray = (event, toggleDrawer) => {
    let idAlreadyExists;
    let x = [];
    let z = [];
    idAlreadyExists = val_data.addon_details.filter(
      (val) =>
        val.addon_limit_optional === false && val.addon_items.length !== 0
    );
    let optional_true_false = false;
   
    if (addon_list.length !== 0) {
     addon_list.map((val, i) => {
        idAlreadyExists.map((item,index) => {
          if (item.addon_cateogry_id === val.addon_category_id) {
            idAlreadyExists.splice(index, 1);
          }
        });
    });
  } else {
  }

    if (idAlreadyExists.length > 0) {
      toast.error(
        `Please select atleast one ${idAlreadyExists[0].addon_category_name}`,
        {
          position: 'top-right',
          autoClose: 3000,
        }
      );

      return false;
    } else {
      event.stopPropagation();

      const add_item = {
        item_id: val_data.item_id,
        item_name: val_data.item_name,
        item_price_details: [itemSize],
        qty: 1,
        addon_details: addon_list,
      };
      increase_reducer ? props.add_to_tray(add_item) : props.add_item(add_item);
      toggleDrawer(event);
    }
  };
  const unchecked = (ifduplicate) => {
    console.log('this is uncheck');
    set_addon_list(addon_list.filter((e, i) => i !== ifduplicate));
  };

  const handlevalue_increase = (event) => {
    // event.stopPropagation();
    set_addon_again(true);
    set_increase_reducer(true);
  };
  const repeat_last_addon = () => {
    event.stopPropagation();
    props.repeat_last_addon(props.addItem);
  };
  const handlevalue_decrease = (event) => {
    event.stopPropagation();
    props.add_item_decrease_addon(props.val_data);
  };

  const handlechecked = (addon, limit) => {
    const addon_list2 = {
      addon_category_id: addon.addon_category_id,
      addon_id: addon.addon_id,
      addon_price: addon.addon_price[0].price,
      addon_name: addon.addon_name,
      addon_size: addon.addon_price[0].name,
    };
    console.log(addon_list2, addon, 'this is addon list 2 hhh kkk');
    const ifduplicate = addon_list.findIndex((i) => {
      return i.addon_id === addon.addon_id;
    });
    console.log(ifduplicate, addon_list, 'this is duplicate');
    if (ifduplicate >= 0) {
      unchecked(ifduplicate);
    } else {
      const lookup = addon_list.filter((i) => {
        return i.addon_category_id === addon_list2.addon_category_id;
      });
      console.log(addon, limit, 'this is length');
      if (limit <= lookup.length) {
        return toast.error(
          `Maximum of ${limit} ${addon.addon_category_name} can be selected`,
          {
            position: 'top-right',
            autoClose: 3000,
          }
        );
      }
      // if(lookup.length)
      else set_addon_list([...addon_list, addon_list2]);
    }
  };

  const handlesizeType = (e, size) => {
    e.stopPropagation();
    console.log('hiii');
    console.log(itemSize);
    set_itemSize(size);
  };
  const onHandleAddNew = () => {
    console.log('hii ++');
    set_addon_again(false);
    set_increase_reducer(true);
  };
  const { val_data } = props;
  const totalPrice = () => {
    let lastPrice = 0;
    addon_list.map((val) => {
      console.log(lastPrice, val.addon_price, 'this is price');
      lastPrice = parseInt(val.addon_price) + lastPrice;
    });

    return lastPrice + itemSize.item_price;
  };
  const totalqty = () => {
    let lastqty = 0;
    same_item_id_detail.map((val) => {
      lastqty = parseInt(lastqty) + val.qty;
    });
    return lastqty;
  };

  let last_addons_list = [];
  const last_customization_addons = () => {
    last_addons_list = props.addItem.filter(
      (val) => props.val_data.item_id === val.item_id
    );
  };
  last_customization_addons();

  console.log(last_addons_list, 'this is repeat last reducer +++++++++');
  return (
    <div>
      <AddOnMaterialDrawer
        toggleDrawer={toggleDrawer}
        heightss={addon_again}
        open={open}
        title={
          props.is_addon_inc_dec ? (
            <FlexRow style={{ height: 30 }}>
              <div onClick={handlevalue_decrease}>
                <DecreaseItem />
              </div>

              {totalqty()}
              <div
                onClick={(e) => {
                  handlevalue_increase(e), toggleDrawer(e);
                }}
              >
                <IncreaseItem />
              </div>
            </FlexRow>
          ) : (
              <div
                onClick={(e) => {
                  handleaddon(e), toggleDrawer(e), set_increase_reducer(false);
                }}
              >
                <AddBtn style={{ height: 30 }}>Add</AddBtn>
              </div>
            )
        }
      >
        {addon_again !== true ? (
          <div
            style={{
              background: 'white',
              height: props.height,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              overflow: 'scroll',
              position: 'fixed',
              width: '100%',
              bottom: 0,
              height: '97%',
            }}
            onClick={(e) => handleaddon(e)}
          >
            <div></div>
            <div style={{ margin: 20, marginTop: 0 }}>
              <div className="sticky_header">
                <div>
                  <FlexBetween>
                    <FlexRow>
                      {val_data.item_type === 'non-veg' ? (
                        <Veg color={'#be0000'} />
                      ) : (
                          <Veg color={'#007436'} />
                        )}
                      <TitleCenter>{val_data.item_name}</TitleCenter>
                    </FlexRow>
                    <FlexRow>
                      <div
                        onClick={(e) => {
                          handleaddon(e), toggleDrawer(e);
                        }}
                      >
                        <img src="/static/close-24px(2).svg" />
                      </div>
                    </FlexRow>
                  </FlexBetween>
                  <div>
                    <h5 className="h" style={{ marginTop: -10 }}>
                      {val_data.item_description}
                    </h5>
                  </div>

                  <FlexBetween>
                    <FlexRow>
                      {val_data.tags.map((val) => {
                        return (
                          <div style={{ marginLeft: 6 }}>
                            <SideButton title={val} />{' '}
                          </div>
                        );
                      })}
                    </FlexRow>
                  </FlexBetween>
                  <hr className="line" />
                </div>
              </div>
              <SubTitle>Add Item </SubTitle>

              {val_data.item_price_details.map((val) => {
                return (
                  <FlexBetween style={{ marginBottom: 10 }}>
                    <FlexRow>
                      <div
                        class="radio-item"
                        style={{ width: '40px' }}
                        onClick={(e) => handlesizeType(e, val)}
                      >
                        <input
                          type="radio"
                          checked={
                            val.item_size === itemSize.item_size
                              ? 'checked'
                              : ''
                          }
                        />
                        <label for={val.item_size}></label>
                      </div>
                      <FlexRow>{val.item_size}</FlexRow>
                    </FlexRow>

                    <FlexRow style={{width:85, justifyContent:"flex-end"}}>
                      <FlexRow style={{ marginRight: 10 }}>
                        ₹ {val.item_price}
                      </FlexRow>
                    </FlexRow>
                  </FlexBetween>
                );
              })}
              <hr className="line" />

              <div style={{ marginTop: 10, marginBottom: '5rem' }}>
                {val_data.addon_details.map((val) => {
                  return (
                    val.addon_items.length !== 0 && (
                      <div>
                        <FlexRow>
                          <SubTitle>{val.addon_category_name} </SubTitle>
                          <FlexRow className="op" style={{ marginLeft: 10 }}>
                            {console.log(val, 'sdfjknsjkfnskj')}
                            {val.addon_limit_optional === true
                              ? '(optional)'
                              : ''}
                          </FlexRow>
                        </FlexRow>
                        <p className="p" style={{ marginTop: -10 }}>
                          Select a maximum of {val.addon_limit} 
                        </p>
                        {val.addon_items.map((addon) => (
                          <FlexBetween style={{ marginTop: 20 }}>
                            <FlexRow>
                              <div
                                style={{
                                  display: 'flex',
                                  marginTop: -31,
                                }}
                              >
                                <Checkbox
                                  checked={
                                    addon_list.find(
                                      (val) => val.addon_id === addon.addon_id
                                    )
                                      ? true
                                      : false
                                  }
                                  id={addon.addon_id}
                                  handlechecked={() =>
                                    handlechecked(addon, val.addon_limit)
                                  }
                                />
                              </div>

                              {addon.addon_type === 'non-veg' ? (
                                <Veg color={'#be0000'} />
                              ) : (
                                  <Veg color={'#007436'} />
                                )}
                              <FlexRow style={{ marginLeft: 10 }}>
                                {addon.addon_name}
                              </FlexRow>
                            </FlexRow>
                            <FlexRow>
                              {addon.addon_price.map((addonprice) => {
                                return <div>₹ {addonprice.price} </div>;
                              })}
                            </FlexRow>
                          </FlexBetween>
                        ))}
                      </div>
                    )
                  );
                })}
              </div>
            </div>{' '}
            <div style={{ marginTop: -10 }}></div>
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
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{ color: 'white', marginRight: 100 }}
                  className="tl"
                >
                  Total ₹{totalPrice()}
                </div>
                <div
                  className="tl add-tray"
                  onClick={(e) => {
                    handle_addtotray(e, toggleDrawer);
                  }}
                >
                  <div>ADD TO TRAY</div>{' '}
                  <div class="add-tray">
                    <FiChevronRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
            <div
              style={{
                background: 'white',
                height: props.height,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                overflow: 'scroll',
                position: 'fixed',
                width: '100%',
                bottom: 0,
              }}
            >
              <div style={{ marginBottom: 10, padding: 10 }}>
                <div>
                  <FlexBetween>
                    <SubTitle style={{ marginTop: 5, marginBottom: 5 }}>
                      Repeat Last Customization ?
                  </SubTitle>
                    <FlexRow onClick={toggleDrawer}>
                      <img src="/static/close-24px(2).svg" />
                    </FlexRow>
                  </FlexBetween>
                </div>

                <div>
                  <hr className="line" />
                  <FlexBetween>
                    <FlexRow>
                      <Veg color={'#be0000'} />
                      <TitleCenter
                        style={{
                          marginTop: 0,
                          marginBottom: 0,
                          textAlign: 'left',
                        }}
                      >
                        {props.val_data.item_name}
                      </TitleCenter>
                    </FlexRow>
                  </FlexBetween>
                </div>

                <FlexBetween>
                  <FlexRow style={{ width: '100%' }}>
                    {console.log(props.val_data, 'dkjfnsjkdfn')}
                    <div style={{ display: 'flex', width: '100%' }}>
                      <div className="to">
                        {props.val_data.addon_details[0].addon_category_name}:
                    </div>
                      <div className="fre">
                        {' '}
                        {last_addons_list[
                          last_addons_list.length - 1
                        ].addon_details.map((indata) => (
                          <span> {indata.addon_name}, </span>
                        ))}{' '}
                      </div>
                    </div>
                  </FlexRow>
                </FlexBetween>
                <FlexBetween>
                  <div
                    style={{
                      display: 'flex',
                      marginTop: 20,
                      width: '100%',
                    }}
                  >
                    <NewButton
                      title="add new"
                      style={{
                        paddingRight: 15,
                        paddingLeft: 15,
                        paddingTop: 10,
                        paddingBottom: 13,
                        width: '50%',
                      }}
                      onHandleAddNew={onHandleAddNew}
                      className="adnew"
                    />
                    <div style={{ marginLeft: 18, width: '50%' }}>
                      <NeButton
                        title="repeat last"
                        style={{
                          margin: '10px',
                          paddingRight: 15,
                          paddingLeft: 15,
                          paddingTop: 10,
                          paddingBottom: 13,
                        }}
                        repeat_last_addon={() => {
                          repeat_last_addon();
                        }}
                        toggleDrawer={toggleDrawer}
                      />
                    </div>
                  </div>
                </FlexBetween>
              </div>
            </div>
          )}
      </AddOnMaterialDrawer>
      {/* <Drawer position="bottom" size={100}>
      {({
        position,
        size,
        swiping,
        translation,
        mainContentScroll,
        toggleDrawer,
        handleTouchStart,
        handleTouchMove,
        handleTouchEnd,
      }) => (
        <div onClick={(e) => e.stopPropagation()}>
          <DrawerContainer
            position={position}
            size={size}
            swiping={swiping}
            translation={translation}
            toggleDrawer={toggleDrawer}
            handleTouchStart={handleTouchStart}
            handleTouchMove={handleTouchMove}
            handleTouchEnd={handleTouchEnd}
            drawerContent={
              addon_again !== true ? (
                <div
                  style={{
                    background: 'white',
                    height: props.height,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    overflow: 'scroll',
                    position: 'fixed',
                    width: '100%',
                    bottom: 0,
                    height: '97%',
                  }}
                  onClick={(e) => handleaddon(e)}
                >
                  <div></div>
                  <div style={{ margin: 20, marginTop: 0 }}>
                    <div className="sticky_header">
                      <div>
                        <FlexBetween>
                          <FlexRow>
                            {val_data.item_type === 'non-veg' ? (
                              <Veg color={'#be0000'} />
                            ) : (
                              <Veg color={'#007436'} />
                            )}
                            <TitleCenter>{val_data.item_name}</TitleCenter>
                          </FlexRow>
                          <FlexRow>
                            <div
                              onClick={(e) => {
                                handleaddon(e), toggleDrawer();
                              }}
                            >
                              <img src="/static/close-24px(2).svg" />
                            </div>
                          </FlexRow>
                        </FlexBetween>
                        <div>
                          <h5 className="h" style={{ marginTop: -10 }}>
                            {val_data.item_description}
                          </h5>
                        </div>

                        <FlexBetween>
                          <FlexRow>
                            {val_data.tags.map((val) => {
                              return (
                                <div style={{ marginLeft: 6 }}>
                                  <SideButton title={val} />{' '}
                                </div>
                              );
                            })}
                          
                          </FlexRow>
                        </FlexBetween>
                        <hr className="line" />
                      </div>
                    </div>
                    <SubTitle>Add Item </SubTitle>

                    {val_data.item_price_details.map((val) => {
                      return (
                        <FlexBetween style={{ marginBottom: 10 }}>
                          <FlexRow>
                            <div
                              class="radio-item"
                              style={{ width: '50%' }}
                              onClick={(e) => handlesizeType(e, val)}
                            >
                              <input
                                type="radio"
                                checked={
                                  val.item_size === itemSize.item_size
                                    ? 'checked'
                                    : ''
                                }
                              />
                              <label for={val.item_size}></label>
                            </div>
                            <FlexRow>{val.item_size}</FlexRow>
                          </FlexRow>

                          <FlexRow>
                            <FlexRow style={{ marginRight: 10 }}>
                              ₹ {val.item_price}
                            </FlexRow>
                          
                          </FlexRow>
                        </FlexBetween>
                      );
                    })}
                    <hr className="line" />

                    <div style={{ marginTop: 10, marginBottom: '5rem' }}>
                      {val_data.addon_details.map((val) => {
                        return (
                          val.addon_items.length !== 0 && (
                            <div>
                              <FlexRow>
                                <SubTitle>
                                  Add {val.addon_category_name}{' '}
                                </SubTitle>
                                <FlexRow
                                  className="op"
                                  style={{ marginLeft: 10 }}
                                >
                                  {console.log(val, 'sdfjknsjkfnskj')}
                                  {val.addon_limit_optional === true
                                    ? '(optional)'
                                    : ''}
                                </FlexRow>
                              </FlexRow>
                              <p className="p" style={{ marginTop: -10 }}>
                                Select a maximum of {val.addon_limit} toppings
                              </p>
                              {val.addon_items.map((addon) => (
                                <FlexBetween style={{ marginTop: 20 }}>
                                  <FlexRow>
                                    <div
                                      style={{
                                        display: 'flex',
                                        marginTop: -31,
                                      }}
                                    >
                                      <Checkbox
                                        checked={
                                          addon_list.find(
                                            (val) =>
                                              val.addon_id === addon.addon_id
                                          )
                                            ? true
                                            : false
                                        }
                                        id={addon.addon_id}
                                        handlechecked={() =>
                                          handlechecked(addon, val.addon_limit)
                                        }
                                      />
                                    </div>

                                    {addon.addon_type === 'non-veg' ? (
                                      <Veg color={'#be0000'} />
                                    ) : (
                                      <Veg color={'#007436'} />
                                    )}
                                    <FlexRow style={{ marginLeft: 10 }}>
                                      {addon.addon_name}
                                    </FlexRow>
                                  </FlexRow>
                                  <FlexRow>
                                    {addon.addon_price.map((addonprice) => {
                                      return <div>₹ {addonprice.price} </div>;
                                    })}
                                  </FlexRow>
                                </FlexBetween>
                              ))}
                            </div>
                          )
                        );
                      })}
                    </div>
                  </div>{' '}
                  <div style={{ marginTop: -10 }}></div>
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
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <div
                        style={{ color: 'white', marginRight: 100 }}
                        className="tl"
                      >
                        Total ₹{totalPrice()}
                      </div>
                      <div
                        className="tl add-tray"
                        onClick={(e) => {
                          handle_addtotray(e, toggleDrawer);
                        }}
                      >
                        <div>ADD TO TRAY</div>{' '}
                        <div class="add-tray">
                          <FiChevronRight />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  style={{
                    background: 'white',
                    height: props.height,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    overflow: 'scroll',
                    position: 'fixed',
                    width: '100%',
                    bottom: 0,
                  }}
                >
                  <div style={{ marginBottom: 10, padding: 10 }}>
                    <div>
                      <FlexBetween>
                        <SubTitle style={{ marginTop: 5, marginBottom: 5 }}>
                          Repeat Last Customization ?
                        </SubTitle>
                        <FlexRow onClick={toggleDrawer}>
                          <img src="/static/close-24px(2).svg" />
                        </FlexRow>
                      </FlexBetween>
                    </div>

                    <div>
                      <hr className="line" />
                      <FlexBetween>
                        <FlexRow>
                          <Veg color={'#be0000'} />
                          <TitleCenter
                            style={{
                              marginTop: 0,
                              marginBottom: 0,
                              textAlign: 'left',
                            }}
                          >
                            {props.val_data.item_name}
                          </TitleCenter>
                        </FlexRow>
                      </FlexBetween>
                    </div>

                    <FlexBetween>
                      <FlexRow style={{ width: '100%' }}>
                        {console.log(props.val_data, 'dkjfnsjkdfn')}
                        <div style={{ display: 'flex', width: '100%' }}>
                          <div className="to">
                            {
                              props.val_data.addon_details[0]
                                .addon_category_name
                            }
                            :
                          </div>
                          <div className="fre">
                            {' '}
                            {last_addons_list[
                              last_addons_list.length - 1
                            ].addon_details.map((indata) => (
                              <span> {indata.addon_name}, </span>
                            ))}{' '}
                          </div>
                        </div>
                      </FlexRow>
                    </FlexBetween>
                    <FlexBetween>
                      <div
                        style={{
                          display: 'flex',
                          marginTop: 20,
                          width: '100%',
                        }}
                      >
                        <NewButton
                          title="add new"
                          style={{
                            paddingRight: 15,
                            paddingLeft: 15,
                            paddingTop: 10,
                            paddingBottom: 13,
                            width: '50%',
                          }}
                          onHandleAddNew={onHandleAddNew}
                          className="adnew"
                        />
                        <div style={{ marginLeft: 18, width: '50%' }}>
                          <NeButton
                            title="repeat last"
                            style={{
                              margin: '10px',
                              paddingRight: 15,
                              paddingLeft: 15,
                              paddingTop: 10,
                              paddingBottom: 13,
                            }}
                            repeat_last_addon={() => {
                              repeat_last_addon();
                            }}
                            toggleDrawer={toggleDrawer}
                          />
                        </div>
                      </div>
                    </FlexBetween>
                  </div>
                </div>
              )
            }
          />
          <MainContentContainer
            translation={translation}
            mainContentScroll={mainContentScroll}
            handleTouchMove={handleTouchMove}
            toggleDrawer={props.isToggle ? toggleDrawer : null}
            translation={0}
          >
            {props.is_addon_inc_dec ? (
              <FlexRow style={{ height: 30 }}>
                <div onClick={handlevalue_decrease}>
                  <DecreaseItem />
                </div>

                {totalqty()}
                <div
                  onClick={(e) => {
                    handlevalue_increase(e), toggleDrawer();
                  }}
                >
                  <IncreaseItem />
                </div>
              </FlexRow>
            ) : (
              <div
                onClick={(e) => {
                  handleaddon(e), toggleDrawer(), set_increase_reducer(false);
                }}
              >
                <AddBtn style={{ height: 30 }}>Add</AddBtn>
              </div>
            )}
          </MainContentContainer> */}

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
        .add-tray{
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .add-tray svg{
          width: 26px;
          height: 25px;
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
 .radio-item {
  display: inline-block;
  position: relative;
  padding: 0 6px;
  margin: -10px 0 0;
}

.radio-item input[type='radio'] {
  display: none;
}

.radio-item label {
  color: #666;
  font-weight: normal;
}

.radio-item label:before {
  content: " ";
  display: inline-block;
  position: relative;
  top: 5px;
  margin: 0 5px 0 0;
  width: 20px;
  height: 21px;
  border-radius: 50%;
  border: 2px solid #3CBCB4;
  background-color: transparent;
}

.radio-item input[type=radio]:checked + label:after {
  border-radius: 50%;
  width: 12px;
  height: 12px;
  position: absolute;
  top: 11.4px;
  left: 12.4px;
  content: " ";
  display: block;
  background: #3CBCB4;
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
          .sticky_header{
            position: sticky;
            top:0;
            background:white;
            z-index:2;
          }
      `}</style>
      {/* </div>
      )}
    </Drawer> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  addItem: state.orderReducer.addItem,
});
const mapDispatchToProps = (dispatch) => ({
  add_item: bindActionCreators(add_item, dispatch),
  add_item_increase: bindActionCreators(add_item_increase, dispatch),
  add_item_decrease: bindActionCreators(add_item_decrease, dispatch),
  add_item_decrease_addon: bindActionCreators(
    add_item_decrease_addon,
    dispatch
  ),
  repeat_last_addon: bindActionCreators(repeat_last_addon, dispatch),
  add_to_tray: bindActionCreators(add_to_tray, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(AddOns);
