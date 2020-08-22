import React, { useState, useEffect } from 'react';

import Drawer, {
  DrawerContainer,
  MainContentContainer,
  DrawerOverlay,
} from 'react-swipeable-drawer';
import { Button } from './buttons';
import propTypes from 'prop-types';
import { TitleCenter } from './Text';
// import ClosePopUpOnBack from 'components/common/ClosePopUpOnBack';

// import DrawerContent from './DrawerContent';
// import MainContent from './MainContent';

const Modal = (props, ref) => {
  const [tog, settog] = useState(false);
  // <DrawerOverlay>
  const toggleDrawer1 = () => {
    console.log('tog tog tog tog ss', tog);
    if (tog === false) return settog(!tog);
  };
  // useEffect(() => {
  //   console.log('hii ih i i i i 22222');
  //   if (process.browser) {
  //     history.pushState(null, null, location.href);
  //     window.onpopstate = (e) => {
  //       toggleDrawer1();
  //       history.go(1);
  //       // this.triggerChild();
  //     };
  //   }
  // });
  console.log(props.isToggle, 'this is istoggle istoggle');
  return (
    <Drawer position={props.position} size={80}>
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
            translation={translation}
            toggleDrawer={toggleDrawer}
            handleTouchStart={handleTouchStart}
            handleTouchMove={handleTouchMove}
            handleTouchEnd={handleTouchEnd}
            drawerContent={
              <div
                style={{
                  background: 'white',
                  height: props.height,
                  width: '80%',
                  margin: 'auto',
                  borderRadius: 10,
                  padding: props.padding ? 10 : 0,
                }}
              >
                <div onClick={toggleDrawer}></div>

                {tog ? toggleDrawer1() : null}
                <div
                  onClick={props.isToggle ? (toggleDrawer, toggleDrawer) : null}
                ></div>
                {props.children}
                {props.click === 'okay' && (
                  <div className="close-btn">
                    <div className="close-img">
                      {' '}
                      {/* <img src="/static/noun_Info_1736324.svg" /> */}
                    </div>
                    <div className="close-txt" onClick={toggleDrawer}>
                      Okay
                    </div>
                  </div>
                )}
              </div>
            }
          />
          <MainContentContainer
            translation={translation}
            mainContentScroll={mainContentScroll}
            handleTouchMove={handleTouchMove}
            toggleDrawer={toggleDrawer}
            position={props.position}
          >
            <div
              style={{ marginBottom: props.marginBottom ? '' : 60 }}
              onClick={toggleDrawer}
            >
              {' '}
              {props.title}
            </div>
            {/* <MainContent /> */}
          </MainContentContainer>
        </div>
      )}
    </Drawer>
  );
};
// const Modal = Modal;

export default Modal;
Modal.defaultProps = {
  height: '100%',
  position: 'bottom',
};
