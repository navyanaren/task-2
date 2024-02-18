function calculateGrade(scores, customScale = null) {
    const defaultScale = {
      A: 90,
      B: 80,
      C: 70,
      D: 60,
      F: 0,
    };
    const scale = customScale || defaultScale;
    const averageScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;
    for (const grade in scale) {
      if (averageScore >= scale[grade]) {
        return grade;
      }
    }
  }
  const inputScores = [92, 65, 73, 97, 83];
  const finalGrade = calculateGrade(inputScores);
  console.log(`Final Grade: ${finalGrade}`);

const customScale = {
    A: 95,
    B: 85,
    C: 75,
    D: 65,
    F: 0,
  };
  const finalGradeCustomScale = calculateGrade(inputScores, customScale);
  console.log(`Final Grade with Custom Scale: ${finalGradeCustomScale}`);
