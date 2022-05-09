// Return date string
function PrintDate() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const d = new Date();
  return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}

// Print times of day
function PrintTimes() {
  let hours = [];

  // Iterate through each hour of day ..
  for (var start = 0; start < 24; start++) {
    var hour = new Date();
    hour.setHours(start);

    // Determine whether AM or PM
    var ampm;
    if (hour.getHours() < 12) {
      ampm = "am";
    } else {
      ampm = "pm";
    }

    // Push to array
    if (hour.getHours() % 12 == 0) {
      hours.push(`12${ampm}`);
    } else {
      hours.push(`${hour.getHours() % 12}${ampm}`);
    }
  }

  // Return React object
  return hours.map((val) => (
    <tr key={val}>
      <th key={val} className="timegrid">{val}</th>
    </tr>
  ));
}

// TO DO:

// Create 'current-time' time marker

// const currentTime = document.getElementById("current-time");
// let currentHours = new Date().getHours();
// let currentMinutes = new Date().getMinutes();
// let hourPosition = (table.scrollHeight / 24 * currentHours);
// let minutePosition = (table.scrollHeight / 24 / 60 * currentMinutes);
// currentTime.style.top = `${hourPosition + minutePosition}px`;

// function PrintCurrentTime() {
//   // super();
//   // 
//   // const table = document.getElementById('calendarTable');
// 	let currentHours = new Date().getHours();
// 	let currentMinutes = new Date().getMinutes();
// 	let hourPosition = (table.scrollHeight / 24 * currentHours);
// 	let minutePosition = (table.scrollHeight / 24 / 60 * currentMinutes);
// 	let style = {
//     left: '30px',
//     top: `${hourPosition + minutePosition}px`
//   }

// 	return (
//     <div id="current-time" style={style}></div>
//   )
// }
// // Automatically scroll near current time
// if (hour.getHours() > 12) {
//   table.scrollTop = table.scrollHeight;
// }

export default function Calendar() {
	return (
    <div className="calendar" id="calendar">
      <h3>{ PrintDate() }</h3>
      <div id="table-div">
        <table id="calendarTable">

          <tbody>
            <PrintTimes />
          </tbody>
        </table>
      </div>
    </div>
  )
}