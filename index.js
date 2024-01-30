const calculateFormEl = document.getElementById("calculate_form");
const resultEl = document.getElementById("result");


const calculateMarks =(event)=> {

    const maxMarks = 400;

    event.preventDefault();
    resultEl.innerText = "";
const formData = new FormData(calculateFormEl);

const data = {};

formData.forEach((value, key) => {
    data[key] = +value;
});

const totalMarks = data.maths + data.science + data.hindi + data.english;
const percentage = Math.floor((totalMarks/ maxMarks) * 100);
resultEl.innerText = `You have got ${totalMarks} out of ${maxMarks} and your percentage is ${percentage}%`;

console.log({totalMarks, percentage});
};

