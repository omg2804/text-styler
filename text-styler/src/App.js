import React, { useRef } from "react";
import { Button } from "@mantine/core";

function TextStyler() {
  const editorRef = useRef(null);

  const applyStyle = (command, value = null) => {
    document.execCommand(command, false, value);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Text Styler</h2>

      {/* Foreground Color Picker */}
      <label>Foreground: </label>
      <input
        type="color"
        onChange={(e) => applyStyle("foreColor", e.target.value)}
        style={{ marginRight: "10px" }}
      />

      {/* Background Color Picker */}
      <label>Background: </label>
      <input
        type="color"
        onChange={(e) => applyStyle("backColor", e.target.value)}
      />

      <div style={{ marginTop: "10px" }}>
        <Button onClick={() => applyStyle("bold")} style={{ marginRight: "5px" }}>
          Bold
        </Button>
        <Button onClick={() => applyStyle("underline")}>Underline</Button>
      </div>

      {/* Editable Text Area */}
      <div
        ref={editorRef}
        contentEditable
        style={{
          border: "1px solid black",
          minHeight: "100px",
          marginTop: "10px",
          padding: "10px",
        }}
      >
        Select text and apply styles...
      </div>
    </div>
  );
}

export default TextStyler;
