import React from "react";
import metasplit from "../img/Metasplit.png"
import altera from "../img/Altera.jpg"
import motive from "../img/MotiveComponents.png"
import rtos from "../img/rtos.png"
import nids from "../img/nids.png"
import fiveDof from "../img/5dof.png"
import firefighter from "../img/firefighter.jpeg"
import sumo from "../img/sumo.jpeg"
import easieremails from "../img/easieremails.jpeg"

export const projects = [
  {
    id: 0,
    title: "EasierEmails",
    description: "Developing an AI-powered financial advisor web app using React and FastAPI that analyzes bank statements, receipts, and transactions to classify expenses, summarize spending, and generate personalized budgeting advice. It will integrate Hugging Face models for document QA, OCR, classification, summarization, and financial query answering.",
    imageUrl:easieremails,
    link:"easieremails.com"
  },
  {
    id: 1,
    title: "Firefighting Robot",
    description: "I assembled a firefighting robot by following schematics, designing and wiring three custom circuit boards, and soldering components. Using Great Cow Basic, I implemented navigation and control logic for maze traversal, flame detection, and extinguishing. I integrated sensors and actuators to enable wall and line detection, flame recognition, and fan-based suppression, gaining hands-on experience in embedded programming, electronics assembly, troubleshooting, and robotics systems.",
    imageUrl:firefighter,
    link:"https://github.com/kiyon21/5dof-VR-livestreaming"
  },
  {
    id: 2,
    title: "Sumo Robot",
    description: "I designed PCB layouts from schematics for two circuit boards—one dedicated to line detection and the other to opponent detection—then assembled and soldered components to build a fully functional autonomous robot. Using Great Cow BASIC, I programmed control logic for line-following, opponent detection, and competitive maneuvers. This project strengthened my skills in PCB design, embedded programming, technical troubleshooting, and robotics integration, resulting in a competition-ready robot.",
    imageUrl:sumo,
    link:"https://github.com/kiyon21/5dof-VR-livestreaming"
  }

  ];
