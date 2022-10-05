import VideoPlayer from "../components/VideoPlayer";
import Tabs from "../components/Tabs";
import SuggestContent from "../components/SuggestContent";
import {Link} from "react-router-dom";

function ShowBody(props) {
    console.log("show ID" , props)
    const id = props.match.params.id;
    const content = props.content;
    const lesson = content.find(l => l._id === id)

    const removeContent = () => {
        props.deleteContent(lesson._id);
        props.history.push("/");
    }
    return (
        <div className="ShowContainer">
            <div className="ShowVideo">
                <div className="ShowVideoPlayer"><VideoPlayer url={lesson.videoURL} /></div>
                <div className="SuggestedContent"><SuggestContent content={content} /></div>
                <button id="delete" onClick={removeContent}>
                    Delete Content
                </button>
            </div>
            <div className="ShowContent"><Tabs lesson={lesson} /></div>
            <Link to={`/content/${id}/update`}>Update</Link>
        </div>
    )
}

export default ShowBody;



