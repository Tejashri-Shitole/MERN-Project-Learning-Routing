import React from "react";

const ReactJs = () => {
  return (
    <div className="flex min-h-screen bg-[#b7d6e3]">
      {/* Sidebar */}
      <nav className="w-1/6 p-4 sticky top-0 h-screen bg-gray-300 font-semibold">
        <ul className="space-y-6">
          <li>
            <a href="#introduction" className="text-blue-700 hover:underline">
              Introduction
            </a>
          </li>
          <li>
            <a href="#jsx" className="text-blue-700 hover:underline">
              JSX
            </a>
          </li>
          <li>
            <a href="#components" className="text-blue-700 hover:underline">
              Components
            </a>
          </li>
          <li>
            <a href="#props" className="text-blue-700 hover:underline">
              Props & State
            </a>
          </li>
          <li>
            <a href="#hooks" className="text-blue-700 hover:underline">
              React Hooks
            </a>
          </li>
          <li>
            <a href="#project" className="text-blue-700 hover:underline">
              Mini Project
            </a>
          </li>
        </ul>
      </nav>

      {/* Content Area */}
      <div className="w-5/6 p-6">
        <section id="introduction" className="mb-14">
          <h1 className="text-4xl font-bold text-grey-600 text-center py-6">
            Learn React JS
          </h1>
          <p className="text-center text-lg text-gray-600 pb-8">
            Take your frontend skills to the next level — learn ReactJS with us
            through easy-to-understand tutorials and real use cases.
          </p>
          <hr />
        </section>

        <section id="introduction" className="mb-6">
          <h2 className="text-2xl font-bold mb-3 underline">Introduction</h2>
          <ul className="space-y-2 text-white p-3 rounded-lg bg-[#5c8379]">
            <li>
              1. React is a JavaScript library for building user interfaces.
            </li>
            <li>
              2. React apps are made out of components. A component is a piece
              of the UI (user interface) that has its own logic and appearance.
              A component can be as small as a button, or as large as an entire
              page.
            </li>
            <li>
              3. React components are JavaScript functions that return markup
            </li>
          </ul>
        </section><hr />

        <section id="jsx" className="mb-6 mt-6">
          <h2 className="text-2xl font-bold mb-3 underline">
            JSX : JavaScript XML
          </h2>
          <p className="text-white p-3 rounded-lg bg-[#3b5b5f]">
            JSX allows you to write HTML inside JavaScript. JSX is stricter than
            HTML. You have to close tags like &lt;br /&gt;. Your component also
            can not return multiple JSX tags. You have to wrap them into a
            shared parent, like a &lt;div&gt;...&lt;/div&gt; or an empty
            &lt;&gt;...&lt;/&gt; wrapper.
          </p>
          <h3 className="text-1xl font-bold text-gray-800 mt-6 mb-6">
            Example : ReactJS 'JSX' Program --&gt;
          </h3>
          <pre className="bg-gray-200 p-4 rounded text-sm overflow-x-auto">
            <code>
              {`import React from 'react';

function Greeting() {
  return (
    <div>
      <h1>Hello, welcome to CodeMind Learning!</h1>
      <p>This is a JSX example inside a functional component.</p>
      <br />
      <p>With JSX web became more interactive, logic increasingly determined content. JavaScript was in charge of the HTML! This is why in React, rendering logic and markup live together in the same place—components </p>
    </div>
  );
}

export default Greeting;`}
            </code>
          </pre>
        </section><hr />

        <section id="components" className="mb-6 mt-6">
          <h2 className="text-2xl font-bold mb-3 underline">Components</h2>
          <p className="text-white p-3 rounded-lg bg-[#1e2c58]">Components are reusable building blocks in React.
          There are mainly two different types of components in React. They are as following :</p>
            <ul>
              <li className="font-bold mt-6 mb-6">1. Functional Components (Modern & most usable approach)
                <pre className="bg-gray-200 p-4 rounded text-sm overflow-x-auto mt-4">
                  <code>{`import React from 'react';

  function Welcome(props) {
    return (
      <>
      <h1>Hello, {props.name}</h1>;
      </>
    );
  }
export default Welcome;`
                    }
                  </code>
                </pre>
              </li>
              <li className="font-bold mt-6 mb-6">2. Class Components (Older Approach)
                <pre className="bg-gray-200 p-4 rounded text-sm overflow-x-auto mt-4">
                  <code>{`import { Component } from "react";

class MyClassCompo extends Component{
    render(){
        return(
            <div className="header">
            <h1>Welcome to MyClass component</h1> 
            </div>
        );
    };
  }
export default MyClassCompo;`
                    }
                  </code>
                </pre>
              </li>
            </ul>
        </section><hr />

        <section id="props" className="mb-6 mt-6">
          <h2 className="text-2xl font-bold mb-3 underline">Props & State </h2>
          <h3 className="text-1xl font-bold mb-3 text-blue-950 underline">Props : </h3>
          <p className="text-white rounded-lg bg-[#3b5b5f] mb-4">
            <ul className="p-3 ">
              <li>a. Props are inputs to components.</li>
              <li>b. props stands for properties.</li>
              <li>c. Used to pass data from parent to child components.</li>
              <li>d. Read-only — can’t be modified by the receiving component.</li>
            </ul>
           </p>
           <h3 className="text-1xl font-bold mb-3">Example for 'Props' </h3>
            <pre className="bg-gray-200 p-4 rounded text-sm overflow-x-auto mt-4 mb-6">
                  <code>{`import React from "react";

function Welcome(props) {
  return (
    <>
    <h1>Hello, {props.name}!</h1>;
    </>
  );
}
// Usage in parent component
<Welcome name="Codemind Learning" />

export default Welcome;`
                    }
                  </code>
                </pre>
          <h3 className="text-1xl font-bold mb-3 text-blue-950 underline">States : </h3>
          <p className="text-white rounded-lg bg-[#32708d]">
            <ul className="p-3">
              <li>a. state is local data storage that is managed within a component.</li>
              <li>b. It determines the component's dynamic behavior.</li>
              <li>c. Can be updated using useState() hook (in functional components).</li>
            </ul>
          </p>
          <h3 className="text-1xl font-bold mt-6 mb-3">Example for 'States' </h3>
            <pre className="bg-gray-200 p-4 rounded text-sm overflow-x-auto mt-4 mb-6">
                  <code>{`import React from "react";
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
export default counter;

OutPut// : This will increase the number every time you click`
                    }
                  </code>
                </pre>
        </section><hr />

        <section id="hooks" className="mb-6 mt-6">
          <h2 className="text-2xl font-bold mb-3 underline">React Hooks</h2>
          <p>Hooks let you use different React features from your components. You can either use the built-in Hooks or combine them to build your own. There are some built-in Hooks in React and also we can create our own custom hooks. Following list provides some details about react built-in-hooks :
          </p>
          <ul className="text-white rounded-lg bg-[#3b5b5f] mb-4 mt-4">
            <li className="font-semibold p-2">1. <u>State Hook</u> : <br />State lets a component “remember” information like user input. To add state to a component, we can use <u>useState Hook</u> & <u>useMemo Hook</u>.</li>
            <li className="font-semibold p-2">2. <u>Context Hook</u> : <br />Context lets a component receive information from distant parents without passing it as props. It reads and subscribes to a context.</li>
            <li className="font-semibold p-2">3. <u>Ref Hook</u> : <br />Refs let a component hold some information that isn't used for rendering, like a DOM node or a timeout ID. Unlike with state, updating a ref does not re-render your component. Refs are an “escape hatch” from the React paradigm. They are useful when you need to work with non-React systems, such as the built-in browser APIs.</li>
            <li className="font-semibold p-2">4. <u>Effect Hook</u> : <br />Effects let a component connect to and synchronize with external systems. This includes dealing with network, browser DOM, animations, widgets written using a different UI library, and other non-React code. useEffect connects a component to an external system.</li>
            <li className="font-semibold p-2">5. <u>useMemo Hook</u> : <br />useMemo lets you cache the result of an expensive calculation.</li>
            <li className="font-semibold p-2">6. <u>useCallback Hook</u> : <br />useCallback lets you cache a function definition before passing it down to an optimized component.</li>
          </ul>
        </section><hr />

        <section id="project" className="mb-12 mt-6">
          <h2 className="text-2xl font-bold mb-3 underline">Mini Project</h2>
          <p>Build a simple to-do app using components, props, and state.</p>
        </section>

        <div className="flex justify-center mt-8">
          <a
            href="/home"
            className="btn learn-js bg-blue-600 text-white px-4 py-2 rounded-2xl hover:bg-[#263b63]"
          >
            ← Back to Home Page
          </a>
        </div>
      </div>
    </div>
  );
};

export default ReactJs;
