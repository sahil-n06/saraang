"use client";
import React, { useState, useEffect } from 'react';
import { students } from './student'; // Import the list of students

declare global {
  interface Window {
    PDFLib: any;
    fontkit: any;
  }
}

const Certificate = () => {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  useEffect(() => {
    const PDFLibScript = document.createElement('script');
    PDFLibScript.src = 'https://unpkg.com/pdf-lib/dist/pdf-lib.min.js';
    document.head.appendChild(PDFLibScript);

    const fontkitScript = document.createElement('script');
    fontkitScript.src = 'https://unpkg.com/@pdf-lib/fontkit@0.0.4';
    document.head.appendChild(fontkitScript);
  }, []);

  const generatePDF = async (name: string) => {
    if (!window.PDFLib || !window.fontkit) {
      console.error('Libraries not loaded');
      return;
    }

    const { PDFDocument, rgb } = window.PDFLib;

    // Fetch PDF and font data
    const certi = '/assets/Certificate/certi.pdf'; // Ensure the path is correct
    const fonttxt = '/assets/Certificate/GreatVibes-Regular.ttf'; // Ensure the path is correct
    const exBytes = await fetch(certi).then((res) => res.arrayBuffer());
    const exFont = await fetch(fonttxt).then((res) => res.arrayBuffer());

    console.log(exBytes.byteLength + " bytes");
    console.log(exFont.byteLength + " bytes");

    name = name
      .split(' ')
      .map((n: string) => n.charAt(0).toUpperCase() + n.slice(1))
      .join(' ');

    // Load PDF document and register fontkit
    const pdfDoc = await PDFDocument.load(exBytes);
    pdfDoc.registerFontkit(window.fontkit);
    const myFont = await pdfDoc.embedFont(exFont);

    // Modify PDF document
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];

    const textSize = 45;
    const textWidth = myFont.widthOfTextAtSize(name, textSize);
    const pageWidth = firstPage.getWidth();
    const x = pageWidth / 2 - textWidth / 2 + 50;

    firstPage.drawText(name, {
      x,
      y: 210,
      size: 30,
      font: myFont,
      fontWeight: 'bold',
      color: rgb(0, 0, 0),
    });

    // Save and return the modified PDF as a data URI
    const uri = await pdfDoc.saveAsBase64({ dataUri: true });
    return uri;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const btn = document.getElementById('btn') as HTMLButtonElement;
    btn.disabled = true;
    btn.className = 'bg-slate-400 h-12 rounded-lg';
    btn.innerText = 'Downloading...';

    const form = e.target as HTMLFormElement;
    let name = (form.elements.namedItem('name') as HTMLInputElement).value.trim().toLowerCase();
    const userSet = new Set(students);

    if (!userSet.has(name)) {
      setShowToast(true);
      btn.disabled = false;
      btn.className = 'bg-slate-600 h-12 rounded-lg';
      btn.innerText = 'Submit';
      return;
    }

    name = name
      .split(' ')
      .map((n: string) => n.charAt(0).toUpperCase() + n.slice(1))
      .join(' ');

    const pdfUri = await generatePDF(name);
    const link = document.createElement('a');
    link.href = pdfUri;
    link.download = name + '_certificate.pdf';
    link.click();

    btn.disabled = false;
    btn.className = 'bg-slate-600 h-12 rounded-lg';
    btn.innerText = 'Submit';
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex bg-white w-1/2 max-lg:w-11/12 pt-10 pb-10 justify-center items-center mx-auto my-4 rounded-lg shadow-2xl relative">
        <div className="text-center">
          <h1 className="text-black text-4xl max-sm:text-2xl font-bold">Generate Certificate</h1>
          <h2 className="text-black text-2xl max-sm:text-xl mt-4 font-bold">For HackerRank Coding Competetion</h2>
          <p className="text-black text-2xl max-sm:text-xl font-bold">event</p>
          <form onSubmit={handleSubmit} className="mt-6">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="border border-gray-300 p-2 rounded-lg mb-4 w-full"
              required
            />
            <button
              type="submit"
              id="btn"
              className="bg-slate-600 h-12 rounded-lg text-white w-full"
            >
              Submit
            </button>
          </form>
          {showToast && <div className="toast bg-red-500 text-white p-2 rounded-lg mt-4">Invalid user!</div>}
        </div>
      </div>
    </div>
  );
};

export default Certificate;
