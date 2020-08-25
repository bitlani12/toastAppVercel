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
// var jwt = require('jsonwebtoken');
class QrScan extends Component {
  componentDidMount() {
    // this.generateToken()
    if (process.browser) {
      window.onpopstate = (e) => {
        this.setState({ isToggle: true });
        history.go(1);
        // this.triggerChild();
      };
      history.pushState(null, null, location.href);
    }
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
  // const token = auth(ctx);
  // const check = check_qr(ctx);
  // return { check };
};
export default QrScan;

