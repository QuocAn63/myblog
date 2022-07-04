import PropTypes from 'prop-types';
import { memo } from 'react';

function TimeConverter({ inputTime, format }) {
   let date, time, year, month, day, hour, minute, second, timeResult, timeLeft;
   const currentTime = new Date();

   if (!inputTime) {
      year = currentTime.getFullYear();
      month = currentTime.getMonth();
      day = currentTime.getDay();
      hour = currentTime.getHours();
      minute = currentTime.getMinutes();
      second = currentTime.getSeconds();
   } else {
      [date, time] = inputTime.split(' ');
      [year, month, day] = date.split('-');
      [hour, minute, second] = time.split(':');
   }

   if (format) {
      //    get time left
      timeLeft = currentTime.getTime() - new Date(inputTime).getTime();
      const constMinute = 1000 * 60;
      const constHour = constMinute * 60;
      const constDay = constHour * 24;
      if (timeLeft / 1000 < 60) {
         return ' vừa nãy';
      } else if (timeLeft / constMinute < 60) {
         return Math.round(timeLeft / constMinute) + ' phút trước';
      } else if (timeLeft / constHour < 24) {
         return Math.round(timeLeft / constHour) + ' giờ trước';
      } else if (timeLeft / constDay < 7) {
         return Math.round(timeLeft / constDay) + ' ngày trước';
      }

      day = day.startsWith('0') ? day[1] : day;
      month = month.startsWith('0') ? month[1] : month;
   }

   timeResult = format
      ? `${day} tháng ${month},${year} ${hour}:${minute}`
      : `${year}-${month}-${day} ${hour}:${minute}:${second}`;

   return timeResult;
}

TimeConverter.propTypes = {
   inputTime: PropTypes.string.isRequired,
   format: PropTypes.bool,
};

export default memo(TimeConverter);
