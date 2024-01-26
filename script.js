// ============  Collapse AsideBar
function collapse() {
  const collapseBtn = document.querySelector(".collapse-box");
  const leftAside = document.querySelector(".left_aside");
  leftAside.classList.toggle("collapse");
  leftAside.classList.contains("collapse")
    ? (collapseBtn.innerHTML = ">")
    : (collapseBtn.innerHTML = "<");
}
function wide() {
  const section = document.querySelectorAll(".menu_section");
  section.forEach((e) => {
    const arrow = document.querySelectorAll("li>li");
    arrow.forEach((l) => {
      console.log(l);
    });
    e.addEventListener("click", () => {
      e.classList.toggle("wide");
      arrow.style.transform = "rotate(90deg)";
    });
  });
}
wide();
