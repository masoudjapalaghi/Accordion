"use client";

import React from "react";
import Accordion from "./../../../Components/Accordion/index";

const page = () => {
  const content = [
    {
      question: "question1",
      answer: `answer1`,
    },
    {
      question: "question3",
      answer: `answer3`,
    },
    {
      question: "question4",
      answer: `answer4`,
    },
    {
      question: "question5",
      answer: `answer5`,
    },
  ];
  return (
    <Accordion  actived={2}>
      {content.map(({ question, answer }, index) => (
        <div key={index}>
          <Accordion.Toggle eventKey={index}>{question}</Accordion.Toggle>
          <Accordion.Collapse eventKey={index}>{answer}</Accordion.Collapse>
        </div>
      ))}
    </Accordion>
  );
};

export default page;
