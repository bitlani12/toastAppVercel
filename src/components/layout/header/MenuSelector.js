import React, { useState, useEffect } from 'react';
import { List } from 'components/topics/styles';
import { func } from 'prop-types';
import styled from 'styled-components';
import { concat } from 'lodash';

const BackgroundImage = styled.div`
  background-image: ${(props) => `url('${props.img}')`};
  height: 160px;
  /* background-position: center; */
  display: block;
  background-position: center center;
  margin: 0 auto;
  background-size: cover;
  border-radius: 8px;
  margin-bottom: 10px;
`;
const MenuSelector = (props) => {
  const [state, setstate] = useState(0);
  const list = [
    'Special',
    'Food Menu',
    'Beverages',
    'Desert',
    'Food Menu',
    'Beverages',
    'Desert',
    'Store'
  ];

  function typeToName(type) {
    console.log(type, 'tihs is type');
    switch (type) {
      case 'food':
        console.log('food');
        return <div> Food Menu </div>;
      // break;

      case 'beverages':
        return 'Beverages';
      // break;

      case 'desserts':
        return 'Desserts';
      // break;

      case 'food':
        return 'Food Menu';
      // break;
      case 'Special':
        return 'Special';
      case 'store':
        return 'The Store';
      case 'drinks':
        return 'Drinks';

      default:
        return type;
      // break;
    }
  }
  let list2 = Object.keys(props.menus);
  const sortingarray = ['Special', 'food', 'beverages', 'desserts', 'drinks', 'store'];
  /////////////////////////////////////////////////////
  let result = [];
  sortingarray.forEach(function (key) {
    var found = false;
    list2 = list2.filter(function (item) {
      if (!found && item === key) {
        result.push(item);
        found = true;
        return false;
      } else return true;
    });
  });
  console.log(result, 'this is is result');
  list2 = result;
  // list2 = ['Special'].concat(list2);
  //////////////////////////

  console.log(list2, 'this is list2');

  return (
    <div style={{ boxShadow: '0px 3px 6px #00000014' }}>
      <div
        style={{
          color: '#404040',
          fontWeight: 'bold',
          fontSize: 20,
          padding: 10,
        }}
      >
        <BackgroundImage img={props.data.restraunt_details.feature_image} />
        {props.data.restraunt_details.restraunt_name}
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          overflowX: 'scroll',
          flexWrap: 'nowrap',
          width: 'auto',
          paddingRight: 20
        }}
        className="scrollbarxx"
      >
        {list2.map((val, i) => {
          return (
            <div
              style={{
                margin: 10,
                width: 'auto',
                flex: 'none',
                fontSize: 14,
                // padding: '0px 0px 7px 0px',
                marginRight: 20,
                fontWeight: 500,
                paddingRight: `${i === list2.length - 1 ? "10px" : 0}`
              }}
              className={`${state === i ? 'active' : 'unactive'}`}
              onClick={() => {
                setstate(i), props.onchange_menu(val);
              }}
            >
              {typeToName(val)}
            </div>
          );
        })}
      </div>
      {/* <div className="borderDivide"></div> */}
      <style jsx>{`
        .borderDivide {
          border: solid #00000014 2px;
        }
        .active {
          color: #3cbcb4;
        }
        .unactive {
          color: #656565;
        }
        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbarxx::-webkit-scrollbar {
          display: none;
        }

        /* Hide scrollbar for IE and Edge */
        .scrollbarxx {
          -ms-overflow-style: none;
        }
      `}</style>
    </div>
  );
};
export default MenuSelector;
