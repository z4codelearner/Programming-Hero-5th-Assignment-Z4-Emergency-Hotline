// Favourite List Count 

const favCounter = document.getElementById('fav-list-counter');
const heartIcons = document.getElementsByClassName('cart-icon')

/** 
    1. Clicking on the heart will change the empty ↔️ field.

    2. If it is red, it will decrease, if it is empty, it will increase.

    3. The header counter will show the total number of hearts that have been favorited.

    4. Toggle system

let favCount = 0;
for (let icon of heartIcons){
    icon.addEventListener('click', () =>{
        if (icon.classList.contains('fas')){
            icon.classList.remove('fas', 'text-red-600');
            icon.classList.add('far');
            favCount--;
        } else {
            icon.classList.remove('far');
            icon.classList.add('fas', 'text-red-600');
            favCount++;
        }
        favCounter.textContent = favCount;
    });
}

*/

// Clicking on the 💗 heart icon of any card will increase the count in the Navbar

for (let icon of heartIcons){
    icon.addEventListener('click', function() {
        let favCount = parseInt(favCounter.innerText);
        favCounter.innerText = favCount + 1; 
        icon.classList.remove('fa-regular')
        icon.classList.add('fa-solid', 'text-red-600')
    });

}

/************************************************************** */

/**
*!Call Buttons

    **On clicking a card's Call Button, following actions will happen:
     *? Show an alert with a message including the service name and number
     *? Each call will cut 20 coins. Reduce Coin after each click.
     *? If coins are less than 20, show a relevant alert and terminate the process.
     *? Add this service into the Call History section with:
        *todo: Service name
        *todo: Service number
 */


const totalCredits = document.getElementById('total-credits');
const callButtons = document.getElementById('call-buttons');
const callHistory = document.getElementById('call-history');
const clearHistoryBtn =document.getElementById('clear-history-btn');

for (btn of callButtons){
    btn.addEventListener('click', function(e){
        let currentCoin = parseInt(totalCredits.innerText);
        if (currentCoin < 20){
            alert("❌ You don't have enough coins to make a call!");
            return;
        }
        totalCredits.innerText = currentCoin - 20;

        let card = e.target;
        while (card && !card)
    })
}