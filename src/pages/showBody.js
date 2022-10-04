import VideoPlayer from "../components/VideoPlayer";
import Tabs from "../components/Tabs";
function ShowBody(props) {

    const removeContent = (props) => {
        props.deleteContent(props.content._id);
        props.history.push("/");
      }
    return (
        <div className="ShowContainer">
            <div className="ShowVideo">
                <div className="ShowVideoPlayer"><VideoPlayer /></div>
                <div className="SuggestedContent">SuggestedContent</div>
                <button id="delete" onClick={removeContent}>Delete Content</button>
            </div>

            <div className="ShowContent"><Tabs /></div>


            
        </div>
        
    )
}

export default ShowBody;