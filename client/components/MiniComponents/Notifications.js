export function create(title, body, icon) {
  var options = {
    body: body,
    icon: icon
  };

  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  } else if (Notification.permission === "granted") {
    notification(title, options);
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        notification(title, options);
      }
    });
  }
}

function notification(title, options) {
  var n = new Notification(title, options);
}

export function requestPermission() {
  Notification.requestPermission().then(function (result) {
    console.log(result);
  });
}