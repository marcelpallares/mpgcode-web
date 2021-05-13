import dateFormatter from "date-and-time";
import es from "date-and-time/locale/es";
import en from "date-and-time/locale/en";

export const getFormattedDate = ({ locale, date }) => {
  if (locale === "es") {
    dateFormatter.locale(es);
    return dateFormatter.format(date, "DD MMM YYYY");
  }

  dateFormatter.locale(en);
  return dateFormatter.format(date, "MMM DD, YYYY");
};

export const isFuture = (date) => {
  const now = new Date();
  return date > now;
};
