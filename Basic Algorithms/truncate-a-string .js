function truncateString(str, num) {
  let truncStr = "";

  if (str.length > num) {
    truncStr = str.slice(0, num) + "...";
    return truncStr;
  } else {
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
