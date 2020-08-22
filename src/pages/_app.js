import { AuthProvider } from 'components/auth-context';
import { SettingsProvider } from 'components/settings-context';
import { BasketProvider } from 'components/basket';
import { simplyFetchFromGraph } from 'lib/graph';
import { getLanguage } from 'lib/language';
import withRedux from 'next-redux-wrapper';
import configureStore from './../redux/rootReducer';
import { Provider, connect } from 'react-redux';
// import globalstyle from './../ui/global.js';
import withReduxStore from '../lib/with-redux-store';
import { Container } from 'next/app';
import Loader from './../page-components/Loader/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class MyApp extends React.Component {
  // const { mainNavigation } = commonData;
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: {
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}),
      },
    };
  }
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Container>
        <Provider store={reduxStore}>
          <BasketProvider
            shippingCost={199}
            freeShippingMinimumPurchaseAmount={800}
          >
            <ToastContainer />
            <Component {...pageProps} />
          </BasketProvider>
          <Loader />
        </Provider>
      </Container>
    );
  }
}

/**
 * Get shared data for all pages
 * - Tenant settings
 * - Main naviation
 */
// MyApp.getInitialProps = async function ({ router: { asPath } }) {
// const language = getLanguage({ asPath });

// try {
//   const {
//     data: {
//       tenant,
//       mainNavigation: { children: mainNavigation },
//     },
//   } = await simplyFetchFromGraph({
//     query: `
//       query COMMON_DATA($language: String!) {
//         mainNavigation: catalogue(language: $language, path: "/") {
//           children {
//             type
//             name
//             path
//           }
//         }

//         tenant(language: $language) {
//           name
//           defaults {
//             currency
//             language
//           }
//         }
//       }
//     `,
//     variables: {
//       language,
//     },
//   });

//   return {
//     commonData: {
//       language,
//       tenant,
//       mainNavigation: mainNavigation.filter((i) => !i.name.startsWith('_')),
//     },
//   };
// } catch (error) {
//   console.error(error);
//   console.warn('Could not fetch common page data');

// Fallback values
//   return {
//     commonData: {
//       language,
//       mainNavigation: [],
//       tenant: {
//         defaults: {
//           language: 'en',
//           currency: 'usd',
//         },
//       },
//     },
//   };
// };
// };

export default withReduxStore(MyApp);
