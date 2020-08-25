import React, { Component, useState } from 'react';
import dynamic from 'next/dynamic';
import Layout from 'components/layout';
import Router from 'next/router';
import { auth, check_qr } from '../utils/auth';
// import { auth } from '../utils/auth';
import cookie from 'js-cookie'
// import QrScanner from '../page-components/QrScanner/QrScanner';
const QrScanner = dynamic(
  () => import('../page-components/QrScanner/QrScanner'),
  { ssr: false }
);
// import QrReader from '';
class QrScan extends Component {
  componentDidMount() {
    this.generateToken()
    if (process.browser) {
      window.onpopstate = (e) => {
        this.setState({ isToggle: true });
        history.go(1);
        // this.triggerChild();
      };
      history.pushState(null, null, location.href);
    }
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
  render() {
    const previewStyle = {
      height: 240,
      width: 320,
    };

    return (
      <Layout>
        <div>
          <QrScanner />
        </div>
      </Layout>
    );
  }
}
QrScan.getInitialProps = async (ctx) => {
  console.log('this is ctx');
  const token = auth(ctx);
  const check = check_qr(ctx);
  return { check };
};
export default QrScan;
