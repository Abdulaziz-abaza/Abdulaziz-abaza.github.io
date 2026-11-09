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
    .map((app) => {
      const links = [];
      if (app.android) {
        links.push(`<a href="${app.android}" target="_blank" rel="noopener">Google Play</a>`);
      }
      if (app.ios) {
        links.push(`<a href="${app.ios}" target="_blank" rel="noopener">App Store</a>`);
      }

      return `
        <article class="app-card reveal">
          <h3>${app.title}</h3>
          <p>${app.desc}</p>
          <div class="app-links">${links.join("")}</div>
        </article>
      `;
    })
    .join("");
}

function setupReveal() {
  const items = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  items.forEach((el, index) => {
    el.style.transitionDelay = `${Math.min(index % 6, 5) * 60}ms`;
    io.observe(el);
  });
}

function setupTopbar() {
  const topbar = document.querySelector(".topbar");
  const onScroll = () => {
    topbar.classList.toggle("scrolled", window.scrollY > 12);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

document.getElementById("year").textContent = String(new Date().getFullYear());
renderApps();
setupReveal();
setupTopbar();
