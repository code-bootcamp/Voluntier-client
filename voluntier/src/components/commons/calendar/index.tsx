// marterial UI 달력부분입니다 
// import TextField from '@mui/material/TextField';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import styled from '@emotion/styled';
// import { useState } from 'react';
// import { useRecoilState } from 'recoil';
// import { calendarDateState } from '../../../commons/store';


// const Calendar = styled(DatePicker)`
//    .site-calendar-customize-header-wrapper {
//   width: 300px;
//   border: 1px solid #f0f0f0;
//   border-radius: 12px;
// }


// `

// export default function Mycalendar(props) {
//     const [value, setValue] = useState(new Date());
//     const [,setRealdate] = useRecoilState(calendarDateState)

//     const mydate = value.getFullYear() + '-' +  (value.getMonth() + 1)  + '-' + value.getDate() 
    

//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
//       {/* <Stack spacing={3}> */}

//         <Calendar
//         label="봉사날짜를 선택해주세요"
//         value={value}
//         onChange={(v: any,) => {
//             setValue(v);
//             setRealdate(mydate)

//           }}
//           renderInput={(params) => <TextField {...params} helperText={null} />}
//         />

//       {/* </Stack> */}
//     </LocalizationProvider>
//   );
// }

import { DatePicker, Space } from 'antd';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { calendarDateState } from '../../../commons/store';


export default function Mycalendar(props){

  const [mydate,setMydate] = useState(new Date())
  const [,setCalendarState] = useRecoilState(calendarDateState)


// console.log(props.defaultData?.fetchBoard.serviceDate.slice(0,10))
const defaultDate = props.defaultData?.fetchBoard?.serviceDate.slice(0,10)


const onChangeDate =(date: any)=>{

  setMydate(date?._d)
  
}
const realdate = mydate?.getFullYear() + '-' +  (mydate?.getMonth() + 1)  + '-' + mydate?.getDate() 
setCalendarState(realdate)

console.log(props.defaultData?.serviceDate.slice(0,10))
console.log(defaultDate)


return (

  <Space direction="vertical" size={12}>
    <DatePicker defaultValue={props.defaultData?.serviceDate.slice(0,10)} onChange={(d)=>onChangeDate(d)} />

  </Space>
)
;
}