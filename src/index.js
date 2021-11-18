const mainContainer = document.getElementsByClassName("container");
const villagerCollection = document.getElementById("villager-container")

document.addEventListener("DOMContentLoaded", () => {
    // Part 1 - Fetch villagers from API

    function fetchVillagers() {
        fetch(`http://acnhapi.com/v1a/villagers/`)
            .then(resp => resp.json())
            .then(data => data.map(villager => renderVillager(villager)))
    }

    // Part 2 - Create card or icons to display villagers
    function renderVillager(villager) {
        const villagerCard = document.createElement("div")
        villagerCard.className = "card"
        villagerCard.innerHTML = `
            <img src="${villager.image_uri}" class="villager-avatar"/>
            <p>"${villager.saying}"</p>
            <h4><b>${villager.name["name-USen"]}</b></h4>`
        villagerCollection.append(villagerCard)

        const detailsBtn = document.createElement("button")
        detailsBtn.id = `btn${villager.id}`
        detailsBtn.className = "button"
        detailsBtn.innerHTML = "About Me!"
        villagerCard.append(detailsBtn)

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
            
        // Event 1 - Click on villagers to show their info
        detailsBtn.addEventListener("click", (e) => {
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


    fetchVillagers();


    // Event 2 - Create a search for villager

    // Event 3 - Add villagers to a favorite list when their card is clicked

    // Stretch Goal - Delete villager from list

})


