import React, { useState } from 'react';

import Drawer, {
  DrawerContainer,
  MainContentContainer,
  DrawerOverlay,
} from 'react-swipeable-drawer';
import { Button } from './buttons';
import propTypes from 'prop-types';
import { TitleCenter } from './Text';

// import DrawerContent from './DrawerContent';
// import MainContent from './MainContent';

const BottomDrawer = (props) => {
  const [tog, settog] = useState(true);
  // <DrawerOverlay>
  console.log(props.isToggle, 'this is toggle');
  const toggleDrawer1 = () => {
    console.log('hii');
    return settog(!tog);
  };
  return (
    <Drawer position="bottom" size={100}>
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
                  maxHeight: '100%',
                  borderTopLeftRadius: props.border ? 0 : 20,
                  borderTopRightRadius: props.border ? 0 : 20,
                  overflow: 'scroll',
                  position: 'fixed',
                  width: '100%',
                  bottom: 0,
                }}
              >
                <div>
                  {props.topborder && (
                    <div onClick={toggleDrawer}>
                      <h3 style={{ marginTop: 25 }}>
                        <div
                          style={{
                            border: '3px solid #656565',
                            margin: 'auto',
                            marginTop: -20,
                            opacity: 0.39,
                            width: 150,
                            textAlign: 'center',
                            height: 1,
                            borderRadius: 50,
                          }}
                        ></div>
                      </h3>
                    </div>
                  )}
                </div>
                <div onClick={props.isToggle ? toggleDrawer : null}>
                  {props.children}
                </div>
              </div>
            }
          />
          <MainContentContainer
            translation={translation}
            mainContentScroll={mainContentScroll}
            handleTouchMove={handleTouchMove}
            toggleDrawer={props.isToggle ? toggleDrawer : null}
            translation={0}
          >
            <div onClick={props.isToggle ? toggleDrawer : null}>
              {props.title}
            </div>
            {/* <MainContent /> */}
          </MainContentContainer>
        </div>
      )}
    </Drawer>
  );
};

export default BottomDrawer;
BottomDrawer.defaultProps = {
  topborder: false,
  isToggle: true,
};
