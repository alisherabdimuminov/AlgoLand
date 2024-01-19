// ============  Collapse AsideBar
function collapse() {
  const collapseBtn = document.querySelector(".collapse-box");
  const leftAside = document.querySelector(".left_aside");
  leftAside.classList.toggle("collapse");
  leftAside.classList.contains("collapse")
    ? (collapseBtn.innerHTML = ">")
    : (collapseBtn.innerHTML = "<");
}
function coll() {
  const menuSection = document.querySelector(".menu_section");
  menuSection.classList.toggle("coll");
  const coll = document.querySelector(".coll");
  console.log(menuSection.classList);
  menuSection.classList.contains("coll")
    ? (coll.innerHTML = ">")
    : (coll.innerHTML = "<");
}
function wide() {
  const section = document.querySelectorAll(".menu_section");
  section.forEach((e) => {
    e.addEventListener("click", () => {
      e.classList.toggle("wide");
    });
  });
}
wide();
