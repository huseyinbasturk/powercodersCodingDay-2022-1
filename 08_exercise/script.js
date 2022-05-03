// Questions will be asked
const Questions = [{
  id: 0,
  q: "How to create a folder in HTML?",
  a: [{ text: 'touch <folerName>', isCorrect: false },
      { text: 'rmdir <folderName>', isCorrect: false },
      { text: 'mkdir <folderName>', isCorrect: true },
      { text: 'touch <folderName>', isCorrect: false }
  ]

},
{
  id: 1,
  q: "How to delete a file in HTML?",
  a: [{ text: "rmdir <fileName>", isCorrect: false},
      { text: "remove <fileName>", isCorrect: false },
      { text: "rm <fileName>", isCorrect: true },
      { text: "touch <filename", isCorrect: false}
  ]

},
{
  id: 2,
  q: "How to add text-color to an paragraph in CSS?",
  a: [{ text: "P{color:blue}", isCorrect: true},
      { text: "P{text-color:blue}", isCorrect: false },
      { text: "P{text-color=blue}", isCorrect: false },
      { text: "P:color=blue", isCorrect: false }
  ]

},
{
  id: 3,
  q: "How to link HTML to JavaScript file?",
  a: [{ text: "link:script.JavaScrip", isCorrect: false },
      { text: "<script src=file></script>", isCorrect: true },
      { text: "<script></script>", isCorrect: false },
      { text: "<script href=file></script>", isCorrect: false}
  ]

},
{
  id: 4,
  q: "What does HTML stand for?",
  a: [{ text: "HyperText Markup Language", isCorrect: true},
      { text: "HyperText Modifying Language", isCorrect: false },
      { text: "HyperText Marked Language", isCorrect: false },
      { text: "HyperText Literal", isCorrect: false }
  ]
}
]

// Set start
var start = true;

// Iterate
function iterate(id) {

// Getting the result display section
var result = document.getElementsByClassName("result");
result[0].innerText = "";

// Getting the question
const question = document.getElementById("question");


// Setting the question text
question.innerText = Questions[id].q;

// Getting the options
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');


// Providing option text 
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

// Providing the true or false value to the options
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";

// Show selection for op1
op1.addEventListener("click", () => {
  op1.style.backgroundColor = "lightgoldenrodyellow";
  op2.style.backgroundColor = "lightskyblue";
  op3.style.backgroundColor = "lightskyblue";
  op4.style.backgroundColor = "lightskyblue";
  selected = op1.value;
})

// Show selection for op2
op2.addEventListener("click", () => {
  op1.style.backgroundColor = "lightskyblue";
  op2.style.backgroundColor = "lightgoldenrodyellow";
  op3.style.backgroundColor = "lightskyblue";
  op4.style.backgroundColor = "lightskyblue";
  selected = op2.value;
})

// Show selection for op3
op3.addEventListener("click", () => {
  op1.style.backgroundColor = "lightskyblue";
  op2.style.backgroundColor = "lightskyblue";
  op3.style.backgroundColor = "lightgoldenrodyellow";
  op4.style.backgroundColor = "lightskyblue";
  selected = op3.value;
})

// Show selection for op4
op4.addEventListener("click", () => {
  op1.style.backgroundColor = "lightskyblue";
  op2.style.backgroundColor = "lightskyblue";
  op3.style.backgroundColor = "lightskyblue";
  op4.style.backgroundColor = "lightgoldenrodyellow";
  selected = op4.value;
})

// Grabbing the evaluate button
const evaluate = document.getElementsByClassName("evaluate");


// Evaluate method
evaluate[0].addEventListener("click", () => {
  if (selected == "true") {
      result[0].innerHTML = "True";
      result[0].style.color = "green";
  } else {
      result[0].innerHTML = "False";
      result[0].style.color = "red";
  }
})
}


if(start) {
  iterate(Math.floor(Math.random()* Questions.length));
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 4) {
  id++;
  iterate(id);
  console.log(id);
}
})