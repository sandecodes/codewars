bmi = (weight, height, bmi = weight / (height * height)) => (bmi <= 18.5 ? 'Underweight' : bmi <= 25 ? 'Normal' : bmi <= 30 ? 'Overweight' : 'Obese');

console.log(bmi(80, 1.8));
