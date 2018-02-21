const examWeight = .65;
const exerciseWeight = .35;

var studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function sumFromArray(array) {
  return array.reduce(function (acc, num) {
    return acc + num;
  });
}

function avgFromArray(array) {
  return sumFromArray(array) / array.length;
}

function minFromArray(array) {
  return array.slice().sort(numericSort)[0];
}

function maxFromArray(array) {
  return array.slice().sort(numericSort)[array.length - 1];
}

function numericSort(a, b) {
  return a - b;
}

function convertNumberToLetterGrade(num) {
  if (num >= 93) {
    return '(A)';
  } else if (num >= 85) {
    return '(B)';
  } else if (num >= 77) {
    return '(C)';
  } else if (num >= 69) {
    return '(D)';
  } else if (num >= 60) {
    return '(E)';
  } else {
    return '(F)';
  }
}

function extractExamScores(scores) {
  var exam1Scores = [];
  var exam2Scores = [];
  var exam3Scores = [];
  var exam4Scores = [];

  Object.keys(scores).forEach(function (key, index, array) {
    exam1Scores[index] = scores[key].scores.exams[0];
    exam2Scores[index] = scores[key].scores.exams[1];
    exam3Scores[index] = scores[key].scores.exams[2];
    exam4Scores[index] = scores[key].scores.exams[3];
  });

  return [exam1Scores, exam2Scores, exam3Scores, exam4Scores,];
}

function fillStudentGrades(students) {
  var examAvg;
  var exerciseAvg;
  var finalGrade;
  var roundedFinalGrade;
  var equivalentLetterGrade;

  return Object.keys(students).map(function (student, index, array) {
    examAvg = avgFromArray(students[student].scores.exams);
    exerciseAvg = sumFromArray(students[student].scores.exercises);
    finalGrade = examAvg * examWeight + exerciseAvg * exerciseWeight;
    roundedFinalGrade = Math.round(finalGrade);
    equivalentLetterGrade = convertNumberToLetterGrade(roundedFinalGrade);

    return String(roundedFinalGrade) + ' ' + equivalentLetterGrade;
  });
}

function generateClassRecordSummary(scores) {
  var examScores;
  var summary = {
    studentGrades: [],
    exams: [
      { average: 0, minimum: 0, maximum: 0},
      { average: 0, minimum: 0, maximum: 0},
      { average: 0, minimum: 0, maximum: 0},
      { average: 0, minimum: 0, maximum: 0},
    ],
  };

  summary.studentGrades = fillStudentGrades(scores);
  examScores = extractExamScores(scores);
  summary.exams.forEach(function (exam, index, array) {
    exam.average = avgFromArray(examScores[index]);
    exam.minimum = minFromArray(examScores[index]);
    exam.maximum = maxFromArray(examScores[index]);
  });

  return summary;
}

console.log(generateClassRecordSummary(studentScores));

/*
{
  studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
  exams: [
    { average: 75.6, minimum: 50, maximum: 100 },
    { average: 86.4, minimum: 70, maximum: 100 },
    { average: 87.6, minimum: 60, maximum: 100 },
    { average: 91.8, minimum: 80, maximum: 100 },
  ],
}

Percent Grade	Letter Equivalent
93 - 100	A
85 - 92	B
77 - 84	C
69 - 76	D
60 - 68	E
0 - 59	F
*/
