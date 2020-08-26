import React, { Component, useState } from 'react';
import QrReader from 'react-qr-reader';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { scanqr_action } from 'redux/actions/orderAction';
var jwt = require('jsonwebtoken');
import cookie from 'js-cookie'
import Router from 'next/router';
// let QrReader = '';
class QrScanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 100,
      result: 'No result',
      appIsMounted: false,
    };

    this.handleScan = this.handleScan.bind(this);
  }
  async componentDidMount() {
    this.generateToken()
    // Router.replace(`${data}`)

    // let result = await import('react-qr-reader');
    // QrReader = result.QrReader;
    // this.setState({
    //   appIsMounted: true,
    // });
  }

  generateToken = () => {
    //1. Dont use password and other sensitive fields
    //2. Use fields that are useful in other parts of the     
    //app/collections/models

    const user = {
      name: "mukesh",
      username: "mukesh",
      _id: 1
    }
    var u = {
      name: user.name,
      username: user.username,
      // admin: user.admin,
      _id: user._id.toString(),
      // image: user.image
    };
    let token;
    return token = jwt.sign(u, process.env.JWT_SECRET, {
      expiresIn: 60 * 60 * 24 // expires in 24 hours
    }),
      cookie.set('token', token, { expires: 365 });
    // console.log(token)
  }
  handleScan(data) {
    // this.setState({
    //   result: data,
    // });
    let qrsuccess = false;
    const callBack = () => {
      qrsuccess = true;
    };
    console.log(qrsuccess, 'this is falsexxxxxxxx');
    if (data !== null) {
      document.location.href = `${data}`
      this.props.scanqr_action(data);
    }
  }

 
  render() {
    console.log(this.props.menu_data);
    const previewStyle = {
      height: '100vh',
      width: '100%',
    };

    return (
      <div>
        <div className="cut-border"></div>
        {/* <NoSSR> */}
        {/* {this.state.appIsMounted ? ( */}
        <div class="preloader-scan">
          <QrReader
            delay={this.state.delay}
            style={previewStyle}
            onError={this.handleError}
            onScan={this.handleScan}
            className="qrstyle"
          />
          <div class="diode">
            <div class="laser"></div>
          </div>
        </div>
        <style>{`
        
        .qrstyle div {
          width: 100px;
          height: 100px;
        
          background:
            linear-gradient(to right, black 2px, transparent 2px) 0 0,
            linear-gradient(to right, black 2px, transparent 2px) 0 100%,
            linear-gradient(to left, black 2px, transparent 2px) 100% 0,
            linear-gradient(to left, black 2px, transparent 2px) 100% 100%,
            linear-gradient(to bottom, black 2px, transparent 2px) 0 0,
            linear-gradient(to bottom, black 2px, transparent 2px) 100% 0,
            linear-gradient(to top, black 2px, transparent 2px) 0 100%,
            linear-gradient(to top, black 2px, transparent 2px) 100% 100%;
        
          background-repeat: no-repeat;
          background-size: 20px 20px;
          box-shadow: none !important;
          border-top: 20vh solid #0000004d !important;
          border-bottom: 20vh solid #0000004d !important;
          border-right: 5vh solid #0000004d !important;
          border-left: 5vh solid #0000004d !important;
        }
        body{
          margin: 0px;
          padding: 0px;
        }
        .qrstyle section{
          overflow: hidden;
    position: relative;
    width: 100%;
    height: 100vh;
    padding-top:0px !important;
        }


        .preloader-scan {
          // position: fixed;
          left: 0;
          right: 0;
          // max-width: 200px;
          // display: table;
          margin: 0 auto;
          height: 100%;
          text-align: center;
        }

        .preloader-scan .laser {
          //  width: 66%;
          // margin-left: -25%;
          background-color: tomato;
          height: 1px;
          left:5vh;
          right:5vh;
          position: absolute;
          top: 45%;
          z-index: 2;
          box-shadow: 0 0 4px red;
          -webkit-animation: scanning 2s infinite;
                  animation: scanning 2s infinite;
        }
        .preloader-scan .diode {
          -webkit-animation: beam .01s infinite;
                  animation: beam .01s infinite;
        }
        
        body {
          height: 100%;
        }
        
        @-webkit-keyframes beam {
          50% {
            opacity: 0;
          }
        }
        
        @keyframes beam {
          50% {
            opacity: 0;
          }
        }
        @-webkit-keyframes scanning {
          50% {
            -webkit-transform: translateY(75px);
                    transform: translateY(75px);
          }
        }
        @keyframes scanning {
          50% {
            -webkit-transform: translateY(75px);
                    transform: translateY(75px);
          }
        }
        
        `}</style>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  menu_data: state.orderReducer.menu_data,
  loading: state.loadingReducer,
});
const mapDispatchToProps = (dispatch) => ({
  scanqr_action: bindActionCreators(scanqr_action, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(QrScanner);
// export default ;
