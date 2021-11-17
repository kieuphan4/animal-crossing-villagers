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
        // const img = villager.image_uri

        villagerCard.innerHTML = `
        <img src="${villager.image_uri}" class="villager-avatar"/>
        <h4>${villager.name["name-USen"]}</h4>
        `
        villagerCollection.append(villagerCard)

    
        
        // `<div class="card">
        //     <p>Birthday: ${villager["birthday-string"]}</p>
        //     <p>Gender: ${villager.gender}</p>
        //     <p>Species: ${villager.species}</p>
        //     <p>Personality: ${villager.personality}</p>
        //     <p>Hobby: ${villager.hobby}</p>
        //     <p>Catchphrase: ${villager["catch-phrase"]}</p>
        //     <p>Saying: ${villager.saying}</p>
        // </div>`
    
        // villagerCollection.innerHTML += villagerCard;
    }
    
    
    fetchVillagers();
    // Create card or icons to display villagers
    
    // Event 1 - Click on villagers to show their info
    
    // Event 2 - Create a form to submit new villagers
    
    // Event 3 - Add villagers to a list when their card is clicked
    
    // Stretch Goal - Delete villager from list

})


