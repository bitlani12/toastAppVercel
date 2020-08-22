import React, { useState, useRef } from 'react';
import BottomDrawer from '../../ui/BottomDrawer';
import MaterialDrawer from '../../components/common/MaterialDrawer';
import { FlexBetween, FlexRow } from 'ui/Flex';
import { AiOutlineClose } from 'react-icons/ai';
import styled from 'styled-components';
import Checkbox from './../../components/common/checkbox';
import CheckboxTitleList from './../../components/common/CheckboxTitleList';
import Input from './../../components/common/input';
import { withRouter } from 'next/router';
import Router from 'next/router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { serviceRequest_action } from '../../redux/actions/orderAction';
const ServiceAssistant = (props) => {
  // let CheckBoxData = [];
  const [CheckBoxData, setCheckBoxData] = useState([]);
  const [textArea, setTextArea] = useState('');
  const [textBox, setTextBox] = useState('');
  const serviceRequest = () => {
    const callBack = () => {
      setCheckBoxData([]);
      setTextArea('');
      setTextBox('');
    };
    props.serviceRequest_action(textArea, CheckBoxData, textBox, callBack);
  };

  const handleText = (e) => { };
  const handlechecked = (e) => {
    console.log(CheckBoxData, 'this is uncheck');
    const ifduplicate = CheckBoxData.findIndex((i) => {
      return i === e;
    });

    if (ifduplicate >= 0) {
      unchecked(ifduplicate);
    } else setCheckBoxData([...CheckBoxData, e]);
  };

  const unchecked = (ifduplicate) => {
    setCheckBoxData(CheckBoxData.filter((e, i) => i !== ifduplicate));
  };
  const childRef = useRef();
  const handleToggle = () => {
    console.log("this is issue")
    childRef.current.toggleDrawers();
  };

  return (
    // <Layout>
    <div>
      <MaterialDrawer title={props.title} border={true} changepaper3={true} ref={childRef}>
        <div className="p10">
          <FlexBetween style={{ alignItems: 'end' }}>
            {/* <Loa */}
            <h4 className="fo16" style={{ fontWeight: 500, marginTop: 0 }}>
              Request Service
            </h4>
            <img src="/static/close-24px(2).svg" onClick={handleToggle} />
          </FlexBetween>
          <div onClick={(e) => e.stopPropagation()}>
            <div style={{ border: 'solid #9999993d 0.5px ', height: 1 }}></div>
            <h4
              className="fo14"
              style={{ fontWeight: 500, margin: 10, textAlign: 'left' }}
            >
              Forgot to customize your dish?
            </h4>
            <textarea
              style={{
                background: '#99999926',
                borderRadius: 10,
                width: '100%',
                border: 'solid #99999926 1px',
                padding: 8,
                height: 100,
              }}
              value={textArea}
              onChange={(e) => setTextArea(e.target.value)}
              placeholder="(Ex. Do not add mushroom in pizza)"
            />
            <h4
              className="fo16"
              style={{ fontWeight: 500, textAlign: 'left', fontSize: 14 }}
            >
              Request for:
            </h4>
            {/* {check} */}
            <CheckboxTitleList
              title="Water"
              checked={
                CheckBoxData.find((val) => val === 'Water') ? true : false
              }
              handlechecked={() => handlechecked('Water')}
            />
            <CheckboxTitleList
              title="Salt & Paper"
              checked={
                CheckBoxData.find((val) => val === 'Salt & Paper')
                  ? true
                  : false
              }
              handlechecked={() => handlechecked('Salt & Paper')}
            />
            <CheckboxTitleList
              title="Tissue Paper"
              checked={
                CheckBoxData.find((val) => val === 'Tissue Paper')
                  ? true
                  : false
              }
              handlechecked={() => handlechecked('Tissue Paper')}
            />

            <CheckboxTitleList
              title="Sauce & Mayonnaise"
              checked={
                CheckBoxData.find((val) => val === 'Sauce & Mayonnaise')
                  ? true
                  : false
              }
              handlechecked={() => handlechecked('Sauce & Mayonnaise')}
            />
            <div className="pt10">
              <Input
                value={textBox}
                placeholder="Write your own..."
                onchange={(value) => setTextBox(value)}
              />
            </div>
          </div>
          <div className="p10">
            <button
              onClick={() => serviceRequest()}
              style={{
                background:
                  'transparent linear-gradient(154deg, #656565 0%, #007991 100%) 0% 0% no-repeat padding-box',
                boxShadow: '0px 3px 6px #00000029',
                borderRadius: 10,
                padding: '15px',
                color: 'white',
                width: '100%',
                margin: 'auto',
                fontSize: '16px',
              }}
            >
              REQUEST
            </button>
          </div>
        </div>
      </MaterialDrawer>
      <style>
        {`
          ::placeholder {
            font-size: 12px;
            opacity: 0.5;
          }`}
      </style>
    </div>
    // </Layout>
  );
};

const mapDispatchToProps = (dispatch) => ({
  serviceRequest_action: bindActionCreators(serviceRequest_action, dispatch),
});
export default connect(null, mapDispatchToProps)(withRouter(ServiceAssistant));
