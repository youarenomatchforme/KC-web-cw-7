function BMI(weight, height) {
  let result = weight / (height * height);
  return result;
}

console.log(BMI(40, 166));

function Status(BodyMass) {
  if (BodyMass < 18.5) {
    return "You're underwight";
  } else if (BodyMass >= 18.5 && BodyMass <= 25) {
    return "You're just right";
  } else {
    return "You're over weight";
  }
}
function calculate() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;

  let bmi_value = BMI(weight, height);

  let desc = Status(bmi_value);

  let box = document.getElementById("result");

  box.innerText = bmi_value + " == " + desc;
}
