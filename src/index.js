const villagerUrl = "http://acnhapi.com/v1a/villagers/"
const villagerCollection = document.getElementById("villager-container")

document.addEventListener("DOMContentLoaded", () => {

    fetchVillagers();
    
    
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

    

    

    const currentBtn = document.createElement("button")
    currentBtn.className = "current-button"
    currentBtn.innerHTML = "Add to Current"
    villagerCard.append(currentBtn)

    // Event 3 - Add villagers to a current list when their card is clicked
    currentBtn.addEventListener("click", (e) => {
        if (currentBtn.style.display === "none") {
            currentBtn.style.display = "block"
        } else {
            currentBtn.style.display = "none"
        }
        addToCurrent(villager)
        e.target.style.background = "#66bb6a"
    })
}

function buildBtn (villager, villagerCard) {
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

// Part 3 - Create current villager list
function addToCurrent(villagers) {
    const villagerIcon = document.createElement("img")
    villagerIcon.className = "img-icon"
    villagerIcon.src = villagers.icon_uri

    // Part 4 - Remove villagers from list
    const removeBtn = document.createElement("button")
    removeBtn.className = "remove-button"
    removeBtn.addEventListener("click", (e) => {
        removeVillager(e.target)
    })
    removeBtn.innerText = "Release"

    const v1 = document.getElementById("villager1")
    const v2 = document.getElementById("villager2")
    const v3 = document.getElementById("villager3")
    const v4 = document.getElementById("villager4")
    const v5 = document.getElementById("villager5")
    const v6 = document.getElementById("villager6")
    const v7 = document.getElementById("villager7")
    const v8 = document.getElementById("villager8")
    const v9 = document.getElementById("villager9")
    const v10 = document.getElementById("villager10")

    switch ("") {
        case v1.innerHTML:
            v1.append(villagerIcon)
            v1.append(removeBtn)
            break
        case v2.innerHTML:
            v2.append(villagerIcon)
            v2.append(removeBtn)
            break
        case v3.innerHTML:
            v3.append(villagerIcon)
            v3.append(removeBtn)
            break
        case v4.innerHTML:
            v4.append(villagerIcon)
            v4.append(removeBtn)
            break
        case v5.innerHTML:
            v5.append(villagerIcon)
            v5.append(removeBtn)
            break
        case v6.innerHTML:
            v6.append(villagerIcon)
            v6.append(removeBtn)
            break
        case v7.innerHTML:
            v7.append(villagerIcon)
            v7.append(removeBtn)
            break
        case v8.innerHTML:
            v8.append(villagerIcon)
            v8.append(removeBtn)
            break
        case v9.innerHTML:
            v9.append(villagerIcon)
            v9.append(removeBtn)
            break
        case v10.innerHTML:
            v10.append(villagerIcon)
            v10.append(removeBtn)
            break
        default:

    }
}

function removeVillager(removeBtn) {
    removeBtn.parentNode.innerHTML = ""
}

// Event 2 - Create a search for villager
const searchBar = document.getElementById("villager-name")
searchBar.addEventListener("keyup", (e) => {
    const cards = document.getElementsByClassName("card")
    const input = document.getElementById(e.target.value)
    if (input) {
        for (const card of cards) {
            card.style.display = "none"
        }
        input.style.display = "block"
    } else {
        for (const card of cards) {
            card.style.display = "block"
        }
    }
})




