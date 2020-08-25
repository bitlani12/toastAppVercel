import React from 'react';
import Router from 'next/router';
import nextCookie from 'next-cookies';
// "start": "NODE_ENV=production next start",
export const auth = (ctx) => {
  const { token } = nextCookie(ctx);
  console.log(ctx, 'i am in auth');
  if (ctx && ctx.req && !token) {
    ctx.res.writeHead(302, { Location: '/qr_scanner' });
    ctx.res.end();
    return token;
  }

  if (!token) {
    Router.push('/qr_scanner');
  }

  return token;
};

export const check_auth = (ctx) => {
  const { token } = nextCookie(ctx);
  console.log(ctx, 'i am in auth');
  if (ctx && ctx.req && token) {
    ctx.res.writeHead(302, { Location: '/' });
    ctx.res.end();
    return token;
  }

  if (token) {
    Router.push('/');
  }

  return token;
};

export const check_qr = (ctx) => {
  const { qr_code } = nextCookie(ctx);
  console.log(ctx, 'i am in auth');
  if (ctx && ctx.req && qr_code) {
    ctx.res.writeHead(302, { Location: '/' });
    ctx.res.end();
    return qr_code;
  }

  if (qr_code) {
    Router.push('/');
  }

  return qr_code;
};

export const check_qr_not_avail = (ctx) => {
  const { qr_code } = nextCookie(ctx);
  console.log(ctx, 'i am in auth');
  if (ctx && ctx.req && !qr_code) {
    ctx.res.writeHead(302, { Location: '/qr_scanner' });
    ctx.res.end();
    return qr_code;
  }

  if (!qr_code) {
    Router.push('/qr_scanner');
  }

  return qr_code;
};
