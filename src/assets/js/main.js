/* Interactions for the practice website. No framework – each block wires up one component. */
(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(pointer: fine)').matches;
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

  /* Native scrolling keeps wheel, touch and keyboard behavior predictable. */
  const headerOffset = () => -(($('[data-header]')?.offsetHeight ?? 72) + 20);
  const scrollToEl = (el) => {
    if (!el) return;
    window.scrollTo({ top: el.getBoundingClientRect().top + scrollY + headerOffset(), behavior: reduced ? 'auto' : 'smooth' });
  };
  const lockScroll = (on) => {
    document.documentElement.style.overflow = on ? 'hidden' : '';
  };

  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a || a.hasAttribute('data-booking-open')) return;
    const id = a.getAttribute('href').slice(1);
    const target = id && document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
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
    const hide = y > 400 && y > lastY + 2 && !megaOpen() && !menuOpen() && !header.contains(document.activeElement);
    if (hide) header.classList.add('is-hidden');
    else if (y < lastY - 2 || y < 400 || header.contains(document.activeElement)) header.classList.remove('is-hidden');
    lastY = y;
  };
  header.addEventListener('focusin', () => header.classList.remove('is-hidden'));

  /* ───────────── mega menus */
  const megaItems = $$('[data-mega]');
  let megaTimer;
  const closeMegas = (except) => megaItems.forEach((item) => {
    if (item === except) return;
    const btn = $('.nav__toggle', item); const panel = $('.mega', item);
    btn.setAttribute('aria-expanded', 'false');
    panel.classList.remove('is-open');
    panel.hidden = true;
  });
  const openMega = (item) => {
    closeMegas(item);
    const btn = $('.nav__toggle', item); const panel = $('.mega', item);
    panel.hidden = false;
    requestAnimationFrame(() => panel.classList.add('is-open'));
    btn.setAttribute('aria-expanded', 'true');
    header.classList.remove('is-hidden');
  };
  megaItems.forEach((item) => {
    const btn = $('.nav__toggle', item);
    btn.addEventListener('click', () => (btn.getAttribute('aria-expanded') === 'true' ? closeMegas() : openMega(item)));
    if (fine) {
      item.addEventListener('mouseenter', () => { clearTimeout(megaTimer); megaTimer = setTimeout(() => openMega(item), 90); });
      item.addEventListener('mouseleave', () => { clearTimeout(megaTimer); megaTimer = setTimeout(() => closeMegas(), 220); });
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    const activeItem = document.activeElement.closest('[data-mega]');
    if (activeItem) $('.nav__toggle', activeItem).focus();
    clearTimeout(megaTimer);
    closeMegas();
  });
  megaItems.forEach((item) => item.addEventListener('focusout', (e) => {
    if (!item.contains(e.relatedTarget)) closeMegas();
  }));
  document.addEventListener('click', (e) => { if (!e.target.closest('[data-mega]')) closeMegas(); });

  /* ───────────── mobile menu */
  const menuBtn = $('[data-menu-toggle]');
  const menu = $('[data-mobile-menu]');
  const menuBackground = $$('main, .site-footer, [data-float-cta]');
  const setMenu = (open, restoreFocus = true) => {
    menuBtn.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('menu-open', open);
    lockScroll(open);
    menuBackground.forEach((el) => { el.inert = open; });
    if (open) {
      closeMegas();
      header.classList.remove('is-hidden');
      menu.hidden = false;
      requestAnimationFrame(() => menu.classList.add('is-open'));
      $('summary, a', menu)?.focus({ preventScroll: true });
    } else {
      menu.classList.remove('is-open');
      menu.hidden = true;
      if (restoreFocus) menuBtn.focus({ preventScroll: true });
    }
  };
  menuBtn?.addEventListener('click', () => setMenu(menuBtn.getAttribute('aria-expanded') !== 'true'));
  menu?.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', (e) => {
    if (!menuOpen()) return;
    if (e.key === 'Escape') { e.preventDefault(); setMenu(false); return; }
    if (e.key !== 'Tab') return;
    const items = [menuBtn, ...$$('a, summary, button', menu)].filter((el) => el.getClientRects().length);
    const i = items.indexOf(document.activeElement);
    if (i < 0 || (e.shiftKey && i === 0) || (!e.shiftKey && i === items.length - 1)) {
      e.preventDefault();
      items[e.shiftKey ? items.length - 1 : 0].focus();
    }
  });
  matchMedia('(min-width: 1021px)').addEventListener('change', (e) => {
    if (e.matches && menuOpen()) { setMenu(false, false); $('.brand').focus(); }
  });

  /* ───────────── headline split: words rise in one after another */
  if (!reduced) document.documentElement.classList.add('motion');
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
            w.className = 'w'; w.setAttribute('aria-hidden', 'true'); w.style.setProperty('--i', i++); w.textContent = part;
            frag.append(w);
          });
          child.replaceWith(frag);
        } else if (child.nodeType === 1) walk(child);
      });
    };
    const label = el.textContent.replace(/\s+/g, ' ').trim();
    walk(el);
    const sr = document.createElement('span');
    sr.className = 'sr'; sr.textContent = label;
    el.prepend(sr);
  });

  /* ───────────── reveal on scroll, staggered among siblings */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      en.target.classList.add('is-in');
      io.unobserve(en.target);
    });
  }, { rootMargin: '0px 0px 4% 0px', threshold: 0 });
  // Card grids: the cards rise in one after another once the grid scrolls into view.
  $$('[data-stagger]').forEach((grid) => {
    [...grid.children].forEach((c, i) => c.style.setProperty('--k', Math.min(i, 8)));
    io.observe(grid);
  });
  $$('[data-reveal], [data-split]').forEach((el) => {
    const sibs = [...(el.parentElement?.children ?? [])].filter((s) => s.hasAttribute('data-reveal'));
    const idx = sibs.indexOf(el);
    if (idx > 0) el.style.setProperty('--d', `${Math.min(idx, 6) * 0.06}s`);
    io.observe(el);
  });

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
        c.hidden = !on;
      });
      $('[data-bodymap-status]', root).textContent = `${tabs.find((t) => t.dataset.region === id).textContent.trim()}: Ursachen und Behandlungen werden angezeigt.`;
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
  const storyTicks = story ? $$('[data-story-tick]', story) : [];
  const storyProgress = story && $('[data-story-progress]', story);
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
    storyTicks.forEach((el, i) => el.classList.toggle('is-active', i <= idx));
    storyProgress.style.strokeDasharray = `${idx + 1} ${storyTexts.length}`;
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
      btns.forEach((b) => { const on = b.dataset.filter === id; b.classList.toggle('is-active', on); b.setAttribute('aria-pressed', String(on)); if (on) moveInk(b); });
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
  // The line eases toward the scroll position instead of jumping with each scroll event
  // (iOS delivers those unevenly), and grows via transform so it never triggers layout.
  let tlTarget = 0, tlNow = 0, tlRaf = 0;
  const tlStep = () => {
    tlNow += (tlTarget - tlNow) * 0.18;
    if (Math.abs(tlTarget - tlNow) < 0.0005) tlNow = tlTarget;
    tlFill.style.transform = `scaleY(${tlNow})`;
    tlRaf = tlNow === tlTarget ? 0 : requestAnimationFrame(tlStep);
  };
  const onScrollTimeline = () => {
    if (!tl) return;
    const r = tl.getBoundingClientRect();
    tlTarget = clamp((innerHeight * 0.6 - r.top) / r.height, 0, 1);
    if (!tlRaf) tlRaf = requestAnimationFrame(tlStep);
  };

  /* ───────────── floating CTA */
  const float = $('[data-float-cta]');
  const hasInline = !!$('.booking--inline');
  const visibleCtas = new Set();
  const fio = new IntersectionObserver((entries) => { entries.forEach((en) => { if (en.isIntersecting) visibleCtas.add(en.target); else visibleCtas.delete(en.target); }); onScrollFloat(); });
  $$('.site-footer, .cta').forEach((el) => fio.observe(el));
  function onScrollFloat() {
    if (!float) return;
    const show = !hasInline && scrollY > innerHeight * 0.9 && !visibleCtas.size && !menuOpen() && !document.body.classList.contains('booking-open');
    float.classList.toggle('is-visible', show);
    float.inert = !show;
  }

  /* ───────────── booking request */
  const dialog = $('[data-booking-dialog]');
  const openBooking = () => {
    if (hasInline) {
      if (menuOpen()) setMenu(false);
      $('.booking--inline .is-active .booking__q')?.focus({ preventScroll: true });
      scrollToEl($('#termin')); return;
    }
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
    const count = $('[data-bk-count]', form);
    let step = 1;
    const go = (n, moveFocus = true) => {
      step = n;
      stepsEls.forEach((s) => {
        const active = +s.dataset.bkStep === n;
        s.classList.toggle('is-active', active);
        s.hidden = !active;
      });
      back.hidden = n === 1 || n > total;
      bar.style.width = `${Math.min(n, total) / total * 100}%`;
      count.textContent = n <= total ? `Schritt ${n} von ${total}` : 'E-Mail vorbereiten';
      if (moveFocus) {
        const heading = $(`[data-bk-step="${n}"] .booking__q`, form);
        heading.focus({ preventScroll: true });
        if (form.closest('dialog')) dialog.scrollTop = 0;
        else if (heading.getBoundingClientRect().top < -headerOffset() || heading.getBoundingClientRect().bottom > innerHeight) scrollToEl(form);
      }
    };
    back.addEventListener('click', () => go(Math.max(1, step - 1)));
    $$('[data-bk-next]', form).forEach((b) => b.addEventListener('click', () => go(step + 1)));
    // A mouse or touch choice moves on by itself; keyboard users (click with detail 0) use Weiter.
    // 'click' rather than 'change': choosing the already selected option again must still move on.
    const auto = (e, n) => { if (e.detail > 0) setTimeout(() => go(n), 180); };
    $$('[data-bk-auto]', form).forEach((r) => r.addEventListener('click', (e) => auto(e, 2)));
    $$('[data-bk-step="3"] input[name="wann"]', form).forEach((r) => r.addEventListener('click', (e) => {
      if ($('[data-bk-step="3"] input[name="tageszeit"]:checked', form)) auto(e, 4);
    }));
    const fieldError = (name, message) => {
      const input = form.elements[name];
      const feedback = $(`[data-field-error="${name}"]`, form);
      input.setAttribute('aria-invalid', String(!!message));
      feedback.textContent = message;
      feedback.hidden = !message;
    };
    form.addEventListener('input', (e) => {
      if (!e.target.matches('[aria-invalid="true"]')) return;
      fieldError(e.target.name, '');
      err.textContent = '';
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (step !== total) { go(Math.min(step + 1, total)); return; }
      const fd = new FormData(form);
      const name = (fd.get('name') || '').trim();
      const tel = (fd.get('telefon') || '').trim();
      const digits = tel.replace(/\D/g, '');
      const errors = [
        ['name', name ? '' : 'Bitte geben Sie Ihren Namen an.'],
        ['telefon', /^\+?[\d\s().\/-]+$/.test(tel) && digits.length >= 6 && digits.length <= 17 ? '' : 'Bitte geben Sie eine gültige Telefonnummer mit Vorwahl an.'],
        ['email', form.elements.email.validity.valid ? '' : 'Bitte prüfen Sie Ihre E-Mail-Adresse, zum Beispiel name@beispiel.at.'],
        ['consent', fd.get('consent') ? '' : 'Bitte stimmen Sie der Verwendung Ihrer Angaben zur Terminvereinbarung zu.'],
      ];
      errors.forEach(([name, message]) => fieldError(name, message));
      const invalid = errors.filter(([, message]) => message);
      if (invalid.length) {
        err.textContent = `Bitte korrigieren Sie ${invalid.length === 1 ? 'das markierte Feld' : 'die markierten Felder'}. Ihre Anfrage wurde nicht vorbereitet.`;
        form.elements[invalid[0][0]].focus();
        return;
      }
      err.textContent = '';

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
    go(1, false);
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
