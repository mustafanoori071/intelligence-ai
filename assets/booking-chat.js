(function () {
  "use strict";

  var CALENDLY_URL = "https://calendly.com/mustafanoori071/30min";
  var CSS_PATH = "/assets/booking-chat.css";
  var calendlyLoaded = false;

  var STEPS = [
    {
      title: "Missing leads after hours?",
      body: "Most local businesses lose 30–40% of inquiries when the office is closed. Homeowners, patients, and potential clients call the next firm that answers.",
      cta: "Show me how it works",
    },
    {
      title: "We build your front desk in 1–4 days",
      body: "AI chat on your website, CRM logging, and Calendly booking — configured for your industry. HVAC, med spas, law firms, contractors.",
      cta: "What do I get?",
    },
    {
      title: "Every lead captured & qualified",
      body: "Visitors get instant answers. You get contact info, screening questions answered, and booked appointments — even at 11pm on a Saturday.",
      cta: "See packages",
    },
    {
      title: "Free 30-minute walkthrough",
      body: "No pressure. We'll map your setup, show a live demo, and quote a package. Most clients go live within a week.",
      cta: "Pick a time",
      final: true,
    },
  ];

  function loadCss() {
    if (document.querySelector('link[data-ia-booking="1"]')) return;
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = CSS_PATH;
    link.setAttribute("data-ia-booking", "1");
    document.head.appendChild(link);
  }

  function loadCalendly(cb) {
    if (window.Calendly) {
      cb();
      return;
    }
    if (calendlyLoaded) {
      var wait = setInterval(function () {
        if (window.Calendly) {
          clearInterval(wait);
          cb();
        }
      }, 50);
      return;
    }
    calendlyLoaded = true;
    var s = document.createElement("script");
    s.src = "https://assets.calendly.com/assets/external/widget.js";
    s.async = true;
    s.onload = cb;
    document.head.appendChild(s);
  }

  function track(eventName, extra) {
    window.dataLayer = window.dataLayer || [];
    var payload = { event: eventName, chat_type: "booking" };
    if (extra) {
      for (var k in extra) {
        if (Object.prototype.hasOwnProperty.call(extra, k)) payload[k] = extra[k];
      }
    }
    window.dataLayer.push(payload);
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, payload);
    }
  }

  function buildWidget() {
    if (document.getElementById("ia-booking-root")) return;

    var root = document.createElement("div");
    root.id = "ia-booking-root";
    root.className = "ia-booking-root";
    root.innerHTML =
      '<div class="ia-booking-panel" id="ia-booking-panel" role="dialog" aria-label="Book a demo" aria-hidden="true">' +
        '<div class="ia-booking-header">' +
          '<div class="ia-booking-header-text">' +
            '<div class="ia-booking-brand">Intelligence <span>AI</span></div>' +
            '<div class="ia-booking-sub" id="ia-booking-step-label">Step 1 of 4</div>' +
          '</div>' +
          '<button type="button" class="ia-booking-close" id="ia-booking-close" aria-label="Close">' +
            '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>' +
          '</button>' +
        '</div>' +
        '<div class="ia-booking-progress" aria-hidden="true">' +
          '<div class="ia-booking-progress-bar" id="ia-booking-progress"></div>' +
        '</div>' +
        '<div class="ia-booking-body" id="ia-booking-body">' +
          '<div class="ia-booking-step" id="ia-booking-step">' +
            '<h3 class="ia-booking-title" id="ia-booking-title"></h3>' +
            '<p class="ia-booking-copy" id="ia-booking-copy"></p>' +
          '</div>' +
          '<button type="button" class="ia-booking-cta" id="ia-booking-cta"></button>' +
          '<div class="ia-booking-calendly" id="ia-booking-calendly"></div>' +
        '</div>' +
        '<div class="ia-booking-foot">Free demo · No credit card · getintelligence.co</div>' +
      '</div>' +
      '<button type="button" class="ia-booking-launcher" id="ia-booking-launcher" aria-expanded="false" aria-controls="ia-booking-panel" aria-label="Book a free demo">' +
        '<span class="ia-launcher-label">Book demo</span>' +
        '<svg class="ia-icon-chat" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/></svg>' +
        '<svg class="ia-icon-close" style="display:none" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>' +
      '</button>';

    document.body.appendChild(root);

    var panel = document.getElementById("ia-booking-panel");
    var launcher = document.getElementById("ia-booking-launcher");
    var closeBtn = document.getElementById("ia-booking-close");
    var cta = document.getElementById("ia-booking-cta");
    var stepEl = document.getElementById("ia-booking-step");
    var titleEl = document.getElementById("ia-booking-title");
    var copyEl = document.getElementById("ia-booking-copy");
    var stepLabel = document.getElementById("ia-booking-step-label");
    var progressBar = document.getElementById("ia-booking-progress");
    var calWrap = document.getElementById("ia-booking-calendly");
    var iconChat = launcher.querySelector(".ia-icon-chat");
    var iconClose = launcher.querySelector(".ia-icon-close");
    var launcherLabel = launcher.querySelector(".ia-launcher-label");
    var currentStep = 0;
    var calendlyShown = false;

    function renderStep() {
      var step = STEPS[currentStep];
      titleEl.textContent = step.title;
      copyEl.textContent = step.body;
      cta.textContent = step.cta;
      stepLabel.textContent = "Step " + (currentStep + 1) + " of " + STEPS.length;
      progressBar.style.width = ((currentStep + 1) / STEPS.length) * 100 + "%";
      stepEl.classList.remove("ia-step-enter");
      void stepEl.offsetWidth;
      stepEl.classList.add("ia-step-enter");
    }

    function setOpen(open) {
      panel.classList.toggle("is-open", open);
      panel.setAttribute("aria-hidden", open ? "false" : "true");
      launcher.setAttribute("aria-expanded", open ? "true" : "false");
      iconChat.style.display = open ? "none" : "block";
      iconClose.style.display = open ? "block" : "none";
      if (launcherLabel) launcherLabel.style.display = open ? "none" : "inline";
      if (open) {
        track("chat_open");
        renderStep();
      }
    }

    function showCalendly() {
      if (calendlyShown) return;
      calendlyShown = true;
      stepEl.style.display = "none";
      cta.style.display = "none";
      calWrap.classList.add("is-visible");
      track("calendly_view", { step: currentStep + 1 });
      loadCalendly(function () {
        window.Calendly.initInlineWidget({
          url: CALENDLY_URL,
          parentElement: calWrap,
        });
      });
    }

    function nextStep() {
      var step = STEPS[currentStep];
      track("booking_step", { step: currentStep + 1, label: step.title });
      if (step.final) {
        showCalendly();
        return;
      }
      currentStep += 1;
      renderStep();
    }

    launcher.addEventListener("click", function () {
      var open = !panel.classList.contains("is-open");
      setOpen(open);
    });

    closeBtn.addEventListener("click", function () {
      setOpen(false);
    });

    cta.addEventListener("click", nextStep);

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && panel.classList.contains("is-open")) {
        setOpen(false);
      }
    });

    renderStep();
  }

  loadCss();
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", buildWidget);
  } else {
    buildWidget();
  }
})();
