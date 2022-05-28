import { DatePicker, Space } from 'antd';
import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { calendarDateState } from '../../../commons/store';
import moment from 'moment';
import { IQuery } from '../../../commons/types/generated/types';

interface IPropsMycalendar {
  defaultData? : Pick<IQuery,"fetchBoard">
  isEdit?:boolean
}

export default function Mycalendar(props:IPropsMycalendar){
const [good,setGood] = useState(false)
const [mydate,setMydate] = useState(new Date())
const [,setCalendarState] = useRecoilState(calendarDateState)

const onChangeDate =(date: any)=>{
  setMydate(date?._d)
}

const realdate = mydate?.getFullYear() + '-' +  (mydate?.getMonth() + 1)  + '-' + mydate?.getDate() 

useEffect(()=>{  
setCalendarState(realdate)
},[])

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
