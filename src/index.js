'use strict';

const { getRandomWordSync, getRandomWord } = require('word-maker');
const fs = require('fs');
const PATH = require("path");
const outFile = PATH.resolve(__dirname + '/../console_output.txt');

// YOUR CODE HERE

addLog('It works!');

async function runAssessment() {
	try{
		await task_1();
		task_2();
		await task_3();
	} catch(err) {
		console.log(err);
	}
}

function addLog(line) {
	line+= '\n';
	fs.appendFile(outFile, line, function (err) {
		if (err) throw err;
	});
}

async function task_1() {
	for(let i=1; i<=100; i++) {
		let word = await getRandomWordSync();
		await addLog(`${i}: ${word}`);
	}
}

async function task_2() {
	for(let i=1; i<=100; i++) {
		let res = '';
		if(i%3 === 0) res = 'Fizz';
		if(i%5 === 0) res += 'Buzz';
		if(res != '') await addLog(`${i}: ${res}`);
	}
}

function task_3() {
	for(let i=1; i<=100; i++) {
		getRandomWord({ withErrors: true })
		.then(function(word) {
			addLog(`${i}: ${word}`);
		})
		.catch(function(err) {
			addLog(`${i}: Doh!`);
		})
	}
}

runAssessment();
