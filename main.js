function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
  `
}

let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.4
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML = createCard("21/11", "quinta", 
    createGame("brazil", "16:00", "serbia") + 
    createGame("portugal", "13:00", "ghana") +
    createGame("switzerland", "07:00", "cameroon")) +
  createCard("24/11","segunda",
    createGame("switzerland", "13:00", "brazil") +
    createGame("portugal", "16:00", "uruguai") + 
    createGame("south korea", "10:00", "ghana")) +
  createCard("28/11", "sexta", 
    createGame("brazil", "08:00", "cameroon") + 
    createGame("hungary", "13:00", "argentina") +
    createGame("colombia", "20:00", "japan"))
