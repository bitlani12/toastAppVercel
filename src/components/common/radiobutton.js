import React from 'react';
import { FlexRow } from '../../ui/Flex';
import Radio from './radio';
const RadioButton = (props) => {
  return (
    <FlexRow className="pt10" style={{ height: 25 }}>
      <div>
        <Radio label={props.title} />
      </div>
      {/* <h4 className="fo12 ml10" style={{ height: 32 }}>
        {props.title}
      </h4> */}
    </FlexRow>
  );
};
export default RadioButton;
