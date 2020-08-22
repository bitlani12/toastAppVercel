import React from 'react';
import { FlexRow } from '../../ui/Flex';
import CheckBox from './checkbox';
const CheckboxTitleList = (props) => {
  return (
    <FlexRow className="pt10" style={{ height: 25, marginBottom: 6 }}>
      <div>
        <CheckBox
          label={props.title}
          checked={props.checked}
          handlechecked={() => props.handlechecked(props.title)}
        />
      </div>
      {/* <h4 className="fo12 ml10" style={{ height: 32 }}>
        {props.title}
      </h4> */}
    </FlexRow>
  );
};
export default CheckboxTitleList;
