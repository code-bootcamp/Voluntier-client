// import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import Stack from '@mui/material/Stack';
import styled from '@emotion/styled';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { calendarDateState } from '../../../commons/store';


const Calendar = styled(DatePicker)`
   .site-calendar-customize-header-wrapper {
  width: 300px;
  border: 1px solid #f0f0f0;
  border-radius: 12px;
}


`

export default function Mycalendar() {
    const [value, setValue] = useState(new Date());
    const [,setRealdate] = useRecoilState(calendarDateState)

    const mydate = value.getFullYear() + '-' +  (value.getMonth() + 1)  + '-' + value.getDate() 
    

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      {/* <Stack spacing={3}> */}

        <Calendar
        views={['day', 'month', 'year']}
        label="봉사날짜를 선택해주세요"
        value={value}
        onChange={(v: any) => {
            setValue(v);
            setRealdate(mydate)

          }}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        />

      {/* </Stack> */}
    </LocalizationProvider>
  );
}
