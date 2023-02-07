import React, { useRef } from "react";
import { useState } from "react";

export const DragDropFiles = () => {
  const [files, setFiles] = useState(null);
  const inputRef = useRef();

  const handleDrop = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(e.dataTransfer.files);
    setFiles(e.dataTransfer.files);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  return (
    <>
      {!files ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "700px",
            height: "400px",
            background: "yellow",
            margin: "50px",
            flexDirection: "column",
          }}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <h1>Drag and Drop Files to upload</h1>
          <h1>Or</h1>
          <input
            type="file"
            multiple
            onChange={(e) => setFiles(e.target.files)}
            ref={inputRef}
          />
          <button onClick={() => inputRef.current.click()}>Select Files</button>
        </div>
      ) : (
        <div>
          <ul>
            {Array.from(files).map((file, idx) => {
              return <li key={idx}> {file.name}</li>;
            })}
          </ul>
        </div>
      )}
    </>
  );
};
