import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/../Assets/fucci-cv-fullstack.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import useInView from "../../Hooks/useInView"; // Your custom hook

function ResumeNew() {
  const buttonRef = useRef(null);
  const isButtonInView = useInView(buttonRef);

  return (
    <div
      style={{
        padding: "100px 0",
        textAlign: "center",
      }}
    >
      <div
        ref={buttonRef}
        style={{
          opacity: isButtonInView ? 1 : 0,
          transform: isButtonInView ? "scale(1)" : "scale(0.9)",
          transition: "opacity 0.5s, transform 0.5s",
          display: "inline-block",
        }}
      >
        <Button
          variant="primary"
          href={pdf}
          target="_blank"
          style={{
            maxWidth: "250px",
            borderRadius: "50px",
            padding: "10px 20px",
            fontSize: "18px",
          }}
        >
          <AiOutlineDownload /> &nbsp;Download CV
        </Button>
      </div>
    </div>
  );
}

export default ResumeNew;
