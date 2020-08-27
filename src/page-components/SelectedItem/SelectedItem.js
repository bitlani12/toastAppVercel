import React, { useState, useRef } from 'react';
import ReviewPlaceOrder from 'components/ReviewPlaceOrder/ReviewPlaceOrder';
import BottomDrawer from '../../ui/BottomDrawer';
import { connect } from 'react-redux';
import styled from 'styled-components';
import MaterialDrawer from 'components/common/MaterialDrawer';

const ViewOrder = styled.div`
  background: var(--unnamed-color-3cbcb4) 0% 0% no-repeat padding-box;
  background: #3cbcb4 0% 0% no-repeat padding-box;
  border-radius: 10px;
  opacity: 1;
  padding: 5px 10px;
  color: white;
`;

const SelectedItem = React.memo((props) => {
  let totalItem = 0;

  props.addItem.map((e) => {
    totalItem += e.qty;
  });
  const childRef = useRef();

  const handleToggle = () => {
    console.log("this is issue")
    childRef.current.toggleDrawers();
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: '100%',
        opacity: 1,
      }}
      className="layoutselecteditem"
    >
      <MaterialDrawer
        ref={childRef}
        title={
          <div
            style={{
              display: 'flex',
              padding: 15,
              justifyContent: 'space-around',
              height: 52,
            }}
          >
            <div style={{ color: 'white' }}>{totalItem} Items</div>
            <div style={{ color: 'white' }}>View Order</div>
          </div>
        }
      >
        {/* <div style={{ padding: 20, overflow: 'auto' }}>
          <ReviewPlaceOrder handleToggle={handleToggle} />
        </div> */}
      </MaterialDrawer>
      {/* <BottomDrawer
        height="94%"
        title={
          <div
            style={{
              display: 'flex',
              padding: 15,
              justifyContent: 'space-around',
              height: 52,
            }}
          >
            <div style={{ color: 'white' }}>{totalItem} Items</div>
            <div style={{ color: 'white' }}>View Order</div>
          </div>
        }
        topborder={true}
      >
        <div style={{ padding: 10 }}>
          <ReviewPlaceOrder />
        </div>
      </BottomDrawer> */}
      <style jsx>{`
        .layoutselecteditem {
          background: transparent
            linear-gradient(170deg, #36c0db 0%, #007991 100%) 0% 0% no-repeat
            padding-box;
          width: '100%';
        }
      `}</style>
    </div>
  );
});
const mapStateToProps = (state) => ({
  addItem: state.orderReducer.addItem,
});
export default connect(mapStateToProps, null)(SelectedItem);
