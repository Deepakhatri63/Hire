
// Date-----------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
  const cardsContainer = document.getElementById('cardsContainer');
  const cardElements = cardsContainer.querySelectorAll('.card');
  cardElements.forEach((card) => {
    cardsContainer.removeChild(card);
  });

  // Get today's date
  const currentDate = new Date();
  const todayCard = createCard(currentDate); // Create a card for today's date
  todayCard.classList.add('selected'); // Mark today's card as selected initially
  cardsContainer.appendChild(todayCard);

  // Loop to create 6 additional cards for the next six days
  for (let i = 1; i <= 6; i++) {
    const nextDate = new Date(currentDate);
    nextDate.setDate(currentDate.getDate() + i); // Increment date by i days
    const nextCard = createCard(nextDate); // Create a card for the next date
    cardsContainer.appendChild(nextCard);
  }
});




// Function to create a card with the given date
function createCard(date) {
  const card = document.createElement('div');
  card.className = 'card';

  const contentDate = document.createElement('div');
  contentDate.className = 'content-date';

  const day = date.toLocaleString('en-US', { weekday: 'short' });
  const numDate = date.getDate();
  const month = date.toLocaleString('en-US', { month: 'short' });

  const dayElement = document.createElement('h2');
  dayElement.textContent = day;

  const dateElement = document.createElement('h1');
  dateElement.textContent = numDate;

  const monthElement = document.createElement('h3');
  monthElement.textContent = month;

  contentDate.appendChild(dayElement);
  contentDate.appendChild(dateElement);
  contentDate.appendChild(monthElement);

  card.appendChild(contentDate);

  // Add click event listener to the card to handle selection
  card.addEventListener('click', function () {
    const selectedCard = document.querySelector('.card.selected');
    if (selectedCard) {
      selectedCard.classList.remove('selected');
    }
    card.classList.add('selected');
  });

  return card;
}

const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

prevButton.addEventListener('click', function () {
  const selectedCard = document.querySelector('.card.selected');
  if (selectedCard) {
    const prevCard = selectedCard.previousElementSibling;
    if (prevCard && prevCard.classList.contains('card')) {
      selectedCard.classList.remove('selected');
      prevCard.classList.add('selected');
    }
  }
});

nextButton.addEventListener('click', function () {
  const selectedCard = document.querySelector('.card.selected');
  if (selectedCard) {
    const nextCard = selectedCard.nextElementSibling;
    if (nextCard && nextCard.classList.contains('card')) {
      selectedCard.classList.remove('selected');
      nextCard.classList.add('selected');
    }
  }
});

function toggleDropdown() {
  const dropdownList = document.getElementById("dropdownList");
  const container = document.querySelector(".container");

  container.classList.toggle("show-dropdown");
  if (container.classList.contains("show-dropdown")) {
    dropdownList.style.display = "block";
  } else {
    dropdownList.style.display = "none";
  }
}
function toggleDropdown2() {
  const dropdownList2 = document.getElementById("dropdownList2");
  const container2 = document.querySelector(".container");

  container2.classList.toggle("show-dropdown2");
  if (container2.classList.contains("show-dropdown2")) {
    dropdownList2.style.display = "block";
  } else {
    dropdownList2.style.display = "none";
  }
}
function toggleDropdown3() {
  const dropdownList3 = document.getElementById("dropdownList3");
  const container3 = document.querySelector(".container");

  container3.classList.toggle("show-dropdown3");
  if (container3.classList.contains("show-dropdown3")) {
    dropdownList3.style.display = "block";
  } else {
    dropdownList3.style.display = "none";
  }
}









// Navbar -------------------------------------------

function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  if (window.innerWidth <= 800) {
    sidebar.style.left = sidebar.style.left === '0px' ? '-400px' : '0px';
  } else {
    sidebar.style.right = sidebar.style.right === '0px' ? '-360px' : '0px';
  }
}



window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  var scrolled = window.scrollY;
  if (scrolled > 0) {
    navbar.classList.add("shadow");
  } else {
    navbar.classList.remove("shadow");
  }
});

const divs = document.querySelectorAll(".first, .second, .third, .fourth");
const originalColors = ["white", "white", "white", "white"];
const transitionColors = ["#fffcf2", "#f4fff9", "#fdf5f2", "#f5f8fd"];
const transitionTime = 2000;

let timeoutIds = [];

function resetBackgroundColor(index) {
  divs[index].style.backgroundColor = originalColors[index];
}

divs.forEach((div, index) => {
  div.addEventListener("mouseenter", () => {
    div.style.backgroundColor = transitionColors[index];
    clearTimeout(timeoutIds[index]);
  });

  div.addEventListener("mouseleave", () => {
    timeoutIds[index] = setTimeout(() => {
      resetBackgroundColor(index);
    }, transitionTime);
  });
});





// Price Ranger -------------------------------------------
let rangeMin = 100;
const range = document.querySelector(".range-selected");
const rangeInput = document.querySelectorAll(".range-input input");
const rangePrice = document.querySelectorAll(".range-price input");
rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minRange = parseInt(rangeInput[0].value);
    let maxRange = parseInt(rangeInput[1].value);
    if (maxRange - minRange < rangeMin) {
      if (e.target.className === "min") {
        rangeInput[0].value = maxRange - rangeMin;
      } else {
        rangeInput[1].value = minRange + rangeMin;
      }
    } else {
      rangePrice[0].value = minRange;
      rangePrice[1].value = maxRange;
      range.style.left = (minRange / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxRange / rangeInput[1].max) * 100 + "%";
    }
  });
});
rangePrice.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = rangePrice[0].value;
    let maxPrice = rangePrice[1].value;
    if (maxPrice - minPrice >= rangeMin && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "min") {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});

const placeholders = [
  "John Doe",
  "yourname@email.com",
  "+00 000 000 000",
  "Pls mention the name here",
  "www.company.com"
];

const typingDelay = 100; // Time between each character typing

function typePlaceholder(element, placeholder) {
  let i = 0;
  const interval = setInterval(() => {
    if (i < placeholder.length) {
      element.setAttribute("placeholder", placeholder.substr(0, i + 1));
      i++;
    } else {
      clearInterval(interval);
    }
  }, typingDelay);
}

document.addEventListener("DOMContentLoaded", () => {
  const inputElements = document.querySelectorAll(".form-1 input");
  inputElements.forEach((input, index) => {
    setTimeout(() => {
      typePlaceholder(input, placeholders[index]);
    }, 2000 * index); // Delay before typing the next placeholder
  });
});


// Schedule time -----------------------------------------------
function updateTimeOptions(gap) {
  var timeSelect = document.getElementById("time-select");
  timeSelect.innerHTML = "";

  var startTime = 0;
  var endTime = 24 * 60; // 24 hours in minutes

  for (var i = startTime; i < endTime; i += gap) {
    var hours = Math.floor(i / 60);
    var minutes = i % 60;
    var timeString = formatTime(hours, minutes, gap);
    var option = document.createElement("option");
    option.value = timeString;
    option.textContent = timeString;
    timeSelect.appendChild(option);
  }
}

function formatTime(hours, minutes, gap) {
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // Convert 0 to 12
  var minutesString = minutes < 10 ? "0" + minutes : minutes;

  if (gap === 30) {
    var nextHours = (hours + Math.floor((minutes + 30) / 60)) % 12;
    nextHours = nextHours ? nextHours : 12; // Convert 0 to 12
    var nextMinutes = (minutes + 30) % 60;
    var nextMinutesString = nextMinutes < 10 ? "0" + nextMinutes : nextMinutes;
    return hours + ":" + minutesString + " " + ampm + " - " + nextHours + ":" + nextMinutesString + " " + ampm;
  } else if (gap === 15) {
    var nextMinutes = (minutes + 15) % 60;
    var nextHours = hours;
    if (nextMinutes < minutes) {
      nextHours = (hours + 1) % 12;
      nextHours = nextHours ? nextHours : 12; // Convert 0 to 12
    }
    var nextMinutesString = nextMinutes < 10 ? "0" + nextMinutes : nextMinutes;
    return hours + ":" + minutesString + " " + ampm + " - " + nextHours + ":" + nextMinutesString + " " + ampm;
  }

  return "";
}

// Initially, set the options with 30 mins gap as default
updateTimeOptions(30);




// SEND TO SERVER BUTTON ----------------------------------------------------------------
function getSelectedCardDate() {
  const selectedCard = document.querySelector('.card.selected');
  if (selectedCard) {
    const day = selectedCard.querySelector('h2').textContent;
    const date = selectedCard.querySelector('h1').textContent;
    const month = selectedCard.querySelector('h3').textContent;
    return { day, date, month };
  }
  return null;
}

// E-mail sender ------------------------------------------------

function sendDataToServer() {
  const name = document.querySelector("input[name='name']").value;
  const email = document.querySelector("input[name='email']").value;
  const phoneNumber = document.querySelector("input[name='phoneNumber']").value;
  const companyOrBrand = document.querySelector("input[name='companyOrBrand']").value;
  const websiteURL = document.querySelector("input[name='websiteURL']").value;
  const projectDescription = document.querySelector("textarea[name='projectDescription']").value;
  const minBudget = document.querySelector("input[name='min']").value;
  const maxBudget = document.querySelector("input[name='max']").value;

  const selectedServices = [];
  const serviceCheckboxes = document.querySelectorAll("input[type='checkbox'][name^='option']");
  serviceCheckboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      selectedServices.push(checkbox.value);
    }
  });

  const selectedTime = document.querySelector("#time-select").value;
  const selectedTimeZone = document.querySelector(".select-2").value;
  const selectedDate = getSelectedCardDate();
  if (selectedDate) {
    // Merge the date data with the rest of the data
    const data = {
      name,
      email,
      phoneNumber,
      companyOrBrand,
      websiteURL,
      projectDescription,
      minBudget,
      maxBudget,
      selectedServices,
      selectedDay: selectedDate.day,
      selectedDate: selectedDate.date,
      selectedMonth: selectedDate.month,
      selectedTime,
      selectedTimeZone,
    };



    // Send the data to the server using fetch API
    fetch("store_data.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((message) => {
        // Show the success message
        // displayAlert("Form submitted successfully!");

        // Send the email using EmailJS
        const params = {
          to_email: email,
          from_name: 'AlphaFactory',
          to_name: 'Recipient',
          subject: 'Your Subject',
          body: `अतिथिदेवो भव (atithidevo bhava), meaning: 'treat the guest as God'.

          I hope this email finds you well. I am writing to express our sincerest thanks for taking the time to fill out the form on our website. Your initiative means a lot to us, and we are genuinely humbled by your interest in our services.
          
          Your inquiry is valuable to our team, and we assure you that we will review your message carefully. Rest assured, we will do our best to respond promptly and provide you with the information you seek.
          
          If you have any further questions or need additional assistance, please feel free to reach out to us anytime. We are here to help.
          
          Once again, thank you for reaching out to us. We look forward to the possibility of working together and serving your needs.
          
          With warm regards,
          
          Daisy Roberts
          Head - Partnership and Alliance`,
        };

        emailjs.send("service_wrn9t3z", "template_a2awg75", params)

      })

  } else {
    // Show an error message if a date is not selected
    ("Please select a date from the cards.");
  }
}

// Function to display an alert message// Function to display an alert message
const displayAlert = (message) => {
  const alertBox = document.createElement("div");
  alertBox.className = "alert-message";
  alertBox.textContent = message;

  // Append the alert box to the body
  document.body.appendChild(alertBox);

  // Automatically remove the alert after 3 seconds
  setTimeout(() => {
    document.body.removeChild(alertBox);
  }, 3000);
};

// Function to validate the form
const validateForm = () => {
  // Validate first part
  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const phoneNumber = document.querySelector('input[name="phoneNumber"]').value;

  if (name.trim() === "" || email.trim() === "" || phoneNumber.trim() === "") {
    displayAlert("Please fill in all the required fields.");
    return;
  }

  // Validate second part
  const projectDescription = document.querySelector('textarea[name="projectDescription"]').value;

  if (projectDescription.trim() === "") {
    displayAlert("Please provide a project description.");
    return;
  }

  // Validate third part
  const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

  if (checkboxes.length === 0) {
    displayAlert("Please choose at least one service.");
    return;
  }

  // Validate fourth part
  const selectedTime = document.getElementById("time-select").value;

  if (selectedTime === "") {
    displayAlert("Please select a meeting time.");
    return;
  }

  // Form is valid, you can proceed with form submission or any other action here
  displayAlert("Successfully Submitted");
  return; // Add this line to exit the function

  // Uncomment the following line to submit the form to the server
  // document.getElementById("myForm").submit();
};

// Attach the event listener to the button after the page has fully loaded
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("sendDataButton").addEventListener("click", validateForm);
});







