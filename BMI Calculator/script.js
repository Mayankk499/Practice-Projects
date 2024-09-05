const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (isNaN(height) || height <= 0) {
        results.innerHTML = `Please give a valid height ${height}.`;
    } else if (isNaN(weight) || weight <= 0) {
        results.innerHTML = `Please give a valid weight ${weight}.`;
    } else {
        const heightInMeters = height / 100;
        const BMI = (weight / (heightInMeters * heightInMeters)).toFixed(2);
        results.innerHTML = `<span>${BMI}</span>`;

        // Add BMI category
        let category = '';
        if (BMI < 18.6) {
            category = 'Underweight';
        } else if (BMI >= 18.6 && BMI <= 24.9) {
            category = 'Normal';
        } else {
            category = 'Overweight';
        }
        results.innerHTML += `<p>Category: ${category}</p>`;
    }
});
