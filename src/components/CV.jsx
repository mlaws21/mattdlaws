import "./style/Resume.css";

function Resume() {
  return (
    <div>
      <object
        aria-label="CV"
        id="resume"
        width="100%"
        height="100%"
        data={"/CV.pdf"}
        type="application/pdf"
      >
        <p>
          It seems your browser cannot display the PDF.{" "}
          <a href="/CV.pdf" download>Click here to download it.</a>
        </p>
      </object>
    </div>
  );
}

export default Resume;
