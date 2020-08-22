/*
Name: Parshant Nagpal
Description : Connection file for the application
Date : 4 May 2020
*/
/* eslint-disable */
'use strict';

// const apiServer = "7hyhccb00d.execute-api.us-east-1.amazonaws.com";
// const apiServer = "54.190.192.105:6025";
const apiServer = 'staging-be.toastapp.co';
//"54.190.192.105:6025";//"http://ded724c8.ngrok.io"
//uncomment these four line for use staging

const running_url = apiServer,
  http_url = `https://${running_url}`,
  apiBase_url = `https://${running_url}/`;

export default class Connection {
  static getResturl() {
    return apiBase_url;
  }
  static getCmsUrl() {
    return frontEndUrl;
  }
  static getBaseUrl() {
    return http_url;
  }
  static getSuccessUrl() {
    return `${apiBase_url}success.html`;
  }
  static getErroUrl() {
    return `${apiBase_url}failure.html`;
  }
}
