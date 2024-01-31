const NumberFormatter = (amount: number) => {
  
    const formattedAmount = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    }).format(amount / 1000); // Dividing by 1000 to represent 'k'
  
    return formattedAmount;
  };

  export default NumberFormatter;