

const locales = {
    "NGN": "en-NG",
    "USD": "en-US"
}


export const currencyFormatter = (amount: number, currency: "NGN" | "USD" ) => {
    

    
    const CURRENCY_FORMATTER = new Intl.NumberFormat(locales[currency] || "en-US", {
        style: "currency",
        currency,
        maximumFractionDigits: 3
    })


    return CURRENCY_FORMATTER.format(amount);
  

}