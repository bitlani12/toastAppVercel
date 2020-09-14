import React, {
  useState,
  forwardRef,
  useRef,
  useImperativeHandle,
} from 'react';
import { CardLayout, Img, SetBackGroundSpecific } from './style';
import { Title } from 'components/grid/grid-item/styles';
import ReviewPlaceOrder from '../ReviewPlaceOrder/ReviewPlaceOrder';
import Grid from 'components/grid';
import styled from 'styled-components';
import Veg from 'components/common/Veg';
import { FlexBetween, FlexRow } from 'ui/Flex';
import AddItem from 'components/common/AddItem';
import Link from 'next/link';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Cookie from 'js-cookie';
import { withRouter } from 'next/router';
import {
  dish_description,
  getItemReview_action,
} from './../../redux/actions/orderAction';
import DishDiscription from './../../page-components/dishDescription/dishDescription';
import BottomDrawer from 'ui/BottomDrawer';
import SetItemImage from '../common/SetItemImage';
import MaterialDrawer from 'components/common/MaterialDrawer';
import cookie from 'js-cookie';
const SpeacialMenuCard = React.memo((props) => {
  const renderOnce = 1;
  console.log(props, 'this is props special menu card');
  // const { title } = props.val;
  const { val_data } = props;

  const dishdescription = (val_data) => {
    let c_id = Cookie.get('customer_id');
    let token = Cookie.get('token');
    // props.getItemReview_action(c_id, val_data.item_id, 0, 10, token);
    console.log('this is dish description +++');
    props.dish_description(val_data);
    console.log(val_data);
    // props.handleToggle(true);
  };
  if (props.selected_menu !== 'Special') {
    return (
      <div onClick={() => dishdescription(val_data)}>
        <FlexBetween>
          <FoodList val_data={val_data} handleToggle={props.handleToggle} />
        </FlexBetween>
      </div>
    );
  }

  return (
    cookie.get('qr_code') !== 'P5MFEYsbb0UoSHPhA5SxoGhIWMr69Ov61XVSkYoZxYJPw2NZKvTzhyYuoNLbN0Pc' ?
      // style={{ backgroundImage: 'url(`/static/CoverPage.jpg`)' }}
      props.i === 0 && <SetBackGroundSpecific className="setbackgroundspecific">
        <p> Reminiscent of a sun-bathed Greek island, overlooking the scenic Durgam
        Cheruvu Lake, Olive Bistro is where good people meet to celebrate good times
        over delicious food, cocktails and wine for the last seven years in Hyderabad.
      </p>
        <p>
          We re-open our doors with sparkling kitchens & strict hygiene protocols in
          place. The fun hasn’t stopped, and neither has our commitment to innovating
          with our offerings. It’s how we continuously bring our patrons a taste of the
          finer things in life.
      </p>
        <p>
          Our latest innovation presents itself in the form of a new menu by Chef Manu
          Chandra, Chef Partner, Olive Bar & Kitchen that encompasses the abundant
          flavours and aromas of the Mediterranean.
      </p>
        <p>
          We hope you find our new menu as delightful and exciting as we do.
          Sit back, take in the view and enjoy your Olive experience.
      </p>
      Cheers,
      AD, Sabs & Shaaz</SetBackGroundSpecific> :
      <div onClick={() => dishdescription(val_data)}>
        <CardLayout>
          <SetItemImage img={val_data.item_image_url} />
          <div style={{ padding: 5 }} className="special-card">
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'baseline',
              }}
            >
              <Title style={{ fontSize: 13, height: 35 }} className="truncaa" >
                {val_data.item_name}
              </Title>
              {val_data.contains_egg === true ? (
                <Veg color="#654321" />
              ) : val_data.item_type === 'veg' ? (
                <Veg color="#007436" />
              ) : (
                    <Veg color="#be0000" />
                  )}
            </div>
            <div className="special-item">
              <div style={{ minWidth: 35, }}>
                ₹ {val_data.item_price_details[0].item_price}
              </div>{' '}
            </div>
          </div>
        </CardLayout>
        <style>{`
        
     
      
          .special-card{
            min-height: 90px; 
          }
        .special-item{
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 15px;
          margin-bottom: 9px;
          }

          .truncaa {
            display: block;
            /* Fallback for non-webkit */
            display: -webkit-box;
            max-width: 400px;
            height: 42px;
            /* Fallback for non-webkit */
            font-size: 15px;
            line-height: 1.4;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        `}</style>
      </div>
  );
});

const FoodList = React.memo((props) => {
  const { val_data } = props;
  const [isToggle, setToggle] = useState(false);
  const handleToggle = (toggle) => {
    return toggle;
  };
  return (
    <CardLayout style={{ width: '91%', background: 'white' }}>
      <FlexRow style={{ margin: "-1px" }}>
        <div className="image-holder">
          <SetItemImage img={val_data.item_image_url} exceptSpecial={true} />
          {/* <BackgroundImageFood  /> */}
        </div>
        <div style={{ width: '100%' }}>
          <FlexBetween
            style={{
              width: '100%',
              padding: '10px 10px 0px 10px',
              height: 50,
              alignItems: 'baseline',
            }}
          >
            <FlexRow style={{ alignItems: 'start' }}>
              {val_data.contains_egg === true ? (
                (console.log('this is egg  contains'),
                  (<Veg color="#654321" />))
              ) : val_data.item_type === 'veg' ? (
                <Veg color="#007436" />
              ) : (
                    <Veg color="#be0000" />
                  )}
              <div style={{ marginLeft: 8, fontWeight: 600, marginTop: -3 }} className="truncaa" >
                {val_data.item_name}
              </div>
            </FlexRow>
            {/* <div
              style={{
                marginTop: 21,
                alignItems: 'center',
              }}
            >
              <img src="/static/001-happy-1.png" alt="Klarna logo" />
              <small style={{ marginLeft: 8, fontSize: 12 }}>
                {val_data.reviews_count} reviews
              </small>
            </div> */}
            {/* <p>description</p> */}
            {/* </div> */}
            <FlexRow>
              <div style={{ minWidth: 35, width: 50, textAlignLast: 'end' }}>
                ₹ {val_data.item_price_details[0].item_price}
              </div>
            </FlexRow>
          </FlexBetween>
          <FlexRow style={{ width: '100%', padding: '0px 10px 10px 10px', alignItems: "end" }}>
            <div
              style={{

                alignItems: 'center',
              }}
            // className="module overflow"
            >
              <span className="truncaa" style={{ fontWeight: 400 }}>
                {val_data.item_description}
              </span>
            </div>
            {/* <p>description</p> */}
            {/* </div> */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
              }}
            >
              <div
                style={{
                  marginTop: 15,
                  display: 'flex',
                  alignItems: 'center',
                  height: 30,
                }}
              >
                {/* <AddItem
                  handleToggle={props.handleToggle}
                  val_data={val_data}
                /> */}
              </div>
              {/* <p>description</p> */}
            </div>
          </FlexRow>

          {/* <div>
            <FlexBetween>
             
            </FlexBetween>
          </div> */}
        </div>
        <style>
          {`


.truncaa {
  display: block;
  /* Fallback for non-webkit */
  display: -webkit-box;
  max-width: 400px;
  height: 42px;
  /* Fallback for non-webkit */
  margin: 0 auto;
  font-size: 15px;
  line-height: 1.4;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}



        .combos {
          padding: 0.5rem 0 1rem 1rem;
        }
        .image-holder {
          // width: 38vw;
          position: inherit;
          overflow: hidden;
          height:104px;
        }
        .combos .packages {
          overflow: scroll;
          margin-top: 1rem;
        }
        .combos .packages .package {
          display: inline-block;
          width: 38vw;
          margin-right: 1rem;
          padding-bottom: 1rem;
        }
        .combos .packages .package .image-holder {
          width: 38vw;
          height: 6rem;
          position: relative;
          overflow: hidden;
        }
        .combos .packages .package .image-holder img {
          width: 100%;
          height: auto;
          position: absolute;
          top: 50%;
          left: 50%;
          -webkit-transform: translate(-50%, -50%);
                  transform: translate(-50%, -50%);
        }
        .combos .packages .package .content {
          padding: 0.5rem;
          border: 1px solid #F1F1F1;
          border-top: 0;
        }
        .combos .packages .package .content h5 {
          font-size: 1rem;
        }
        .combos .packages .package .content p {
          font-size: 0.8rem;
        }
        .combos .packages .package .content .booking-details .price {
          font-size: 1.3rem;
          margin: 0;
        }
        .combos .packages .package .content .booking-details button {
          font-size: 1rem;
          background: #11B1B7;
          color: white;
          padding: 0rem 1rem;
          border: none;
         
        }
        .overflow {
          --max-lines: 2;
          position: relative;
          max-height: calc(var(--lh) * var(--max-lines));
          overflow: hidden;
          padding-right: 1rem; /* space for ellipsis */
        }
        .overflow::before {
          position: absolute;
          content: "...";
        /*   inset-block-end: 0;
          inset-inline-end: 0; */
          bottom: 0;
          right: 0;
        }
        .overflow::after {
          content: "";
          position: absolute;
        /*   inset-inline-end: 0; */
          right: 0;
          width: 1rem;
          height: 1rem;
          background: white;
        }
        .module {
          width: 100%;
          margin: 0 0 1em 0;
          overflow: hidden;
        }       
        .module div {
          margin: 0;
        }         
        `}
        </style>
      </FlexRow>
    </CardLayout>
  );
});
const MenuCard = React.memo((props) => {
  const [isToggle, setToggle] = useState(false);
  const handleToggle = () => {
    childRef.current.toggleDrawer();
  };
  const childRef = useRef();
  return (
    <MaterialDrawer
      changepaper2={true}
      ref={childRef}
      title={
        <SpeacialMenuCard
          val_data={props.val_data}
          selected_menu={props.selected_menu}
          data={props.menu_data.menu}
          getItemReview_action={props.getItemReview_action}
          dish_description={props.dish_description}
          handleToggle={handleToggle}
          i={props.i}
        />
      }
    >
      {/* // <BottomDrawer
    //   height="100%"
    //   border={true}
    //   isToggle={() => handleToggle(isToggle)}
    //   title={
    //     <SpeacialMenuCard
    //       val_data={props.val_data}
    //       selected_menu={props.selected_menu}
    //       data={props.menu_data.menu}
    //       getItemReview_action={props.getItemReview_action}
    //       dish_description={props.dish_description}
    //       handleToggle={handleToggle}
    //     />
    //   }
    // > */}
      <DishDiscription handleToggle={handleToggle} />
    </MaterialDrawer>
    // {/* </BottomDrawer> */}
  );
});
const mapStateToProps = (state) => ({
  menu_data: state.orderReducer.menu_data,
  get_item_review: state.orderReducer.get_item_review,
});
const mapDispatchToProps = (dispatch) => ({
  getItemReview_action: bindActionCreators(getItemReview_action, dispatch),
  dish_description: bindActionCreators(dish_description, dispatch),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(MenuCard));

// export default SpeacialMenuCard;
