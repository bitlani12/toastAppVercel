import React, { useEffect, useState } from 'react';
import Modal from '../../ui/Modal';
import { FlexBetween } from '../../ui/Flex';
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { zomatoGold_action } from '../../redux/actions/orderAction';
import { toast } from 'react-toastify';
import Cookie from 'js-cookie';
import Dialog from '@material-ui/core/Dialog';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
const ZomatoPopup = (props) => {
  const [code, setCode] = useState({ code1: '', code2: '' });
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const [showInput, setShowInput] = useState(false);
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const applyZomato = () => {
    if (
      code.code2 !== '' &&
      code.code1 !== '' &&
      code.code1.length === 7 &&
      code.code2.length === 7
    ) {
      props.zomatoGold_action([code.code1, code.code2]);
    } else if (
      code.code1 !== '' &&
      code.code1.length === 7 &&
      code.code2.length === 0
    ) {
      props.zomatoGold_action([code.code1]);
    } else if (code.code1.length !== 7 && code.code2.length == 0) {
      toast.error('Code 1 is invalid', {
        position: 'top-right',
        autoClose: 3000,
      });
    } else if (code.code2.length !== 7 && code.code2.length !== 7) {
      toast.error('Invalid Codes!', {
        position: 'top-right',
        autoClose: 3000,
      });
    } else {
      toast.error('Code 1 is invalid', {
        position: 'top-right',
        autoClose: 3000,
      });
    }
  };
  // useEffect(() => {
  //   let joinCode = props.get_table_code.table_joining_code;
  //   if (joinCode !== undefined) {
  //     const codeSplit = joinCode.split('');
  //     setCode(codeSplit);
  //   }
  // }, [props.get_table_code.table_joining_code]);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    if (code.code2 === '') {
      setShowInput(false);
    }
  };

  return (
    <div>
      <div onClick={handleClickOpen}>{props.parent}</div>

      {/* <Modal
        height="auto"
        title={props.parent}
        marginBottom={true}
        padding={false}
        // position="bottom"
      > */}
      <Dialog
        // fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <div>
          {/* <div className="background">
            <img src="static/zomato-gold.png" />
          </div> */}
          <div className="background"></div>
          <div style={{ padding: 20 }}>
            <h3
              style={{
                fontSize: 18,
                color: '#404040',
                lineHeight: 1.3,
              }}
            >
              Today's Zomato Gold Offer
            </h3>
            <div>
              <img src="static/gold1+1.png" />
            </div>
            <div>
              <p style={{ color: '#999999' }}>
                Hi, {Cookie.get('name')}! Enter your 7 digit visit ID & enjoy
                your Zomato Gold privilege
              </p>
            </div>
            <div className="input-box">
              <input
                placeholder="Enter your visit ID code"
                value={code.code1}
                onChange={(e) => setCode({ ...code, code1: e.target.value })}
              />
              {showInput && (
                <input
                  style={{ marginTop: 10 }}
                  value={code.code2}
                  onChange={(e) => setCode({ ...code, code2: e.target.value })}
                  placeholder="Enter your visit ID code"
                />
              )}
            </div>
            {!showInput && (
              <div className="add-more" onClick={() => setShowInput(true)}>
                {' '}
                + ADD MORE CODES
              </div>
            )}
            <FlexBetween className="p20"></FlexBetween>
          </div>
        </div>
        <div className="button-box">
          <button onClick={() => applyZomato()}>ADD ZOMATO ID</button>
        </div>
        {/* </Modal> */}
      </Dialog>
      <style>{`
            .codedesign{
                border-bottom: solid #00000080 2px;
    width: 100%;
    margin: 10px;
    text-align: center;
    padding-bottom: 10px;
    font-size: 30px;
    color: #404040;
}
.MuiDialog-paperWidthSm{
    border-radius:10px;
}
.background{
 background: url(/static/zomato-gold.png) no-repeat center center;
 background-size: cover;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    height: 90px;
}
.input-box{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.input-box>input{
  background: var(--unnamed-color-999999) 0% 0% no-repeat padding-box;
background:rgb(153, 153, 153,0.1) 0% 0% no-repeat padding-box;
border-radius: 10px;
width:100%;
height:47px;
outline:none;
border: none;
padding-left: 12px;

}
.button-box{
  display: flex;
    align-items: center;
    justify-content: center;
    height: 53px;
  
    margin-top:50px;
}
.button-box>button{
  background:rgb(64, 64, 64,0.5) 0% 0% no-repeat padding-box;
  width: 100%;
  height: 100%;
  color:white;
  outline:none;
  border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}
.add-more{
  color: #3CBCB4;
  font-size:14px;
  margin-top:10px;
}
            }
            `}</style>
    </div>
  );
};
const mapStateToProps = (state) => ({
  apply_zomato: state.orderReducer.get_table_code,
});
const mapDispatchToProps = (dispatch) => ({
  zomatoGold_action: bindActionCreators(zomatoGold_action, dispatch),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ZomatoPopup));
