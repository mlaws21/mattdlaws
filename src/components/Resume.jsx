import resume from "../Data/Matt-Laws-Resume.pdf"
import "./style/Resume.css"
function Resume() {
    return (
        <div>

            <object id="resume" width="100%" height="100%" data={resume} type="application/pdf"></object>
        </div>
    )
}

export default Resume;
