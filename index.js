const menubtn = document.querySelector("span");
const closebtn = document.querySelector("#closebtn");
const content = document.querySelector("#overlayContentEl");
const displayNavBar = document.querySelector("#navBar");
const closeNavBar = document.querySelector("#navBar");

const btcContainer = document.querySelector("#btcContEl");
const btcForwardButton = document.querySelector("#btcFrwdBtn");
const btcMiningButton = document.querySelector("#btcMiningBtn");

const ethContainer = document.querySelector("#ethContEl");
const ethForwardButton = document.querySelector("#ethFrwdBtn");
const ethMiningButton = document.querySelector("#ethMiningBtn");

const ltcContainer = document.querySelector("#ltcContEl");
const ltcForwardButton = document.querySelector("#ltcFrwdBtn");
const ltcMiningButton = document.querySelector("#ltcMiningBtn");

menubtn.addEventListener("click", displayFunction);
closebtn.addEventListener("click", closeFunction);

btcContainer.addEventListener("click", btcDisplayFunction);
ethContainer.addEventListener("click", ethDisplayFunction);
ltcContainer.addEventListener("click", ltcDisplayFunction);

btcMiningButton.style.border = "transparent";
btcMiningButton.style.backgroundColor = "transparent";
btcMiningButton.style.color = "transparent";

ethMiningButton.style.border = "transparent";
ethMiningButton.style.backgroundColor = "transparent";
ethMiningButton.style.color = "transparent";

ltcMiningButton.style.border = "transparent";
ltcMiningButton.style.backgroundColor = "transparent";
ltcMiningButton.style.color = "transparent";

function displayFunction() {
  displayNavBar.style.width = "100%";
}
function closeFunction() {
  closeNavBar.style.width = "0%";
}
function btcDisplayFunction() {
  btcContainer.style.backgroundColor = "rgb(5, 5, 128)";
  btcMiningButton.style.border = "gray";
  btcMiningButton.style.backgroundColor = "buttonface";
  btcMiningButton.style.color = "initial";
  btcForwardButton.style.border = "transparent";
  btcForwardButton.style.backgroundColor = "transparent";
  btcForwardButton.style.color = "transparent";
  ethContainer.style.backgroundColor = "rgb(255, 249, 249)";
  ltcContainer.style.backgroundColor = "rgb(255, 249, 249)";
  ethMiningButton.style.border = "transparent";
  ethMiningButton.style.backgroundColor = "transparent";
  ethMiningButton.style.color = "transparent";
  ethForwardButton.style.border = "gray";
  ethForwardButton.style.backgroundColor = "buttonface";
  ethForwardButton.style.color = "black";
  ltcForwardButton.style.border = "gray";
  ltcForwardButton.style.color = "black";
  ltcMiningButton.style.border = "transparent";
  ltcMiningButton.style.backgroundColor = "transparent";
  ltcMiningButton.style.color = "transparent";
}
function ethDisplayFunction() {
  ethMiningButton.style.border = "gray";
  ethMiningButton.style.backgroundColor = "buttonface";
  ethMiningButton.style.color = "initial";
  ethForwardButton.style.border = "transparent";
  ethForwardButton.style.backgroundColor = "transparent";
  ethForwardButton.style.color = "transparent";
  ethContainer.style.backgroundColor = "rgb(5, 5, 128)";
  btcContainer.style.backgroundColor = "rgb(255, 249, 249)";
  ltcContainer.style.backgroundColor = "rgb(255, 249, 249)";
  btcMiningButton.style.border = "transparent";
  btcMiningButton.style.backgroundColor = "transparent";
  btcMiningButton.style.color = "transparent";
  btcForwardButton.style.border = "gray";
  btcForwardButton.style.backgroundColor = "buttonface";
  btcForwardButton.style.color = "black";
  ltcForwardButton.style.backgroundColor = "buttonface";
  ltcForwardButton.style.border = "gray";
  ltcForwardButton.style.color = "black";
  ltcMiningButton.style.border = "transparent";
  ltcMiningButton.style.backgroundColor = "transparent";
  ltcMiningButton.style.color = "transparent";
}
function ltcDisplayFunction() {
  ltcContainer.style.backgroundColor = "rgb(5, 5, 128)";
  ethContainer.style.backgroundColor = "rgb(255, 249, 249)";
  btcContainer.style.backgroundColor = "rgb(255, 249, 249)";
  ltcMiningButton.style.border = "gray";
  ltcMiningButton.style.backgroundColor = "buttonface";
  ltcMiningButton.style.color = "initial";
  ltcForwardButton.style.border = "transparent";
  ltcForwardButton.style.backgroundColor = "transparent";
  ltcForwardButton.style.color = "transparent";
  btcMiningButton.style.border = "transparent";
  btcMiningButton.style.backgroundColor = "transparent";
  btcMiningButton.style.color = "transparent";
  btcForwardButton.style.border = "gray";
  btcForwardButton.style.backgroundColor = "buttonface";
  btcForwardButton.style.color = "black";
  ethMiningButton.style.border = "transparent";
  ethMiningButton.style.backgroundColor = "transparent";
  ethMiningButton.style.color = "transparent";
  ethForwardButton.style.border = "gray";
  ethForwardButton.style.backgroundColor = "buttonface";
  ethForwardButton.style.color = "black";
}
