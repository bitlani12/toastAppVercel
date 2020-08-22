import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Router from 'next/router';
// import { withStyles, createStyleSheet } from '@material-ui/core/styles';
// const styleSheet = createStyleSheet({
//   paper: {
//     height: 'calc(100% - 64px)',
//     top: 64,
//     borderTopLeftRadius: 10,
//   },
// });

class AddOnMaterialDrawer extends React.Component {
  //   const [open, setOpen] = useState(false);
  state = { open: false };
  componentDidUpdate() {
    if (this.props.open) {
      if (process.browser) {
        window.onpopstate = (e) => {
          e.preventDefault();
          //   this.state.open === false && history.go(-1);
          //   window.location.reload(true);
          if (Router.pathname !== '/') {
            Router.reload('/');
          }
          this.props.toggleDrawer(e, false);

          // : window.location.reload(true);
        };
        history.pushState(null, null, location.href);
        if (this.props.open) {
          // history.pushState(null, null, location.href);

          //   window.location.reload(true);
          console.log('mtDDDDDDDD2');
        }
      } else if (this.props.open === false) {
        window.onpopstate = (e) => {
          this.props.toggleDrawer(e, false);
          //   window.history.go(-1);
          // Router.reload('/');
        };
      }
    }
    console.log(this.state.open, 'this is false mukeshambani');
  }

  toggleDrawer = (event, open) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    this.setState({ open: open });
    // setOpen(open);
  };
  render() {
    // const classes = this.props.classes;
    const { open } = this.state;
    return (
      <div>
        <div onClick={(e) => this.toggleDrawer(e, true)}>
          {this.props.title}
        </div>

        <Drawer
          anchor={'bottom'}
          transitionDuration={{ enter: 300, exit: 600 }}
          open={this.props.open}
          onClose={(e) => this.props.toggleDrawer(e, false)}
          classes={{
            paper: `${
              this.props.heightss  ? 'repeat_customization' : 'changepaper222'
              }`,
          }}
        >
        
          {this.props.children}
          
        </Drawer>
        <style >{`
          .changepaperssssss {
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
            height: ${this.props.heightss};
            max-height: 95%;
          }
          .changepaper222 {
            border-top-left-radius: 0px;
            border-top-right-radius: 0px;
            height: 95%;
            max-height: 95%;
          }
          .repeat_customization{
            border-top-left-radius: 0px;
            border-top-right-radius: 0px;
            height: 30%;
            max-height: 95%;
          }
        `}</style>
      </div>
    );
  }
}
export default AddOnMaterialDrawer;
AddOnMaterialDrawer.defaultProps = {
  heightss: '95%',
};
