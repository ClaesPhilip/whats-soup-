// import React from 'react';
// // import DateFnsUtils from '@date-io/date-fns';
// // import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
// // import { TextField } from '@material-ui/core';
// import './time.css';

// function Timev2() {
  
//   const useStateWithLocalStorage = localStorageKey => {
//     const [value, setValue] = React.useState(
//       localStorage.getItem(localStorageKey) || ''
//     );
   
//     React.useEffect(() => {
//       localStorage.setItem(localStorageKey, value);
//     }, [value]);
   
//     return [value, setValue];
//   };

//   // const [selectedDate, handleDateChange] = useState(new Date());
//   const [value, setValue] = useStateWithLocalStorage();
  
//   const onClick = event => {
//     localStorage.setItem('tiden', value);
 
//     setValue(event.target.value);
//   };
    
//   return (
//     <div className='leveranstid-container'>
//     {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
//       <DateTimePicker 
//       value={selectedDate} 
//       onChange={date => handleDateChange(date)}
//       ampm={false}
//       />
//     </MuiPickersUtilsProvider> */}
    

//     <h1 className='leverans'>Leveranstid</h1>

//     <div className='leveranstid'>
//       <input className='button' type='button' value='30 min' onClick={onClick} />
//       <input className='button' type='button' value='45 min' onClick={onClick} />
//       <input className='button' type='button' value='60 min' onClick={onClick} />
//       <input className='button' type='button' value='90 min' onClick={onClick} />
//     </div>
    

//     </div>
//   );
// }

// export default Timev2;



import React from 'react';
 
const Timev2 = () => {
  const [value, setValue] = React.useState('');

  const onChange = event => {
    localStorage.setItem('time', event.target.value);
 
    setValue(event.target.value);
  };
 
  return (
    <div className='leveranstid-container'>
      <h1 className='leverans-header'>Delivery time</h1>

      <p className='leveranstid-value'>---{value}---</p>

      <div className='leveranstid'>
        <input className='buttons' value='30 min' type="button" onClick={onChange} />
        <input className='buttons' value='45 min' type="button" onClick={onChange} />
        <input className='buttons' value='60 min' type="button" onClick={onChange} />
        <input className='buttons' value='90 min' type="button" onClick={onChange} />
      </div>

      

    </div>
  );
};
 
export default Timev2;




