import React from 'react';
import { css } from '@emotion/core';
import ClipLoader from 'react-spinners/ClipLoader';
import { connect } from 'react-redux';
const Loader = (props) => {
  let { loading } = props.loading;
  console.log(loading, 'this is loading');
  if (!loading) {
    return null;
  }
  return (
    <div className="loading_container">
      <div className="innerview">
        {/* <ClipLoader
          // css={override}
          size={33}
          color={'#123abc'}
          loading={loading}
        /> */}
        <div class="multi-ripple">
  <div></div>
  <div></div>
</div>
        {/* <div className="loader-3"></div> */}
      </div>
      <style>
        {`
        .loading_container{
                background-color:rgba(0,0,0,0.1);
              position: fixed;
              z-index: 9999;
              top: 0;
              left: 0;
              flex: 1;
              justify-content: center;
              align-items: center;
              height: 100%;
              width: 100%;
              align-items: center;
    text-align: center;
    display:flex;
        }
        .innerview{
            flex: 1; justify-content: center; align-items: center;
        }
  


        .multi-ripple {
          width: 2.6rem;
          height: 2.6rem;
          margin: auto;
        }
        .multi-ripple div {
          position: absolute;
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          border: 0.3rem solid #1f3ade;
          -webkit-animation: 1.5s ripple infinite;
                  animation: 1.5s ripple infinite;
        }
        .multi-ripple div:nth-child(2) {
          -webkit-animation-delay: 0.5s;
                  animation-delay: 0.5s;
        }

        @keyframes ripple {
          from {
            -webkit-transform: scale(0);
                    transform: scale(0);
            opacity: 1;
          }
          to {
            -webkit-transform: scale(2);
                    transform: scale(2);
            opacity: 0;
          }
        }
        
        @-webkit-keyframes ripple {
          from {
            -webkit-transform: scale(0);
                    transform: scale(0);
            opacity: 1;
          }
          to {
            -webkit-transform: scale(1);
                    transform: scale(1);
            opacity: 0;
          }
        }
        















        
.loader-3:before, #loader-3:after{
    content: "";
    width: 20px;
    height: 20px;
    position: absolute;
    top: 40%;
    left: calc(50% - 10px);
    background-color: #3498db;
    animation: squaremove 1s ease-in-out infinite;
  }
  
  .loader-3:after{
    bottom: 0;
    animation-delay: 0.5s;
  }
  
  @keyframes squaremove{
    0%, 100%{
      -webkit-transform: translate(0,0) rotate(0);
      -ms-transform: translate(0,0) rotate(0);
      -o-transform: translate(0,0) rotate(0);
      transform: translate(0,0) rotate(0);
    }
  
    25%{
      -webkit-transform: translate(40px,40px) rotate(45deg);
      -ms-transform: translate(40px,40px) rotate(45deg);
      -o-transform: translate(40px,40px) rotate(45deg);
      transform: translate(40px,40px) rotate(45deg);
    }
  
    50%{
      -webkit-transform: translate(0px,80px) rotate(0deg);
      -ms-transform: translate(0px,80px) rotate(0deg);
      -o-transform: translate(0px,80px) rotate(0deg);
      transform: translate(0px,80px) rotate(0deg);
    }
  
    75%{
      -webkit-transform: translate(-40px,40px) rotate(45deg);
      -ms-transform: translate(-40px,40px) rotate(45deg);
      -o-transform: translate(-40px,40px) rotate(45deg);
      transform: translate(-40px,40px) rotate(45deg);
    }
  }
  
  `}
      </style>
    </div>
  );
};
const mapStateToProps = (state) => ({
  loading: state.loadingReducer,
});
export default connect(mapStateToProps, null)(Loader);
// export default ;
