const villagerCollection = document.getElementById("villager-container")

document.addEventListener("DOMContentLoaded", () => {
    // Part 1 - Fetch villagers from API

    function fetchVillagers() {
        fetch(`http://acnhapi.com/v1a/villagers/`, {
        })
            .then(resp => resp.json())
            .then(data => data.map(villager => renderVillager(villager)))  
    }

    function renderVillager(villager) {
        const villagerCard = `<div id="card">
        <img src="${villager.image_uri}" class="villager-avatar"/>
        <h4>${villager.name["name-USen"]}</h4>
        </div>`

        villagerCollection.innerHTML += villagerCard;
    }
    
    
    fetchVillagers();
    // Create card or icons to display villagers
    
    // Event 1 - Click on villagers to show their info
    
    // Event 2 - Create a form to submit new villagers
    
    // Event 3 - Add villagers to a list when their card is clicked
    
    // Stretch Goal - Delete villager from list

})


