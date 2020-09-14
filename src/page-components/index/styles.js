import styled from 'styled-components';

import { Outer as O } from 'ui';

export const Outer = styled(O)`
  ${(props) =>
    props.selected_menu !== 'Special'
      ? null
      : props.qr_code !== 'P5MFEYsbb0UoSHPhA5SxoGhIWMr69Ov61XVSkYoZxYJPw2NZKvTzhyYuoNLbN0Pc' ? null : `
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      max-width: 1600px;
    
      justify-content: space-between;
  `}
`;

export const SetFilterIcon = styled.div`
  position: fixed;
  bottom: 25px;
  right: 15px;
  background: transparent linear-gradient(172deg, #36c0db 0%, #007991 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
  padding: 18px 20px;
  border-radius: 100px;
  box-shadow: 0 0 5px #70707029;
`;
