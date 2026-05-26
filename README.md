console.log("🚀 Signal bot started");

// fake pairs (demo)
const pairs = ["BTC/USDT", "ETH/USDT", "EUR/USD"];

// signal logic
function getSignal(price, ema5, ema13, rsi) {
  if (rsi < 40 && price > ema5 && ema5 > ema13) return "🟢 BUY";
  if (rsi > 60 && price < ema5 && ema5 < ema13) return "🔴 SELL";
  return "⚪ NO SIGNAL";
}

// fake data
function generateData() {
  return {
    price: 100,
    ema5: 98,
    ema13: 95,
    rsi: 35
  };
}

// run bot
pairs.forEach(pair => {
  const d = generateData();
  const signal = getSignal(d.price, d.ema5, d.ema13, d.rsi);

  console.log(`${pair} → ${signal}`);
});
