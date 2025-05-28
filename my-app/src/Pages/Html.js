import React from "react";

const Html = () => {
  return (
    <div className="bg-[#b7d6e3]">
      <h1 className="text-4xl font-bold text-center py-6">Learn HTML</h1>
      <p className="text-center text-lg text-gray-600 pb-8">
        Master the building blocks of the web with our step-by-step HTML
        tutorials.
      </p><hr />
      <section className="mb-6 ml-11 mt-6 mr-10">
        <h2 className="text-2xl font-semibold mb-3">What is HTML?</h2>
        <p className="text-white rounded-lg bg-[#3b5b5f] mb-4 mt-4 p-4">
          HTML (HyperText Markup Language) is the standard language for creating
          web pages and applications. It structures content on the web using
          elements like headings, paragraphs, links, images, and more.
        </p>
      </section>
      <section className="mb-6 ml-11 mt-6">
        <h2 className="text-2xl font-semibold mb-3">HTML Document Structure</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mr-11">
        {`<!DOCTYPE html>
          <html>
            <head>
              <title>My First Page</title>
            </head>
            <body>
              <h1>Hello World</h1>
            </body>
          </html>`}
        </pre>
      </section>
      <section className="mb-6 ml-11 mt-6">
        <h2 className="text-2xl font-semibold mb-3">Common HTML Elements </h2>
        <p className="font-medium mt-2 underline">
          Following list describes about common HTML elements we are using on
          daily basis :
        </p>
        <ul className="font-semibold text-white rounded-lg bg-[#4f3557] mb-4 mt-4 p-4 mr-7">
          <li>1. Headings (h1 to h6)</li>
          <li>2. Paragraphs (p)</li>
          <li>3. Links (a)</li>
          <li>4. Images (img)</li>
          <li>5. Lists (ul, ol, li)</li>
          <li>6. Table (thead, tbody, tr, td, th)</li>
        </ul>
      </section>
      <div className="flex justify-between mt-8">
        <a
          href="/css"
          className="btn learn-css bg-[#1777c3] text-white px-4 py-2 rounded-2xl hover:bg-[#263b63]">
          Next: Learn CSS
        </a>
      </div>
    </div>
  );
};

export default Html;
