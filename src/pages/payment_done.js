import React, { useState, useEffect, useRef } from 'react';
import { FlexRow, FlexBetween } from 'ui/Flex';
import { TitleCenter } from 'ui/Text';
import Layout from 'components/layout';
import Rating from '@material-ui/lab/Rating';
import Veg from 'components/common/Veg';
import { CardLayout } from 'components/SpecialMenuCard/style';
import { withRouter } from 'next/router';
import Router from 'next/router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ToastContainer, toast } from 'react-toastify';
import {
  orderCheckout_action,
  getBilling_action,
  userReview_action,
} from '../redux/actions/orderAction';
import { auth } from '../utils/auth';
import Cookie from 'js-cookie';
import { ButtonBottomFix } from '../components/common/button';

const PaymentDone = (props) => {
  const [RedirectCheck, setRedirectCheck] = useState(false);
  const checkReviewSubmitOrNot = () => {
    console.log('checkReviewSubmitOrNot asdfsaf sfsdf');
    if (RedirectCheck === false) {
      window.onpopstate = (e) => {
        alert('hiii');
        // history.go(1);
        // this.triggerChild();
        history.pushState(null, null, location.href);
      };
      history.pushState(null, null, location.href);
    }

    // }
  };

  // useUnload((e) => {
  // e.preventDefault();
  // const confirmationMessage = 'Rate Before Leaving Page';
  // e.returnValue = confirmationMessage; // Gecko, Trident, Chrome 34+
  // return history.pushState(null, null, location.href);
  // });
  console.log(props);
  const rating = 5;
  let c_id = Cookie.get('customer_id');
  let o_id = Cookie.get('order_id');
  let token = Cookie.get('token');
  const [overAllRating, setOverAllRating] = useState(0);
  const [overAllReview, setOverAllReview] = useState('');
  const [ReviewData, setReviewData] = useState([]);
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState(0);
  const [pics, setPics] = useState([]);
  useEffect(() => {
    if (props.billing_data.length === 0) {
      props.getBilling_action(o_id, c_id, token);
    } else {
      console.log('already have');
    }
  }, []);
  useEffect(() => {
    let orderName = props.billing_data.order_details_id_name_map;
    let data = props.billing_data;
    setData(data);
    orderName &&
      orderName.map((e) =>
        data.order_details[e.id].map((indata, i) => {
          let itemReview = {
            item_id: indata.item_id,
            item_order_id: indata.item_order_id,
            item_rating: '',
            item_review: '',
            item_name: indata.item_name,
            item_type: indata.item_type,
            contains_egg: indata.contains_egg,
          };

          ReviewData.push(itemReview);
        })
      );
  }, [props.billing_data]);

  const handleReview = (indata, i, value) => {
    indata.item_review = value;

    console.log(ReviewData, 'this is datacheck');
  };

  const submitReview = () => {
    let finalReview = [];
    ReviewData.map((e, i) => {
      if (e.item_rating.length !== 0 || e.item_review.length !== 0) {
        finalReview.push(e);
      }
    });
    let file = JSON.stringify({
      restraunt_id: data.restraunt_id,
      overall_ratings: overAllRating,
      overall_review: overAllReview,
      items_reviews: finalReview,
    });
    let pic = '123, /Users/apple/Desktop/mTTlOcpe_basd.jpg';

    if (overAllReview.length === 0 && overAllRating <= 2) {
      if (overAllRating == null || overAllRating == 0) {
        toast.error('Please Rate 1 to 5', {
          position: 'top-right',
          autoClose: 3000,
        });
      } else {
        toast.error(
          'We are sorry to hear about your experience! Please leave us a review. We will make sure to keep your next visit more delightful :)',
          {
            position: 'top-right',
            autoClose: 5000,
          }
        );
      }
      
    } else {
      props.userReview_action(file, pic);
      setRedirectCheck(true);
    }
  };

  const onStarClick = (value) => {
    console.log(value, 'this is ');
    setOverAllRating(value);
  };
  const handleFiles = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      if (img.size > 2097152) {
        toast.error('File is too big!', {
          position: 'top-right',
          autoClose: 3000,
        });
      } else if (!img.name.match(/\.(jpg|jpeg|png|gif)$/)) {
        toast.error('Invalid File Type', {
          position: 'top-right',
          autoClose: 3000,
        });
      } else {
        let reader = new FileReader();
        reader.onload = (e) => {
          formfield['photo'] = e.target.result;
        };
        // reader.readAsDataURL(event.target.files[0]);
      }
    }
  };
  // useEffect(() => {
  //   console.log('hiii i am on popstate 222');
  //   window.onpopstate = (e) => {
  //     alert('Review is must to be submit');
  //     history.go(0);
  //     console.log('hiii i am on popstate');
  //     // this.triggerChild();
  //     // history.pushState(null, null, location.href);
  //   };
  //   history.pushState(null, null, location.href);
  // });
  return (
    <Layout>
      <div>
        <CheckReviewSubmitorNot
          restraunt_name={
            data.restraunt_details && data.restraunt_details.restraunt_name
          }
        />
        <FlexRow className="pt20">
          <TitleCenter style={{textAlign:"left", fontSize:15, lineHeight:"20px"}}>Your server will attend you shortly to collect the payment, meanwhile please leave us your valuable feedback. <img src="/static/check_circle-24px(1).svg" alt="Klarna logo" style={{marginLeft:10, position:'absolute', marginTop:0}}/></TitleCenter>
          
        </FlexRow>
      </div>
      <div className=" p10 ">
        <div className="fo13 ">
          <span className="secondText">Rate </span>{' '}
          {
            <span>
              {data.restraunt_details && data.restraunt_details.restraunt_name}
            </span>
          }
        </div>
        <div className=" p10 ">
          <FlexBetween style={{ marginBottom: 24, marginTop: 5 }}>
            <div className="rating_parent">
              <Rating
                starCount={5}
                value={overAllRating}
                onChange={(e, newValue) => onStarClick(newValue)}
              />
            </div>
            <div
              className="fo12 mr10"
              style={{ color: '#F7B239', fontSize: 14 }}
            >
              {overAllRating === 5
                ? 'Awesome!'
                : overAllRating === 4
                ? 'Nice'
                : overAllRating === 3
                ? 'Good'
                : overAllRating === 2
                ? 'Not Good'
                : overAllRating === 1
                ? 'Bad'
                : null}
            </div>
          </FlexBetween>
          <input
            style={{
              background: '#99999926',
              borderRadius: 10,
              width: '100%',
              border: 'solid #99999926 1px',
              padding: 8,
            }}
            onChange={(e) => setOverAllReview(e.target.value)}
            placeholder="Tell us more..."
          />
        </div>
      </div>
      <div className="p10" style={{ background: '#E4E4E4', paddingBottom: 75 }}>
        <FlexRow>
          <h3> Rate your order:</h3>
          <small className="ml10"> (OPTIONAL) </small>
          <div></div>
        </FlexRow>
        {ReviewData.length !== 0 &&
          ReviewData.map((indata, i) => (
            <div style={{ display: 'flex' }}>
              <CardLayout style={{ background: 'white' }}>
                <div className="p10">
                  <FlexRow>
                    <Veg />
                    <h4
                      style={{
                        marginLeft: 10,
                        marginTop: 0,
                        marginBottom: 0,
                      }}
                    >
                      {' '}
                      {indata.item_name}{' '}
                    </h4>
                  </FlexRow>
                  <FlexBetween>
                    <h6 className="secondText">How was it?</h6>
                    <div>
                      <FlexRow>
                        <img
                          src="/static/001-happy-1.svg"
                          className="mr10"
                          style={{
                            opacity: indata.item_rating === 5 ? '' : 0.5,
                          }}
                          onClick={(e) => {
                            indata.item_rating = 5;
                            setUpdate(update + 1);
                          }}
                        />
                        <img
                          src="/static/004-happy.svg"
                          className="mr10"
                          style={{
                            opacity: indata.item_rating === 4 ? '' : 0.5,
                          }}
                          onClick={(e) => {
                            indata.item_rating = 4;
                            setUpdate(update + 1);
                          }}
                        />
                        <img
                          src="/static/002-confused.svg"
                          className="mr10"
                          style={{
                            opacity: indata.item_rating === 3 ? '' : 0.5,
                          }}
                          onClick={(e) => {
                            indata.item_rating = 3;
                            setUpdate(update + 1);
                          }}
                        />
                        <img
                          src="/static/005-arrogant.svg"
                          className="mr10"
                          style={{
                            opacity: indata.item_rating === 2 ? '' : 0.5,
                          }}
                          onClick={(e) => {
                            indata.item_rating = 2;
                            setUpdate(update + 1);
                          }}
                        />
                        <img
                          src="/static/003-sick.svg"
                          className="mr10"
                          style={{
                            opacity: indata.item_rating === 1 ? '' : 0.5,
                          }}
                          onClick={(e) => {
                            indata.item_rating = 1;
                            setUpdate(update + 1);
                          }}
                        />
                      </FlexRow>
                    </div>
                  </FlexBetween>

                  <div style={{ position: 'relative' }}>
                    <input
                      style={{
                        background: '#99999926',
                        borderRadius: 10,
                        width: '100%',
                        border: 'solid #99999926 1px',
                        padding: 8,
                      }}
                      onChange={(e) => (indata.item_review = e.target.value)}
                      placeholder="Tell us more..."
                    />
                    <label for="selectImage">
                      {/* <img
                        src="/static/add_photo_alternate-24px.svg"
                        style={{ position: 'absolute', right: 9, marginTop: 5 }}
                      /> */}
                    </label>
                    {/* <input hidden id="selectImage" type="file" onChange={e => handleFiles(e)} /> */}
                  </div>
                </div>
              </CardLayout>
            </div>
          ))}
        <a onClick={() => submitReview()}>
          <ButtonBottomFix title={'SUBMIT'} />
        </a>
      </div>
      <style>
        {`
            .rating_parent{
            -ms-transform: scale(1.3,1.3); /* IE 9 */
            transform: scale(1.3,1.3);
            margin-left: 8px;
            margin-top: 1px;
    display:inline-block;
            }
            .rating_parent .dv-star-rating-empty-star {
                color:#E0E0E0 !important; 
            }
          .rating_parent h3  {
            display:none;
          }
          .rating_parent h2  {
            display:none;
          }
          `}
      </style>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  billing_data: state.orderReducer.billing_data,
});
const mapDispatchToProps = (dispatch) => ({
  orderCheckout_action: bindActionCreators(orderCheckout_action, dispatch),
  getBilling_action: bindActionCreators(getBilling_action, dispatch),
  userReview_action: bindActionCreators(userReview_action, dispatch),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PaymentDone));

// const useUnload = (fn) => {
//   const cb = useRef(fn);

//   useEffect(() => {
//     const onUnload = cb.current;

//     window.addEventListener('onbeforeunload', onUnload);

//     return () => window.removeEventListener('onbeforeunload', onUnload);
//   }, [cb]);
// };

class CheckReviewSubmitorNot extends React.Component {
  componentDidUpdate() {
    console.log('hiii i am on popstate 222');
    window.onpopstate = (e) => {
      alert(
        `We hope that you had a great time at ${this.props.restraunt_name} but please don't leave yet! Tell us about your experience and consider leave us a rating :)`
      );
      // history.go(0);
      console.log('hiii i am on popstate');
      // this.triggerChild();
      // history.pushState(null, null, location.href);
    };
    history.pushState(null, null, location.href);
  }
  render() {
    return <div></div>;
  }
}
