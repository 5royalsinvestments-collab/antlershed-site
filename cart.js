// Antler Shed Oklahoma — client-side cart (localStorage) + quote-request submit
(function () {
  var KEY = "antler_cart";
  var QUOTE_EP = "https://tradesuiteai.app.n8n.cloud/webhook/antlershed-quote";
  var CHECKOUT_EP = "https://tradesuiteai.app.n8n.cloud/webhook/antlershed-checkout";

  function get() { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { return []; } }
  function save(c) { localStorage.setItem(KEY, JSON.stringify(c)); updateBadges(); }
  function count() { return get().reduce(function (n, i) { return n + i.qty; }, 0); }
  function total() { return get().reduce(function (s, i) { return s + i.price * i.qty; }, 0); }
  function money(n) { return "$" + Number(n).toLocaleString("en-US"); }

  function add(id, name, price) {
    var c = get(), f = c.find(function (i) { return i.id === id; });
    if (f) f.qty++; else c.push({ id: id, name: name, price: Number(price), qty: 1 });
    save(c);
    toast(name + " added to cart");
  }
  function setQty(id, qty) {
    var c = get().map(function (i) { return i.id === id ? Object.assign(i, { qty: Math.max(0, qty) }) : i; })
                 .filter(function (i) { return i.qty > 0; });
    save(c); renderCart();
  }
  function remove(id) { save(get().filter(function (i) { return i.id !== id; })); renderCart(); }

  function updateBadges() {
    var n = count();
    document.querySelectorAll(".cart-badge").forEach(function (b) {
      b.textContent = n; b.style.display = n > 0 ? "inline-flex" : "none";
    });
  }

  function toast(msg) {
    var t = document.createElement("div");
    t.textContent = "🦌 " + msg;
    t.style.cssText = "position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#3b2f2a;color:#fff;padding:12px 20px;border-radius:30px;z-index:100000;font-family:system-ui,sans-serif;font-size:14px;box-shadow:0 8px 24px rgba(0,0,0,.3);opacity:0;transition:opacity .2s";
    document.body.appendChild(t);
    requestAnimationFrame(function () { t.style.opacity = "1"; });
    setTimeout(function () { t.style.opacity = "0"; setTimeout(function () { t.remove(); }, 300); }, 1800);
  }

  // render the cart page (#cart-items + #cart-total must exist)
  function renderCart() {
    var box = document.getElementById("cart-items");
    if (!box) return;
    var c = get();
    if (!c.length) {
      box.innerHTML = '<p style="padding:20px 0;color:#7a6a58">Your cart is empty. <a href="index.html#blinds" style="color:#7a5230;font-weight:600">Browse blinds →</a></p>';
      var tt = document.getElementById("cart-total"); if (tt) tt.textContent = "$0";
      var fm = document.getElementById("quote-wrap"); if (fm) fm.style.display = "none";
      return;
    }
    box.innerHTML = c.map(function (i) {
      return '<div class="cart-row">' +
        '<div class="cart-row-name"><strong>' + i.name + '</strong><span>' + money(i.price) + ' each</span></div>' +
        '<div class="cart-qty"><button data-dec="' + i.id + '">−</button><span>' + i.qty + '</span><button data-inc="' + i.id + '">+</button></div>' +
        '<div class="cart-row-sub">' + money(i.price * i.qty) + '</div>' +
        '<button class="cart-remove" data-rm="' + i.id + '" title="Remove">×</button>' +
        '</div>';
    }).join("");
    var t = document.getElementById("cart-total"); if (t) t.textContent = money(total());
    var dep = document.getElementById("cart-deposit"); if (dep) dep.textContent = money(Math.round(total() * 0.20));
    box.querySelectorAll("[data-inc]").forEach(function (b) { b.onclick = function () { var i = get().find(function (x) { return x.id === b.dataset.inc; }); setQty(b.dataset.inc, i.qty + 1); }; });
    box.querySelectorAll("[data-dec]").forEach(function (b) { b.onclick = function () { var i = get().find(function (x) { return x.id === b.dataset.dec; }); setQty(b.dataset.dec, i.qty - 1); }; });
    box.querySelectorAll("[data-rm]").forEach(function (b) { b.onclick = function () { remove(b.dataset.rm); }; });
  }

  function submitQuote(e) {
    e.preventDefault();
    var f = e.target, btn = f.querySelector('[type=submit]');
    var payload = {
      name: f.name.value, phone: f.phone.value, email: f.email.value, notes: f.notes.value,
      items: get(), total: total()
    };
    if (!payload.items.length) { alert("Your cart is empty."); return; }
    btn.disabled = true; btn.textContent = "Taking you to secure checkout…";
    fetch(CHECKOUT_EP, { method: "POST", headers: { "Content-Type": "text/plain" }, body: JSON.stringify(payload) })
      .then(function (r) { return r.json(); })
      .then(function (j) {
        if (j && j.url) { window.location.href = j.url; }
        else { throw new Error("no url"); }
      })
      .catch(function () { btn.disabled = false; btn.textContent = "Reserve with 20% Deposit"; alert("Checkout hiccup — please call 318-540-4499 or email Antlershedok@gmail.com."); });
  }

  window.AntlerCart = { add: add, get: get, count: count, total: total, money: money, renderCart: renderCart, submitQuote: submitQuote };

  // event delegation so dynamically-rendered Add buttons work
  document.addEventListener("click", function (e) {
    var b = e.target.closest && e.target.closest("[data-add]");
    if (b) { add(b.dataset.add, b.dataset.name, b.dataset.price); }
  });
  document.addEventListener("DOMContentLoaded", function () {
    var qf = document.getElementById("quote-form"); if (qf) qf.addEventListener("submit", submitQuote);
    updateBadges(); renderCart();
  });
})();
