console.log("🚀 Signal bot started");

// safe demo signals
const pairs = ["BTC/USDT", "ETH/USDT", "EUR/USD"];

function getSignal(price, ema5, ema13, rsi) {
  if (rsi < 40 && price > ema5 && ema5 > ema13) return "🟢 BUY";
  if (rsi > 60 && price < ema5 && ema5 < ema13) return "🔴 SELL";
  return "⚪ NO SIGNAL";
}

// avoid crash
try {
  const data = { price: 100, ema5: 98, ema13: 95, rsi: 35 };

  pairs.forEach(p => {
    console.log(`${p} → ${getSignal(data.price, data.ema5, data.ema13, data.rsi)}`);
  });
} catch (e) {
  console.log("ERROR:", e);
}
