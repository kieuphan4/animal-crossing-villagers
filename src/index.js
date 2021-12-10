const villagerUrl = "https://acnhapi.com/v1a/villagers/"
const villagerCollection = document.getElementById("villager-container")

document.addEventListener("DOMContentLoaded", () => {
    fetchVillagers();
    buildSearchBar();
})

// Part 1 - Fetch villagers from API
function fetchVillagers() {
    fetch(villagerUrl)
        .then(resp => resp.json())
        .then(data => data.map(villager => renderVillager(villager)))
}

// Part 2 - Create card or icons to display villagers
function renderVillager(villager) {
    const villagerCard = document.createElement("div")
    villagerCard.id = villager.name["name-USen"].toLowerCase()
    villagerCard.className = "card"
    villagerCard.innerHTML = `
        <img src="${villager.image_uri}" class="villager-avatar"/>
        <p>"${villager.saying}"</p>
        <h4 class="name"><b>${villager.name["name-USen"]}</b></h4>`
    villagerCollection.append(villagerCard)

    buildBtn(villager, villagerCard)
    createDetails(villager, villagerCard)
    buildCurrentBtn(villager, villagerCard)
}

function buildBtn(villager, villagerCard) {
    const btn = document.createElement("button")
    btn.id = `btn${villager.id}`
    btn.className = "button"
    btn.innerHTML = "About Me!"
    villagerCard.append(btn)

    // Event 1 - Click on villagers to show their info
    btn.addEventListener("click", (e) => {
        const villagerId = e.target.id.substring(3)
        let villagerDiv = document.getElementById(villagerId)
        if (villagerDiv.style.display === "block") {
            villagerDiv.style.display = "none";
        } else {
            villagerDiv.style.display = "block";
        }
        e.target.style.background = "#66bb6a"
    })
}

function createDetails(villager, villagerCard) {
    const detailsDiv = document.createElement("div")
    detailsDiv.id = villager.id
    detailsDiv.className = "details"
    detailsDiv.innerHTML = `
    <p><b>Birthday: </b>${villager["birthday-string"]}</p>
    <p><b>Gender: </b>${villager.gender}</p>
    <p><b>Species: </b>${villager.species}</p>
    <p><b>Personality: </b>${villager.personality}</p>
    <p><b>Hobby: </b>${villager.hobby}</p>
    <p><b>Catchphrase: </b>${villager["catch-phrase"]}</p>`
    villagerCard.append(detailsDiv)
}

function buildCurrentBtn(villager, villagerCard) {
    const currentBtn = document.createElement("button")
    currentBtn.className = "current-button"
    currentBtn.innerHTML = "Add to Current"
    villagerCard.append(currentBtn)

    // Event 2 - Add villagers to a current list when their card is clicked
    currentBtn.addEventListener("click", (e) => {
        if (currentBtn.style.display === "none") {
            currentBtn.style.display = "block"
        } else {
            currentBtn.style.display = "none"
        }
        addToCurrent(villager)
    })
}

// Part 3 - Create current villager list
function addToCurrent(villager) {
    const currentList = document.getElementById("current-list")
    const currentDiv = document.createElement("div")

    const villagerIcon = document.createElement("img")
    villagerIcon.className = "img-icon"
    villagerIcon.src = villager.icon_uri
    currentDiv.append(villagerIcon)

    // Part 4 - Remove villagers from list
    const removeBtn = document.createElement("button")
    removeBtn.className = "remove-button"
    removeBtn.addEventListener("click", (e) => {
    removeVillager(e.target)
    })
    removeBtn.innerText = "Release"
    currentDiv.append(removeBtn)
    
    currentList.append(currentDiv)
}

function removeVillager(removeBtn) {
    removeBtn.parentNode.innerHTML = ""
}

// Event 3 - Create a search for villager
function buildSearchBar() {
    const searchBar = document.getElementById("villager-name")
    searchBar.addEventListener("keyup", (e) => {
        const cards = document.getElementsByClassName("card")
        const input = document.getElementById(e.target.value)
        if (input) {
            for (const card of cards) {
                card.style.display = "none"
            }
            input.style.display = "flex"
        } else {
            for (const card of cards) {
                card.style.display = "flex"
            }
        }
    })
}