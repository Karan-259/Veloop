
export const formatVEs = (amount) => {
  if (amount === undefined || amount === null) return '0';
  return new Intl.NumberFormat('en-US').format(amount);
};

export const veToUSD = (ves) => {
  // 100 VEs = $1.00
  const usd = (ves / 100).toFixed(2);
  return `$${usd}`;
};

export const veToINR = (ves) => {
  // 100 VEs = ₹83.00
  const inr = ((ves / 100) * 83).toFixed(0);
  return `₹${new Intl.NumberFormat('en-IN').format(inr)}`;
};

export const formatSeconds = (sec) => {
  if (sec < 60) return `${sec}s`;
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return s > 0 ? `${m}m ${s}s` : `${m}m`;
};
