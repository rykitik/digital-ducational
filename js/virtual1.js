const option_list = document.querySelector(".main-window-app__exercises-content-text");
const timeCount = document.querySelector(".time-counter");
const firstAppPage = document.querySelector(".first-app-page");
const secondAppPage = document.querySelector(".second-app-page");
const buttonNext = document.querySelector(".next-btn");
const buttonPrev = document.querySelector(".prev-btn");
const time_after = document.querySelector(".time_after");
const img = document.querySelector(".main-window-app__exercises-content-img1");
const text_zadanie = document.querySelector(".modal__header");

const tabExerciseContainer = document.querySelector(".main-window-app__header-tab-exercise-container");
tabsShow();
showQuestions(0);
queCounter(1);

let que_count = 0;
let que_numb = 1;
let counter;

function tabsShow() {
  let tab_tag = "";
  console.log(questions.length);
  for(let i = 0; i < questions.length; i++) {
    tab_tag += '<div class="tab"></div>';
  }
  tabExerciseContainer.innerHTML = tab_tag;
}

const tab = document.querySelector(".tab");

//if next btn clicked
buttonNext.onclick = ()=> {
  if(que_count < questions.length - 1) {
    que_count ++;
    que_numb ++;
    showQuestions(que_count);
    queCounter(que_numb);
    clearInterval(counter);
  } else {
    firstAppPage.classList.toggle("hide");
    secondAppPage.classList.toggle("hide");
  }
  
}
buttonPrev.onclick = ()=> {
  if (que_numb === 0) return;
  console.log("нажата кнопка");
  que_count --;
  que_numb --;
  showQuestions(que_count);
  queCounter(que_numb);
}

function showQuestions(index) { // task: do refactor later 
  if (tabExerciseContainer.children[index].hasAttribute("class", "active_tab")) {
    tabExerciseContainer.children[index+1].removeAttribute("class", "active_tab")
  }
  const que_text = document.querySelector(".modal__header");
  tabExerciseContainer.children[index].setAttribute("class", "active_tab")
  let que_tag = '<span>'+ questions[index].question+'</span>';
  let img_tag = '';
  img_tag = questions[index].img;
  let opisanie_tag = '';
  opisanie_tag = '<span>'+ questions[index].text+'</span>';
	
  que_text.innerHTML = que_tag;
  option_list.innerHTML = opisanie_tag;
  img.src= img_tag;
}
  
function ShowResult() {
 
  result_box.innerHTML = userScore; 
  
}

function queCounter(index) {
  const ques_counter  = document.querySelector(".main-window-app__header-counter-exercise");
  let totalQuesTag = ''+ index +'/'+ questions.length +'';
  ques_counter.innerHTML = totalQuesTag;
}