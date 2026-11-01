/* =================================================================
   MOOL · prototype app logic (vanilla JS, no build step)
================================================================= */
(() => {
  'use strict';

  /* ---------- state (persisted locally) ---------- */
  const KEY = 'mool.proto.v1';
  const saved = JSON.parse(localStorage.getItem(KEY) || '{}');
  const S = {
    lang: saved.lang || 'en',
    onboarded: !!saved.onboarded,
    liked: new Set(saved.liked || []),
    saved: new Set(saved.saved || []),
    notify: new Set(saved.notify || []),
    seen: new Set(saved.seen || []),
    tab: 'story',
    view: 'feed',
    sound: false,
  };
  const persist = () => localStorage.setItem(KEY, JSON.stringify({
    lang: S.lang, onboarded: S.onboarded,
    liked: [...S.liked], saved: [...S.saved], notify: [...S.notify], seen: [...S.seen],
  }));

  /* ---------- helpers ---------- */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const L = (o) => (o && typeof o === 'object' ? (o[S.lang] ?? o.en) : o ?? '');
  const U = (k) => UI[S.lang][k] ?? UI.en[k] ?? k;
  const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const icon = (id, cls = '') => `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true"><use href="#${id}"/></svg>`;
  const ALL = [...STORY, ...DISCOVER];
  const byId = Object.fromEntries(ALL.map((s) => [s.id, s]));
  const vibrate = (ms) => { try { navigator.vibrate && navigator.vibrate(ms); } catch (_) {} };

  const phone = $('#phone');
  const feeds = { story: $('#feedStory'), discover: $('#feedDiscover') };

  /* ---------- language chrome ---------- */
  function applyLangChrome() {
    document.documentElement.lang = S.lang === 'hi' ? 'hi' : 'en';
    phone.classList.toggle('lang-hi', S.lang === 'hi');
    $('#tabStory').textContent = U('story');
    $('#tabDiscover').textContent = U('discover');
    $$('[data-ui]').forEach((el) => (el.textContent = U(el.dataset.ui)));
  }

  /* ---------- slide renderers ---------- */
  function bgHTML(s) {
    if (s.look !== 'art' || !s.art) return '';
    const a = ART[s.art];
    const kx = (Math.random() * 4 - 2).toFixed(1) + '%';
    const ky = (Math.random() * 3 - 1.5).toFixed(1) + '%';
    return `<div class="bg"><img src="${a.src}" alt="" loading="lazy" decoding="async" style="--pos:${s.pos || '50% 40%'};--kx:${kx};--ky:${ky}"></div><div class="shade"></div>`;
  }

  function motifHTML(s) {
    if (s.motif === 'seven') return `<div class="motif"><div class="seven">${'<i></i>'.repeat(7)}<i class="eighth"></i></div></div>`;
    if (s.motif === 'river') return `<div class="motif"><svg class="river" viewBox="0 0 400 220" preserveAspectRatio="none">
        <path d="M-10 60 C 80 30, 160 90, 240 60 S 380 40, 420 70"/>
        <path d="M-10 110 C 90 80, 170 140, 250 110 S 380 90, 420 120"/>
        <path d="M-10 160 C 70 130, 160 190, 240 160 S 380 140, 420 170"/>
        <path class="arrowline" d="M60 20 L 340 200"/></svg></div>`;
    if (s.motif === 'lake') return `<div class="motif"><svg class="lake" viewBox="0 0 400 200"><ellipse cx="200" cy="100" rx="190" ry="60"/><ellipse cx="200" cy="100" rx="190" ry="60"/><ellipse cx="200" cy="100" rx="190" ry="60"/></svg></div>`;
    if (s.motif === 'boat') return `<div class="motif"><svg class="boat" viewBox="0 0 120 70" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round">
        <path d="M8 40c14 10 40 14 56 13s34-6 48-15"/><path d="M14 43c-3-4-5-7-6-10M106 41c3-4 4-7 5-10"/>
        <path d="M60 52V12"/><path d="M60 14c12 8 18 17 20 30H60"/><path d="M2 58c10 3 18 3 28 0s18-3 28 0 18 3 28 0 18-3 32 0"/>
        <path d="M18 64c8 2 14 2 22 0s14-2 22 0"/></svg></div>`;
    if (s.motif === 'petals') {
      const cols = ['#e3a83a', '#f0b84c', '#d9541f', '#f3c766', '#c4381c'];
      let h = '<div class="petalrain">';
      for (let i = 0; i < 22; i++) {
        h += `<i style="left:${Math.random() * 100}%;--c:${cols[i % cols.length]};--d:${(5 + Math.random() * 5).toFixed(1)}s;--delay:${(Math.random() * 5).toFixed(1)}s;--dx:${(Math.random() * 80 - 40).toFixed(0)}px;--r:${(Math.random() * 600 - 300).toFixed(0)}deg;transform:scale(${(0.7 + Math.random() * 0.7).toFixed(2)})"></i>`;
      }
      return h + '</div>';
    }
    return '';
  }

  function captionHTML(s) {
    const sp = SPEAKERS[s.speaker] || SPEAKERS.mool;
    const p = PARVA[s.cite.p];
    const sec = s.cite.p === 'gita' ? s.cite.s : `${S.lang === 'hi' ? 'खंड' : 'Section'} ${s.cite.s}`;
    return `<div class="caption reveal">
      <span class="tier tier--${s.tier}">${U('tier_' + s.tier)}</span>
      <div class="who"><span class="av">${sp.av}</span>
        <div><div class="who__name">${esc(L(sp))}</div><div class="who__cite">${esc(L(p))} · ${esc(sec)}</div></div>
      </div></div>`;
  }

  function railHTML(s) {
    const liked = S.liked.has(s.id), sv = S.saved.has(s.id);
    const chip = { en: 'EN', hi: 'हि', hg: 'Hg' }[S.lang];
    return `<div class="rail">
      <button class="rbtn rbtn--like ${liked ? 'is-on' : ''}" data-act="like" aria-label="${U('like')}" aria-pressed="${liked}">${icon('i-heart')}<span>${U('like')}</span></button>
      <button class="rbtn rbtn--save ${sv ? 'is-on' : ''}" data-act="save" aria-label="${U('save')}" aria-pressed="${sv}">${icon(sv ? 'i-bookmark-fill' : 'i-bookmark')}<span>${U('save')}</span></button>
      <button class="rbtn" data-act="share" aria-label="${U('share')}">${icon('i-share')}<span>${U('share')}</span></button>
      <button class="rbtn" data-act="source" aria-label="${U('read_original')}">${icon('i-source')}<span>${U('source')}</span></button>
      <button class="rbtn" data-act="lang" aria-label="${U('lang')}"><span class="langchip ${S.lang === 'hi' ? 'is-hi' : ''}">${chip}</span><span>${U('lang')}</span></button>
    </div>`;
  }

  function slideHTML(s, i, list) {
    const look = `look-${s.look}`;
    const style = s.style ? `style-${s.style}` : '';
    const grain = '<div class="grain"></div>';
    const margin = s.look === 'paper' ? '<div class="margin"></div>' : '';
    let inner = '';
    let rail = true;

    switch (s.kind) {
      case 'title':
        rail = false;
        inner = `<div class="titleblock">
            <p class="kicker reveal">${esc(L(s.kicker))}</p>
            <h2 class="bigtitle reveal">${titleMarkup(L(s.title))}</h2>
            <p class="subline reveal">${esc(L(s.sub))}</p></div>
          <div class="hint">${icon('i-chev')}<span>${U('swipe')} · ${U('dbl')}</span></div>`;
        break;
      case 'end':
        rail = false;
        inner = `<div class="titleblock">
            <p class="kicker reveal">${esc(L(s.kicker))}</p>
            <h2 class="endtitle reveal">${esc(L(s.title))}</h2>
            <p class="subline reveal">${esc(L(s.sub))}</p>
            <button class="btn reveal" data-act="journey">${esc(L(s.btn))} ${icon('i-arrow')}</button></div>`;
        break;
      case 'story':
        inner = `<div class="content">
            <p class="txt reveal">${esc(L(s.text))}</p>
            ${s.note ? `<p class="note reveal">${esc(L(s.note))}</p>` : ''}
          </div>${captionHTML(s)}`;
        break;
      case 'myth': {
        const later = s.variant === 'later';
        const plate = s.art ? `<figure class="plate reveal"><img src="${ART[s.art].src}" alt=""><figcaption>${esc(ART[s.art].credit)} · public domain</figcaption></figure>` : '';
        inner = `<div class="factblock">
            ${plate}
            <p class="kicker reveal">${esc(L(s.kicker))}</p>
            <h2 class="fq reveal">${esc(L(s.q))}</h2>
            <div class="stamp ${later ? 'is-later' : ''}">${esc(L(s.verdict))}</div>
            <p class="fbody reveal">${esc(L(s.body))}</p>
            ${s.foot ? `<p class="ffoot reveal">${esc(L(s.foot))}</p>` : ''}
          </div>${captionHTML(s)}`;
        break;
      }
      case 'fact':
        inner = `<div class="factblock">
            <p class="kicker reveal">${esc(L(s.kicker))}</p>
            <h2 class="fq reveal">${esc(L(s.title))}</h2>
            <p class="fbody reveal">${esc(L(s.body))}</p>
          </div>${captionHTML(s)}`;
        break;
      case 'shloka':
        inner = `<div class="shloka-num">॥ ${s.num} ॥</div>
          <div class="shloka">
            <p class="sa reveal">${esc(s.sa)}</p>
            <p class="tl reveal">${esc(s.tl)}</p>
            <div class="rule reveal"></div>
            <p class="txt reveal">${esc(L(s.text))}</p>
            <p class="trby reveal">${esc(L(s.trBy))}</p>
          </div>${captionHTML(s)}`;
        break;
      case 'yaksha':
        inner = `<div class="factblock">
            <p class="kicker reveal">${esc(L(s.kicker))}</p>
            <p class="yq reveal">${esc(L(s.q))}</p>
            <h2 class="fq reveal">${esc(L(s.text))}</h2>
            <p class="fbody reveal">${esc(L(s.note))}</p>
          </div>${captionHTML(s)}`;
        break;
    }
    return `<article class="slide kind-${s.kind} ${look} ${style} ${rail ? '' : 'no-rail'}" data-id="${s.id}" data-i="${i}">
      ${bgHTML(s)}${margin}${grain}${motifHTML(s)}${inner}${rail ? railHTML(s) : ''}</article>`;
  }

  function titleMarkup(t) {
    // italicise the last word for an editorial feel
    const parts = t.split(' ');
    if (parts.length < 2) return esc(t);
    const last = parts.pop();
    return `${esc(parts.join(' '))} <em>${esc(last)}</em>`;
  }

  /* ---------- build feeds ---------- */
  const observers = {};
  function buildFeed(name) {
    const list = name === 'story' ? STORY : DISCOVER;
    const el = feeds[name];
    const idx = currentIndex(el);
    el.innerHTML = list.map((s, i) => slideHTML(s, i, list)).join('');
    observe(name);
    if (idx > 0) el.scrollTop = idx * el.clientHeight;
  }
  function currentIndex(el) { return el.clientHeight ? Math.round(el.scrollTop / el.clientHeight) : 0; }

  function observe(name) {
    observers[name] && observers[name].disconnect();
    const el = feeds[name];
    observers[name] = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        const sl = e.target;
        if (e.isIntersecting && e.intersectionRatio > 0.6) {
          $$('.slide.is-active', el).forEach((x) => x !== sl && x.classList.remove('is-active'));
          sl.classList.add('is-active');
          if (name === 'story') { S.seen.add(sl.dataset.id); persist(); }
          if (name === S.tab) updateProgress();
        }
      });
    }, { root: el, threshold: [0.6] });
    $$('.slide', el).forEach((s) => observers[name].observe(s));
  }

  /* ---------- progress bar ---------- */
  function updateProgress() {
    const bar = $('#progress');
    if (S.tab !== 'story') { bar.classList.add('is-hidden'); return; }
    bar.classList.remove('is-hidden');
    const i = currentIndex(feeds.story);
    if (bar.children.length !== STORY.length) bar.innerHTML = STORY.map(() => '<i></i>').join('');
    [...bar.children].forEach((c, k) => c.classList.toggle('on', k <= i));
  }

  /* ---------- tabs & views ---------- */
  function setTab(t) {
    S.tab = t;
    $$('.tab').forEach((b) => b.classList.toggle('is-on', b.dataset.tab === t));
    Object.entries(feeds).forEach(([k, el]) => el.classList.toggle('is-on', k === t));
    updateProgress();
  }
  function setView(v) {
    S.view = v;
    $$('.navbtn').forEach((b) => b.classList.toggle('is-on', b.dataset.view === v));
    $('#panelJourney').classList.toggle('is-on', v === 'journey');
    $('#panelSaved').classList.toggle('is-on', v === 'saved');
    $('#topbar').classList.toggle('is-hidden', v !== 'feed');
    if (v === 'journey') renderJourney();
    if (v === 'saved') renderSaved();
  }

  /* ---------- actions ---------- */
  function slideOf(el) { return el.closest('.slide'); }

  function toggleLike(slideEl, forceOn = false) {
    const id = slideEl.dataset.id;
    const on = forceOn ? true : !S.liked.has(id);
    on ? S.liked.add(id) : S.liked.delete(id);
    persist();
    const b = $('.rbtn--like', slideEl);
    if (b) {
      b.classList.toggle('is-on', on);
      b.setAttribute('aria-pressed', on);
      if (on) { b.classList.remove('is-on'); void b.offsetWidth; b.classList.add('is-on'); }
    }
  }

  function toggleSave(slideEl) {
    const id = slideEl.dataset.id;
    const on = !S.saved.has(id);
    on ? S.saved.add(id) : S.saved.delete(id);
    persist();
    const b = $('.rbtn--save', slideEl);
    b.classList.toggle('is-on', on);
    b.querySelector('use').setAttribute('href', on ? '#i-bookmark-fill' : '#i-bookmark');
    toast(U(on ? 'toast_saved' : 'toast_unsaved'));
    vibrate(8);
  }

  async function share(slideEl) {
    const s = byId[slideEl.dataset.id];
    const body = L(s.text || s.title || s.q);
    const cite = `${L(PARVA[s.cite.p])} ${s.cite.s}`;
    const text = `${body}\n\n${cite} · via Mool`;
    try {
      if (navigator.share) { await navigator.share({ title: 'Mool', text }); return; }
    } catch (_) { return; }
    try { await navigator.clipboard.writeText(text); } catch (_) {}
    toast(U('toast_copied'));
  }

  function cycleLang() {
    const order = ['en', 'hi', 'hg'];
    setLang(order[(order.indexOf(S.lang) + 1) % order.length], true);
  }
  function setLang(l, announce) {
    S.lang = l; persist();
    applyLangChrome();
    buildFeed('story'); buildFeed('discover');
    if (S.view === 'journey') renderJourney();
    if (S.view === 'saved') renderSaved();
    if (announce) toast({ en: 'English', hi: 'हिंदी', hg: 'Hinglish' }[l]);
  }

  /* ---------- double tap ---------- */
  let lastTap = { t: 0, x: 0, y: 0 };
  let downPt = null;
  function onPointerDown(e) { downPt = { x: e.clientX, y: e.clientY, t: Date.now() }; }
  function onPointerUp(e) {
    if (!downPt) return;
    const moved = Math.hypot(e.clientX - downPt.x, e.clientY - downPt.y);
    downPt = null;
    if (moved > 12) return;
    if (e.target.closest('button, a, .rail')) return;
    const sl = slideOf(e.target);
    if (!sl || sl.classList.contains('no-rail')) return;
    const now = Date.now();
    if (now - lastTap.t < 320 && Math.hypot(e.clientX - lastTap.x, e.clientY - lastTap.y) < 40) {
      const r = sl.getBoundingClientRect();
      burst(sl, e.clientX - r.left, e.clientY - r.top);
      toggleLike(sl, true);
      vibrate([10, 30, 14]);
      lastTap = { t: 0, x: 0, y: 0 };
    } else {
      lastTap = { t: now, x: e.clientX, y: e.clientY };
    }
  }
  function burst(sl, x, y) {
    const b = document.createElement('div');
    b.className = 'burst';
    b.style.left = x + 'px'; b.style.top = y + 'px';
    const rot = (Math.random() * 16 - 8).toFixed(0);
    let h = `<svg class="h" viewBox="0 0 24 24" style="rotate:${rot}deg"><use href="#i-heart"/></svg>`;
    const cols = ['#e3a83a', '#f2c25a', '#d9541f', '#c4381c', '#f6d27a'];
    for (let i = 0; i < 14; i++) {
      const a = (Math.PI * 2 * i) / 14 + Math.random() * 0.4;
      const d = 70 + Math.random() * 70;
      h += `<i class="p" style="--c:${cols[i % cols.length]};--x:${(Math.cos(a) * d).toFixed(0)}px;--y:${(Math.sin(a) * d - 30).toFixed(0)}px;--r:${(Math.random() * 540 - 270).toFixed(0)}deg;animation-delay:${(Math.random() * 0.08).toFixed(2)}s"></i>`;
    }
    b.innerHTML = h;
    sl.appendChild(b);
    setTimeout(() => b.remove(), 1100);
  }

  /* ---------- source sheet ---------- */
  function openSheet(html) {
    $('#sheet').innerHTML = `<div class="grab"></div><button class="sheet-x" data-close aria-label="${U('close')}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 6.5l11 11M17.5 6.5l-11 11" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></button>${html}`;
    $('#sheet').scrollTop = 0;
    $('#sheetWrap').classList.add('is-on');
    $('#sheetWrap').setAttribute('aria-hidden', 'false');
  }
  function closeSheet() {
    $('#sheetWrap').classList.remove('is-on');
    $('#sheetWrap').setAttribute('aria-hidden', 'true');
  }
  function openSource(id) {
    const s = byId[id];
    const sec = s.cite.p === 'gita' ? s.cite.s : `${S.lang === 'hi' ? 'खंड' : 'Section'} ${s.cite.s}`;
    openSheet(`
      <p class="sh-kicker">${U('read_original')}</p>
      <h3 class="sh-title">${esc(L(PARVA[s.cite.p]))} · ${esc(sec)}</h3>
      <div class="sh-tier"><span class="tier tier--${s.tier}">${U('tier_' + s.tier)}</span></div>
      <dl class="sh-meta">
        <dt>${U('translation')}</dt><dd>${esc(s.tr)}</dd>
      </dl>
      <blockquote class="excerpt">${esc(s.ex)}</blockquote>
      <p class="sh-note">${U('original_note')}</p>
      <div class="sh-actions">
        <a class="sbtn" href="${s.url}" target="_blank" rel="noopener">${U('full_section')} ${icon('i-arrow')}</a>
        <button class="sbtn sbtn--ghost" data-act="report">${U('report')}</button>
      </div>`);
  }

  /* ---------- journey ---------- */
  function renderJourney() {
    const read = STORY.filter((s) => S.seen.has(s.id)).length;
    const pct = Math.round((read / STORY.length) * 100);
    const stageCard = (st) => {
      if (st.children) {
        const subs = st.children.map((c) => {
          if (c.status === 'live') {
            return `<button class="sub sub--live" data-act="continue">
              <div class="sub__row"><span class="sub__name">${esc(L(c.name))}</span><span class="pill pill--live">${U('live')}</span></div>
              <div class="meter"><i style="width:${pct}%"></i></div>
              <div class="sub__meta"><span>${U('ep1')} · ${read}/${STORY.length} ${U('screens_read')}</span><span class="sub__go">${U('continue')} ${icon('i-arrow')}</span></div>
            </button>`;
          }
          const on = S.notify.has(c.id);
          return `<button class="sub" data-act="teaser" data-stage="${c.id}">
            <div class="sub__row"><span class="sub__name">${esc(L(c.name))}</span>
            <span class="pill ${on ? 'pill--notified' : 'pill--soon'}">${on ? icon('i-check') + U('notified') : icon('i-lock') + U('soon')}</span></div>
          </button>`;
        }).join('');
        return `<div class="stage is-live"><span class="node">${st.n}</span>
          <div class="scard" style="cursor:default">
            <div class="scard__top"><span class="scard__name">${esc(L(st.name))}</span><span class="scard__dev">${st.dev}</span></div>
            <div class="scard__line">${esc(L(st.line))}</div>
            <div class="substages">${subs}</div>
          </div></div>`;
      }
      const on = S.notify.has(st.id);
      return `<div class="stage"><span class="node">${st.n}</span>
        <button class="scard" data-act="teaser" data-stage="${st.id}">
          <div class="scard__top"><span class="scard__name">${esc(L(st.name))}</span><span class="scard__dev">${st.dev}</span></div>
          <div class="scard__line">${esc(L(st.line))}</div>
          <span class="pill ${on ? 'pill--notified' : 'pill--soon'}">${on ? icon('i-check') + U('notified') : icon('i-lock') + U('soon')}</span>
        </button></div>`;
    };
    $('#panelJourney').innerHTML = `<div class="panel__inner">
      <div class="phead"><h2 class="ptitle">${U('journey_title')}</h2>
        <span class="streak"><svg viewBox="0 0 32 32"><use href="#i-diya"/></svg>${U('diya')}</span></div>
      <div class="path">
        <div class="stage is-done"><span class="node">${icon('i-check')}</span>
          <button class="scard" data-act="intro">
            <div class="scard__top"><span class="scard__name">${U('start_here')}</span><span class="scard__dev">०</span></div>
            <div class="scard__line">${U('start_here_line')}</div>
          </button></div>
        ${STAGES.map(stageCard).join('')}
      </div>
      <div class="pfoot">
        <button class="linkbtn" data-act="credits">${U('sources_credits')}</button>
        <button class="linkbtn" data-act="reset">${U('reset')}</button>
      </div></div>`;
  }

  function findStage(id) {
    for (const st of STAGES) {
      if (st.id === id) return st;
      for (const c of st.children || []) if (c.id === id) return c;
    }
  }
  function openTeaser(id) {
    const st = findStage(id);
    const t = st.teaser;
    const on = S.notify.has(id);
    const isPaper = t.look === 'paper';
    openSheet(`
      <p class="sh-kicker">${U('soon')} · ${U('teaser_label')}</p>
      <h3 class="sh-title">${esc(L(st.name))}</h3>
      <div class="teaser ${isPaper ? 'is-paper' : ''}">
        ${t.art ? `<img src="${ART[t.art].src}" alt="">` : ''}
        ${t.sa ? `<p class="sa">${esc(t.sa)}</p>` : ''}
        <p class="txt">${esc(L(t.text))}</p>
        <p class="tcite">${esc(L(t.cite))}</p>
      </div>
      <p class="sh-note" style="margin:0 0 14px;font-size:15px;color:var(--paper-ink)">${esc(L(t.hook))}</p>
      <button class="sbtn notify ${on ? 'is-on' : ''}" data-act="notify" data-stage="${id}">${icon(on ? 'i-check' : 'i-bell')} ${U(on ? 'notified' : 'notify')}</button>
      <p class="sh-note" style="text-align:center">${U('vote_note')}</p>`);
  }

  function openCredits() {
    const art = Object.values(ART).map((a) => `<li><b>Art</b>${esc(a.credit)} · Wikimedia Commons, public domain / CC0</li>`).join('');
    const src = SOURCES.map(([k, v]) => `<li><b>${esc(k)}</b>${esc(v)}</li>`).join('');
    openSheet(`<p class="sh-kicker">Mool · prototype v0.1</p><h3 class="sh-title">${U('sources_credits')}</h3>
      <ul class="credits">${src}${art}</ul>`);
  }

  /* ---------- saved ---------- */
  function renderSaved() {
    const items = [...S.saved].map((id) => byId[id]).filter(Boolean);
    const body = items.length
      ? `<div class="savedgrid">${items.map((s) => {
          const paper = s.look === 'paper' || s.look === 'night';
          const img = s.art && s.look === 'art' ? `<img src="${ART[s.art].src}" alt="">` : '';
          const label = L(s.text || s.title || s.q);
          return `<button class="sitem ${s.look === 'paper' ? 'is-paper' : ''}" data-act="jump" data-id="${s.id}">${img}<small>${esc(L(PARVA[s.cite.p]))} ${esc(s.cite.s)}</small><span>${esc(label)}</span></button>`;
        }).join('')}</div>`
      : `<div class="empty">${icon('i-bookmark')}${U('saved_empty')}</div>`;
    $('#panelSaved').innerHTML = `<div class="panel__inner"><div class="phead"><h2 class="ptitle">${U('saved_title')}</h2></div>${body}</div>`;
  }
  function jumpTo(id) {
    const tab = STORY.some((s) => s.id === id) ? 'story' : 'discover';
    setView('feed'); setTab(tab);
    const el = feeds[tab];
    const i = (tab === 'story' ? STORY : DISCOVER).findIndex((s) => s.id === id);
    requestAnimationFrame(() => el.scrollTo({ top: i * el.clientHeight, behavior: 'instant' }));
  }

  /* ---------- onboarding ---------- */
  function renderSplash() {
    const ob = $('#onboard');
    ob.classList.add('is-on');
    ob.innerHTML = `<div class="splash">
      <div class="splash__mark">मूल</div>
      <h1 class="splash__name">Mo<em>o</em>l</h1>
      <p class="splash__tag">Scroll your roots. From the very beginning, as the scriptures tell it.</p>
      <p class="splash__label">Choose your language · भाषा चुनें</p>
      <div class="langpick">
        <button class="langbtn" data-lang="en"><span>English</span><small>Read in English</small></button>
        <button class="langbtn" data-lang="hi"><span class="hi">हिंदी</span><small>हिंदी में पढ़ें</small></button>
        <button class="langbtn" data-lang="hg"><span>Hinglish</span><small>Hindi, English script mein</small></button>
      </div>
      <p class="splash__fine">You can switch on any screen · prototype v0.1</p>
    </div>`;
  }
  function renderIntro() {
    const ob = $('#onboard');
    ob.classList.add('is-on');
    const sl = INTRO.map((s, i) => {
      let inner = '', look = 'night';
      if (s.kind === 'intro-hero') {
        look = 'art';
        inner = `<div class="bg"><img src="${ART['bhishma-oath'].src}" alt="" style="--pos:60% 25%"></div><div class="shade"></div><div class="grain"></div>
          <div class="ihero"><p class="kicker reveal">मूल · Mool</p><h2 class="reveal">${esc(L(s.title))}</h2><p class="reveal">${esc(L(s.sub))}</p></div>`;
      } else if (s.kind === 'intro-map') {
        look = 'paper';
        inner = `<div class="margin"></div><div class="grain"></div><div class="ihero" style="bottom:calc(70px + var(--safe-b))">
          <h2 class="reveal" style="font-size:clamp(38px,10.5vw,46px)">${esc(L(s.title))}</h2>
          <div class="maprows">${s.rows.map((r) => `<div class="maprow reveal"><span class="dv">${r.n}</span><div><b>${esc(r[S.lang][0])}</b><span>${esc(r[S.lang][1])}</span></div></div>`).join('')}</div></div>`;
      } else if (s.kind === 'intro-trust') {
        inner = `<div class="grain"></div><div class="ihero" style="bottom:calc(80px + var(--safe-b))">
          <h2 class="reveal" style="font-size:clamp(38px,10.5vw,46px)">${esc(L(s.title))}</h2>
          <div class="trustrows">${s.rows.map((r) => `<div class="trustrow reveal"><span class="tier tier--${r.t}">${U('tier_' + r.t)}</span><p>${esc(r[S.lang])}</p></div>`).join('')}</div>
          <p class="reveal">${esc(L(s.sub))}</p></div>`;
      } else {
        look = 'art';
        inner = `<div class="bg"><img src="${ART['gita'].src}" alt="" style="--pos:50% 35%"></div><div class="shade"></div><div class="grain"></div>
          <div class="ihero"><h2 class="reveal">${esc(L(s.title))}</h2><p class="reveal">${esc(L(s.sub))}</p>
          <button class="btn reveal" data-act="begin">${esc(L(s.btn))} ${icon('i-arrow')}</button></div>`;
      }
      return `<article class="slide look-${look}" data-i="${i}">${inner}</article>`;
    }).join('');
    ob.innerHTML = `<div class="introfeed" id="introfeed">${sl}</div><div class="idots">${INTRO.map((_, i) => `<i class="${i === 0 ? 'on' : ''}"></i>`).join('')}</div>`;
    const feed = $('#introfeed');
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) {
        $$('.slide', feed).forEach((x) => x.classList.toggle('is-active', x === e.target));
        $$('.idots i', ob).forEach((d, k) => d.classList.toggle('on', k === +e.target.dataset.i));
      }
    }), { root: feed, threshold: 0.6 });
    $$('.slide', feed).forEach((s) => io.observe(s));
  }
  function finishOnboarding() {
    S.onboarded = true; persist();
    const ob = $('#onboard');
    ob.classList.remove('is-on'); ob.innerHTML = '';
    setView('feed'); setTab('story');
    feeds.story.scrollTop = 0;
  }

  /* ---------- tanpura (Web Audio, no files) ---------- */
  let audio = null;
  function tanpura(on) {
    if (on) {
      if (!audio) {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const master = ctx.createGain(); master.gain.value = 0;
        const delay = ctx.createDelay(); delay.delayTime.value = 0.23;
        const fb = ctx.createGain(); fb.gain.value = 0.35;
        const wet = ctx.createGain(); wet.gain.value = 0.3;
        delay.connect(fb); fb.connect(delay); delay.connect(wet); wet.connect(master);
        master.connect(ctx.destination);
        const Sa = 138.59; // C#3
        const strings = [Sa * 0.75, Sa, Sa, Sa / 2]; // Pa, Sa, Sa, low Sa
        let k = 0, timer = null;
        const pluck = () => {
          const f = strings[k % 4]; k++;
          const t = ctx.currentTime;
          const g = ctx.createGain();
          g.gain.setValueAtTime(0, t);
          g.gain.linearRampToValueAtTime(0.22, t + 0.03);
          g.gain.exponentialRampToValueAtTime(0.0008, t + 4.2);
          const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.Q.value = 6;
          lp.frequency.setValueAtTime(2600, t); lp.frequency.exponentialRampToValueAtTime(700, t + 3.5);
          // jawari: a slowly sweeping resonance that gives the buzz
          const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.Q.value = 9;
          bp.frequency.setValueAtTime(f * 7, t); bp.frequency.linearRampToValueAtTime(f * 3, t + 3.8);
          const bpg = ctx.createGain(); bpg.gain.value = 0.9;
          [1, 1.0035].forEach((det, j) => {
            const o = ctx.createOscillator(); o.type = 'sawtooth'; o.frequency.value = f * det;
            o.connect(lp); o.connect(bp);
            o.start(t); o.stop(t + 4.4);
          });
          lp.connect(g); bp.connect(bpg); bpg.connect(g);
          g.connect(master); g.connect(delay);
        };
        audio = { ctx, master, start() { pluck(); timer = setInterval(pluck, 1150); }, stop() { clearInterval(timer); } };
      }
      audio.ctx.resume();
      audio.master.gain.cancelScheduledValues(audio.ctx.currentTime);
      audio.master.gain.linearRampToValueAtTime(0.16, audio.ctx.currentTime + 1.2);
      audio.start();
    } else if (audio) {
      audio.master.gain.linearRampToValueAtTime(0, audio.ctx.currentTime + 0.6);
      audio.stop();
    }
  }

  /* ---------- toast ---------- */
  let tt;
  function toast(msg) {
    const t = $('#toast');
    t.textContent = msg; t.classList.add('is-on');
    clearTimeout(tt); tt = setTimeout(() => t.classList.remove('is-on'), 1500);
  }

  /* ---------- event wiring ---------- */
  phone.addEventListener('click', (e) => {
    const langBtn = e.target.closest('[data-lang]');
    if (langBtn) { setLang(langBtn.dataset.lang); renderIntro(); return; }
    const tab = e.target.closest('.tab');
    if (tab) { setTab(tab.dataset.tab); return; }
    const nav = e.target.closest('.navbtn');
    if (nav) { setView(nav.dataset.view); return; }
    if (e.target.closest('[data-close]')) { closeSheet(); return; }
    if (e.target.closest('#soundBtn')) {
      S.sound = !S.sound; tanpura(S.sound);
      const b = $('#soundBtn'); b.setAttribute('aria-pressed', S.sound);
      b.querySelector('use').setAttribute('href', S.sound ? '#i-sound-on' : '#i-sound-off');
      toast(U(S.sound ? 'toast_sound_on' : 'toast_sound_off'));
      return;
    }
    if (e.target.closest('#markBtn')) { setView('journey'); return; }

    const a = e.target.closest('[data-act]');
    if (!a) return;
    const act = a.dataset.act;
    const sl = slideOf(a);
    switch (act) {
      case 'like': toggleLike(sl); vibrate(8); break;
      case 'save': toggleSave(sl); break;
      case 'share': share(sl); break;
      case 'source': openSource(sl.dataset.id); break;
      case 'lang': cycleLang(); break;
      case 'journey': setView('journey'); break;
      case 'continue': {
        setView('feed'); setTab('story');
        const firstUnseen = STORY.findIndex((s) => !S.seen.has(s.id));
        const i = firstUnseen < 0 ? 0 : Math.max(0, firstUnseen - 1);
        requestAnimationFrame(() => feeds.story.scrollTo({ top: i * feeds.story.clientHeight, behavior: 'instant' }));
        break;
      }
      case 'teaser': openTeaser(a.dataset.stage); break;
      case 'notify': {
        const id = a.dataset.stage;
        S.notify.has(id) ? S.notify.delete(id) : S.notify.add(id);
        persist(); vibrate(12);
        openTeaser(id); renderJourney();
        break;
      }
      case 'report': toast(U('toast_report')); closeSheet(); break;
      case 'credits': openCredits(); break;
      case 'intro': renderIntro(); break;
      case 'begin': finishOnboarding(); break;
      case 'jump': jumpTo(a.dataset.id); break;
      case 'reset': localStorage.removeItem(KEY); location.reload(); break;
    }
  });

  Object.values(feeds).forEach((f) => {
    f.addEventListener('pointerdown', onPointerDown, { passive: true });
    f.addEventListener('pointerup', onPointerUp);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeSheet();
    if (S.view !== 'feed' || $('#sheetWrap').classList.contains('is-on')) return;
    const el = feeds[S.tab];
    if (e.key === 'ArrowDown' || e.key === 'j') { el.scrollBy({ top: el.clientHeight, behavior: 'smooth' }); e.preventDefault(); }
    if (e.key === 'ArrowUp' || e.key === 'k') { el.scrollBy({ top: -el.clientHeight, behavior: 'smooth' }); e.preventDefault(); }
  });

  // swipe down on sheet to close
  let sy = null;
  $('#sheet').addEventListener('touchstart', (e) => { if ($('#sheet').scrollTop <= 0) sy = e.touches[0].clientY; }, { passive: true });
  $('#sheet').addEventListener('touchmove', (e) => { if (sy !== null && e.touches[0].clientY - sy > 70) { closeSheet(); sy = null; } }, { passive: true });

  /* ---------- boot ---------- */
  applyLangChrome();
  buildFeed('story');
  buildFeed('discover');
  setTab('story');
  if (!S.onboarded) renderSplash();
})();
