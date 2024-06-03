import { Patient } from "./types";

export function extractUserInfo(user: Patient) {
  const userInfo = { ...user };

  delete userInfo.diagnosis_history;
  delete userInfo.diagnostic_list;
  delete userInfo.lab_results;

  return userInfo;
}

export function formatDate(dateString: string) {
  let parts = dateString.split("/");
  let month = +parts[0];
  let day = +parts[1];
  let year = +parts[2];

  let date = new Date(year, month - 1, day);

  const monthNames = [
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

  let formattedDate = `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;

  return formattedDate;
}
