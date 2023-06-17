import React, { useState } from "react";
import { Helmet } from "react-helmet";

const Blog = () => {
  const faqData = [
    {
      question:
        "01. What are access and refresh tokens ? How do they work? Should we store them in the client side?",
      answer:
        "Answer: Access tokens are credentials that grant access to resources, stored on the client-side. Refresh tokens are long-lived tokens used to obtain new access tokens, stored securely on the server-side.",
    },
    {
      question:
        "02. What are the  differences between SQL and NoSQL Databases ?",
      answer:
        "Answer: SQL databases are relational, structured, and use a fixed schema, while NoSQL databases are non-relational, flexible, and schema-less. SQL databases use SQL for querying, support transactions, and are suitable for complex relationships. NoSQL databases offer high scalability, handle large amounts of unstructured data, and provide flexible data models.",
    },
    {
      question: "03. What is ExpressJS ? What is NestJS ?",
      answer:
        "Answer: ExpressJS is a minimalist web framework for Node.js, providing a simple and flexible way to build web applications and APIs. NestJS is a progressive Node.js framework that uses TypeScript and is built with a modular architecture, allowing for scalable and maintainable server-side applications.",
    },
    {
      question: "04. What is MongoDB aggregate and how does it work ?",
      answer:
        "Answer: MongoDB aggregate is a powerful aggregation framework that allows for advanced data processing and analysis. It works by applying a series of pipeline stages to transform and manipulate the data, including operations like grouping, filtering, sorting, and projecting. It enables efficient querying and aggregation of data within MongoDB, providing flexibility and performance for complex data operations.",
    },
    // Add more question-answer pairs as needed
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 ">
      <Helmet>
        <title>Login | Toy Kingdom</title>
      </Helmet>
      <h1 className="text-center text-4xl py-5 uppercase  font-bold">
        Toy Kingdom Blog
      </h1>
      <div className="space-y-4 sm:space-y-6 md:space-y-8">
        {faqData.map((item, index) => (
          <QuestionButton key={index} question={item.question}>
            {item.answer}
          </QuestionButton>
        ))}
      </div>
    </div>
  );
};

const QuestionButton = ({ question, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-5 rounded-md border border-solid border-gray-300 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-blue-600">
      <button
        className="flex items-center justify-between w-full py-2 text-left focus:outline-none focus:ring focus:border-blue-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-xl text- font-semibold sm:text-2xl md:text-3xl">
          {question}
        </h2>
        <svg
          className={`w-6 h-6 transition-transform duration-200 transform ${
            isOpen ? "rotate-90" : "rotate-0"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </button>

      <p
        className={`my-2 text-sm text-black text-opacity-50 font-bold sm:text-base transition-all duration-500 ${
          isOpen ? "max-h-full opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {children}
      </p>
    </div>
  );
};

export default Blog;
