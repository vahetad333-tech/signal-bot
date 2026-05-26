console.log("Signal bot started");

// simple signal logic
function getSignal(price: number, ema5: number, ema13: number, rsi: number) {
  if (rsi < 40 && price > ema5 && ema5 > ema13) {
    return "🟢 BUY";
  }

  if (rsi > 60 && price < ema5 && ema5 < ema13) {
    return "🔴 SELL";
  }

  return "⚪ NO SIGNAL";
}

// test example
console.log(getSignal(100, 98, 95, 35));BOT_TOKEN = Telegram token8965524087:AAEg-dxcFy06op5HFg7W_0K9Yf2SFlL2Re8
