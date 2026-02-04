document.addEventListener("DOMContentLoaded", function () {

    const noBtn = document.getElementById("noBtn");
    const yesBtn = document.getElementById("yesBtn");
    const mainContent = document.getElementById("mainContent");
    const thankYouContent = document.getElementById("thankYouContent");
    const emotionText = document.getElementById("emotionText");

    let scale = 1;
    let msgIndex = 0;

    const messages = [
        "Think one more time… are you sure? 😢",
        "You don’t love me? aap mujhse pyar nahi karte 💔",
        "Ek baar aur soch lo please 🥺",
        "Sacchi mein NO dabana chahte ho? 😭",
        "Dil toot raha hai mera 💔",
        "Please YES kar do 😢"
    ];

    function handleNo() {
        emotionText.textContent = messages[msgIndex];
        msgIndex = (msgIndex + 1) % messages.length;

        const x = Math.random() * 200 - 100;
        const y = Math.random() * 100 - 50;
        noBtn.style.transform = `translate(${x}px, ${y}px)`;

        scale += 0.15;
        yesBtn.style.transform = `scale(${scale})`;
    }

    // LAPTOP
    noBtn.addEventListener("mouseenter", handleNo);
    noBtn.addEventListener("click", handleNo);

    // PHONE
    noBtn.addEventListener("touchstart", handleNo);

    yesBtn.addEventListener("click", function () {
        mainContent.style.display = "none";
        thankYouContent.style.display = "block";
    });

});