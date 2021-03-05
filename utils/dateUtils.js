import TimeAgo from "javascript-time-ago";
import es from "javascript-time-ago/locale/es";

TimeAgo.addLocale(es);
TimeAgo.setDefaultLocale("es");

const timeAgo = new TimeAgo("es-ES");

export const getRelativeDate = (date) => timeAgo.format(date);

export const isFuture = (date) => {
  const now = new Date();
  return date > now;
};
