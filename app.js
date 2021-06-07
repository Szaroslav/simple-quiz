const correctAnswers = ['a', 'a', 'b', 'b', 'b'];
const form = document.querySelector('.quiz__form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const answers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    let score = 0;

    answers.forEach((answer, i) => {
        if (answer == correctAnswers[i]) score++;
    });

    console.log(score);
});
