import React from 'react';
import styled from 'styled-components';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { paymentAcknowledge } from '../../redux/actions/orderAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'next/router';
// import axios from 'axios';
const CheckoutText = styled.div`
  position: fixed;
  bottom: 30px;
  font-weight: 700;
  right: 18px;
  color: #3cbcb4;
  font-size: 12px;
`;
export const SetFilterIcon = styled.div`
  position: fixed;
  bottom: 50px;
  right: 20px;
  opacity: 0.8;
  background: transparent linear-gradient(172deg, #78ffd6 0%, #007991 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
  padding: 5px 5px;
  display: flex;
  border-radius: 100px;
  box-shadow: 0 0 5px #70707029;
`;
class RazorPayInt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.openPayModal = this.openPayModal.bind(this);
  }
  componentDidMount() {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
  }

  handleChange(evt) {
    console.log(evt.target.value);
    this.setState({
      amount: evt.target.value,
    });
  }
  ordersuccess = (res) => {
    console.log(res.razorpay_order_id, 'order success');
    this.props.paymentAcknowledge(res.razorpay_payment_id);
  };
  openPayModal(amt) {
    console.log('open pay modal');
    var amount = this.props.amount * 100; //Razorpay consider the amount in paise
    var options = {
      key: 'rzp_test_m4B1kzV64HjvXf', //process.env.REACT_APP_razorpaytest_id,
      amount: amount, // 2000 paise = INR 20, amount in paisa
      name: '',
      description: '',
      order_id: '',
      handler: (response) => this.ordersuccess(response),
      // function (response) {
      //   if (response.razorpay_order_id) {

      //     this.ordersuccess(response.razorpay_order_id);
      //   }
      //   var values = {
      //     razorpay_signature: response.razorpay_signature,
      //     razorpay_order_id: response.razorpay_order_id,
      //     transactionid: response.razorpay_payment_id,
      //     transactionamount: amount,
      //   };

      // }
      prefill: {
        name: '',
        email: '',
        contact: '',
      },
      notes: {
        address: '',
      },
      theme: {
        color: '#528ff0',
      },
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.open();
    // axios
    //   .post('http://localhost:5000/upgrade/order', { amount: amount })
    //   .then((res) => {
    //     options.order_id = res.data.id;
    //     options.amount = res.data.amount;
    //     console.log(options);
    //     var rzp1 = new window.Razorpay(options);
    //     rzp1.open();
    //   })
    //   .catch((e) => console.log(e));
  }
  render() {
    return (
      <div>
        <div>
          <button
            onClick={(e) => {
              this.openPayModal(this.props.amount), this.props.proceedPay();
            }}
          >
            <CheckoutText>Proceed </CheckoutText>
            <SetFilterIcon>
              <FiChevronRight style={{ fontSize: 34, color: 'white' }} />
            </SetFilterIcon>
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  paymentAcknowledge: bindActionCreators(paymentAcknowledge, dispatch),
});
export default connect(null, mapDispatchToProps)(withRouter(RazorPayInt));
// export default connect(mapStateToProps, mapDispatchToProps)(RazorPayInt);
// export default ;
