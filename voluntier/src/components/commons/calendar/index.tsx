import { DatePicker, Space } from 'antd';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { calendarDateState } from '../../../commons/store';
import moment from 'moment';



export default function Mycalendar(props){
const [good,setGood] = useState(false)
const [mydate,setMydate] = useState(new Date())
const [calendardate,setCalendarState] = useRecoilState(calendarDateState)

const onChangeDate =(date: any)=>{
  setMydate(date?._d)
}

const realdate = mydate?.getFullYear() + '-' +  (mydate?.getMonth() + 1)  + '-' + mydate?.getDate() 
  setCalendarState(realdate)


const onClick = () => {
  setGood(true)
}
const my = props.defaultData?.fetchBoard.serviceDate.slice(0,10)
return (
  <>
 {good === false?
  <Space onClick={onClick} direction="vertical" size={12}>
    <DatePicker value={moment(my)} onChange={(d)=>onChangeDate(d)} />
  </Space>
  :
  <Space direction="vertical" size={12}>
    <DatePicker onChange={(d)=>onChangeDate(d)} />
  </Space>
  }
  </>
)

}
