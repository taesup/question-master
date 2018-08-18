// pull questions from baseline and modification files
const baseline = require('./questions/baseline');
const modifications = require('./questions/modifications');

// aggregate all questions into one collection
const baselineQuestions = Object.values(baseline);
const modificationQuestions = Object.values(modifications);
const questions = [].concat(baselineQuestions).concat(modificationQuestions);
const askedQuestions = [];

function getQuestion() {
  // pick random question and remove it from list of questions
  const questionIndex = Math.floor(Math.random() * questions.length);
  const question = questions.splice(questionIndex, 1)[0];

  // move question into askedQuestions
  askedQuestions.push(question);

  // return current question
  return question;
}

function restart() {
  let allQuestions = askedQuestions.splice(0);
  allQuestions.forEach((question) => { questions.push(question); });
}

module.exports = {
  getQuestion: getQuestion,
  restart: restart
};
