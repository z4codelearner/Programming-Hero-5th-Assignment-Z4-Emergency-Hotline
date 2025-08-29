

    const favCountSpan = document.querySelector('header nav div div:first-child span');

    // সব কার্ডের হার্ট আইকন নির্বাচন
    const heartIcons = document.querySelectorAll('.fa-heart');

    // বর্তমান Favourite সংখ্যা
    let favCount = 0;

        heartIcons.forEach(icon => {
            icon.addEventListener('click', () => {
                    if(icon.classList.contains('fas')) {
                                // ফিল্ড থাকলে আনফিল্ডে ফেরত
                                            icon.classList.remove('fas', 'text-red-600');
                                                        icon.classList.add('far'); 
                                                                    favCount--;
                                                                            } else {
                                                                                        // আনফিল্ড থাকলে ফিল্ড করে দাও
                                                                                                    icon.classList.remove('far');
                                                                                                                icon.classList.add('fas', 'text-red-600');
                                                                                                                            favCount++;
                                                                                                                                    }
                                                                                                                                            favCountSpan.textContent = favCount;
                                                                                                                                                });
                                                                                                                                                });
                                                                                                                                                


/******************************************** */

       // হেডারের Copy Counter স্প্যান নির্বাচন
    const copyCountSpan = document.querySelector('header nav div div:last-child span');

    // সব কার্ডের Copy বোতন নির্বাচন
    const copyButtons = document.querySelectorAll('button:has(i.fa-copy)');

    // Copy সংখ্যা ট্র্যাক
    let copyCount = 0;

    copyButtons.forEach(button => {
        button.addEventListener('click', async () => {
            // কার্ডের parent div খুঁজে বের করা
            const card = button.closest('div.p-5');

            // কার্ডের শিরোনাম এবং নম্বর নির্বাচন
            const title = card.querySelector('h2').textContent;
            const number = card.querySelector('h3').textContent;

            // শুধু নাম্বার Clipboard-এ কপি
            try {
                await navigator.clipboard.writeText(number);

                // Copy সংখ্যা বাড়ানো
                copyCount++;
                copyCountSpan.textContent = copyCount;

                // Alert দেখানো
                alert(`নাম্বারটি কপি হয়েছে \n ${title} : ${number}`);
            } catch (err) {
                alert("Failed to copy to clipboard.");
                console.error(err);
            }
        });
    });

/******************************************** */


// হেডারের Call Credits স্প্যান নির্বাচন
const callCredits = document.getElementById('total-credits');

// Call History container নির্বাচন (id দিয়ে)
const callHistory = document.getElementById('call-history');

// সব কার্ডের Call বোতন নির্বাচন
const callButtons = document.getElementsByClassName('call-btns');

const clearHistoryBtn = document.getElementById("clear-history-btn");

// Total Call Credits ট্র্যাক
let totalCallCredits = parseInt(callCredits.textContent);

for (let button of callButtons) {
    button.addEventListener('click', () => {
        const card = button.closest('div.service-card');
        const title = card.querySelector('h2').textContent;
        const number = card.querySelector('h3').textContent;

        if (totalCallCredits < 20) {
            alert("❌ Not enough credits to make a call!");
            return;
        }

        alert(`📞 Calling ${title} - ${number}`);

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
                <h2 class="font-HindMadurai font-semibold text-lg">${title}</h2>
                <span class="font-HindMadurai font-semibold text-xl">${number}</span>
            </div>
            <span class="font-HindMadurai font-semibold">${timeString}</span>
        `;

        callHistory.prepend(historyEntry);
    });
}


// Clear button event
clearHistoryBtn.addEventListener("click", () => {
    callHistory.innerHTML = ""; // history খালি করে দেবে
    alert("Call history cleared ✅"); // alert আসবে
});
/************************************************************************ */



