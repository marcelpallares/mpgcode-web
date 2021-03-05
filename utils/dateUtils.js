import TimeAgo from "javascript-time-ago";
import es from "javascript-time-ago/locale/es";
import en from "javascript-time-ago/locale/en";

TimeAgo.addLocale(en);
TimeAgo.addLocale(es);
TimeAgo.setDefaultLocale("en");

export const getRelativeDate = ({ locale, date }) => {
  const timeAgo = new TimeAgo(locale);
  return timeAgo.format(date);
};

export const isFuture = (date) => {
  const now = new Date();
  return date > now;
};
