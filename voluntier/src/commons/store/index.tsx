import {atom} from 'recoil'

export const accessTokenState = atom({
    key: "accessTokenState",
    default:""
})


export const calendarDateState = atom({
    key:"calendarState",
    default:""
})

export const userInfoState = atom({
    key: "userInfoState",
    default:""
})

export const setAmountDonation = atom({
    key : "setAmountDonation",
    default: 100
})