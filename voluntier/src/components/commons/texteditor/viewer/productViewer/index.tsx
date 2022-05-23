import { Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';

export default function ProductDetailViewer(props){

    return(
    <Viewer initialValue={props.data?.fetchProduct.details}/>
    )
}