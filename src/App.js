import React, { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import Preview from "./components/Preview";
import { Footer } from "./components/Footer";

function App() {
  const [selectedDocument, setSelectedDocument] = useState(null);

  const handleDocumentSelect = (document) => {
    setSelectedDocument(document);
  };

  return (
    <div className="App">
      <Header />
      <Hero onDocumentSelect={handleDocumentSelect} />
      <Preview selectedDocument={selectedDocument} />
      <Footer />
    </div>
  );
}

export default App;
