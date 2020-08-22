import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { responsive } from 'ui';
import ServiceAssistant from '../../../page-components/ServiceAssistant/ServiceAssistant';
import { useAuth } from 'components/auth-context';
import { useSettings } from 'components/settings-context';
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { leaveTable_action } from '../../../redux/actions/orderAction';
import Cookie from 'js-cookie';
import LogoShop from 'ui/icons/logo-shop';

import BurgerButton from './burger-button';
import BasketButton from './basket-button';
import { Outer, Nav, Logo, NavActions, NavList, NavListItem } from './styles';
import Codepopup from '../../../page-components/Codepopup/Codepopup';
const Header = (props) => {
  const { simple } = props;
  const { mainNavigation } = useSettings();
  const auth = useAuth();

  const [navOpen, setNavOpen] = useState(false);
  const Key = styled.button.attrs(() => ({
    type: 'button',
  }))`
    appearance: none;
    display: none;
    cursor: pointer;
    background: transparent;
    width: 40px;
    height: 40px;
    position: absolute;
    margin-right: 15px;
    margin-top: 0px;
    right: 0px;
    padding: 0;
    outline: none;

    ${responsive.smAndLess} {
      display: block;
    }
  `;
  const leaveTable = () => {
    props.leaveTable_action();
  };
  return (
    <Outer simple={simple}>
      <a onClick={() => leaveTable()}>
        <Logo>
          <img src="/static/Group 1427.svg" />
          {/* <LogoShop /> */}
        </Logo>
      </a>

      <Nav open={navOpen}>
        {/*  <NavList>
          {mainNavigation.map((category) => (
            <NavListItem key={category.path}>
              <Link as={category.path} href="/[...catalogue]">
                <a onClick={() => setNavOpen(false)}>{category.name}</a>
              </Link>
            </NavListItem>
          ))}
        </NavList>*/}
      </Nav>
      {/* <NavActions open={navOpen}>
        {auth.isLoggedIn ? (
          <button type="button" onClick={auth.logout}>
            Logout
          </button>
        ) : (
          <Link href="/login">
            <a>Login</a>
          </Link>
        )}
      </NavActions> */}
      <div className="key">
        <ServiceAssistant title={<img src="/static/assistant-24px.svg" />} />
      </div>
      <Key>
        <div className="key">
          <Codepopup title={<img src="/static/vpn_key-24px.svg" />} />
        </div>
      </Key>
      {/* <BurgerButton active={navOpen} onClick={() => setNavOpen(!navOpen)} /> */}

      <style>{`
      .key .MainContentContainer{
      position:relative !important;
}   `}</style>
    </Outer>
  );
};

const mapStateToProps = (state) => ({
  billing_data: state.orderReducer.billing_data,
});
const mapDispatchToProps = (dispatch) => ({
  leaveTable_action: bindActionCreators(leaveTable_action, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
