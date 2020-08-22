import React from 'react';
import Modal from '../../ui/Modal';
import { FlexBetween, FlexRow } from 'ui/Flex';
import CheckboxTitleList from './../../components/common/CheckboxTitleList';
import Input from './../../components/common/input';
const ServiceAssistant2 = () => {
  return (
    <div>
      <Modal height="70%" title="service assistant 2">
        <div>
          <h4 className="fo16" style={{ fontWeight: 500 }}>
            Forgot to customize your dish?
          </h4>
          <textarea
            style={{
              background: '#99999926',
              borderRadius: 10,
              width: '100%',
              border: 'solid #99999926 1px',
              padding: 8,
              height: 60,
            }}
            placeholder="(Ex. Do not add mushroom in pizza)"
          />
          <h4 className="fo16" style={{ fontWeight: 500 }}>
            Request for:
          </h4>
          <CheckboxTitleList title="Water" />
          <CheckboxTitleList title="Salt & Paper" />
          <CheckboxTitleList title="Tissue Paper" />
          <CheckboxTitleList title="Sauce & Mayonnaise" />
          <div className="pt10">
            <Input placeholder="Write your own..." />
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default ServiceAssistant2;
