const amounts = document.querySelectorAll(".amount");
const span = document.getElementsByTagName("span");
const days = document.querySelectorAll(".day");

for (let i = 0; i < span.length; i++) {
  span[i].addEventListener("mouseover", function (event) {
    const parentLi = event.target.closest("li"); // Find the closest parent <li> element
    if (parentLi) {
      const amount = parentLi.querySelector(".amount"); // Find the "amount" element within the <li>
      if (amount) {
        amount.classList.add("visible");
      }
    }
  });

  span[i].addEventListener("mouseout", function () {
    amounts.forEach((amount) => {
      amount.classList.remove("visible");
    });
  });
}

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < amounts.length; i++) {
      amounts[i].textContent = `$${data[i].amount}`;
    }

    for (let j = 0; j < days.length; j++) {
      days[j].textContent = ` ${data[j].day}`;
    }
  })
  .catch((error) => {
    console.error("Error loading data:", error);
  });
