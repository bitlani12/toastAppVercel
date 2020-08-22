import React, { useEffect, useState } from 'react';
import Modal from '../../ui/Modal';
import { FlexBetween } from '../../ui/Flex';
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ClosePopUpOnBack from './../../components/common/ClosePopUpOnBack';
import cookie from 'js-cookie';
const Codepopup = (props) => {
  console.log('this sis ppopo');
  const [code, setCode] = useState([]);

  useEffect(() => {
    let joinCode = props.get_table_code.table_joining_code;

    const codeSplit = cookie.get('join_code').split('');
    setCode(codeSplit);
  }, [props.get_table_code.table_joining_code]);

  return (
    <div>
      <Modal
        height="270px"
        title={props.title}
        marginBottom={true}
        click={'okay'}
      >
        <div className="p10">
          <h3 className="header-code">Share this code with your friends</h3>
          <div className="fo12 secondText" style={{ lineHeight: 1.3 }}>
            This code will be required by others to join your table.
          </div>
          <FlexBetween className="p20" style={{ marginTop: 10 }}>
            {code.map((val) => {
              return <div className="codedesign">{val} </div>;
            })}
          </FlexBetween>
        </div>
      </Modal>
      <style>{`
      .header-code{
             font-size: 18px;
          color: #404040;
          line-height: 1.3;
          margin-top: 8px;
      
      }
            .codedesign{
                border-bottom: solid #00000080 2px;
                width: 100%;
                margin: 10px;
                text-align: center;
                padding-bottom: 10px;
                font-size: 30px;
                color: #404040;
}
 .close-btn{
  display: flex;
    padding:10px;
    justify-content: space-between;
    margin-top: 14px;
}
.close-txt{
  font-size: 18px;
  margin-right: 16px;
  color: lightseagreen;
}
.close-img{
  margin-left: 16px;
}
@media only screen and (max-width:393px){
  .close-btn{
    margin-top:2px;
  }
  .header-code{
    margin-top:20px;
  }
  .codedesign{
    margin-top:10px;
  }
}
  @media only screen and (max-width:1024px) and (min-width:393px){
    .close-btn{
      margin-top:25px;
    }
    .codedesign{
      margin-top:25px;
    }
    .header-code{
      margin-top:20px;
    }
}

            `}</style>
    </div>
  );
};
const mapStateToProps = (state) => ({
  get_table_code: state.orderReducer.get_table_code,
  loading: state.loadingReducer.loading,
});

export default connect(mapStateToProps, null)(withRouter(Codepopup));
