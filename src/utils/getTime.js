export function timeago(dateTimeStamp) {
  var minute = 1000 * 60; //把分，时，天，周，半个月，一个月用毫秒表示
  var hour = minute * 60;
  var day = hour * 24;
  var week = day * 7;
  var month = day * 30;
  var now = new Date().getTime(); //获取当前时间毫秒
  var diffValue = now - dateTimeStamp; //时间差
  if (diffValue < 0) {
    return;
  }
  var result;
  var minC = diffValue / minute; //计算时间差的分，时，天，周，月
  var hourC = diffValue / hour;
  var dayC = diffValue / day;
  var weekC = diffValue / week;
  var monthC = diffValue / month;
  if (monthC >= 1 && monthC <= 3) {
    if (monthC < 2) {
      result = parseInt(monthC) + " " + "month ago";
    } else {
      result = parseInt(monthC) + " " + "months ago";
    }
  } else if (weekC >= 1 && weekC <= 3) {
    if (weekC < 2) {
      result = parseInt(weekC) + " " + "week ago";
    } else {
      result = parseInt(weekC) + " " + "weeks ago";
    }
  } else if (dayC >= 1 && dayC <= 6) {
    if (dayC < 2) {
      result = parseInt(dayC) + " " + "day ago";
    } else {
      result = parseInt(dayC) + " " + "days ago";
    }
  } else if (hourC >= 1 && hourC <= 23) {
    if (hourC < 2) {
      result = parseInt(hourC) + " " + "hour ago";
    } else {
      result = parseInt(hourC) + " " + "hours ago";
    }
  } else if (minC >= 1 && minC <= 59) {
    if (minC < 2) {
      result = parseInt(minC) + " " + "minute ago";
    } else {
      result = parseInt(minC) + " " + "minutes ago";
    }
  } else if (diffValue >= 0 && diffValue <= minute) {
    result = "just now";
  } else {
    var datetime = new Date();
    datetime.setTime(dateTimeStamp);
    var Nyear = datetime.getFullYear();
    var Nmonth = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
    var Ndate = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
    result = Nyear + "-" + Nmonth + "-" + Ndate;
  }
  return result;
}
