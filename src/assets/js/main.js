/* Interactions for the practice website. No framework – each block wires up one component. */
(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(pointer: fine)').matches;
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

  /* ───────────── smooth scroll */
  let lenis = null;
  if (!reduced && window.Lenis) {
    lenis = new window.Lenis({ autoRaf: true, lerp: 0.14, wheelMultiplier: 0.95 });
  }
  const headerOffset = () => -(($('[data-header]')?.offsetHeight ?? 72) + 20);
  const scrollToEl = (el) => {
    if (!el) return;
    if (lenis) lenis.scrollTo(el, { offset: headerOffset(), duration: 1 });
    else window.scrollTo({ top: el.getBoundingClientRect().top + scrollY + headerOffset(), behavior: reduced ? 'auto' : 'smooth' });
  };
  const lockScroll = (on) => {
    if (lenis) on ? lenis.stop() : lenis.start();
    document.documentElement.style.overflow = on ? 'hidden' : '';
  };

  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a || a.hasAttribute('data-booking-open')) return;
    const id = a.getAttribute('href').slice(1);
    const target = id && document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    scrollToEl(target);
    history.replaceState(null, '', `#${id}`);
  });

  /* ───────────── header: scrolled state, hide on scroll down */
  const header = $('[data-header]');
  let lastY = scrollY;
  const megaOpen = () => !!$('.mega.is-open');
  const menuOpen = () => document.body.classList.contains('menu-open');
  const onScrollHeader = () => {
    const y = scrollY;
    header.classList.toggle('is-scrolled', y > 8);
    const hide = y > 400 && y > lastY + 2 && !megaOpen() && !menuOpen();
    if (hide) header.classList.add('is-hidden');
    else if (y < lastY - 2 || y < 400) header.classList.remove('is-hidden');
    lastY = y;
  };

  /* ───────────── mega menus */
  const megaItems = $$('[data-mega]');
  let megaTimer;
  const closeMegas = (except) => megaItems.forEach((item) => {
    if (item === except) return;
    const btn = $('.nav__link', item); const panel = $('.mega', item);
    btn.setAttribute('aria-expanded', 'false');
    panel.classList.remove('is-open');
    setTimeout(() => { if (!panel.classList.contains('is-open')) panel.hidden = true; }, 300);
  });
  const openMega = (item) => {
    closeMegas(item);
    const btn = $('.nav__link', item); const panel = $('.mega', item);
    panel.hidden = false;
    requestAnimationFrame(() => panel.classList.add('is-open'));
    btn.setAttribute('aria-expanded', 'true');
    header.classList.remove('is-hidden');
  };
  megaItems.forEach((item) => {
    const btn = $('.nav__link', item);
    btn.addEventListener('click', () => (btn.getAttribute('aria-expanded') === 'true' ? closeMegas() : openMega(item)));
    if (fine) {
      item.addEventListener('mouseenter', () => { clearTimeout(megaTimer); megaTimer = setTimeout(() => openMega(item), 90); });
      item.addEventListener('mouseleave', () => { clearTimeout(megaTimer); megaTimer = setTimeout(() => closeMegas(), 220); });
    }
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMegas(); });
  document.addEventListener('click', (e) => { if (!e.target.closest('[data-mega]')) closeMegas(); });

  /* ───────────── mobile menu */
  const menuBtn = $('[data-menu-toggle]');
  const menu = $('[data-mobile-menu]');
  const setMenu = (open) => {
    menuBtn.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('menu-open', open);
    lockScroll(open);
    if (open) { menu.hidden = false; requestAnimationFrame(() => menu.classList.add('is-open')); }
    else { menu.classList.remove('is-open'); setTimeout(() => { if (!menu.classList.contains('is-open')) menu.hidden = true; }, 300); }
  };
  menuBtn?.addEventListener('click', () => setMenu(menuBtn.getAttribute('aria-expanded') !== 'true'));
  menu?.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  menu?.setAttribute('data-lenis-prevent', '');

  /* ───────────── headline split: words blur in one after another */
  $$('[data-split]').forEach((el) => {
    let i = 0;
    const walk = (node) => {
      [...node.childNodes].forEach((child) => {
        if (child.nodeType === 3) {
          const frag = document.createDocumentFragment();
          child.textContent.split(/(\s+)/).forEach((part) => {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.append(part); return; }
            const w = document.createElement('span');
            w.className = 'w'; w.style.setProperty('--i', i++); w.textContent = part;
            frag.append(w);
          });
          child.replaceWith(frag);
        } else if (child.nodeType === 1) walk(child);
      });
    };
    walk(el);
    el.setAttribute('aria-label', el.textContent.replace(/\s+/g, ' ').trim());
  });

  /* ───────────── reveal on scroll, staggered among siblings */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      en.target.classList.add('is-in');
      io.unobserve(en.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  $$('[data-reveal], [data-split]').forEach((el) => {
    const sibs = [...(el.parentElement?.children ?? [])].filter((s) => s.hasAttribute('data-reveal'));
    const idx = sibs.indexOf(el);
    if (idx > 0) el.style.setProperty('--d', `${Math.min(idx, 6) * 0.05}s`);
    io.observe(el);
  });

  /* ───────────── magnetic buttons */
  if (fine && !reduced) {
    $$('.btn--dark, .btn--light, .float-cta__btn').forEach((b) => {
      b.addEventListener('pointermove', (e) => {
        const r = b.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) / r.width;
        const y = (e.clientY - r.top - r.height / 2) / r.height;
        b.style.transform = `translate(${x * 8}px, ${y * 6}px)`;
      });
      b.addEventListener('pointerleave', () => { b.style.transform = ''; });
    });
  }

  /* ───────────── body map */
  $$('[data-bodymap]').forEach((root) => {
    const svg = $('[data-figure]', root);
    const tabs = $$('[data-region]', root);
    const cards = $$('[data-card]', root);
    const chips = $$('[data-chip]', root);
    let current = null;
    let touched = false;

    // Highlight a region: 'is-lit' for the selection, 'is-preview' while hovering.
    const mark = (id, cls) => {
      $$('[data-lit], [data-mark]', svg).forEach((el) => el.classList.toggle(cls, (el.dataset.lit ?? el.dataset.mark) === id));
      chips.forEach((c) => c.classList.toggle('is-on', c.dataset.chip === id || (cls === 'is-preview' && c.dataset.chip === current)));
    };
    const preview = (id) => { mark(id, 'is-preview'); if (!id) chips.forEach((c) => c.classList.toggle('is-on', c.dataset.chip === current)); };

    const select = (id, focus = false) => {
      current = id;
      touched = true;
      root.classList.add('has-picked');
      mark(id, 'is-lit');
      tabs.forEach((t) => {
        const on = t.dataset.region === id;
        t.setAttribute('aria-selected', String(on));
        t.tabIndex = on ? 0 : -1;
        if (on && focus) t.focus({ preventScroll: true });
        // On phones the regions are a horizontal chip row: keep the chosen chip in view without moving the page.
        const list = t.closest('.bodymap__list');
        if (on && list.scrollWidth > list.clientWidth) {
          const dx = t.getBoundingClientRect().left - list.getBoundingClientRect().left;
          list.scrollTo({ left: list.scrollLeft + dx - (list.clientWidth - t.offsetWidth) / 2, behavior: reduced ? 'auto' : 'smooth' });
        }
      });
      cards.forEach((c) => {
        const on = c.dataset.card === id;
        c.classList.toggle('is-active', on);
        if (c.dataset.card !== 'intro') c.hidden = !on;
      });
    };

    tabs.forEach((t, i) => {
      t.addEventListener('click', () => select(t.dataset.region));
      t.addEventListener('keydown', (e) => {
        const dir = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
        if (!dir) return;
        e.preventDefault();
        select(tabs[(i + dir + tabs.length) % tabs.length].dataset.region, true);
      });
      if (fine) {
        t.addEventListener('mouseenter', () => { touched = true; preview(t.dataset.region); });
        t.addEventListener('mouseleave', () => preview(null));
      }
    });

    // Large invisible hit areas on the figure itself.
    $$('[data-hit]', svg).forEach((h) => {
      h.addEventListener('click', () => select(h.dataset.hit));
      h.addEventListener('pointerenter', () => { touched = true; preview(h.dataset.hit); });
      h.addEventListener('pointerleave', () => preview(null));
    });

    // Until someone interacts, briefly pulse one region after another to show the figure is clickable.
    if (!reduced) {
      const ids = tabs.map((t) => t.dataset.region);
      let k = 0;
      const vis = new IntersectionObserver(([en]) => { root.dataset.visible = en.isIntersecting ? '1' : ''; }, { threshold: 0.3 });
      vis.observe(root);
      const timer = setInterval(() => {
        if (touched) { clearInterval(timer); return; }
        if (!root.dataset.visible) return;
        const g = $(`[data-mark="${ids[k++ % ids.length]}"]`, svg);
        if (!g) return;
        g.classList.remove('is-hint'); void g.getBBox(); g.classList.add('is-hint');
      }, 900);
    }
  });

  /* ───────────── reviews carousel: arrows, drag to scroll */
  $$('[data-carousel]').forEach((root) => {
    const track = $('[data-carousel-track]', root);
    const prev = $('[data-carousel-prev]', root);
    const next = $('[data-carousel-next]', root);
    const step = () => ($('.review', track)?.offsetWidth ?? 360) + 12;
    const update = () => {
      prev.disabled = track.scrollLeft < 4;
      next.disabled = track.scrollLeft + track.clientWidth > track.scrollWidth - 4;
    };
    prev.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: reduced ? 'auto' : 'smooth' }));
    next.addEventListener('click', () => track.scrollBy({ left: step(), behavior: reduced ? 'auto' : 'smooth' }));
    track.addEventListener('scroll', update, { passive: true });
    track.setAttribute('data-lenis-prevent-horizontal', '');
    if (fine) {
      let x0 = 0, s0 = 0, down = false, moved = false;
      track.addEventListener('pointerdown', (e) => { if (e.button) return; down = true; moved = false; x0 = e.clientX; s0 = track.scrollLeft; });
      addEventListener('pointermove', (e) => {
        if (!down) return;
        const dx = e.clientX - x0;
        if (!moved && Math.abs(dx) > 4) { moved = true; track.classList.add('is-dragging'); }
        if (moved) track.scrollLeft = s0 - dx;
      });
      addEventListener('pointerup', () => {
        if (!down) return;
        down = false;
        if (moved) { track.classList.remove('is-dragging'); track.scrollBy({ left: 0 }); }
      });
    }
    update();
    addEventListener('resize', update);
  });

  /* ───────────── sticky story */
  const story = $('[data-story]');
  const storyTexts = story ? $$('[data-story-text]', story) : [];
  const storyArts = story ? $$('[data-story-art]', story) : [];
  const storyDots = story ? $$('[data-story-dot]', story) : [];
  let storyIdx = 0;
  const onScrollStory = () => {
    if (!story || innerWidth <= 760) return;
    const r = story.getBoundingClientRect();
    const total = story.offsetHeight - innerHeight;
    const p = clamp(-r.top / total, 0, 0.9999);
    const idx = Math.floor(p * storyTexts.length);
    if (idx === storyIdx) return;
    storyIdx = idx;
    [storyTexts, storyArts, storyDots].forEach((list) => list.forEach((el, i) => el.classList.toggle('is-active', i === idx)));
  };

  /* ───────────── symptom finder */
  $$('[data-finder]').forEach((root) => {
    const opts = $$('[data-finder-opt]', root);
    const cards = $$('[data-finder-card]', root);
    const pick = (i, focus) => {
      opts.forEach((o, j) => { const on = j === i; o.classList.toggle('is-active', on); o.setAttribute('aria-selected', String(on)); o.tabIndex = on ? 0 : -1; if (on && focus) o.focus(); });
      cards.forEach((c, j) => { const on = j === i; c.classList.toggle('is-active', on); c.hidden = !on; });
    };
    opts.forEach((o, i) => {
      o.addEventListener('click', () => pick(i));
      o.addEventListener('keydown', (e) => {
        const dir = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
        if (!dir) return;
        e.preventDefault(); pick((i + dir + opts.length) % opts.length, true);
      });
    });
  });

  /* ───────────── accordions with height animation */
  $$('[data-acc]').forEach((d) => {
    const summary = $('summary', d);
    const body = $('.acc__body', d);
    summary.addEventListener('click', (e) => {
      if (reduced) return;
      e.preventDefault();
      if (d.open) {
        const h = body.offsetHeight;
        d.classList.add('is-closing');
        body.animate([{ height: `${h}px`, opacity: 1 }, { height: '0px', opacity: 0 }], { duration: 260, easing: 'cubic-bezier(.22,.8,.2,1)' })
          .onfinish = () => { d.open = false; d.classList.remove('is-closing'); };
      } else {
        d.open = true;
        const h = body.offsetHeight;
        body.animate([{ height: '0px', opacity: 0 }, { height: `${h}px`, opacity: 1 }], { duration: 320, easing: 'cubic-bezier(.16,1,.3,1)' });
      }
    });
  });

  /* ───────────── treatments filter */
  $$('[data-filter-root]').forEach((root) => {
    const btns = $$('[data-filter]', root);
    const ink = $('[data-filter-ink]', root);
    const groups = $$('[data-group]', root);
    const moveInk = (b) => { ink.style.width = `${b.offsetWidth}px`; ink.style.transform = `translateX(${b.offsetLeft - 5}px)`; ink.style.left = '5px'; };
    const apply = (id, scroll) => {
      btns.forEach((b) => { const on = b.dataset.filter === id; b.classList.toggle('is-active', on); b.setAttribute('aria-selected', String(on)); if (on) moveInk(b); });
      groups.forEach((g) => { g.hidden = id !== 'alle' && g.dataset.group !== id; });
      if (scroll) scrollToEl(root);
    };
    btns.forEach((b) => b.addEventListener('click', () => apply(b.dataset.filter, true)));
    const fromHash = location.hash.slice(1);
    requestAnimationFrame(() => apply(btns.some((b) => b.dataset.filter === fromHash) ? fromHash : 'alle', false));
    addEventListener('resize', () => moveInk($('.filter__btn.is-active', root)));
  });

  /* ───────────── table of contents highlight */
  const tocLinks = $$('[data-toc]');
  if (tocLinks.length) {
    const map = new Map(tocLinks.map((a) => [a.getAttribute('href').slice(1), a]));
    const tio = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        tocLinks.forEach((a) => a.classList.remove('is-active'));
        map.get(en.target.id)?.classList.add('is-active');
      });
    }, { rootMargin: '-30% 0px -60% 0px' });
    map.forEach((_, id) => { const el = document.getElementById(id); if (el) tio.observe(el); });
  }

  /* ───────────── timeline fill */
  const tl = $('[data-timeline]');
  const tlFill = tl && $('[data-timeline-fill]', tl);
  const onScrollTimeline = () => {
    if (!tl) return;
    const r = tl.getBoundingClientRect();
    const p = clamp((innerHeight * 0.6 - r.top) / r.height, 0, 1);
    tlFill.style.setProperty('--fill', `${p * 100}%`);
    tlFill.style.height = `${p * 100}%`;
  };

  /* ───────────── floating CTA */
  const float = $('[data-float-cta]');
  const hasInline = !!$('.booking--inline');
  let footerVisible = false;
  const fio = new IntersectionObserver((entries) => { entries.forEach((en) => { footerVisible = en.isIntersecting; }); onScrollFloat(); });
  $$('.site-footer, .cta').forEach((el) => fio.observe(el));
  function onScrollFloat() {
    if (!float) return;
    const show = !hasInline && scrollY > innerHeight * 0.9 && !footerVisible && !menuOpen() && !document.body.classList.contains('booking-open');
    float.classList.toggle('is-visible', show);
  }

  /* ───────────── booking request */
  const dialog = $('[data-booking-dialog]');
  dialog?.setAttribute('data-lenis-prevent', '');
  const openBooking = () => {
    if (hasInline) { scrollToEl($('#termin')); return; }
    if (!dialog) return;
    closeMegas();
    if (menuOpen()) setMenu(false);
    dialog.showModal();
    document.body.classList.add('booking-open');
    lockScroll(true);
    onScrollFloat();
  };
  document.addEventListener('click', (e) => {
    const t = e.target.closest('[data-booking-open]');
    if (!t) return;
    e.preventDefault();
    openBooking();
  });
  dialog?.addEventListener('close', () => { document.body.classList.remove('booking-open'); lockScroll(false); onScrollFloat(); });
  dialog?.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });
  $$('[data-booking-close]').forEach((b) => b.addEventListener('click', () => dialog.close()));

  $$('[data-booking]').forEach((form) => {
    const stepsEls = $$('[data-bk-step]', form);
    const total = 4;
    const back = $('[data-bk-back]', form);
    const bar = $('[data-bk-progress]', form);
    const err = $('[data-bk-error]', form);
    let step = 1;
    const go = (n) => {
      step = n;
      stepsEls.forEach((s) => s.classList.toggle('is-active', +s.dataset.bkStep === n));
      back.hidden = n === 1 || n > total;
      bar.style.width = `${Math.min(n, total) / total * 100}%`;
      const first = $(`[data-bk-step="${n}"] input:not([type=hidden])`, form);
      if (n <= total && first && form.closest('dialog')) first.focus({ preventScroll: true });
    };
    back.addEventListener('click', () => go(Math.max(1, step - 1)));
    $$('[data-bk-next]', form).forEach((b) => b.addEventListener('click', () => go(step + 1)));
    // 'click' rather than 'change': choosing the already selected option again must still move on.
    $$('[data-bk-auto]', form).forEach((r) => r.addEventListener('click', () => setTimeout(() => go(2), 180)));
    $$('[data-bk-step="3"] input[name="wann"]', form).forEach((r) => r.addEventListener('click', () => {
      const tz = $('[data-bk-step="3"] input[name="tageszeit"]:checked', form);
      if (tz) setTimeout(() => go(4), 180);
    }));

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const name = (fd.get('name') || '').trim();
      const tel = (fd.get('telefon') || '').trim();
      const fields = [['name', name], ['telefon', tel]];
      fields.forEach(([n, v]) => form.elements[n].setAttribute('aria-invalid', String(!v)));
      if (!name || !tel) { err.textContent = 'Bitte geben Sie Ihren Namen und eine Telefonnummer an, damit ich Sie erreichen kann.'; err.hidden = false; return; }
      if (!fd.get('consent')) { err.textContent = 'Bitte bestätigen Sie, dass Ihre Angaben für die Terminvereinbarung verwendet werden dürfen.'; err.hidden = false; return; }
      err.hidden = true;

      const lines = [
        'Guten Tag,', '', 'ich möchte einen Termin anfragen.', '',
        `Anliegen: ${fd.get('anliegen') || '–'}`,
        `Region: ${fd.getAll('region').join(', ') || '–'}`,
        `Wunschtermin: ${fd.get('wann') || '–'}${fd.get('tageszeit') ? `, ${fd.get('tageszeit')}` : ''}`,
        '', `Name: ${name}`, `Telefon: ${tel}`, `E-Mail: ${fd.get('email') || '–'}`,
      ];
      const msg = (fd.get('nachricht') || '').trim();
      if (msg) lines.push('', msg);
      lines.push('', 'Vielen Dank!');
      const href = `mailto:schrader@healthlab.at?subject=${encodeURIComponent(`Terminanfrage – ${name}`)}&body=${encodeURIComponent(lines.join('\n'))}`;
      $('[data-bk-name]', form).textContent = `, ${name.split(' ')[0]}`;
      go(5);
      window.location.href = href;
    });
    go(1);
  });

  /* ───────────── scroll loop */
  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      onScrollHeader(); onScrollStory(); onScrollTimeline(); onScrollFloat();
      ticking = false;
    });
  };
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', onScroll, { passive: true });
  onScroll();

  $$('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });
})();
