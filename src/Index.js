const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

// btn.addEventListener("click", () => {
//   menu.classList.toggle("hidden");
// });


fetch('../data/formation.json')
.then(Res => Res.json())
.then(data => {
    data.forEach(formation => {
      
      const them = formation.theme
    })
} )

const FormationAdminCard = `<section class="w-[80%] ml-[10%] mt-[5%] h-[250px] grid justify-center rounded-lg border-2 border-[#00A6C0] md:w-[45%] md:ml-[2%] lg:w-[90%]">
  <h3 class="text-2xl font-semibold text-[#00A6C0] mb-2 text-center mt-[5%]">{formation.Theme}</h3>
  <p><strong>Trainer : </strong> <span class="trainerr">{Trainer}</span></p>
  <p><strong>Duration : </strong><span class="Durationn">{Duration} </span> Mois</p>
  <p><strong>Capacity : </strong> <span class="capacity">{Capacity}</span> poeple</p>
  <p><strong>participants : </strong> <span class="participants">{participants}</span> participants</p>

  <div class="flex justify-between">
    <button class="rounded p-[5px] bg-green-600 text-white">Modify</button>
    <button class="rounded p-[5px] bg-red-700 text-white">Delete</button>
  </div>
  <p class="mt-2"></p>
</section>`;