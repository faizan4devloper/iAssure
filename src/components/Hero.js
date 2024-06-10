import React, { useState, useEffect } from "react";
import { Document, Page } from "react-pdf";
import "./Hero.css";

export function Hero({ onDocumentSelect }) {
  const [claimType, setClaimType] = useState("");
  const [documents, setDocuments] = useState([]);
  const [selectedDocUrl, setSelectedDocUrl] = useState("");

  // Mock function to fetch documents
  const fetchDocuments = () => {
    // This could be replaced with an actual API call
    return new Promise((resolve, reject) => {
      // Simulating an API call with setTimeout
      setTimeout(() => {
        const mockDocuments = [
          {
            name: "Document 1",
            url: "https://css4.pub/2017/newsletter/drylab.pdf",
          },
          {
            name: "Document 2",
            url: "https://css4.pub/2017/newsletter/drylab.pdf",
          },
          {
            name: "Document 3",
            url: "https://css4.pub/2017/newsletter/drylab.pdf",
          },
        ];
        resolve(mockDocuments);
      }, 1000); // Simulating a 1 second delay
    });
  };

  useEffect(() => {
    fetchDocuments().then((data) => {
      setDocuments(data);
    });
  }, []);

  const handleDocumentSelect = (event) => {
    const selectedUrl = event.target.value;
    const selectedDoc = documents.find((doc) => doc.url === selectedUrl);
    setSelectedDocUrl(selectedDoc.url);
    onDocumentSelect(selectedDoc);
  };

  return (
    <div className="hero">
      <div className="hero-content">
        <div className="claim-info">
          <h1>iAssure Effortless Insurance Claims. Guaranteed.</h1>
          <p>
            Your trusted partner in managing and processing insurance claims
            efficiently.
          </p>
        </div>
        <div className="claim-form">
          <form>
            <h2>Submit Your Claim</h2>
            <div className="form-group">
              <label>Claim Documents</label>
            </div>
            <div className="form-group">
              <label>Type of Claim:</label>
              <div>
                <label>
                  <input
                    type="radio"
                    value="new"
                    checked={claimType === "new"}
                    onChange={(e) => setClaimType(e.target.value)}
                  />
                  New
                </label>
                <label>
                  <input
                    type="radio"
                    value="existing"
                    checked={claimType === "existing"}
                    onChange={(e) => setClaimType(e.target.value)}
                  />
                  Existing
                </label>
              </div>
            </div>
            {claimType === "existing" && (
              <div className="form-group">
                <label>Select Existing Claim</label>
                <select onChange={handleDocumentSelect}>
                  <option value="">Select your claim</option>
                  {documents.map((document, index) => (
                    <option key={index} value={document.url}>
                      {document.name}
                    </option>
                  ))}
                </select>
              </div>
            )}
            {selectedDocUrl && (
              <div className="pdf-container">
                <Document file={selectedDocUrl}>
                  <Page pageNumber={1} />
                </Document>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
