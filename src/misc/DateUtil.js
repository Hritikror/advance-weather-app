export default function DateUtil () {
  const today = new Date();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"]
  return `${days[today.getDay()]} ${today.getDate()} ${today.toLocaleString('default', { month: 'short' })}`;
}

