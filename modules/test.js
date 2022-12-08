'use strict'

function test(question_num, actual, expected) {
  if (_.isEqual(actual, expected)) {
    console.log(question_num + ": OK");
  } else {
    console.error(question_num + ": NG");
    console.log("  actual: ", actual);
    console.log("expected: ", expected);
  }
}