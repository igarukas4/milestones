window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  //  Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      rootMargin: "0px 0px -40%",
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const voucherCodeElement = document.getElementById("voucherCode");
    const generateButton = document.getElementById("generateButton");
    const copyButton = document.getElementById("copyButton");

    generateButton.addEventListener("click", function () {
      voucherCodeElement.firstChild.nodeValue = "AYONYEBRANG";
      copyButton.style.display = "inline-block";
    });

    copyButton.addEventListener("click", function () {
      copyToClipboard("AYONYEBRANG");
      alert("Voucher disalin: AYONYEBRANG. Masukkan pada halaman pemesanan");
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
});

// voucher script
document.addEventListener("DOMContentLoaded", function () {
  const voucherCodeElement = document.getElementById("voucherCode");
  const generateButton = document.getElementById("generateButton");
  const copyButton = document.getElementById("copyButton");

  generateButton.addEventListener("click", function () {
    voucherCodeElement.firstChild.nodeValue = "AYONYEBRANG";
    copyButton.style.display = "inline-block";
  });

  copyButton.addEventListener("click", function () {
    copyToClipboard("AYONYEBRANG");
    alert("Voucher disalin: AYONYEBRANG. Masukkan pada halaman pemesanan");
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
