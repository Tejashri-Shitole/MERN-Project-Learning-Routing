import React from 'react'

const Angular = () => {
  return (
    <div className="bg-[#b7d6e3]">
       <h1 className="text-4xl font-bold text-grey-600 text-center py-6">
        Learn Angular - Frontend Framework by Google
      </h1>
      <p className="text-center text-lg text-gray-600 pb-8">
       Build dynamic web apps with Angular — start learning with us through real-world examples and expert mentorship.
      </p><hr />
      

      {/* Introduction */}
      <section className="pb-6 mt-6 ml-11 mr-10">
        <h2 className="text-2xl font-semibold mb-2">What is Angular?</h2>
        <p className="text-white rounded-lg bg-[#222f5a] 1e2c58mt-4 p-4">
          Angular is a TypeScript-based open-source framework developed by Google for building web applications. It provides powerful tools for building single-page applications (SPAs) using components, services, and dependency injection.
        </p>
      </section>

      {/* Core Concepts */}
      <section className="pb-6 mt-6 ml-11 mr-10">
        <h2 className="text-2xl font-semibold mb-4">Core Topics to Learn</h2>
        <ul className="list-disc list-inside space-y-2 text-white rounded-lg bg-[#48998e] mt-4 p-4">
          <li><strong>TypeScript Basics</strong></li>
          <li><strong>Components</strong> – @Component decorator, templates, styling</li>
          <li><strong>Modules</strong> – NgModules, AppModule</li>
          <li><strong>Data Binding</strong> – Property, Event, Two-way binding</li>
          <li><strong>Directives</strong> – *ngIf, *ngFor, Custom directives</li>
          <li><strong>Services and Dependency Injection</strong></li>
          <li><strong>Routing</strong> – Angular Router, navigation</li>
          <li><strong>Forms</strong> – Template-driven and Reactive Forms</li>
          <li><strong>HTTPClient</strong> – API requests</li>
        </ul>
      </section>

      {/* Code Example */}
      <section className="pb-6 mt-6 ml-11 mr-10">
        <h2 className="text-2xl font-semibold mb-2">Example: Angular Component</h2>
        <pre className="bg-gray-200 p-4 rounded text-sm overflow-x-auto">
{`import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: '<h1>Hello, Angular!</h1>',
  styles: ['h1 { color: red; }']
})
export class HelloComponent { }`}
        </pre>
      </section>

      {/* Project Ideas */}
      <section className="pb-6 mt-6 ml-11 mr-10">
        <h2 className="text-2xl font-semibold mb-2">Mini Project Ideas</h2>
        <ul className="list-disc list-inside space-y-1 text-white rounded-lg bg-[#2a6a72] mt-4 p-4">
          <li>Task Manager</li>
          <li>Blog App</li>
          <li>Weather App using REST API</li>
          <li>Online Shopping Cart</li>
        </ul>
      </section>

      {/* Resources */}
      <section className="pb-6 mt-6 ml-11 mr-10">
        <h2 className="text-2xl font-semibold mb-2">Recommended Resources</h2>
        <ul className="list-disc list-inside text-blue-700 underline space-y-1">
          <li><a href="https://angular.io/docs" target="_blank" rel="noreferrer">Angular Official Docs</a></li>
          <li><a href="https://www.w3schools.com/angular/" target="_blank" rel="noreferrer">W3Schools Angular</a></li>
          <li><a href="https://www.freecodecamp.org/news/tag/angular/" target="_blank" rel="noreferrer">FreeCodeCamp Angular</a></li>
        </ul>
      </section>
      <div className="flex justify-center mt-8">
        <a
          href="/javascript"
          className="btn learn-js bg-gray-500 text-white px-4 py-2 rounded-2xl hover:bg-[#263b63]"
        >
          ← Back to JavaScript
        </a>
        <a
          href="/react"
          className="btn learn-js bg-blue-600 text-white px-4 py-2 rounded-2xl"
        >
          Next: Learn React Js →
        </a>
      </div>
    </div>
  )
}

export default Angular
