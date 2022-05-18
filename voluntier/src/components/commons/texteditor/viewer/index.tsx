import { Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
export default function ToastUIViewer(props){

    // const MyViewer = new Viewer({
    //     el: document.querySelector('#viewer'),
    //     height: '600px',
    //     initialValue: review.content
    // });
    
    const test = props.data?.fetchBoard.contents
    console.log(test)
    return(
        <>
        <Viewer 
        initialValue={props.data?.fetchBoard.contents}
        />
        
        </>
    )
}
