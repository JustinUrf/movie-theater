// Bussiness Logic for TicketType

//constructor for array that holds tickets
function TicketBooth() {
  this.tickets = {};
  this.currentId = 0;
};

TicketBooth.prototype.addTicket = function(ticket) {
  ticket.id = this.assignId();
  this.tickets[ticket.id] = ticket;
};

TicketBooth.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

ticketPrice = function(age, movie, time) {
  let x = 0;
  if (age === "children") {
    x += 5;
  }
  else if (age === "attendee") {
    x += 6;
  }
  else if (age === "senior") {
    x += 3;
  }

  if (movie === "Avatar 2: Electric Boogaloo") {
    x += 5;
  }
  else if (movie === "Toy Story 17") {
    x += 10;
  }
  else if (movie === "Generic Scary Movie Option") { 
    x += 3;
  }
  else if (movie === "The Most Abstrict Thing You've Seen") {
    x += 1;
  }

  if (time === "0700-0900") {
    x += 3;
  }
  else if (time === "1200-1400") {
    x += 5;
  }
  else if (time === "1700-1900") {
    x += 2
  }
  return "$" + x
}

TicketBooth.prototype.findTicket = function(id) {
  if (this.tickets[id] !== undefined) {
    return this.tickets[id];
  }
  return false;
};

TicketBooth.prototype.deleteTicket = function(id) {
  if (this.tickets[id] === undefined) {
    return false;
  }
  delete this.tickets[id]
  return true;
};

Ticket.prototype.ticketName = function() {
  return this.movie + " " + this.showingTimes + " " + this.price;
}

function listTickets(ticketBoothToDisplay) {
  let ticketStubDiv = document.querySelector("div#ticket-stub");
  ticketStubDiv.innerText = null;
  const ul = document.createElement("ul");
  Object.keys(ticketBoothToDisplay.tickets).forEach(function(key) {
    const ticket = ticketBoothToDisplay.findTicket(key);
    const li = document.createElement("li");
    li.append(ticket.ticketName());
    li.setAttribute("id", ticket.id);
    ul.append(li);
  });
  ticketStubDiv.append(ul);
}


// Business Logic for Tickets
function Ticket(age, movie, showingTimes, price) {
  this.age = age;
  this.movie = movie;
  this.showingTimes = showingTimes;
  this.price = price
};


// UI logic
let ticketBooth = new TicketBooth();

function handleFormSubmission(event) {
  event.preventDefault();
  const age = document.querySelector("input[name='user-age']:checked").value;
  const movie = document.getElementById("movie-id").value;
  const showingTimes = document.getElementById("movie-times-id").value;
  const price = ticketPrice(age, movie, showingTimes);
  console.log(price);
  let newTicket = new Ticket(age, movie, showingTimes, price);
  console.log(newTicket);
  ticketBooth.addTicket(newTicket);
  console.log(ticketBooth);
  listTickets(ticketBooth);
};

function displayTicketDetails(event) {
  const ticket = ticketBooth.findTicket(event.target.id);
  document.querySelector(".movie").innerText = ticket.movie;
  document.querySelector(".showing-times").innerText = ticket.showingTimes;
  document.querySelector(".age").innerText = ticket.age;
  document.querySelector(".price").innerText = ticket.price
  document.querySelector("div#ticket-details").removeAttribute("class")

}


window.addEventListener("load", function() {
  document.querySelector("form#showing-times-form").addEventListener("submit", handleFormSubmission);
  document.querySelector("div#ticket-stub").addEventListener("click", displayTicketDetails);
});