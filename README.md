console.log("🚀 Signal bot started");

// 📊 pairs (crypto + forex + OTC)
const pairs = [
  "BTC/USDT",
  "ETH/USDT",
  "EUR/USD",
  "GBP/USD",
  "USD/JPY",
  "BTC/USDT OTC",
  "EUR/USD OTC"
];

// 📈 signal logic
function getSignal(price, ema5, ema13, rsi) {
  if (rsi < 40 && price > ema5 && ema5 > ema13) {
    return "🟢 BUY";
  }

  if (rsi > 60 && price < ema5 && ema5 < ema13) {
    return "🔴 SELL";
  }

  return "⚪ NO SIGNAL";
}

// 🔥 fake data generator (հետո կփոխենք real API-ով)
function generateData() {
  return {
    price: 100,
    ema5: 98,
    ema13: 95,
    rsi: Math.floor(Math.random() * 100)
  };
}

// 📡 run signals
pairs.forEach(pair => {
  const data = generateData();
  const signal = getSignal(data.price, data.ema5, data.ema13, data.rsi);

  console.log(`${pair} → RSI:${data.rsi} → ${signal}`);
});
