import React from "react";

function Preview({ selectedDocument }) {
  if (!selectedDocument) {
    return null; // Return null if selectedDocument is not defined
  }

  const { name, url } = selectedDocument;

  return (
    <div className="document-preview">
      <h3>Document Preview: {name}</h3>
      <iframe title="document-preview" src={url} width="100%" height="500px" />
    </div>
  );
}

export default Preview;
