import { Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';

export default function ToastUIViewer(props){

    return< Viewer initialValue={props.data?.fetchBoard.contents}/>

}
