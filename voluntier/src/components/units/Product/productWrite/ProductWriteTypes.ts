export interface IFormValuesProductWrite {
    name : string
    price : number
    details : string
    imageUrls: string[]
  }
  
export interface IPropsProductWrite{
    isEdit?:boolean
    data?:any
  }

export interface IUpdate{
    name? : string
    price? : number
    details? : string
    imageUrls? : string[]
  }