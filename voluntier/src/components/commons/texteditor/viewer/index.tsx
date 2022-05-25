import { Viewer as OurViewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import styled from '@emotion/styled';



const Viewer = styled(OurViewer)`

`
const ViewerBox = styled.div`
    .toastui-editor-contents {
    font-size: 20px;
}
`


export default function ToastUIViewer(props){

    return(
        <ViewerBox>

    < Viewer initialValue={props.data?.fetchBoard.contents}/>
        </ViewerBox>
    )

}
