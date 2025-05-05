import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const apikey = `fca_live_JuZwgVFIT8m7uEeG0qbkzaVc6MhsAe8qOH2mAOi2`
const url =`https://api.freecurrencyapi.com/v1/latest?apikey=${apikey}&base_currency=${currency.toUpperCase()}`
  // const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;

  const [data, setData] = useState({});
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res['data']));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
