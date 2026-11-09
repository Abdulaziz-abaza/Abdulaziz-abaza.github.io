const apps = [
  {
    title: "Taqi Violet",
    desc: "Multi-category e-commerce for beauty, personal care, home appliances, electronics, furniture, and maintenance products.",
    android: "https://play.google.com/store/apps/details?id=com.taqivio.user.aw",
  },
  {
    title: "White Water (Wayt Mayah)",
    desc: "Saudi water-tanker ordering platform with tank sizes, delivery scheduling, and secure payments (Mada, Visa, Tamara).",
    android: "https://play.google.com/store/apps/details?id=com.moya.user&hl=ar",
    ios: "https://apps.apple.com/eg/app/id6760628499",
  },
  {
    title: "Hessity - Students & Parents",
    desc: "EdTech platform for attendance, schedules, grades, payments, offline mode, and parent monitoring.",
    android: "https://play.google.com/store/apps/details?id=com.hessity.app",
    ios: "https://apps.apple.com/sa/app/id6760673398",
  },
  {
    title: "Radar Elmesa7a",
    desc: "Surveying ecosystem for device certificates, anti-theft tracking, marketplace, jobs, and service centers.",
    android: "https://play.google.com/store/apps/details?id=com.radar_elmesa7a.pp",
    ios: "https://apps.apple.com/th/app/id6817810768",
  },
  {
    title: "Volgato",
    desc: "Omani car-care commerce app for products and paint restoration with catalog, orders, and payments.",
    ios: "https://apps.apple.com/eg/app/volgato/id6474680077",
  },
  {
    title: "Kayan City",
    desc: "Super app for food, pharmacy, medical consultations, home nursing, shopping, logistics, and marketplace.",
    android: "https://play.google.com/store/apps/details?id=com.kayancity.user",
  },
  {
    title: "VetSouq",
    desc: "Veterinary marketplace for medicines, vaccines, feed, equipment, tele-consults, and field visits.",
    android: "https://play.google.com/store/apps/details?id=com.evet.souqUser",
  },
  {
    title: "Wakilik Express",
    desc: "E-commerce and delivery suite for orders, shipments, returns, collections, and real-time tracking.",
    android: "https://play.google.com/store/apps/details?id=com.active.wakilikuser",
  },
  {
    title: "Al-Moassasa Cleaning Products",
    desc: "B2B wholesale platform connecting cleaning-supply suppliers with retailers.",
    android: "https://play.google.com/store/apps/details?id=com.mo2sasa.user&hl=ar",
  },
  {
    title: "Makka Trading & Distribution",
    desc: "Trade and distribution commerce with catalog, orders, invoices, tracking, and returns.",
    android: "https://play.google.com/store/apps/details?id=com.makka.user",
    ios: "https://apps.apple.com/la/app/id6814374401",
  },
  {
    title: "Istanha Elkhair",
    desc: "City lifestyle platform for services, stores, restaurants, and news with payments and notifications.",
    android: "https://play.google.com/store/apps/details?id=com.active.Istanhaelkhair",
    ios: "https://apps.apple.com/eg/app/id6759289133",
  },
  {
    title: "Istanha Merchant",
    desc: "Merchant companion for products, inventory, pricing, order handling, and sales reports.",
    ios: "https://apps.apple.com/us/app/id6759315704",
  },
  {
    title: "Oya",
    desc: "Air cargo operations for freight agents: live AWB tracking, airline search, and dashboards.",
    ios: "https://apps.apple.com/us/app/oya/id6744579832",
  },
  {
    title: "Oya Delivery Driver",
    desc: "Driver productivity app with trips, QR updates, proof of delivery, and earnings tracking.",
    android: "https://play.google.com/store/apps/details?id=com.oya.delivery.activeweb",
    ios: "https://apps.apple.com/us/app/oya-delivery/id6759629039",
  },
  {
    title: "Oya Transfers",
    desc: "Financial transfers for individuals, merchants, and money offices with secure remittance flows.",
    ios: "https://apps.apple.com/us/app/oya-tranfers/id6759628801",
  },
];

function renderApps() {
  const grid = document.getElementById("apps-grid");
  if (!grid) return;

  grid.innerHTML = apps
    .map((app, i) => {
      const links = [];
      const platforms = [];
      if (app.android) {
        links.push(`<a class="store-btn play" href="${app.android}" target="_blank" rel="noopener"><span>Google Play</span></a>`);
        platforms.push("Android");
      }
      if (app.ios) {
        links.push(`<a class="store-btn apple" href="${app.ios}" target="_blank" rel="noopener"><span>App Store</span></a>`);
        platforms.push("iOS");
      }
      const index = String(i + 1).padStart(2, "0");

      return `
        <article class="app-item reveal">
          <div class="app-item-glow" aria-hidden="true"></div>
          <div class="app-item-head">
            <span class="app-index">${index}</span>
            <div class="app-item-title">
              <h3>${app.title}</h3>
              <p class="app-platforms">${platforms.join(" · ")}</p>
            </div>
          </div>
          <p class="app-desc">${app.desc}</p>
          <div class="app-links">${links.join("")}</div>
        </article>
      `;
    })
    .join("");
}

function setupReveal() {
  const items = document.querySelectorAll(".reveal:not(.in)");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
  );

  items.forEach((el, index) => {
    el.style.transitionDelay = `${Math.min(index % 8, 7) * 55}ms`;
    io.observe(el);
  });
}

function setupTopbar() {
  const topbar = document.querySelector(".topbar");
  const onScroll = () => {
    topbar.classList.toggle("scrolled", window.scrollY > 10);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function setupMobileMenu() {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("site-nav");
  const overlay = document.getElementById("mobile-overlay");
  if (!toggle || !nav || !overlay) return;

  const close = () => {
    document.body.classList.remove("menu-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
    overlay.hidden = true;
    overlay.classList.remove("show");
  };

  const open = () => {
    document.body.classList.add("menu-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close menu");
    overlay.hidden = false;
    requestAnimationFrame(() => overlay.classList.add("show"));
  };

  toggle.addEventListener("click", () => {
    if (document.body.classList.contains("menu-open")) close();
    else open();
  });

  overlay.addEventListener("click", close);
  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", close));

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}

function setupDock() {
  const links = Array.from(document.querySelectorAll(".mobile-dock a"));
  if (!links.length) return;

  const sections = [
    { id: "top", el: document.getElementById("top") },
    { id: "apps", el: document.getElementById("apps") },
    { id: "skills", el: document.getElementById("skills") },
    { id: "contact", el: document.getElementById("contact") },
  ].filter((s) => s.el);

  const setActive = (id) => {
    links.forEach((link) => {
      link.classList.toggle("active", link.dataset.dock === id);
    });
  };

  const onScroll = () => {
    const y = window.scrollY + window.innerHeight * 0.35;
    let current = "top";
    sections.forEach((section) => {
      if (section.el.offsetTop <= y) current = section.id;
    });
    setActive(current);
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function setupSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const id = anchor.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const topbar = document.querySelector(".topbar");
      const offset = (topbar ? topbar.offsetHeight : 0) + 12;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });
}

document.getElementById("year").textContent = String(new Date().getFullYear());
renderApps();
setupReveal();
setupTopbar();
setupMobileMenu();
setupDock();
setupSmoothAnchors();
