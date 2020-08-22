import React from 'react';

export default function ClosePopUpOnBack(HocComponent) {
  // And return another component
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { isToggle: false };
    }

    // triggerChild = () => {
    //   this.refs.child.toggleDrawer1();
    // };
    // componentDidUpdate() {
    //   console.log('this is update 1 ++ 33333');
    //   //   if (this.state.isToggle === false) {
    //   if (this.state.isToggle === false) {
    //     if (process.browser) {
    //       window.onpopstate = (e) => {
    //         this.setState({ isToggle: true });
    //         history.go(1);
    //         // this.triggerChild();
    //       };
    //       history.pushState(null, null, location.href);
    //     }
    //   }

    //   //   }
    // }
    render() {
      return (
        <div>
          {console.log(
            this.state.isToggle,
            'this is tog tog toggle 22222222222222'
          )}
          {/* {this.state.isToggle ? ( */}
          {/* <HocComponent {...this.props} isToggle={true} />
          ) : ( */}
          <HocComponent {...this.props} isToggle={this.state.isToggle} />
          {/* )} */}
        </div>
      );
    }
  };
  //   return HOC;
}
