import React from 'react';
import { FlexRow, FlexBetween, Flex } from '../../ui/Flex';
import Radio from './radio';
export const CheckedCoupons = (props) => {
  const i = 1;
  return (
    <div style={{ margin: 10 }}>
      <FlexBetween className="p10">
        <FlexRow>
          <div className="ml10">
            <div style={{ marginTop: 5, marginLeft: -20 }}>
              {' '}
              <Radio couponList={props.couponList} />
            </div>
          </div>
        </FlexRow>
      </FlexBetween>
    </div>
  );
};

// export const UnCheckedCoupons = (props) => {
//   const i = 1;
//   return (
//     <div style={{ margin: 10 }}>
//       <FlexBetween className="p10">
//         <FlexRow>
//           <div className="ml10">
//             <div style={{ marginTop: 5, marginLeft: -20 }}>
//               {' '}
//               <Radio />
//             </div>
//           </div>
//         </FlexRow>
//       </FlexBetween>
//     </div>
//   );
// };
