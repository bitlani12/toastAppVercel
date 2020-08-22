import React, { Component, useState } from 'react';
import dynamic from 'next/dynamic';
import Layout from 'components/layout';
import Router from 'next/router';
import { auth, check_qr } from '../utils/auth';
// import { auth } from '../utils/auth';
import Cookie from 'js-cookie';
// import QrScanner from '../page-components/QrScanner/QrScanner';
const QrScanner = dynamic(
  () => import('../page-components/QrScanner/QrScanner'),
  { ssr: false }
);
// import QrReader from '';
class QrScan extends Component {
  componentDidMount() {
    if (process.browser) {
      window.onpopstate = (e) => {
        this.setState({ isToggle: true });
        history.go(1);
        // this.triggerChild();
      };
      history.pushState(null, null, location.href);
    }
  }
  // componentWillUnmount() {
  //   // if (this.state.isToggle === false) {

  // }
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
  return { token, check };
};
export default QrScan;
