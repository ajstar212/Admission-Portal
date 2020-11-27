const qnumberInput = document.querySelector("#QuestionMark");
const createBtn = document.querySelector("#create");
const questionSheet = document.querySelector("#ques-sheet");

createBtn.addEventListener("click", function () {
  qnumber = qnumberInput.value;
  for (i = 1; i <= qnumber; i++) {
    const card = document.createElement("div");
    card.classList.add("card");

    const header = document.createElement("h5");
    header.innerHTML = `Question - ${i}`;

    const Qhead = document.createElement("div");
    Qhead.classList.add("form-group");

    const QuestionText = document.createElement("input");
    QuestionText.type = "text";
    QuestionText.classList.add("form-control");
    QuestionText.id = "QuestionHead";
    QuestionText.placeholder = "Type Question Here";

    card.appendChild(header);
    card.appendChild(Qhead);
    card.appendChild(QuestionText);

    for (k = 0; k < 4; k++) {
      const optionlabel = ["ক", "খ", "গ", "ঘ"];

      const options = document.createElement("div");
      options.classList.add("options");

      const check = document.createElement("input");
      check.type = "checkbox";
      check.classList.add("check");
      check.value = "true";
      check.id = `op-${k + 1}`;

      const oplabel = document.createElement("label");
      oplabel.classList.add("check-label");
      oplabel.for = `op-${k + 1}`;
      oplabel.innerHTML = optionlabel[k];

      const optionText = document.createElement("input");
      optionText.type = "text";
      optionText.classList.add("option-input");
      optionText.id = `option-${k + 1}`;

      options.appendChild(check);
      options.appendChild(oplabel);
      options.appendChild(optionText);

      card.appendChild(options);
    }
    questionSheet.appendChild(card);
  }
  console.log(qnumber);

  createBtn.getElementsByClassName.visibility = "hidden";

  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.classList.add("btn", "btn-primary");
  submitBtn.id = "upload";
  submitBtn.innerText = "Upload Question";

  questionSheet.appendChild(submitBtn);
});
