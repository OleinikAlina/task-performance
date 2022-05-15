const contacts = document.getElementsByClassName("contacts")[0];
const stickyHeader = document.getElementsByClassName("stickyHeader")[0];

function addContacts() {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 50000; i++) {
    const child = document.createElement("div");
    child.textContent = i;
    child.classList.add("contact");
    fragment.appendChild(child);
  }
  contacts.appendChild(fragment);
}

addContacts();

const items = Array.from(contacts.getElementsByClassName("contact"));
const itemOffsets = items.map((item) => item.offsetTop);

contacts.addEventListener("scroll", (e) => {
  // const topItemIndex = itemOffsets.findIndex(
  //   (offset) => contacts.scrollTop - offset <= -18
  // );
  const topItemIndex = Math.round(contacts.scrollTop/18.4);
  // stickyHeader.textContent = items[topItemIndex].textContent;
  stickyHeader.textContent = topItemIndex;
});
