import React, { useState, useRef, useEffect } from 'react';
import BottomDrawer from '../../ui/BottomDrawer';
import Drawer, {
  DrawerContainer,
  MainContentContainer,
  DrawerOverlay,
} from 'react-swipeable-drawer';
import { FlexBetween } from 'ui/Flex';
import Switch from 'components/common/switch';
import { RiCloseLine } from 'react-icons/ri';
import {
  handlefilter,
  handlefilter_contains_egg,
} from './../../redux/actions/orderAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import index from 'page-components/index';
import MaterialDrawer from 'components/common/MaterialDrawer';

const usePrevious = (value) => {
  const refss = useRef();
  useEffect(() => {
    refss.current = value;
  });
  return refss.current;
}
const MenuFilter = React.memo((props) => {
  const { inside_menu, items_list } = props;
  const [filter_veg, setfilter_veg] = useState(false);
  const [index, setIndex] = useState(props.refIndex);
  console.log(inside_menu, items_list, 'this is in filter');
  let item_length = [];
  const find_length = (val) => {
    item_length = items_list[val].filter((item, i) => item.item_type === 'veg');
    console.log(item_length, 'this is item length');
    return item_length.length;
  };

  const inside_menuref = useRef();
  useEffect((val) => {
    inside_menuref.current = inside_menu;
  })
  const previnside_menu = inside_menuref.current;
  const handleToggle = () => {
    childRef.current.toggleDrawers();
    // const previnside_menu = usePrevious(inside_menu)
    if (previnside_menu !== inside_menu) {
      setIndex(0)
    }
  };
  const childRef = useRef()
  // console.log(props.refIndex, "this is reff index")
  return (
    <div >
      <MaterialDrawer
        title={
          <div

            onClick={handleToggle}
            height="auto"
          >
            {props.children}
          </div>
        }
        border={true}
        changepaper4={true}
        ref={childRef}
      >
        <div
          style={{
            padding: 10,
            background: 'black',
            width: '95%',
            margin: 'auto',
          }}
        >
          <FlexBetween>
            <h4 className="secondText">Menu</h4>
            <div onClick={handleToggle}>
              <RiCloseLine
                onClick={() => props.scrollToRef(index, true)}
                style={{ color: 'white', fontSize: 20 }}
              />
            </div>
          </FlexBetween>
          <div style={{ border: '1px solid #BFBFBF80', opacity: 0.8 }}></div>
          <FlexBetween
            onClick={() => {
              props.handlefilter(props.selected_menu, 'is_special');
            }}
          >
            <h4 style={{ color: '#3CBCB4', fontWeight: 500 }}>Veg Only</h4>

            <Switch checked={props.filter.filter_veg} />
          </FlexBetween>
          <FlexBetween
            onClick={() => {
              props.handlefilter_contains_egg(
                props.selected_menu,
                'is_special'
              );
            }}
          >
            <h3 className="secondText fo14" style={{ marginTop: 0 }}>
              Contains Egg
            </h3>
            <Switch
              checked={props.filter.contains_egg}
              disable={props.filter.filter_veg === false ? true : false}
            />
          </FlexBetween>
          {props.selected_menu !== 'Special' && (
            <>
              <div
                style={{ border: '1px solid #BFBFBF80', opacity: 0.8 }}
              ></div>

              <FlexBetween>
                <h4 style={{ color: '#3CBCB4', fontWeight: 500 }}>All</h4>
                <h4 style={{ color: '#3CBCB4', fontWeight: 500 }}></h4>
              </FlexBetween>
              {inside_menu.map((val, i) => {
                return (

                  <FlexBetween
                    onClick={() => {
                      props.scrollToRef(i, true);
                      setIndex(i);
                    }}
                  >
                    <h3 className={`secondText fo14 ${i === index && "colorBlue"}`} style={{ marginTop: 0, }}>
                      {val}
                    </h3>
                    <h3 className="secondText fo14 " style={{ marginTop: 0 }}>
                      {console.log(items_list[val], 'this is length for list ')}
                      {props.filter.filter_veg
                        ? find_length(val)
                        : items_list[val].length}
                    </h3>
                  </FlexBetween>
                );
              })}
            </>
          )}
        </div>
      </MaterialDrawer>
      <style jsx>{
        `
        .colorBlue{
          color:#3CBCB4;
        }
        `
      }</style>
      {/* <Drawer position="bottom" size={80}>
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
          <div>
            <DrawerContainer
              position={position}
              size={size}
              swiping={swiping}
              overlayStyle={{ zIndex: 0 }}
              translation={translation}
              toggleDrawer={toggleDrawer}
              handleTouchStart={handleTouchStart}
              handleTouchMove={handleTouchMove}
              handleTouchEnd={handleTouchEnd}
              drawerContent={
                <div
                  style={{
                    background: 'white',
                    height: '80%',
                    borderRadius: 10,
                    overflow: 'scroll',
                    position: 'fixed',
                    width: '90%',
                    margin: 'auto',
                    bottom: 10,
                    left: 10,
                    right: 10,
                    background: '#404040 0% 0% no-repeat padding-box',
                    padding: 10,
                  }}
                >
                  <div onClick={toggleDrawer}></div>
                  <FlexBetween>
                    <h4 className="secondText">Menu</h4>
                    <div onClick={toggleDrawer}>
                      <RiCloseLine
                        onClick={() => props.scrollToRef(index, true)}
                        style={{ color: 'white', fontSize: 20 }}
                      />
                    </div>
                  </FlexBetween>
                  <div
                    style={{ border: '1px solid #BFBFBF80', opacity: 0.8 }}
                  ></div>
                  <FlexBetween
                    onClick={() => {
                      props.handlefilter(props.selected_menu, 'is_special');
                    }}
                  >
                    <h4 style={{ color: '#3CBCB4', fontWeight: 500 }}>
                      Veg Only
                    </h4>

                    <Switch checked={props.filter.filter_veg} />
                  </FlexBetween>
                  <FlexBetween
                    onClick={() => {
                      props.handlefilter_contains_egg(
                        props.selected_menu,
                        'is_special'
                      );
                    }}
                  >
                    <h3 className="secondText fo14" style={{ marginTop: 0 }}>
                      Contains Egg
                    </h3>
                    <Switch
                      checked={props.filter.contains_egg}
                      disable={props.filter.filter_veg === false ? true : false}
                    />
                  </FlexBetween>
                  {props.selected_menu !== 'Special' && (
                    <>
                      <div
                        style={{ border: '1px solid #BFBFBF80', opacity: 0.8 }}
                      ></div>

                      <FlexBetween>
                        <h4 style={{ color: '#3CBCB4', fontWeight: 500 }}>
                          All
                        </h4>
                        <h4 style={{ color: '#3CBCB4', fontWeight: 500 }}>
                        </h4>
                      </FlexBetween>
                      {inside_menu.map((val, i) => {
                        return (
                          <FlexBetween
                            onClick={() => {
                              props.scrollToRef(i, true);
                              setIndex(i);
                            }}
                          >
                            <h3
                              className="secondText fo14 "
                              style={{ marginTop: 0 }}
                            >
                              {val}
                            </h3>
                            <h3
                              className="secondText fo14 "
                              style={{ marginTop: 0 }}
                            >
                              {console.log(
                                items_list[val],
                                'this is length for list '
                              )}
                              {props.filter.filter_veg
                                ? find_length(val)
                                : items_list[val].length}
                            </h3>
                          </FlexBetween>
                        );
                      })}
                    </>
                  )}
                </div>
              }
            />
            <MainContentContainer
              translation={translation}
              mainContentScroll={mainContentScroll}
              handleTouchMove={handleTouchMove}
              toggleDrawer={toggleDrawer}
            >
              <div style={{ marginBottom: 60 }} onClick={toggleDrawer}>
                {props.children}
              </div>
            </MainContentContainer>
          </div>
        )}
      </Drawer> */}
    </div>
  );
});
const mapStateToProps = (state) => ({
  menu_data: state.orderReducer.menu_data,
  filter: state.orderReducer.filter,
});
const mapDispatchToProps = (dispatch) => ({
  handlefilter: bindActionCreators(handlefilter, dispatch),
  handlefilter_contains_egg: bindActionCreators(
    handlefilter_contains_egg,
    dispatch
  ),
});
export default connect(mapStateToProps, mapDispatchToProps)(MenuFilter);
