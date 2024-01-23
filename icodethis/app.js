const belt = document.querySelector(".bell-btn");
const notification = document.querySelector(".notifications-wrapper");
const notificationList = document.querySelector(".notifications-list");
const markAllAsRead = document.querySelector(".mark-as-read-btn");
const decline = document.querySelector(".decline-btn");
const accept = document.querySelector(".accept-btn");
const notificationItem = document.querySelector(".notification-item-btns");

belt.addEventListener("click", () => {
  console.log("belt");
  if (notification.style.display === "none") {
    notification.style.display = "";
  } else {
    notification.style.display = "none";
  }
});

markAllAsRead.addEventListener("click", () => {
  notificationList.style.display = "none";
});

decline.addEventListener("click", () => {
  disappear();
  notificationItem.innerHTML = "<p>The notification has been declined</p>";
});

accept.addEventListener("click", () => {
  disappear();
  notificationItem.innerHTML = "<p>The notification has been accepted</p>";
});

function disappear() {
  decline.style.display = "none";
  accept.style.display = "none";
}
