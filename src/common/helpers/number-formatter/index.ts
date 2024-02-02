






const NumberFormatter = (amount: number) => {

  let numberRange = { divider: 1, suffix: "" };

    const ranges = [
      { divider: 1e9, suffix: 'B' },
      { divider: 1e6, suffix: 'M' },
      { divider: 1e3, suffix: 'K' }
  ];

  for (const range of ranges) {
      if (amount >= range.divider) {
         numberRange = range
         break;
      }
  }
  
    const formattedAmount = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 1,
      maximumFractionDigits: 2,
    }).format(amount / numberRange.divider); // Dividing by 1000 to represent 'k'
  
    return formattedAmount + numberRange.suffix;
  };

  export default NumberFormatter;