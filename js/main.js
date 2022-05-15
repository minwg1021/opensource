function navbar_bgcolor() {
  const header = document.getElementById("header");
  let top = 0;

  if (top == 0) {
    header.addEventListener("mouseover", () => {
      header.style.transition = "0.5s";
      header.style.backgroundColor = "#ffffff";
    });
    header.addEventListener("mouseout", () => {
      header.style.transition = "0.5s";
      header.style.backgroundColor = "";
    });
  }

  window.addEventListener("scroll", function () {
    top =
      window.scrollY ||
      window.pageXOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;

    if (top > 30) {
      header.style.backgroundColor = "#ffffff";
      header.style.transition = "0.3s";
      header.style.borderBottom = "1px solid rgba(1, 0, 0, 0.1)";
    } else {
      header.style.backgroundColor = "";
      header.style.transition = "0.3s";
      header.style.borderBottom = "0px";
    }
  });
}

navbar_bgcolor();
