

export interface IPropsBoardWriteUI{
    showModal : any
    isModalVisible : boolean
    handleOk : any
    handleCancel : any
    handleComplete : any
    address: string
    editorRef : any
    onClickSubmit : any
    handleSubmit : any
    register : any
    isEdit : boolean
    setValue: any
    getValues: any
    onClickEdit : any
    defaultData : any

}

export interface ImyupdateBoardInput {
    title?:String,
    contents?:String,
    centerName?:String,
    centerOwnerName?:String,
    centerPhone?:String,
    recruitCount?: Number,
    serviceTime?: Number,
    serviceDate?: String,
    address?:String,
    addressDetail?:String,
    location1?:String,
    location2?:String,
    urls?:String,
    
}

export interface IMyVariables {
    updateBoardInput: ImyupdateBoardInput;
    boardId: string
  }