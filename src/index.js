import React from "react";
// import pdfjs from "pdfjs-dist/build/pdf";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalWorkerOptions, version } from "pdfjs-dist/build/pdf";

// Specify the path to the PDF.js worker script
GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${version}/pdf.worker.js`;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
