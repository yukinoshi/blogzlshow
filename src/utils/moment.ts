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
  const d = new Date(data);
  const h = d.getHours().toString().padStart(2, '0');
  const m = d.getMinutes().toString().padStart(2, '0');
  const s = d.getSeconds().toString().padStart(2, '0');
  const tiems = `${h}:${m}:${s}`;
  return tiems;
}

export const momentml = (data: Date | string | number) => {
  let time: string;
  const d = new Date(data);
  const n = new Date();
  const dd = d.getTime();
  const nn = n.getTime();

  const hNum = d.getHours();
  const mNum = d.getMinutes();
  const Y = d.getFullYear();
  const MNum = d.getMonth() + 1;
  const DNum = d.getDate();
  const YY = n.getFullYear();
  const MM = n.getMonth() + 1;
  const DD = n.getDate();

  if ((nn - dd) < 120 * 1000) {
    time = '刚刚';
    return time;
  } else if ((nn - dd) <= 3600 * 1000) {
    time = Math.floor((nn - dd) / (60 * 1000)) + '分钟前';
    return time;
  } else if (60 * 60 * 1000 < (nn - dd) && (YY === Y) && (MM === MNum) && (DD === DNum) ) {
    const h = hNum.toString().padStart(2, '0');
    const m = mNum.toString().padStart(2, '0');
    time = h + ':' + m;
    return time;
  } else if (YY === Y) {
    const M = MNum.toString().padStart(2, '0');
    const D = DNum.toString().padStart(2, '0');
    const h = hNum.toString().padStart(2, '0');
    const m = mNum.toString().padStart(2, '0');
    time = M + '/' + D + ' ' + h + ':' + m;
    return time;
  } else {
    const M = MNum.toString().padStart(2, '0');
    const D = DNum.toString().padStart(2, '0');
    const h = hNum.toString().padStart(2, '0');
    const m = mNum.toString().padStart(2, '0');
    time = Y + '/' + M + '/' + D + ' ' + h + ':' + m;
    return time;
  }
}