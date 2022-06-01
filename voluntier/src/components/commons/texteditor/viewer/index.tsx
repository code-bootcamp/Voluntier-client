import { Viewer as OurViewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import styled from '@emotion/styled';
import { IQuery } from '../../../../commons/types/generated/types';



const Viewer = styled(OurViewer)`

`
const ViewerBox = styled.div`
    .toastui-editor-contents {
    font-size: 20px;
}
`
interface IPropsToastUIViewer {
    data? : Pick<IQuery,"fetchBoard">
    productData? : Pick<IQuery,"fetchProduct">
}


export default function ToastUIViewer(props:IPropsToastUIViewer){

    return(
        <ViewerBox>
            <Viewer initialValue={props.data?.fetchBoard.contents || props.productData?.fetchProduct.details}/>
        </ViewerBox>
    )

}
