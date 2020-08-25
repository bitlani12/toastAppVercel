// import Cmp, { getData } from 'page-components/index';

// export async function getStaticProps() {
//   const data = await getData({ asPath: '/' });

//   return {
//     props: {
//       ...data,
//     },
//     unstable_revalidate: 1,
//   };
// }
import FrontPage from 'page-components/index';
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getBilling_action,
  jointable_action,
  scanqr_action,
  getTableCode_action,
} from '../redux/actions/orderAction';
import { auth, check_qr_not_avail } from '../utils/auth';
import cookie from 'js-cookie';
import Router from 'next/router';
let check;
var jwt = require('jsonwebtoken');
class Cmp extends React.Component {
  static getInitialProps({ reduxStore, req }) {
    check = process.browser ? <div></div> : <div>hello</div>;
    return {};
  }

  componentWillMount() {
    this.generateToken()
    const code = this.props.router.query.qr_code
    // console.log(code, "this is code coe")
    // const data = Cookie.get(code);
    // if (this.props.menu_data.menu === undefined) {
    // this.props.jointable_action(join_code, qr_code, 'home');
    // }
    // this.props.scanqr_action(data)
    // this.props.getTableCode_action(qr_code);
    // this.props.getBilling_action(o_id, c_id, token);
    this.props.scanqr_action(code)
  }
  generateToken = () => {
    //1. Dont use password and other sensitive fields
    //2. Use fields that are useful in other parts of the     
    //app/collections/models

    const user = {
      name: "",
      username: "",
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
    return (
      <div>
        {check}
        {this.props.loading && this.props.menu_data.menu === undefined ? (
          <div></div>
        ) : (
            <FrontPage />
          )}
      </div>
    );
  }
}

Cmp.getInitialProps = async (ctx) => {
  // const token = auth(ctx);
  // const qrc_check = check_qr_not_avail(ctx);
  // return { token };
};

const mapStateToProps = (state) => ({
  menu_data: state.orderReducer.menu_data,
  billing_data: state.orderReducer.billing_data,
  loading: state.loadingReducer,
});
const mapDispatchToProps = (dispatch) => ({
  scanqr_action: bindActionCreators(scanqr_action, dispatch),
  jointable_action: bindActionCreators(jointable_action, dispatch),
  getBilling_action: bindActionCreators(getBilling_action, dispatch),
  getTableCode_action: bindActionCreators(getTableCode_action, dispatch),
  scanqr_action: bindActionCreators(scanqr_action, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Cmp));
