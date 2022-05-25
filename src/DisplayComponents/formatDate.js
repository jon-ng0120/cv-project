const formatDate = (date) => {
  if (date.includes('-')) {
    const [year, month, day] = date.split('-');
    const dateObj = new Date(year, month - 1, day);
    const formattedMonth = dateObj.toLocaleString('default', { month: 'long' });
    return `${dateObj.getDate()} ${formattedMonth} ${dateObj.getFullYear()}`;
  }
  return date;
};

export default formatDate;
