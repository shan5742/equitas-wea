import { format, isToday, isTomorrow } from "date-fns";

export const getDate = (date) => {
  let day = new Date(date);
  if (isToday(day)) {
    return "Today";
  } else if (isTomorrow(day)) {
    return "Tomorrow";
  } else {
    return format(day, "do MMM yyyy");
  }
};
