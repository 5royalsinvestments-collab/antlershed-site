// Antler Shed AI Assistant — self-injecting chat widget (include on any page)
(function () {
  var EP = "https://tradesuiteai.app.n8n.cloud/webhook/antlershed-chat";
  var css = "#as-chat-btn{position:fixed;bottom:24px;right:24px;z-index:99999;background:#7a5230;color:#fff;border:none;border-radius:50px;padding:14px 20px;font-weight:700;font-size:16px;box-shadow:0 6px 20px rgba(0,0,0,.28);cursor:pointer;display:flex;align-items:center;gap:8px;font-family:system-ui,-apple-system,sans-serif}#as-chat-btn:hover{background:#8f6238}#as-chat-panel{position:fixed;bottom:88px;right:24px;width:368px;max-width:calc(100vw - 32px);height:540px;max-height:calc(100vh - 130px);z-index:99999;background:#fff;border-radius:16px;box-shadow:0 14px 44px rgba(0,0,0,.32);display:none;flex-direction:column;overflow:hidden;font-family:system-ui,-apple-system,sans-serif}#as-chat-panel.open{display:flex}#as-chat-head{background:#3b2f2a;color:#fff;padding:14px 16px;font-weight:700;display:flex;justify-content:space-between;align-items:center}#as-chat-head small{display:block;font-weight:400;opacity:.82;font-size:12px;margin-top:2px}#as-chat-msgs{flex:1;overflow-y:auto;padding:14px;background:#f7f4f0;display:flex;flex-direction:column;gap:10px}.as-msg{max-width:82%;padding:10px 13px;border-radius:14px;font-size:14px;line-height:1.45}.as-bot{background:#fff;border:1px solid #e6ded4;align-self:flex-start;border-bottom-left-radius:4px;color:#2a221d}.as-user{background:#7a5230;color:#fff;align-self:flex-end;border-bottom-right-radius:4px}#as-chat-form{display:flex;border-top:1px solid #e6ded4;background:#fff}#as-chat-input{flex:1;border:none;padding:14px;font-size:14px;outline:none;font-family:inherit}#as-chat-send{background:#7a5230;color:#fff;border:none;padding:0 18px;font-weight:700;cursor:pointer}.as-typing{font-size:18px;color:#9a8a78;align-self:flex-start;letter-spacing:2px}";
  var html = '<button id="as-chat-btn">🦌 Chat with us</button><div id="as-chat-panel"><div id="as-chat-head"><div>Antler Shed Assistant<small>Blinds · quotes · appointments</small></div><span id="as-chat-close" style="cursor:pointer;font-size:22px;line-height:1">&times;</span></div><div id="as-chat-msgs"></div><form id="as-chat-form"><input id="as-chat-input" placeholder="Type your question…" autocomplete="off"><button id="as-chat-send" type="submit">Send</button></form></div>';

  function boot() {
    if (document.getElementById("as-chat-btn")) return;
    var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);
    var wrap = document.createElement("div"); wrap.innerHTML = html; document.body.appendChild(wrap);
    var hist = [], msgs = document.getElementById("as-chat-msgs"), panel = document.getElementById("as-chat-panel");
    function esc(s) { return s.replace(/&/g, "&amp;").replace(/</g, "&lt;"); }
    function add(role, text) { var d = document.createElement("div"); d.className = "as-msg " + (role === "user" ? "as-user" : "as-bot"); d.innerHTML = esc(text).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/\n/g, "<br>"); msgs.appendChild(d); msgs.scrollTop = msgs.scrollHeight; }
    document.getElementById("as-chat-btn").onclick = function () { panel.classList.add("open"); document.getElementById("as-chat-input").focus(); if (!hist.length) { add("bot", "Howdy! 🦌 I'm the Antler Shed Oklahoma assistant. Ask me about our Slider, Drop, or Bow/Gun blinds, prices, or help requesting a quote or booking an appointment."); } };
    document.getElementById("as-chat-close").onclick = function () { panel.classList.remove("open"); };
    document.getElementById("as-chat-form").onsubmit = function (e) {
      e.preventDefault(); var inp = document.getElementById("as-chat-input"); var t = inp.value.trim(); if (!t) return; inp.value = ""; add("user", t); hist.push({ role: "user", content: t });
      var typ = document.createElement("div"); typ.className = "as-typing"; typ.textContent = "•••"; msgs.appendChild(typ); msgs.scrollTop = msgs.scrollHeight;
      fetch(EP, { method: "POST", headers: { "Content-Type": "text/plain" }, body: JSON.stringify({ messages: hist.slice(-12) }) })
        .then(function (r) { return r.json(); })
        .then(function (j) { typ.remove(); var rep = (j && j.reply) || "Sorry — please call us at 318-540-4499."; add("bot", rep); hist.push({ role: "assistant", content: rep }); })
        .catch(function () { typ.remove(); add("bot", "Connection hiccup — please call 318-540-4499 or email Antlershedok@gmail.com."); });
    };
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
})();
