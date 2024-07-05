document.addEventListener("DOMContentLoaded", function () {
  const voucherCodeElement = document.getElementById("voucherCode");
  const generateButton = document.getElementById("generateButton");

  generateButton.addEventListener("click", function () {
    voucherCodeElement.innerText = "AYONYEBRANG";
  });

  voucherCodeElement.addEventListener("click", function () {
    const text = voucherCodeElement.innerText;
    if (text !== "Click the button to generate a voucher") {
      copyToClipboard(text);
      alert("Voucher code copied to clipboard: " + text);
    }
  });

  function copyToClipboard(text) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }
});
