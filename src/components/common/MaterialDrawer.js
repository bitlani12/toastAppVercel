import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Router from 'next/router';
import { withRouter } from 'next/router';
import Slide from '@material-ui/core/Slide';
const withRouterInnerRef = (WrappedComponent) => {
  class InnerComponentWithRef extends React.Component {
    render() {
      const { forwardRef, ...rest } = this.props;
      return <WrappedComponent {...rest} ref={forwardRef} />;
    }
  }

  const ComponentWithRef = withRouter(InnerComponentWithRef, { withRef: true });

  return React.forwardRef((props, ref) => {
    return <ComponentWithRef {...props} forwardRef={ref} />;
  });
};
// import { withStyles, createStyleSheet } from '@material-ui/core/styles';
// const styleSheet = createStyleSheet({
//   paper: {
//     height: 'calc(100% - 64px)',
//     top: 64,
//     borderTopLeftRadius: 10,
//   },
// });
class MaterialDrawer extends React.Component {
  //   const [open, setOpen] = useState(false);
  state = { open: false };
  componentWillMount() {
    // Router.reload('/');
  }
  componentDidUpdate() {
    if (this.state.open) {
      if (process.browser) {
        window.onpopstate = (e) => {
          e.preventDefault();
          //   this.state.open === false && history.go(-1);
          //   window.location.reload(true);
          if (Router.pathname !== '/') {
            Router.reload('/');
          }
          this.setState({ open: false });

          // : window.location.reload(true);
        };
        history.pushState(null, null, location.href);
        if (this.state.open) {
          // history.pushState(null, null, location.href);

          //   window.location.reload(true);
          console.log('mtDDDDDDDD2');
        }
      } else if (this.state.open === false) {
        window.onpopstate = (e) => {
          this.setState({ open: false });
          //   window.history.go(-1);
          // Router.reload('/');
        };
      }
    }
    console.log(this.state.open, 'this is false mukeshambani');
  }

  toggleDrawers = () => {
    this.setState({ open: !this.state.open });
    console.log('hi this is childref');
  };

  toggleDrawer = (event, open) => {
    // if (
    //   event &&
    //   event.type === 'keydown' &&
    //   (event.key === 'Tab' || event.key === 'Shift')
    // ) {
    //   return;
    // }
    this.setState({ open: open });
    // setOpen(open);
  };
  render() {
    console.log(this.props);
    // const classes = this.props.classes;
    const { open } = this.state;
    return (
      <div>
        <div onClick={(e) => this.toggleDrawer(e, true)}>
          {this.props.title}
        </div>
        {/* <Slide direction="up" in={open} mountOnEnter unmountOnExit> */}
        <Drawer
          transitionDuration={{ enter: 300, exit: 600 }}
          anchor={'bottom'}
          open={open}
          onClose={(e) => this.toggleDrawer(e, false)}
          style={{ height: 'auto' }}
          classes={{
            paper: `${
              this.props.changepaper2
                ? 'changepaper2'
                : this.props.changepaper3
                  ? 'changepaper3'
                  : this.props.changepaper4
                    ? 'changepaper4'
                    : 'changepaper'
              } `,
          }}
        >
          {/* <div style={{ borderTopLeftRadius: 10 }}> */}
          {/* hiiiii */}
          {this.props.children}
          {/* </div> */}
        </Drawer>
        {/* </Slide> */}
        <style>{`
        .changepaper{
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
            height:95%;
            max-height:95%;
        }
        .changepaper2{
          border-top-left-radius: 0px;
          border-top-right-radius: 0px;
          height:100%;
          max-height:100%;
         
        }
        .changepaper3{
          border-top-left-radius: 0px;
          border-top-right-radius: 0px;
          height:500px;
          max-height:95%;
         
        }
        .changepaper4{
          height:auto;
          background:transparent;
          }
        `}</style>
      </div>
    );
  }
}
export default withRouterInnerRef(MaterialDrawer);
