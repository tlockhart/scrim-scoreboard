
const home_score = document.getElementsByClassName("home-score")[0]
const guest_score = document.getElementsByClassName("guest-score")[0]

function add_score (team, score) {
    if(team === "home")
        home_score.textContent = parseInt(home_score.textContent) + parseInt(score);
    else
        guest_score.textContent = parseInt(guest_score.textContent) + parseInt(score);
}