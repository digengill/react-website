import React, {useState} from 'react'
import { Document, Page, pdfjs } from 'react-pdf';
import './Resume.css';
import pdf from './digengill_resume_april.pdf'
import 'react-pdf/dist/umd/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
  function removeTextLayerOffset() {
    const textLayers = document.querySelectorAll(".react-pdf__Page__textContent");
      textLayers.forEach(layer => {
        const { style } = layer;
        style.top = "0";
        style.left = "0";
        style.transform = "";
    });
  }
  return (
    <div className="container">
        <div className="pdf__div">
        <Document
            file={pdf}
            options={{ workerSrc: "/pdf.worker.js" }}
            onLoadSuccess={removeTextLayerOffset}
        >
            <Page  className="pdf__page"  renderTextLayer="false"  pageNumber={1} />
        </Document>
        </div>
    </div>
  )
}

export default Resume
