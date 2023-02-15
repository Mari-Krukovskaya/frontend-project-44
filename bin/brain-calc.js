#!/usr/bin/env node
import { rule, getRound } from '../src/games/calc.js';
import startGame from '../src/index.js';

startGame(rule, getRound);
