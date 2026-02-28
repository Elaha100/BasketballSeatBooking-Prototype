const seatButtons = document.querySelectorAll(".seat");
const summaryText = document.getElementById("summaryText");
const summarySeats = document.getElementById("summarySeats");
const confirmBtn = document.getElementById("confirmBtn");
const messageEl = document.getElementById("message");

function getSelectedSeats() {
  return Array.from(seatButtons).filter(b => b.dataset.status === "selected");
}

function updateSummary() {
  const selected = getSelectedSeats();
  summaryText.textContent = `Selected: ${selected.length}`;
  summarySeats.textContent = selected.length
    ? `Seats: ${selected.map(s => s.dataset.seat).join(", ")}`
    : "Seats: none";

  confirmBtn.disabled = selected.length === 0;
  messageEl.textContent = selected.length === 0
    ? "Pick seats from either side."
    : "Ready to confirm booking.";
}

seatButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.dataset.status === "booked") return;

    btn.dataset.status = (btn.dataset.status === "selected") ? "available" : "selected";
    btn.setAttribute("aria-label", `${btn.dataset.team} seat ${btn.dataset.seat}, ${btn.dataset.status}`);

    updateSummary();
  });
});

confirmBtn?.addEventListener("click", () => {
  const selected = getSelectedSeats();

  const bookingData = {
    team: selected.length ? selected[0].dataset.team : "unknown",
    seats: selected.map(s => s.dataset.seat),
  };

  localStorage.setItem("bookingData", JSON.stringify(bookingData));
  window.location.href = "confirm.html";
});

updateSummary();