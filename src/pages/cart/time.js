import React from "react";
import Form from './form';
import Timev2  from './timev2';
import Payment from './payment';

import './time.css'; 

class Time extends React.Component {  
  render() {   
    return (
    <div>
      <Form />
      <Timev2 />
      <Payment />
    </div>
    );
  }
}

export default Time;