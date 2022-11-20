import React from 'react';
import { LinearGraphic } from '../../LinearGraphic/LinearGraphic';
import './Accounts.css';

import { FormOrder } from '../../FormOrder/FormOrder';

function Accounts() {
  return (
    <div className='accounts'>
      <LinearGraphic />
      <FormOrder />

    </div>
  )
}
export { Accounts }