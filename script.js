document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (weight > 0 && height > 0) {
        const bmi = weight / (height * height);
        const result = document.getElementById('result');
        result.textContent = `Your BMI is: ${bmi.toFixed(2)}`;
    } else {
        alert('Please enter valid weight and height values.');
    }
});