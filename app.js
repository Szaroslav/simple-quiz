const correctAnswers = ['a', 'a', 'b', 'b', 'b'];
const form = document.querySelector('.quiz__form');
const result = document.querySelector('.quiz-result');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const answers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];
    let score = 0;

    answers.forEach((answer, i) => {
        if (answer === correctAnswers[i]) score += (1 / correctAnswers.length) * 100;
    });

    scrollTo(0, 0);
    result.classList.remove('d-none');

    const resultPercentage = result.querySelector('span');
    let intervalScore = 0;

    setTimeout(() => {
        const intervalId = setInterval(() => {
            resultPercentage.textContent = `${intervalScore} %`;
            if (intervalScore++ === score) clearInterval(intervalId);
        }, 10);
    }, 500);
});
