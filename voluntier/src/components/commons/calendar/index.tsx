import { DatePicker, Space } from 'antd';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { calendarDateState } from '../../../commons/store';
import moment from 'moment';



export default function Mycalendar(props){
const [mydate,setMydate] = useState(new Date())
const [calendardate,setCalendarState] = useRecoilState(calendarDateState)


const onChangeDate =(date: any)=>{
  setMydate(date?._d)
}
useEffect(()=>{
const realdate = mydate?.getFullYear() + '-' +  (mydate?.getMonth() + 1)  + '-' + mydate?.getDate() 
setCalendarState(realdate)
},[calendardate])


return (
  <Space direction="vertical" size={12}>
    <DatePicker defaultValue={moment(props.defaultData?.fetchBoard.serviceDate.slice(0,10),"YYYY-MM-DD")} onChange={(d)=>onChangeDate(d)} />
  </Space>
)
;
}