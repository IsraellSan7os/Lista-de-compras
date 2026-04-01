const input = document.getElementById("item");
const button = document.getElementById("button");
const ul = document.querySelector("ul");
const footer = document.querySelector(".toast");

button.addEventListener("click", addItem);


input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    addItem();
  }
});

function addItem() {
  const value = input.value.trim();

  if (!value) return;

  const li = document.createElement("li");
  li.classList.add("item");

  li.innerHTML = `
    <label class="item-left">
      <input type="checkbox" class="check" />
      <span class="custom-checkbox"></span>
      <span class="text"></span>
    </label>

    <button class="item-delete">
      <img src="img/icon delete.svg" alt="Excluir item" />
    </button>
  `;

  li.querySelector(".text").textContent = value;

  ul.appendChild(li);

  input.value = "";
}


ul.addEventListener("click", (e) => {
  if (e.target.closest(".item-delete")) {
    e.target.closest(".item").remove();
    showMessage();
  }
});


function showMessage() {
  footer.classList.add("show");

  setTimeout(() => {
    footer.classList.remove("show");
  }, 3000);
}
