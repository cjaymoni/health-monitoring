import moment from 'moment';

export const dateTimeFormat = 'MM/DD/YYYY HH:mm';

export const convertDateAndTimeToMoment = (dateString, timeString) => {
  return moment(dateString + ' ' + timeString, dateTimeFormat);
};

export const isSameOrBefore = (startTime, endTime) => {
  return moment(startTime).isSameOrBefore(moment(endTime));
};
