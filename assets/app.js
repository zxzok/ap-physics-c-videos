(function () {
  "use strict";

  const DATA = window.EPISODE_DATA;
  const UNIT_COLORS = { 1: "var(--u1)", 2: "var(--u2)", 3: "var(--u3)" };
  const SPEEDS = [0.75, 1, 1.25, 1.5, 2];

  const I18N = {
    zh: {
      subtitle: "Mechanics 动画讲解 · 每集配典型题",
      heroTitle: "AP Physics C: Mechanics 动画讲解",
      heroText: "用动画把概念讲清楚，每集都有「题目 → 暂停想一想 → 动画推导 → 框出答案」的典型题。按课程顺序排列，可在中文和英文之间切换。",
      episodes: (n) => `${n} 集`,
      minutes: (m) => `约 ${m} 分钟`,
      langsChip: "中文 / English",
      back: "全部视频",
      chapters: "章节",
      problems: "典型题",
      transcript: "旁白全文",
      speed: "倍速",
      prev: "上一集",
      next: "下一集",
      noEn: "这一集的英文版还在制作中，先为你播放中文版。",
      noZh: "这一集暂时只有英文版。",
      soonEn: "英文版制作中",
      ep: (n) => `第 ${Number(n)} 集`,
      footer: "用 Manim 制作动画、edge-tts 配音。内容仅供学习使用。",
      notFound: "没有找到这一集。",
    },
    en: {
      subtitle: "Animated Mechanics lessons with worked problems",
      heroTitle: "AP Physics C: Mechanics — Animated Lessons",
      heroText: "Each episode builds intuition with animation, then works through typical AP problems: question → pause and think → animated solution → boxed answer. Listed in course order; switch between English and Chinese anytime.",
      episodes: (n) => `${n} episodes`,
      minutes: (m) => `about ${m} min`,
      langsChip: "English / 中文",
      back: "All episodes",
      chapters: "Chapters",
      problems: "Worked problems",
      transcript: "Full narration",
      speed: "Speed",
      prev: "Previous",
      next: "Next",
      noEn: "The English version of this episode is still in production — playing the Chinese version for now.",
      noZh: "This episode is only available in English for now.",
      soonEn: "English version coming soon",
      ep: (n) => `Episode ${Number(n)}`,
      footer: "Animated with Manim, narrated with edge-tts. For learning purposes.",
      notFound: "Episode not found.",
    },
  };

  // ---------- state ----------
  function storedLang() {
    try { return localStorage.getItem("apc-lang"); } catch (e) { return null; }
  }
  function storeLang(l) {
    try { localStorage.setItem("apc-lang", l); } catch (e) { /* ignore */ }
  }
  function storedSpeed() {
    try { return parseFloat(localStorage.getItem("apc-speed")) || 1; } catch (e) { return 1; }
  }
  function storeSpeed(s) {
    try { localStorage.setItem("apc-speed", String(s)); } catch (e) { /* ignore */ }
  }

  const params = new URLSearchParams(location.search);
  let lang = params.get("lang") || storedLang() ||
    ((navigator.language || "").toLowerCase().startsWith("zh") ? "zh" : "en");
  if (!I18N[lang]) lang = "zh";

  const order = DATA.units.flatMap((u) => u.eps);
  const unitOf = {};
  DATA.units.forEach((u) => u.eps.forEach((n) => { unitOf[n] = u; }));

  const $app = document.getElementById("app");
  const t = (k, ...a) => { const v = I18N[lang][k]; return typeof v === "function" ? v(...a) : v; };

  function esc(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }
  function fmt(sec) {
    sec = Math.max(0, Math.round(sec));
    return `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, "0")}`;
  }
  // the version to show for an episode in the current language (falls back to the other one)
  function version(ep) {
    if (ep.langs[lang]) return { v: ep.langs[lang], lang, fallback: false };
    const other = lang === "zh" ? "en" : "zh";
    return ep.langs[other] ? { v: ep.langs[other], lang: other, fallback: true } : null;
  }

  function applyChrome() {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll(".lang button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
  }

  // ---------- home ----------
  function renderHome() {
    const eps = order.map((n) => DATA.episodes[n]);
    const totalMin = Math.round(eps.reduce((s, e) => s + (version(e) ? version(e).v.duration : 0), 0) / 60);
    document.title = lang === "zh" ? "AP Physics C · 动画讲解" : "AP Physics C · Animated Lessons";
    let html = `<section class="hero">
      <h1>${esc(t("heroTitle"))}</h1>
      <p>${esc(t("heroText"))}</p>
      <div class="stats">
        <span class="chip">${esc(t("episodes", eps.length))}</span>
        <span class="chip">${esc(t("minutes", totalMin))}</span>
        <span class="chip">${esc(t("langsChip"))}</span>
      </div></section>`;
    DATA.units.forEach((u) => {
      html += `<section class="unit"><div class="unit-head">
        <span class="bar" style="background:${UNIT_COLORS[u.id]}"></span>
        <h2>${esc(u[lang])}</h2><span class="count">${esc(t("episodes", u.eps.length))}</span></div><div class="grid">`;
      u.eps.forEach((n) => {
        const ep = DATA.episodes[n];
        const ver = version(ep);
        if (!ver) return;
        const soon = lang === "en" && !ep.langs.en ? `<span class="soon">${esc(t("soonEn"))}</span>` : "";
        html += `<a class="card" href="#/${n}">
          <div class="thumb"><img loading="lazy" src="${ver.v.poster}" alt="">
            <span class="epnum">EP ${n}</span><span class="badge">${fmt(ver.v.duration)}</span></div>
          <div class="card-body"><h3>${esc(ep.title[lang])}</h3><p>${esc(ep.problems[lang])}</p>${soon}</div></a>`;
      });
      html += `</div></section>`;
    });
    $app.innerHTML = html;
  }

  // ---------- player ----------
  let currentVideo = null;

  function renderEpisode(num, seekChapter) {
    const ep = DATA.episodes[num];
    if (!ep) { $app.innerHTML = `<p class="notice">${esc(t("notFound"))}</p>`; return; }
    const ver = version(ep);
    const v = ver.v;
    const unit = unitOf[num];
    const idx = order.indexOf(num);
    const prev = order[idx - 1], next = order[idx + 1];
    document.title = `${ep.title[lang]} · AP Physics C`;

    const notice = ver.fallback ? `<div class="notice">${esc(lang === "en" ? t("noEn") : t("noZh"))}</div>` : "";
    const speed = storedSpeed();
    const chapters = v.chapters.map((c, i) =>
      `<li><button type="button" data-t="${c.t}" data-i="${i}"><span class="ts">${fmt(c.t)}</span><span class="tt">${esc(c.title)}</span></button></li>`).join("");
    const transcript = v.transcript.map((s) =>
      `<h3>${esc(s.title)}</h3><ul>${s.lines.map((l) => `<li>${esc(l)}</li>`).join("")}</ul>`).join("");
    const navLink = (n, cls, label) => n
      ? `<a class="${cls}" href="#/${n}"><small>${esc(label)} · EP ${n}</small><span>${esc(DATA.episodes[n].title[lang])}</span></a>`
      : `<span></span>`;

    $app.innerHTML = `
      <a class="crumb" href="#/">← ${esc(t("back"))}</a>
      <div class="player-wrap">
        <div>
          <div class="video-box">
            <video id="vid" controls playsinline preload="metadata" poster="${v.poster}" src="${v.video}"></video>
          </div>
          ${notice}
          <div class="meta">
            <div class="kicker">${esc(unit[lang])} · ${esc(t("ep", num))}</div>
            <h1>${esc(ep.title[lang])}</h1>
            <div class="sub">${fmt(v.duration)}</div>
          </div>
          <div class="controls" role="group" aria-label="${esc(t("speed"))}">
            <span class="label">${esc(t("speed"))}</span>
            ${SPEEDS.map((s) => `<button type="button" class="pill speed" data-s="${s}" aria-pressed="${s === speed}">${s}×</button>`).join("")}
          </div>
          <div class="box problems"><h2>${esc(t("problems"))}</h2><p>${esc(ep.problems[lang])}</p></div>
          <details class="transcript box"><summary>${esc(t("transcript"))}</summary>${transcript}</details>
        </div>
        <aside class="side">
          <div class="box"><h2>${esc(t("chapters"))}</h2><ul class="chapters">${chapters}</ul></div>
          <nav class="nav">${navLink(prev, "prev", t("prev"))}${navLink(next, "next", t("next"))}</nav>
        </aside>
      </div>`;

    const vid = document.getElementById("vid");
    currentVideo = { el: vid, num, chapters: v.chapters };
    vid.playbackRate = speed;
    vid.addEventListener("loadedmetadata", () => {
      vid.playbackRate = storedSpeed();
      if (seekChapter != null && v.chapters[seekChapter]) vid.currentTime = v.chapters[seekChapter].t + 0.05;
    }, { once: true });

    const btns = [...$app.querySelectorAll(".chapters button")];
    btns.forEach((b) => b.addEventListener("click", () => {
      vid.currentTime = parseFloat(b.dataset.t) + 0.05;
      vid.play().catch(() => {});
    }));
    vid.addEventListener("timeupdate", () => {
      let on = 0;
      v.chapters.forEach((c, i) => { if (vid.currentTime >= c.t) on = i; });
      btns.forEach((b, i) => b.classList.toggle("on", i === on));
    });
    $app.querySelectorAll(".speed").forEach((b) => b.addEventListener("click", () => {
      const s = parseFloat(b.dataset.s);
      vid.playbackRate = s;
      storeSpeed(s);
      $app.querySelectorAll(".speed").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
    }));
    window.scrollTo({ top: 0 });
  }

  function currentChapterIndex() {
    if (!currentVideo || !document.body.contains(currentVideo.el)) return null;
    let on = 0;
    currentVideo.chapters.forEach((c, i) => { if (currentVideo.el.currentTime >= c.t) on = i; });
    return currentVideo.el.currentTime > 1 ? on : null;
  }

  // ---------- routing ----------
  function route(seekChapter) {
    applyChrome();
    const m = location.hash.match(/^#\/(\d{2})/);
    if (m) renderEpisode(m[1], seekChapter);
    else { currentVideo = null; renderHome(); }
  }

  document.querySelectorAll(".lang button").forEach((b) => b.addEventListener("click", () => {
    if (b.dataset.lang === lang) return;
    const ch = currentChapterIndex();   // keep your place: jump to the same chapter in the other language
    lang = b.dataset.lang;
    storeLang(lang);
    if (params.has("lang")) {           // keep a shared ?lang= link in sync with the choice
      params.set("lang", lang);
      history.replaceState(null, "", `${location.pathname}?${params}${location.hash}`);
    }
    route(ch);
  }));
  window.addEventListener("hashchange", () => route(null));
  route(null);
})();
