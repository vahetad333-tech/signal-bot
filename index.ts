console.log("Signal bot started");

// simple placeholder logic
function getSignal(price: number, ema5: number, ema13: number, rsi: number) {
  if (rsi < 40 && price > ema5 && ema5 > ema13) {
    return "BUY";
  }
  if (rsi > 60 && price < ema5 && ema5 < ema13) {
    return "SELL";
  }
  return "NO SIGNAL";
}

console.log(getSignal(100, 98, 95, 35));
