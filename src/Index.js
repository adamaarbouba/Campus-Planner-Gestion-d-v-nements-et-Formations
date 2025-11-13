document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("menu-btn");
  const menu = document.getElementById("menu");
  btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
  });
});
const divCOntainer = document.getElementById("containedivr");
var formationData = [];
document.addEventListener("DOMContentLoaded", () => {
  var formationString = localStorage.getItem("formation");
  if (!formationString) {
    fetch("../data/formation.json")
      .then((Res) => Res.json())
      .then((data) => {
        formationData = data;
        localStorage.setItem("formation", JSON.stringify(formationData));
        displayCpurseInfo();
      });
  } else {
    formationData = JSON.parse(formationString);
    displayCpurseInfo(formationData);
  }
});
function displayCpurseInfo() {
  divCOntainer.innerHTML = "";
  for (let forma of formationData) {
    divCOntainer.innerHTML += `<section class="w-[80%] ml-[10%] mt-[5%] h-[250px] grid justify-center rounded-lg border-2 border-[#00A6C0] md:w-[45%] md:ml-[2%] lg:w-[90%]">
  <h3 class="font-medium  text-[#00A6C0] mb-2 text-center mt-[5%]">${forma.theme}</h3>
  <p><strong>Trainer : </strong> <span class="trainerr">${forma.trainer}</span></p>
  <p><strong>Duration : </strong><span class="Durationn">${forma.duration} </span> Mois</p>
  <p><strong>Capacity : </strong> <span class="capacity">${forma.capacity}</span> poeple</p>
  <p><strong>participants : </strong> <span class="participants">${forma.participants.length} </span> participants</p>
  
  <div class="flex justify-between">
    <button class="modify rounded p-[5px] bg-green-600 text-white" onClick=modifyFormation("${forma.id}")>Modify</button>
    <button class="delete rounded p-[5px] bg-red-700 text-white" id="delete" onClick=deleteFormation("${forma.id}")>Delete</button>
  </div>
  <p class="mt-2"></p>
</section>`;
  }
}
const themeInput = document.getElementById("THEME");
const trainerInput = document.getElementById("TRAINER");
const durationInput = document.getElementById("durationTime");
const capacityInput = document.getElementById("CAPACITY");
var modifiedButton;
function modifyFormation(id) {
  let itemFound = formationData.find((item) => item.id == id);
  themeInput.value = itemFound.theme;
  trainerInput.value = itemFound.trainer;
  durationInput.value = itemFound.duration;
  capacityInput.value = itemFound.capacity;
  document
    .getElementById("SubmittingDataform")
    .setAttribute("operation-type", "modFying");
  modifiedButton = id;
}
document
  .getElementById("SubmittingDataform")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    let submittingData = handleSubmit();
    let checkAnatrribute = document.getElementById("SubmittingDataform");
    if (checkAnatrribute.hasAttribute("operation-type")) {
      formationData.forEach((item) => {
        if (item.id == modifiedButton) {
          item.theme = submittingData.theme;
          item.trainer = submittingData.trainer;
          item.duration = submittingData.duration;
          item.capacity = submittingData.capacity;
        }
      });
      checkAnatrribute.removeAttribute("operation-type");
    } else {
      submittingData.id = Date.now();
      submittingData = { ...submittingData, participants: [] };
      formationData.push(submittingData);
    }
    saveUtilisateurToLocalStorage(formationData);
    themeInput.value = "";
    trainerInput.value = "";
    durationInput.value = "";
    capacityInput.value = "";
    displayCpurseInfo();
  });
function deleteFormation(id) {
  formationData = formationData.filter((item) => item.id != id);
  console.log(formationData);
  localStorage.setItem("formation", JSON.stringify(formationData));
  displayCpurseInfo();
}
setTimeout(() => {}, 100);
function getUtilisateursFromLocalStorage() {
  let formstrring = localStorage.getItem("formation");
  return formstrring ? JSON.parse(formstrring) : [];
}
function saveUtilisateurToLocalStorage(formations) {
  localStorage.setItem("formation", JSON.stringify(formations));
}
function handleSubmit() {
  const tinput = themeInput.value.trim();
  const traininputt = trainerInput.value.trim();
  const dinput = durationInput.value;
  const Cinput = capacityInput.value;
  var submittingData = {};
  submittingData[themeInput.name] = tinput;
  submittingData[trainerInput.name] = traininputt;
  submittingData[durationInput.name] = dinput;
  submittingData[capacityInput.name] = Number(Cinput);
  return submittingData;
}
