import React, { useState } from 'react';
import { PDFDocument, rgb } from 'pdf-lib';
import './estimator.css';

const Estimator = () => {
  const [name, setName] = useState('');
  const [randomText, setRandomText] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleGeneratePDF = async () => {
    // Fetch the PDF template from the assets directory
    const existingPdfBytes = await fetch('/brochure.pdf').then(res => res.arrayBuffer());

    // Load the existing PDF
    const pdfDoc = await PDFDocument.load(existingPdfBytes);

    // Get the first page of the document
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];
    const secondPage = pages[1];

    // Add text to the first page
    firstPage.drawText(`Name: ${name}`, { x: 10, y: 700, size: 12, color: rgb(0, 0, 0) });
    firstPage.drawText(`Random Text: ${randomText}`, { x: 10, y: 680, size: 12, color: rgb(0, 0, 0) });
    firstPage.drawText(`Phone Number: ${phoneNumber}`, { x: 10, y: 660, size: 12, color: rgb(0, 0, 0) });

    secondPage.drawText(`Name: ${name}`, { x: 10, y: 700, size: 50, color: rgb(0, 0, 0) });

    // Serialize the PDF document to bytes
    const pdfBytes = await pdfDoc.save();

    // Create a blob from the PDF bytes
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });

    // Create a link element and trigger the download
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'estimate.pdf';
    link.click();
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Write name here"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Write some random text here"
        value={randomText}
        onChange={(e) => setRandomText(e.target.value)}
      />
      <input
        type="text"
        placeholder="Write phone number here"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button className="estimator" onClick={handleGeneratePDF}>
        Estimator
      </button>
    </div>
  );
};

export default Estimator;
