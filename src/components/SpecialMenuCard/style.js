import styled from 'styled-components';
import Image from '@crystallize/react-image';
export const CardLayout = styled.div`
  grid-template-columns: (2, 1fr);
  -ms-grid-columns: 1fr 1fr;
  max-width: 1600px;
  margin: 10px auto;
  height: auto;
  width: 95%;
  display: inline-table;
  border-radius: 8px;
  justify-content: space-between;
  box-shadow: 0 0 5px #70707029;

  -moz-box-shadow: 6px 6px 12px #70707029;
  -webkit-box-shadow: 6px 6px 12px #70707029;
  box-shadow: 6px 6px 12px #70707029;
  moz-border: solid #70707029 1px;
  -webkit-border: solid #70707029 1px;
  box-shadow: 0px 3px 6px #0000001a;
  border-radius: 10px;
`;

export const Img = styled(Image)`
  width: 100%;
  height: 100%;
  max-height: 250px;
  display: block;
  margin: 0 auto;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  > img {
    display: block;
    object-fit: contain;
    object-position: center;
    width: 100%;
    height: 100%;
  }
`;
export const FullCard = styled.div`
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 20px 20px 0px 0px;
  opacity: 1;
  grid-template-columns: (2, 1fr);
  -ms-grid-columns: 1fr 1fr;
  max-width: 1600px;
  margin: 10px auto;
  height: auto;
  width: 100%;
  display: inline-table;
  justify-content: space-between;
  box-shadow: 0 0 5px #70707029;
  -moz-box-shadow: 6px 6px 12px #70707029;
  -webkit-box-shadow: 6px 6px 12px #70707029;
  box-shadow: 6px 6px 12px #70707029;
  moz-border: solid #70707029 1px;
  -webkit-border: solid #70707029 1px;
  box-shadow: 0px 3px 6px #0000001a;
  padding: 5px 20px;
  margin-top: -15px;
  position: absolute;
`;
export const FullWidthCard = styled.div`
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 0px 0px 0px 0px;
  opacity: 1;
  grid-template-columns: (2, 1fr);
  -ms-grid-columns: 1fr 1fr;
  max-width: 1600px;
  margin: 10px auto;
  height: auto;
  width: 100%;
  display: inline-table;
  justify-content: space-between;
  box-shadow: 0 0 5px #70707029;
  -moz-box-shadow: 6px 6px 12px #70707029;
  -webkit-box-shadow: 6px 6px 12px #70707029;
  box-shadow: 6px 6px 12px #70707029;
  moz-border: solid #70707029 1px;
  -webkit-border: solid #70707029 1px;
  box-shadow: 0px 3px 6px #0000001a;
  padding: 10px;
`;

export const SetBackGroundSpecific = styled.div`
position: relative; 
height:auto;
&:before {
  content: "";
  background-image:url('/static/CoverPage.jpg');
  height:auto;
  background-size: cover;
      position: absolute;
      top: 0px;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      opacity: 0.1;
}
 
}
`;