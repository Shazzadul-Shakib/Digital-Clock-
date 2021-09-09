function clock() {
  let time = new Date();

  // !------Clock management------//

  let m = time.getMinutes();
  let h = time.getHours();
  let s = time.getSeconds();
  let sec = s < 10 ? "0" + s : s;
  let min = m < 10 ? "0" + m : m;
  let mer = h >= 12 ? " pm" : " am";
  h = h % 12;
  if (h == 0) {
    h = 12;
  }
  let hr = h < 10 ? "0" + h : h;

  // !------Dates management------//

  let weekdays = time.getDay();
  let month = time.getMonth();
  let date = time.getDate();
  let year = time.getFullYear();
  let clock = document.getElementById("clock");
  let dates = document.getElementById("date");

  // !-------Week days convertion-------//
  switch (weekdays) {
    case 0:
      weekdays = "Sun";
      break;
    case 1:
      weekdays = "Mon";
      break;
    case 2:
      weekdays = "Tue";
      break;
    case 3:
      weekdays = "Wed";
      break;
    case 4:
      weekdays = "Thu";
      break;
    case 5:
      weekdays = "Fri";
      break;
    case 6:
      weekdays = "Sat";
      break;
  }

  // !-------Month convertion-------//

  switch (month) {
    case 0:
      month = "Jan";
      break;
    case 1:
      month = "Feb";
      break;
    case 2:
      month = "Mar";
      break;
    case 3:
      month = "Apr";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "Jun";
      break;
    case 6:
      month = "Jul";
      break;
    case 7:
      month = "Aug";
      break;
    case 8:
      month = "Sep";
      break;
    case 9:
      month = "Oct";
      break;
    case 10:
      month = "Nov";
      break;
    case 11:
      month = "Dec";
      break;
  }

  // ! --------- Print out ----------//

  clock.innerHTML = hr + ":" + min + ":" + sec + mer;
  dates.innerHTML = weekdays + ", " + month + " " + date + ", " + year;
}

let interval = setInterval(clock, 1000);
