// const cartCount = document.querySelector("#cart-count");
// const addButtons = document.querySelectorAll(".add-button");

// let totalItems = 0;

// addButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     totalItems++;
//     cartCount.textContent = totalItems;

//     // Feedback visual temporário no próprio botão.
//     const originalText = button.textContent;

//     button.textContent = "Adicionado!";
//     button.disabled = true;

//     setTimeout(() => {
//       button.textContent = originalText;
//       button.disabled = false;
//     }, 700);
//   });
// });


// const installButton = document.getElementById("install-button");

// let promptEvent

// window.addEventListener("beforeinstallprompt", (event) => {
//     event.preventDefault();
//     promptEvent = event;

// });

// installButton.addEventListener("click", () => {
//     if (!promptEvent) return;
//     promptEvent.prompt();
// });