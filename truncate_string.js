function truncateString(str, num) {
  // Clear out that junk in your trunk
  if(str.length <= num) {
    return str;
  }
  return str.slice(0, num > 3 ? num - 3 : num) + "...";
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
