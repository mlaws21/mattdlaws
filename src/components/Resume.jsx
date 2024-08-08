import "./style/Resume.css"
function Resume() {
    return (
        <div>

            <object aria-label="Resume" id="resume" width="100%" height="100%" data={"./resume.pdf"} type="application/pdf"></object>
        </div>
    )
}

export default Resume;
