import VideoPlayer from "../components/VideoPlayer";
import Tabs from "../components/Tabs";

function ShowBody(props) {
    const id = props.match.params.id;
    const content = props.content;
    const lesson = content.find(l => l._id === id);

    const removeContent = () => {
        props.deleteContent(lesson._id);
        props.history.push("/");
      }

    return (
        <div className="ShowContainer">
            <div className="ShowVideo">
                <div className="ShowVideoPlayer"><VideoPlayer /></div>
                <button id="delete" onClick={removeContent}>
                    Delete Content
                </button>
                <div className="SuggestedContent">SuggestedContent</div>
                
            </div>

            <div className="ShowContent"><Tabs /></div>


            
        </div>
        
    )
}

export default ShowBody;