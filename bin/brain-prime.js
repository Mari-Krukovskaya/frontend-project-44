#!/usr/bin/env node
import { rule, getRound } from '../src/games/prime.js';
import startGame from '../src/index.js';

startGame(rule, getRound);
