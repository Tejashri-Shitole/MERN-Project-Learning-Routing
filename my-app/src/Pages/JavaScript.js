import React from "react";

const JavaScript = () => {
  return (
    <div className="bg-[#b7d6e3]">
      <h1 className="text-4xl font-bold text-grey-600 text-center py-6">
        Learn JavaScript
      </h1>
      <p className="text-center text-lg text-gray-600 pb-8">
        Start learning JavaScript the effective way — one concept at a time, built with clarity and code.
      </p><hr />

      {/* Introduction */}
      <section className="pb-6  mt-6 ml-11 mr-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Introduction
        </h2>
        <p className="text-white rounded-lg bg-[#32547a] mt-4 p-4">
          JavaScript is the programming language of the web. It allows you to
          make web pages interactive, create dynamic applications, and much
          more.
        </p>
      </section>

      {/* Topics List */}
      <section className="pb-6  mt-6 ml-11 mr-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Core Topics
        </h2>
        <ul className="list-disc list-inside space-y-2 text-white rounded-lg bg-[#3b665f] mt-4 p-4">
          <li>
            <strong>Variables:</strong> var, let, and const
          </li>
          <li>
            <strong>Data Types:</strong> Strings, Numbers, Arrays, Objects
          </li>
          <li>
            <strong>Functions:</strong> Declaration, Expression, Arrow Functions
          </li>
          <li>
            <strong>Operators:</strong> Arithmetic, Logical, Comparison
          </li>
          <li>
            <strong>Control Flow:</strong> if-else, switch, loops (for, while)
          </li>
          <li>
            <strong>DOM Manipulation:</strong> getElementById, querySelector,
            etc.
          </li>
          <li>
            <strong>Events:</strong> onclick, onsubmit, addEventListener
          </li>
          <li>
            <strong>ES6 Features:</strong> Destructuring, Spread, Template
            Literals
          </li>
        </ul>
      </section>

      {/* Example */}
      <section className="pb-6  mt-6 ml-11 mr-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Example: JavaScript Function
        </h2>
        <pre className="bg-gray-200 p-4 rounded text-sm overflow-x-auto">
          {`function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Tejashri"));`}
        </pre>
      </section>

      {/* Project Ideas */}
      <section className="pb-6  mt-6 ml-11 mr-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Mini Project Ideas
        </h2>
        <ul className="list-disc list-inside space-y-1 text-white rounded-lg bg-[#533263] mt-4 p-4">
          <li>To-Do List App</li>
          <li>Simple Calculator</li>
          <li>Countdown Timer</li>
          <li>Interactive Quiz</li>
        </ul>
      </section>

      {/* Resources */}
      <section className="pb-6  mt-6 ml-11 mr-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Useful Resources
        </h2>
        <ul className="list-disc list-inside text-blue-700 underline space-y-1">
          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noreferrer"
            >
              MDN JavaScript Docs
            </a>
          </li>
          <li>
            <a href="https://javascript.info/" target="_blank" rel="noreferrer">
              JavaScript.info
            </a>
          </li>
          <li>
            <a
              href="https://www.w3schools.com/js/"
              target="_blank"
              rel="noreferrer"
            >
              W3Schools JS Tutorial
            </a>
          </li>
        </ul>
      </section>
      <div className="flex justify-center mt-8">
        <a
          href="/css"
          className="btn learn-js bg-gray-500 text-white px-4 py-2 rounded-2xl hover:bg-[#263b63]"
        >
          ← Back to CSS
        </a>
        <a
          href="/angular"
          className="btn learn-js bg-blue-600 text-white px-4 py-2 rounded-2xl"
        >
          Next: Learn Angular →
        </a>
      </div>
    </div>
  );
};

export default JavaScript;
