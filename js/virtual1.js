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
  console.log('Вопросов: ', questions.length);
  for(let i = 0; i < questions.length; i++) {
    let nextNumb = i + 1;
    tab_tag += '<div class="tab" onclick="openTab('+ i +')"> ' + nextNumb + ' </div>';
  }
  tabExerciseContainer.innerHTML = tab_tag;
}

const tab = document.querySelector(".tab");

//if next btn clicked
buttonNext.onclick = ()=> {
  if (que_numb === questions.length) {
    firstAppPage.classList.toggle("hide");
    secondAppPage.classList.toggle("hide");
    return;
  }
  que_count ++;
  que_numb ++;
  showQuestions(que_count);
  queCounter(que_numb);
  // clearInterval(counter);  
}
buttonPrev.onclick = ()=> {
  if (que_numb === 1) return;
  console.log("нажата кнопка");
  que_count --;
  que_numb --;
  showQuestions(que_count);
  queCounter(que_numb);
}

function openTab(index) {
  que_count = index;
  que_numb = index + 1;
  showQuestions(que_count);
  queCounter(que_numb);
}

function updateTabs(index) {
  for (let i = 0; i < questions.length; i++) {
    tabExerciseContainer.children[i].removeAttribute("class", "active_tab");
    tabExerciseContainer.children[i].setAttribute("class", "tab");
  }
  tabExerciseContainer.children[index].removeAttribute("class", "tab");
  tabExerciseContainer.children[index].setAttribute("class", "active_tab");
}

function showQuestions(index) { // task: do refactor later // FIX TAB COUNTS
  if (index < 0 || questions.length === index) return;
  updateTabs(index)
  const que_text = document.querySelector(".main-window-app__exercises-content-textf");
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