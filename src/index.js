const mainContainer = document.getElementsByClassName("container");
const villagerCollection = document.getElementById("villager-container")

document.addEventListener("DOMContentLoaded", () => {
    // Part 1 - Fetch villagers from API
    
    function fetchVillagers() {
        fetch(`http://acnhapi.com/v1a/villagers/`)
        .then(resp => resp.json())
        .then(data => data.map(villager => renderVillager(villager)))  
    }
    
    function renderVillager(villager) {
        const villagerCard = document.createElement("div")
        villagerCard.className = "card"
        villagerCard.innerHTML = `
            <img src="${villager.image_uri}" class="villager-avatar"/>
            <h4>${villager.name["name-USen"]}</h4>`
        villagerCollection.append(villagerCard)

        const detailsBtn = document.createElement("button")
        detailsBtn.innerHTML = "About Me!"
        villagerCard.append(detailsBtn)

        const detailsDiv = document.createElement("div")
        detailsDiv.className = "details"
        detailsDiv.innerHTML = `
            <p><b>Birthday: </b>${villager["birthday-string"]}</p>
            <p><b>Gender: </b>${villager.gender}</p>
            <p><b>Species: </b>${villager.species}</p>
            <p><b>Personality: </b>${villager.personality}</p>
            <p><b>Hobby: </b>${villager.hobby}</p>
            <p><b>Catchphrase: </b>${villager["catch-phrase"]}</p>
            <p><b>Saying: </b>${villager.saying}</p> `
        villagerCard.append(detailsDiv)
        
        // detailsBtn.addEventListener("click", () => {
        //     document.querySelectorAll(".details").forEach(function(btn) {
        //         if (btn.style.display === "none") {
        //             btn.style.display = "block";
        //         } else {
        //             btn.style.display = "none";
        //         }
                
        //     })
        // })
    }
    
    
    fetchVillagers();
    // Create card or icons to display villagers
    
    // Event 1 - Click on villagers to show their info
    
    // Event 2 - Create a form to submit new villagers
    
    // Event 3 - Add villagers to a list when their card is clicked
    
    // Stretch Goal - Delete villager from list

})


