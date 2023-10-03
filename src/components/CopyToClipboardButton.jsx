import React, { useRef } from "react";

function CopyToClipboardButton() {
  const textToCopy =
    "Please conduct pressure/flow test at outlet of meter (RECORD/PRESSURE/ FLOW) and compare with front tap pressure (RECORD PRESSURE/ FLOW) expected pressure approx:";
  const textAreaRef = useRef(null);

  const copyToClipboard = () => {
    if (textAreaRef.current) {
      textAreaRef.current.select();
      document.execCommand("copy");
      // You can provide some feedback to the user, e.g., "Copied to clipboard!"
    }
  };

  return (
    <div>
      <p>{textToCopy}</p>
      <button onClick={copyToClipboard}>Copy to Clipboard</button>
      <textarea
        ref={textAreaRef}
        value={textToCopy}
        style={{ position: "absolute", left: "-9999px" }} // Move the textarea off-screen
        readOnly
      />
    </div>
  );
}

export default CopyToClipboardButton;
