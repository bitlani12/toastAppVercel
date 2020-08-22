import React, { useState } from 'react';
import { DecreaseItem, IncreaseItem } from './button';
import { FlexRow } from 'ui/Flex';
import BottomDrawer from 'ui/BottomDrawer';
import AddOns from 'page-components/AddOns/AddOns';
import {
  add_item,
  add_item_increase,
  add_item_decrease,
} from 'redux/actions/orderAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Zoom from '@material-ui/core/Zoom';
import Layout from 'components/layout';

const AddBtn = styled.button`
  background: var(--unnamed-color-3cbcb4) 0% 0% no-repeat padding-box;
  background: #3cbcb4 0% 0% no-repeat padding-box;
  border-radius: 10px;
  opacity: 1;
  padding: 5px 10px;
  color: white;
`;
const AddItem = React.memo(
  (props) => {
    const [addons, set_addons] = useState(true);
    const handlevalue = (event) => {
      console.log('hiii helllow');
      event.stopPropagation();
      props.add_item(props.val_data);
    };

    const handlevalue_increase = (event) => {
      event.stopPropagation();
      props.add_item_increase(props.val_data);
    };
    const handlevalue_decrease = (event) => {
      event.stopPropagation();
      props.add_item_decrease(props.val_data);
    };
    const handleclick = (event) => {
      console.log('this is stop propagation');
      event.stopPropagation();
      set_addons(true);
    };
    const { val_data, addItem } = props;
    const checkItem = addItem.findIndex(
      (val) => val.item_id === val_data.item_id
    );
    console.log(val_data);
    return (
      <div>
        {console.log('this is add item bla bla +++++++++++++')}
        {checkItem < 0 ? (
          val_data.addon_details.length <= 0 ? (
            <AddBtn onClick={handlevalue} style={{ height: 30 }}>
              Add
            </AddBtn>
          ) : (
            <div onClick={(e) => e.stopPropagation()}>
              <AddOns val_data={val_data} is_addon_inc_dec={false}></AddOns>
            </div>
          )
        ) : (
          <FlexRow>
            {val_data.addon_details.length <= 0 ? (
               <Zoom in={val_data.addon_details.length <= 0} style={{ transitionDelay: val_data.addon_details.length <= 0 ? '200ms' : '0ms' }}>
              <FlexRow style={{ height: 30 }}>
                <div onClick={handlevalue_decrease}>
                  <DecreaseItem />
                </div>
                {addItem[checkItem].qty}
                <div onClick={handlevalue_increase}>
                  <IncreaseItem />
                </div>
                
              </FlexRow>
              </Zoom>
            ) : (
              <div onClick={(e) => e.stopPropagation()}>
                <AddOns
                  val_data={val_data}
                  is_addon_inc_dec={true}
                  checkItem={checkItem}
                ></AddOns>
              </div>
            )}
          </FlexRow>
        )}
        {/* {addons && <AddOns addons={addons} />} */}
        <style>
          {`
          .addbtn{
            background: var(--unnamed-color-3cbcb4) 0% 0% no-repeat padding-box;
            background: #3CBCB4 0% 0% no-repeat padding-box;
            border-radius: 10px;
            opacity: 1;
            padding: 5px 10px;
    color: white;
          }
          `}
        </style>
      </div>
    );
  } //=== nextProps.val_data.item_id
);
// export default AddItem;
AddItem.defaultProps = {
  price: 0,
  handleToggle() {
    return console.log();
  },
};

const mapStateToProps = (state) => ({
  addItem: state.orderReducer.addItem,
});
const mapDispatchToProps = (dispatch) => ({
  add_item: bindActionCreators(add_item, dispatch),
  add_item_increase: bindActionCreators(add_item_increase, dispatch),
  add_item_decrease: bindActionCreators(add_item_decrease, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(AddItem);
