import React from "react";

const Css = () => {
  return (
    <div className="bg-[#b7d6e3]">
      <h1 className="text-4xl font-bold text-center py-6 text-grey-600">
        Learn CSS
      </h1>
      <p className="text-center text-lg text-gray-600 pb-8">
        Style your websites like a pro! Learn how to use CSS to make your web
        pages beautiful, responsive, and interactive.
      </p>
      <hr />
      <section className="pb-6  mt-6 ml-11 mr-10">
        <h2 className="text-2xl font-semibold mb-2">What is CSS?</h2>
        <p className="text-white rounded-lg bg-[#2d8893] mt-4 p-4">
          CSS (Cascading Style Sheets) is a stylesheet language used to describe
          the presentation of HTML elements. It controls the layout, colors,
          fonts, spacing, and responsiveness of web pages.
        </p>
      </section>
      <section className="pb-6  mt-6 ml-11 mr-10">
        <h2 className="text-2xl font-semibold mb-2">
          Why there is need to learn css?
        </h2>
        <ul className="ml-1 mb-6 font-medium text-white rounded-lg bg-[#146592] mt-4 p-4">
          <li>1. Style HTML content and make it visually appealing.</li>
          <li>2. Create responsive layouts for mobile and desktop.</li>
          <li>3. Use animations and transitions for better UX.</li>
          <li>4. Customize themes and user interfaces easily.</li>
        </ul>
      </section>
      <section className=" ml-11 mr-10 pb-4">
        <h2 className="text-2xl font-semibold mb-2">Basic CSS Syntax :</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          {`selector {
  property: value;
}

h1 {
  color: blue;
  font-size: 32px;
}`}
        </pre>
      </section>
      <section className="pb-6 mt-6 ml-11 mr-10">
        <h2 className="text-2xl font-semibold mb-2">
          Types of CSS (Cascading Style Sheet) :
        </h2>
        <ul className="ml-1 mb-6 font-medium text-white rounded-lg bg-[#583653] mt-4 p-4">
          <li>
            <strong>1. Inline CSS:</strong> Applied directly in the HTML tag.
          </li>
          <li>
            <strong>2. Internal CSS:</strong> Inside a &lt;style&gt; tag in the
            HTML file.
          </li>
          <li>
            <strong>3. External CSS:</strong> In a separate `.css` file linked to
            HTML.
          </li>
        </ul>
      </section>
      <section className="pb-6 mt-6 ml-11 mr-10">
        <h2 className="text-2xl font-semibold mb-2">Common CSS Properties :</h2>
        <ul className="grid grid-cols-3 gap-2 ml-1 mb-6 font-medium text-white rounded-lg bg-[#524b4b] mt-4 p-4 ">
          <li>color</li>
          <li>height / width</li>
          <li>margin / padding</li>
          <li>links</li>
          <li>icons</li>
          <li>fonts</li>
          <li>z-index</li>
          <li>font-size</li>
          <li>background-color</li>
          <li>border</li>
          <li>display / position</li>
          <li>flex / grid</li>
          <li>float</li>
          <li>pseudo-classes</li>
          <li>transition / animation</li>
        </ul>
      </section>
      <h2 className="text-center mt-6 text-gray-700 font-bold">
        CSS is the foundation of web design. Once you're comfortable with the
        basics, you'll be ready to dive into responsive design, Flex-box, Grid,
        and animations!
      </h2>
      <div className="flex justify-center mt-8">
        <a
          href="/html"
          className="btn learn-js bg-gray-500 text-white px-4 py-2 rounded-2xl hover:bg-[#263b63]"
        >
          ← Back to HTML
        </a>
        <a
          href="/javascript"
          className="btn learn-js bg-blue-600 text-white px-4 py-2 rounded-2xl"
        >
          Next: Learn JavaScript →
        </a>
      </div>
    </div>
  );
};

export default Css;
