// Favourite List Count 

const favCounter = document.getElementById('fav-list-counter');
const heartIcons = document.getElementsByClassName('heart-icon')

/**
 *! Heart Icons

    *? Clicking on the 💗 heart icon of any card will increase the count in the Navbar
 */

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


const callCredits = document.getElementById('total-credits');
const callHistory = document.getElementById('call-history');
const callButtons = document.getElementsByClassName('call-btns');

let totalCallCredits = parseInt(callCredits.textContent);

for (let btn of callButtons){
    btn.addEventListener('click', function(){
        const card = btn.closest('div.service-card');
        const serviceTitle = card.querySelector('h2').textContent;
        const serviceNumber = card.querySelector('h3').textContent;

        if (totalCallCredits < 20 ){
            alert("❌ Not enough credits to make a call!")
            return;
        }
        alert(`📞 Calling ${serviceTitle} - ${serviceNumber}`);

        totalCallCredits -= 20;
        callCredits.textContent = totalCallCredits;


    const now = new Date();
    const timeString = now.toLocaleTimeString();

    const historyEntry = document.createElement('div');
    historyEntry.classList.add(
            'mt-5','p-2.5','bg-green-50','rounded-md',
            'flex','justify-between','items-center',
            'shadow-md','hover:shadow-lg','hover:-translate-y-0.5',
            'transition-all','duration-300'
        );
        historyEntry.innerHTML = `
            <div>
                <h2 class="font-HindMadurai font-bold text-sm">${serviceTitle}</h2>
                <span class="font-HindMadurai font-semibold text-lg">${serviceNumber}</span>
            </div>
            <span class="font-HindMadurai font-semibold">${timeString}</span>
        `;
        callHistory.prepend(historyEntry);
    });
}

/**
 *! Call History Section

    *? Show all called services with name & number. This will empty initially. when call button clicked it will filled dynamically.

    *? A Clear History button on the right

    *? Clicking this button will remove all data from call history
 */

// Call History Clear Event

const clearHistoryBtn = document.getElementById('clear-history-btn');

clearHistoryBtn.addEventListener('click', function(){
    callHistory.innerHTML = "";
})

/********************************************************************************* */

/**
 *! Challenges Part

    *? On clicking the Copy button, show an alert and increase the copy count

    *? Hotline number will be copied on click so it can be pasted anywhere 

    *? After clicking on the Call button, the exact time of the call will be shown in the Call History section
 */

    const copyCounter = document.getElementById('copy-count');
    const copyButtons = document.querySelectorAll('.copy-btns');

    let copyCount = 0;

    for (let btns of copyButtons){
        btns.addEventListener('click', async() =>{
            card = btns.closest('div.service-card');
            const serviceTitle = card.querySelector('h2').textContent;
            const serviceNumber = card.querySelector('h3').textContent;

        try {
            await navigator.clipboard.writeText(serviceNumber)

            copyCount++;
            copyCounter.textContent = copyCount;

            alert(`নাম্বারটি কপি হয়েছে \n ${serviceTitle} : ${serviceNumber}`);

        } catch (err) {

            alert("❌ Failed to copy to clipboard.");
            console.error(err);

        }
        })
    }