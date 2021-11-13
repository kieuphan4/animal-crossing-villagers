document.addEventListener("DOMContentLoaded", () => {
    const villagerBox = document.getElementById("villager-container");

    // Part 1 - Fetching villagers
    function fetchVillagers() {
        fetch("https://acnhapi.com/v1/villagers")
        .then(resp => resp.json())
        .then(villager => {
            displayVillager(villager)
        })
            // data.image_uri to display villager image
            // data.name to display name under image
    }
    
    // Add villagers to page
    function displayVillager(villager) {
        const img = document.createElement("img")
        img.src = villager.icon_uri
        villagerBox.append(img)
    }
    
    fetchVillagers();
    // Create card or icons to display villagers
    
    // Event 1 - Click on villagers to show their info
    
    // Event 2 - Create a form to submit new villagers
    
    // Event 3 - Add villagers to a list when their card is clicked
    
    // Stretch Goal - Delete villager from list

})

