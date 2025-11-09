import finger from '@fingerprintjs/fingerprintjs';

export const loadFingerprint = async () => {
  const res = await finger.load()
  const fp = await res.get();
  //存储到本地
  localStorage.setItem('fingerprint', fp.visitorId);
  return fp.visitorId;
}

export const getFingerprint = async () => {
  //获取浏览器指纹 如果没有则生成一个
  let isfingerprint = localStorage.getItem('fingerprint');
  if (!isfingerprint) {
    await loadFingerprint()
    isfingerprint = localStorage.getItem('fingerprint') || '';
  }
  return isfingerprint;
}