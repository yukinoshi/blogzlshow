export const momentm = (data: Date) => {
  let d = new Date(data);
  let Y = d.getFullYear();
  let M: string = (d.getMonth() + 1).toString();
  let D: string = d.getDate().toString();
  if (parseInt(M) < 10) {
    M = '0' + M;
  }
  if (parseInt(D) < 10) {
    D = '0' + D;
  }
  let tiems = `${Y}-${M}-${D}`;
  return tiems;
}

export const time = (data: Date) => {
  let d = new Date(data);
  let h = d.getHours();
  let m: string = d.getMinutes()
  let s = d.getSeconds()
  if (h < 10) {
    h = '0' + h;
  }
  if (parseInt(m) < 10) {
    m = '0' + m;
  }
  if (s < 10) {
    s = '0' + s;
  }
  let tiems = h + ':' + m + ':' + s;
  return tiems;
}

export const momentml = (data: Date | string | number) => {
  let time;
  let d = new Date(data);
  let n = new Date();
  let dd = d.getTime();
  let h = d.getHours();
  let m = d.getMinutes();
  let Y = d.getFullYear();
  let M = d.getMonth() + 1;
  let D = d.getDate();
  let nn = n.getTime();
  let YY = n.getFullYear();
  let MM = n.getMonth() + 1;
  let DD = n.getDate();

  if ((nn - dd) < 120 * 1000) {
    time = '刚刚';
    return time;
  } else if ((nn - dd) <= 3600 * 1000) {
    time = Math.floor((nn - dd) / (60 * 1000)) + '分钟前';
    return time;
  } else if (60 * 60 * 1000 < (nn - dd) && (YY === Y) && (MM === M) && (DD === D) ) {
    if (m < 10) {
      m = '0' + m;
    }
    time= h + ':' + m;
    return time;
  } else if (YY === Y) {
    if (M < 10) {
      M = '0' + M;
    } 
    if (D < 10) {
      D = '0' + D;
    }
    if (h < 10) {
      h = '0' + h;
    }
    if (m < 10) {
      m = '0' + m;
    }
    time = M + '/' + D + ' ' + h + ':' + m;
    return time;
  } else {
    if (M < 10) {
      M = '0' + M;
    }
    if (D < 10) {
      D = '0' + D;
    }
    if (h < 10) {
      h = '0' + h;
    }
    if (m < 10) {
      m = '0' + m;
    }
    time = Y + '/' + M + '/' + D + ' ' + h + ':' + m;
    return time;
  }
}