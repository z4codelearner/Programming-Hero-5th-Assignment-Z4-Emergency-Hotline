

       // হেডারের Copy Counter স্প্যান নির্বাচন
    const copyCounter = document.getElementById('copy-count');

    // সব কার্ডের Copy বোতন নির্বাচন
    const copyButtons = document.querySelectorAll('.copy-btns');

    // Copy সংখ্যা ট্র্যাক
    let copyCount = 0;

    // for...of লুপ ব্যবহার
for (let btns of copyButtons) {
    btns.addEventListener('click', async () => {
        // কার্ডের parent div খুঁজে বের করা
        const card = btns.closest('div.service-card');

        // কার্ডের শিরোনাম এবং নম্বর নির্বাচন
        const serviceTitle = card.querySelector('h2').textContent;
        const serviceNumber = card.querySelector('h3').textContent;

        try {
            // শুধু নাম্বার Clipboard-এ কপি
            await navigator.clipboard.writeText(serviceNumber);

            // Copy সংখ্যা বাড়ানো
            copyCount++;
            copyCounter.textContent = copyCount;

            // Alert দেখানো
            alert(`নাম্বারটি কপি হয়েছে \n ${serviceTitle} : ${serviceNumber}`);
        } catch (err) {
            alert("❌ Failed to copy to clipboard.");
            console.error(err);
        }
    });
}
/******************************************** */

