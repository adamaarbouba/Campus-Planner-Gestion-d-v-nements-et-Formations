
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');


const divCOntainer = document.getElementById("containedivr");
var formationData = [];

    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
    
    

})


document.addEventListener("DOMContentLoaded", () => {
  let formationString = localStorage.getItem("formation");
  if (!formationString) {
    fetch("../data/formation.json")
      .then((Res) => Res.json())
      .then((data) => {
        // data.forEach(formation => {
        formationData = data;

        localStorage.setItem("formation", JSON.stringify(formationData));
        displayCpurseInfo();

        // })
      });
  } else {
    formationData = JSON.parse(formationString);
    displayCpurseInfo();
  }
});



function displayCpurseInfo() {
  divCOntainer.innerHTML=""
  for (let forma of formationData) {
    divCOntainer.innerHTML += `<section class="w-[80%] ml-[10%] mt-[5%] h-[250px] grid justify-center rounded-lg border-2 border-[#00A6C0] md:w-[45%] md:ml-[2%] lg:w-[90%]">
  <h3 class="font-medium  text-[#00A6C0] mb-2 text-center mt-[5%]">${forma.theme}</h3>
  <p><strong>Trainer : </strong> <span class="trainerr">${forma.trainer}</span></p>
  <p><strong>Duration : </strong><span class="Durationn">${forma.duration} </span> Mois</p>
  <p><strong>Capacity : </strong> <span class="capacity">${forma.capacity}</span> poeple</p>
  <p><strong>participants : </strong> <span class="participants">${forma.participants.length}</span> participants</p>

  <div class="flex justify-between">
    <button class="modify rounded p-[5px] bg-green-600 text-white"  onClick=modifyFormation("${forma.id}")>Modify</button>
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

function modifyFormation(id) {
  let itemFound = formationData.find((item) => item.id === id);
  // console.log(itemFound);
  themeInput.value = itemFound.theme;
  trainerInput.value = itemFound.trainer;
  durationInput.value = itemFound.duration;
  capacityInput.value = itemFound.capacity;
}


function deleteFormation(id) {
  formationData = formationData.filter((item) => item.id != id);
  console.log(formationData);


  // save new items f local storage 
  // // update formationData

  localStorage.setItem("formation", JSON.stringify(formationData));
   displayCpurseInfo();

 
}

// setTimeout(() => {
//   var modifyButtonWithhtmlcolletion = document.getElementsByClassName("modify");
//   var modifyButton = Array.from(modifyButtonWithhtmlcolletion);
//   console.log(modifyButton);

//   modifyButton.forEach((element) => {
//     element.addEventListener("click", showDetailsIntheinputs);
//   });

//   function showDetailsIntheinputs() {
//     const idLastcaractere = this.id.slice(-1);
//     themeInput.value = formationData[idLastcaractere].theme;
//     trainerInput.value = formationData[idLastcaractere].trainer;
//     durationInput.value = formationData[idLastcaractere].duration;
//     capacityInput.value = formationData[idLastcaractere].capacity;
//   }
// }, 100);
