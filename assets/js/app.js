/**
 * Learning Chinese Web Reader — Core Application
 * Interactive Markdown Rendering, Chinese TTS, Quiz Accordion, Dark Mode & Progress Tracker
 */

(function () {
  "use strict";

  // App State
  const state = {
    currentFile: null,
    theme: localStorage.getItem("lc_theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"),
    fontSize: parseInt(localStorage.getItem("lc_font_size")) || 16,
    showPinyin: localStorage.getItem("lc_show_pinyin") !== "false",
    showHanViet: localStorage.getItem("lc_show_hanviet") !== "false",
    completedLessons: JSON.parse(localStorage.getItem("lc_completed_lessons") || "[]"),
    searchQuery: "",
    flatLessons: []
  };

  // DOM Elements
  const DOM = {
    app: document.getElementById("app"),
    sidebar: document.getElementById("sidebar"),
    sidebarNav: document.getElementById("sidebarNav"),
    sidebarBackdrop: document.getElementById("sidebarBackdrop"),
    menuToggleBtn: document.getElementById("menuToggleBtn"),
    themeToggleBtn: document.getElementById("themeToggleBtn"),
    fontSizeIncreaseBtn: document.getElementById("fontSizeIncreaseBtn"),
    fontSizeDecreaseBtn: document.getElementById("fontSizeDecreaseBtn"),
    pinyinToggleCheckbox: document.getElementById("pinyinToggleCheckbox"),
    hanvietToggleCheckbox: document.getElementById("hanvietToggleCheckbox"),
    markCompletedBtn: document.getElementById("markCompletedBtn"),
    searchInput: document.getElementById("searchInput"),
    progressText: document.getElementById("progressText"),
    progressBarFill: document.getElementById("progressBarFill"),
    contentBody: document.getElementById("contentBody"),
    tocList: document.getElementById("tocList"),
    lessonNavContainer: document.getElementById("lessonNavContainer")
  };

  // Initialize Flattened Lesson List for fast indexing & Next/Prev navigation
  function initFlatLessons() {
    state.flatLessons = [];
    if (!COURSE_MANIFEST || !COURSE_MANIFEST.groups) return;

    COURSE_MANIFEST.groups.forEach(group => {
      group.items.forEach(item => {
        state.flatLessons.push({
          ...item,
          groupTitle: group.title,
          folder: group.folder
        });
      });
    });
  }

  // Set Theme
  function applyTheme(theme) {
    state.theme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("lc_theme", theme);
    if (DOM.themeToggleBtn) {
      DOM.themeToggleBtn.innerHTML = theme === "dark" 
        ? "☀️ <span>Sáng</span>" 
        : "🌙 <span>Tối</span>";
    }
  }

  // Set Font Size
  function applyFontSize(size) {
    state.fontSize = Math.min(Math.max(size, 14), 22);
    document.documentElement.style.setProperty("--content-font-size", state.fontSize + "px");
    localStorage.setItem("lc_font_size", state.fontSize);
  }

  // Update Progress Tracker
  function updateProgress() {
    const total = state.flatLessons.length;
    const completed = state.completedLessons.length;
    const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

    if (DOM.progressText) {
      DOM.progressText.textContent = `${completed} / ${total} bài (${percent}%)`;
    }
    if (DOM.progressBarFill) {
      DOM.progressBarFill.style.width = `${percent}%`;
    }

    // Update Mark Completed Button
    if (DOM.markCompletedBtn && state.currentFile) {
      const isDone = state.completedLessons.includes(state.currentFile);
      if (isDone) {
        DOM.markCompletedBtn.classList.add("is-done");
        DOM.markCompletedBtn.innerHTML = "✅ <span>Đã hoàn thành</span>";
      } else {
        DOM.markCompletedBtn.classList.remove("is-done");
        DOM.markCompletedBtn.innerHTML = "⚪ <span>Đánh dấu đã học</span>";
      }
    }
  }

  // Chinese Text-To-Speech (Native Web Speech API)
  function speakChinese(text) {
    if (!("speechSynthesis" in window)) {
      console.warn("Trình duyệt không hỗ trợ Web Speech Synthesis.");
      return;
    }
    window.speechSynthesis.cancel(); // Stop any ongoing speech
    const cleanText = text.replace(/[^\u4e00-\u9fa5a-zA-Z0-9，。！？、]/g, " ").trim();
    if (!cleanText) return;

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = "zh-CN";
    utterance.rate = 0.85; // slightly slower for language learners

    // Attempt to pick a high quality Chinese voice if available
    const voices = window.speechSynthesis.getVoices();
    const zhVoice = voices.find(v => v.lang.includes("zh") || v.lang.includes("cmn"));
    if (zhVoice) utterance.voice = zhVoice;

    window.speechSynthesis.speak(utterance);
  }

  // Build Sidebar HTML
  function renderSidebar() {
    if (!DOM.sidebarNav) return;
    const query = state.searchQuery.toLowerCase().trim();

    let html = "";
    COURSE_MANIFEST.groups.forEach((group, gIdx) => {
      const filteredItems = group.items.filter(item => {
        if (!query) return true;
        return item.title.toLowerCase().includes(query) ||
               item.file.toLowerCase().includes(query) ||
               (item.badge && item.badge.toLowerCase().includes(query));
      });

      if (filteredItems.length === 0) return;

      html += `
        <div class="nav-group" id="navGroup-${group.id}">
          <div class="nav-group-header" onclick="window.toggleNavGroup('${group.id}')">
            <span>${group.title}</span>
            <span class="nav-group-arrow">▼</span>
          </div>
          <ul class="nav-items">
      `;

      filteredItems.forEach(item => {
        const isActive = state.currentFile === item.file;
        const isCompleted = state.completedLessons.includes(item.file);
        html += `
          <li class="nav-item">
            <a href="#/${item.file}" 
               class="nav-link ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}" 
               data-file="${item.file}" 
               title="${item.title}">
              <span class="nav-item-icon">${item.icon || '📄'}</span>
              <span class="nav-item-title">${item.title}</span>
              ${isCompleted ? '<span class="nav-check-icon" title="Đã học xong">✓</span>' : ''}
              ${item.badge ? `<span class="nav-link-badge">${item.badge}</span>` : ''}
            </a>
          </li>
        `;
      });

      html += `
          </ul>
        </div>
      `;
    });

    if (!html) {
      html = `<div style="padding: 1.5rem; text-align: center; color: var(--text-muted); font-size: 0.9rem;">Không tìm thấy chủ đề nào phù hợp với từ khóa "${query}".</div>`;
    }

    DOM.sidebarNav.innerHTML = html;
  }

  // Global toggle for sidebar group collapse
  window.toggleNavGroup = function (groupId) {
    const el = document.getElementById(`navGroup-${groupId}`);
    if (el) el.classList.toggle("collapsed");
  };

  // Enhance Rendered Markdown DOM (Tables, TTS, Quiz Accordions)
  function enhanceRenderedMarkdown(container) {
    // 1. Wrap all tables in responsive .table-wrapper
    const tables = container.querySelectorAll("table");
    tables.forEach(table => {
      const wrapper = document.createElement("div");
      wrapper.className = "table-wrapper";
      table.parentNode.insertBefore(wrapper, table);
      wrapper.appendChild(table);

      // Make Chinese characters in 2nd column clickable for TTS
      const rows = table.querySelectorAll("tbody tr");
      rows.forEach(tr => {
        const hanziTd = tr.querySelector("td:nth-child(2)");
        if (hanziTd && hanziTd.textContent.trim()) {
          const hanzi = hanziTd.textContent.trim();
          hanziTd.classList.add("hanzi-speakable");
          hanziTd.title = `Nhấp để nghe phát âm: ${hanzi}`;
          hanziTd.addEventListener("click", () => speakChinese(hanzi));
        }
      });
    });

    // 2. Identify Chinese sentences in blockquotes & lists to attach speak buttons
    const sentences = container.querySelectorAll("li, blockquote p, p");
    sentences.forEach(el => {
      // If element contains Hanzi patterns like "Chữ Hán: ..." or Chinese quotes
      const text = el.textContent;
      const hanziMatch = text.match(/[\u4e00-\u9fa5]{2,}/);
      if (hanziMatch && !el.querySelector(".tts-speaker-btn") && !el.closest("table")) {
        const speaker = document.createElement("button");
        speaker.className = "tts-speaker-btn";
        speaker.type = "button";
        speaker.title = "Phát âm tiếng Trung";
        speaker.innerHTML = "🔊";
        speaker.addEventListener("click", (e) => {
          e.stopPropagation();
          speakChinese(text);
        });
        el.appendChild(speaker);
      }
    });

    // 3. Transform Section 8 (Quiz & Answer Key) into an Interactive Test Accordion
    const h3Elements = Array.from(container.querySelectorAll("h2, h3, h4"));
    h3Elements.forEach(h => {
      const text = h.textContent.toLowerCase();
      if (text.includes("đáp án") || text.includes("phân tích chi tiết") || text.includes("giải thích chi tiết")) {
        // Collect following siblings until next major heading
        const answerNodes = [];
        let curr = h.nextElementSibling;
        while (curr && !["H1", "H2"].includes(curr.tagName)) {
          const next = curr.nextElementSibling;
          answerNodes.push(curr);
          curr = next;
        }

        if (answerNodes.length > 0) {
          const card = document.createElement("div");
          card.className = "quiz-answer-card";

          const toggleBtn = document.createElement("button");
          toggleBtn.className = "quiz-answer-toggle";
          toggleBtn.type = "button";
          toggleBtn.innerHTML = `
            <span>👁️ Xem Đáp Án & Phân Tích Chi Tiết (Tự làm trước khi xem)</span>
            <span class="quiz-toggle-arrow">▼</span>
          `;

          const body = document.createElement("div");
          body.className = "quiz-answer-body";
          answerNodes.forEach(node => body.appendChild(node));

          toggleBtn.addEventListener("click", () => {
            card.classList.toggle("open");
          });

          card.appendChild(toggleBtn);
          card.appendChild(body);
          h.parentNode.insertBefore(card, h.nextSibling);
        }
      }
    });
  }

  // Build Right-Hand Table of Contents
  function generateTOC(container) {
    if (!DOM.tocList) return;
    const headings = container.querySelectorAll("h2, h3");
    if (headings.length === 0) {
      DOM.tocList.innerHTML = `<li style="color: var(--text-muted); font-size: 0.8rem;">Không có mục lục</li>`;
      return;
    }

    let tocHtml = "";
    headings.forEach((h, index) => {
      const id = "heading-" + index;
      h.id = id;
      const depth = h.tagName === "H2" ? "depth-2" : "depth-3";
      const title = h.textContent.replace("🔊", "").trim();
      tocHtml += `
        <li class="toc-item ${depth}">
          <a href="#${id}" onclick="event.preventDefault(); document.getElementById('${id}').scrollIntoView({ behavior: 'smooth' });">
            ${title}
          </a>
        </li>
      `;
    });

    DOM.tocList.innerHTML = tocHtml;
  }

  // Render Next / Previous Navigation Buttons
  function renderLessonNavigation(currentFile) {
    if (!DOM.lessonNavContainer) return;
    const index = state.flatLessons.findIndex(item => item.file === currentFile);
    if (index === -1) {
      DOM.lessonNavContainer.innerHTML = "";
      return;
    }

    const prev = index > 0 ? state.flatLessons[index - 1] : null;
    const next = index < state.flatLessons.length - 1 ? state.flatLessons[index + 1] : null;

    let html = `<div class="lesson-navigation">`;
    if (prev) {
      html += `
        <a href="#/${prev.file}" class="nav-pager-btn prev">
          <span class="pager-label">← Bài trước</span>
          <span class="pager-title">${prev.title}</span>
        </a>
      `;
    } else {
      html += `<div></div>`;
    }

    if (next) {
      html += `
        <a href="#/${next.file}" class="nav-pager-btn next">
          <span class="pager-label">Bài tiếp theo →</span>
          <span class="pager-title">${next.title}</span>
        </a>
      `;
    }
    html += `</div>`;

    DOM.lessonNavContainer.innerHTML = html;
  }

  // Load and Render Markdown Document
  async function loadDocument(filePath) {
    state.currentFile = filePath;
    renderSidebar();
    updateProgress();

    DOM.contentBody.innerHTML = `
      <div style="text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
        <div style="font-size: 2rem; margin-bottom: 0.75rem;">⏳</div>
        <div>Đang tải nội dung bài học...</div>
      </div>
    `;

    try {
      // Fetch markdown file from relative path
      const res = await fetch(filePath);
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}: Không thể tải file ${filePath}`);
      }
      const markdown = await res.text();

      // Configure marked
      if (typeof marked !== "undefined") {
        marked.setOptions({
          gfm: true,
          breaks: true
        });
        const html = marked.parse(markdown);
        DOM.contentBody.innerHTML = html;
      } else {
        DOM.contentBody.innerHTML = `<pre style="white-space: pre-wrap;">${markdown}</pre>`;
      }

      enhanceRenderedMarkdown(DOM.contentBody);
      generateTOC(DOM.contentBody);
      renderLessonNavigation(filePath);

      // Scroll to top
      window.scrollTo(0, 0);

      // Close mobile drawer if open
      if (DOM.sidebar) DOM.sidebar.classList.remove("open");
      if (DOM.sidebarBackdrop) DOM.sidebarBackdrop.classList.remove("active");

      // Update browser title
      const currentLesson = state.flatLessons.find(item => item.file === filePath);
      document.title = currentLesson ? `${currentLesson.title} — Học Tiếng Trung` : "Học Tiếng Trung Toàn Diện";

    } catch (err) {
      console.error(err);
      DOM.contentBody.innerHTML = `
        <div style="padding: 2.5rem; background: var(--brand-red-light); border: 1px solid var(--brand-red); border-radius: var(--radius-md); color: var(--brand-red);">
          <h2 style="margin-bottom: 0.5rem;">⚠️ Lỗi Tải Bài Học</h2>
          <p>Không thể mở file: <code>${filePath}</code></p>
          <p style="font-size: 0.85rem; margin-top: 0.5rem; color: var(--text-muted);">${err.message}</p>
          <div style="margin-top: 1rem;">
            <a href="#/TiengTrungTheoChuDe/0-tong-quan.md" class="action-btn" style="background: var(--bg-surface);">Trở về trang tổng quan</a>
          </div>
        </div>
      `;
    }
  }

  // Handle URL Hash Navigation
  function handleRoute() {
    const hash = window.location.hash.slice(2); // remove '#/'
    if (hash && hash.endsWith(".md")) {
      loadDocument(decodeURIComponent(hash));
    } else {
      // Default initial lesson
      const defaultLesson = "TiengTrungTheoChuDe/0-tong-quan.md";
      window.location.hash = `#/${defaultLesson}`;
    }
  }

  // Event Listeners Registration
  function registerEventListeners() {
    // Route changes
    window.addEventListener("hashchange", handleRoute);

    // Theme Toggle
    if (DOM.themeToggleBtn) {
      DOM.themeToggleBtn.addEventListener("click", () => {
        applyTheme(state.theme === "dark" ? "light" : "dark");
      });
    }

    // Font Size Adjusters
    if (DOM.fontSizeIncreaseBtn) {
      DOM.fontSizeIncreaseBtn.addEventListener("click", () => {
        applyFontSize(state.fontSize + 1);
      });
    }
    if (DOM.fontSizeDecreaseBtn) {
      DOM.fontSizeDecreaseBtn.addEventListener("click", () => {
        applyFontSize(state.fontSize - 1);
      });
    }

    // Pinyin & Hán Việt Toggles
    if (DOM.pinyinToggleCheckbox) {
      DOM.pinyinToggleCheckbox.checked = state.showPinyin;
      DOM.pinyinToggleCheckbox.addEventListener("change", (e) => {
        state.showPinyin = e.target.checked;
        localStorage.setItem("lc_show_pinyin", state.showPinyin);
        document.body.classList.toggle("hide-pinyin", !state.showPinyin);
      });
      document.body.classList.toggle("hide-pinyin", !state.showPinyin);
    }

    if (DOM.hanvietToggleCheckbox) {
      DOM.hanvietToggleCheckbox.checked = state.showHanViet;
      DOM.hanvietToggleCheckbox.addEventListener("change", (e) => {
        state.showHanViet = e.target.checked;
        localStorage.setItem("lc_show_hanviet", state.showHanViet);
        document.body.classList.toggle("hide-hanviet", !state.showHanViet);
      });
      document.body.classList.toggle("hide-hanviet", !state.showHanViet);
    }

    // Mark Completed Button
    if (DOM.markCompletedBtn) {
      DOM.markCompletedBtn.addEventListener("click", () => {
        if (!state.currentFile) return;
        const idx = state.completedLessons.indexOf(state.currentFile);
        if (idx === -1) {
          state.completedLessons.push(state.currentFile);
        } else {
          state.completedLessons.splice(idx, 1);
        }
        localStorage.setItem("lc_completed_lessons", JSON.stringify(state.completedLessons));
        updateProgress();
        renderSidebar();
      });
    }

    // Search Input
    if (DOM.searchInput) {
      DOM.searchInput.addEventListener("input", (e) => {
        state.searchQuery = e.target.value;
        renderSidebar();
      });
    }

    // Mobile Menu Toggle
    if (DOM.menuToggleBtn) {
      DOM.menuToggleBtn.addEventListener("click", () => {
        DOM.sidebar.classList.toggle("open");
        DOM.sidebarBackdrop.classList.toggle("active");
      });
    }
    if (DOM.sidebarBackdrop) {
      DOM.sidebarBackdrop.addEventListener("click", () => {
        DOM.sidebar.classList.remove("open");
        DOM.sidebarBackdrop.classList.remove("active");
      });
    }
  }

  // Bootstrap Application
  function init() {
    initFlatLessons();
    applyTheme(state.theme);
    applyFontSize(state.fontSize);
    registerEventListeners();
    renderSidebar();
    updateProgress();
    handleRoute();
  }

  // Run on DOM Ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
