

document.getElementById('team-dropdown-button').addEventListener('click', function() {
    document.getElementById('team-dropdown-menu').classList.toggle('hidden');
  });

  document.getElementById('season-dropdown-button').addEventListener('click', function() {
  document.getElementById('season-dropdown-menu').classList.toggle('hidden');
});

function updateSeason(season) {
  document.getElementById("season-dropdown-button").innerHTML = season;
}
function updateTeam(season) {
  document.getElementById("team-dropdown-button").innerHTML = season;
}
let k="man"
let x = document.createElement("li");
x.classList.add("block");
x.innerHTML = k;


x.addEventListener('click', function() {
    updateSeason(k);
});


document.getElementById('f').append(x);