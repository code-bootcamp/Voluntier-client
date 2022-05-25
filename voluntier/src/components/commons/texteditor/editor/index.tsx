import styled from '@emotion/styled';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor as OurEditor } from '@toast-ui/react-editor';
import {gql, useMutation} from '@apollo/client'
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';


const EditorBox = styled.div`
    .ProseMirror {
    font-size: 20px;
}

.toastui-editor-contents {
    font-size: 20px;
}

`


const Editor = styled(OurEditor)`

`

export const Wrapper =styled.div`
    width: 100%;
    height: 100%;

`

const UPLOAD_IMAGE = gql`
    mutation uploadImage($file: Upload!){
        uploadImage(file:$file)
    }
`


export default function EditorUI(props:any){
    

    const [uploadImage] = useMutation(UPLOAD_IMAGE)
 return (
     <Wrapper>
         {props.defaultData?
         <EditorBox>
        <Editor 
        previewStyle='vertical'
        ref={props.editorRef}
        initialValue={props.defaultData?.fetchBoard.contents || ""}
        plugins={[colorSyntax]}
        hooks={{addImageBlobHook: async(file : Blob | File, callback)=>{
            try{
                
                const result = await uploadImage({
                    variables: {file}
                })
                console.log(result)
                const result1 = result?.data.uploadImage.replaceAll(' ','%20')
                const url = `https://storage.googleapis.com/${String(result1)}`
                callback(url)
            }catch(error){
                alert("사진 올린게 좀 이상한것 같은데")
            }
        }}}
        
        />
        </EditorBox>
    :
    <EditorBox>

    
    <Editor 
    previewStyle='vertical'
    placeholder='봉사 센터의 특이사항등을 상세히 설명해주시고,             센터 사진을 끌어다 놓아보세요!'
    ref={props.editorRef}
    plugins={[colorSyntax]}
    hooks={{addImageBlobHook: async(file : Blob | File, callback)=>{
        try{
            
            const result = await uploadImage({
                variables: {file}
            })
            console.log(result)
            const result1 = result?.data.uploadImage.replaceAll(' ','%20')
            const url = `https://storage.googleapis.com/${String(result1)}`
            callback(url)
        }catch(error){
            alert("사진 올린게 좀 이상한것 같은데")
        }
    }}}
    
    />
    </EditorBox>
    }
     </Wrapper>
 )   
}