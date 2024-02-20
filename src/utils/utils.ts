function dayOrMonthFormatter(dayOrMonth: string): string {
  return +dayOrMonth < 10 ? "0" + dayOrMonth : dayOrMonth;
}

export function formatStringDate(date: string): string {
  const formattedDate = new Intl.DateTimeFormat(navigator.language || "en-EN", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  }).format(new Date(date));

  return formattedDate
    .split("/")
    .map((data) => dayOrMonthFormatter(data))
    .join("/");
}
