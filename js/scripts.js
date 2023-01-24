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

// Business Logic for Tickets
function Ticket(age, movie, showingTimes) {
  this.age = age;
  this.movie = movie;
  this.showingTimes = showingTimes;
};

