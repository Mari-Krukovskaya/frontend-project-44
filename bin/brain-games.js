#!/usr/bin/env node
import userName from "../src/cli.js";

const funcName = () => {
  console.log("Welcome to the Brain Games!");
  userName();
};
funcName();
