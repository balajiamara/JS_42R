    let symbols = ["AAPL","GOOGL","MSFT","TSLA"];
    const tickerEl = document.getElementById("ticker");

    // Simulated prices (replace with real API fetch)
    function getRandomPrice(base=100){ return (base + (Math.random()-0.5)*10).toFixed(2); }

    function renderTicker() {
      tickerEl.innerHTML = "";
      symbols.forEach(sym => {
        const price = getRandomPrice();
        const el = document.createElement("span");
        el.className = "stock " + (Math.random()>0.5 ? "green" : "red");
        el.textContent = `${sym}: $${price}`;
        tickerEl.appendChild(el);
      });
    }

    function addSymbol() {
      const input = document.getElementById("symbolInput");
      const val = input.value.trim().toUpperCase();
      if(val && !symbols.includes(val)) {
        symbols.push(val);
        renderTicker();
      }
      input.value="";
    }

    function removeSymbol() {
      const input = document.getElementById("symbolInput");
      const val = input.value.trim().toUpperCase();
      symbols = symbols.filter(s => s!==val);
      renderTicker();
      input.value="";
    }

    setInterval(renderTicker, 4000);
    renderTicker();