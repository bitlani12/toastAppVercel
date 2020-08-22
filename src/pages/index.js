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
import Cookie from 'js-cookie';
import Router from 'next/router';
let check;

class Cmp extends React.Component {
  static getInitialProps({ reduxStore, req }) {
    check = process.browser ? <div>hiii</div> : <div>hello</div>;
    return {};
  }
  componentWillMount() {
    const c_id = Cookie.get('customer_id');
    const o_id = Cookie.get('order_id');
    const token = Cookie.get('token');
    const qr_code = Cookie.get('qr_code');
    const join_code = Cookie.get('join_code');

    if (this.props.menu_data.menu === undefined) {
      this.props.jointable_action(join_code, qr_code, 'home');
    }

    this.props.getTableCode_action(qr_code);
    this.props.getBilling_action(o_id, c_id, token);
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
  const token = auth(ctx);
  const qrc_check = check_qr_not_avail(ctx);
  return { token, qrc_check };
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
});
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Cmp));
