(function () {
  var KEY = 'by-lang';
  var params = new URLSearchParams(location.search);
  var fromUrl = params.get('lang');

  function setLang(en, push) {
    document.body.classList.toggle('lang-en', en);
    document.documentElement.setAttribute('lang', en ? 'en' : 'zh-CN');
    try { localStorage.setItem(KEY, en ? 'en' : 'zh'); } catch (e) {}
    // 让站内链接带上语言参数，翻页后语言不丢
    document.querySelectorAll('a[href]').forEach(function (a) {
      var href = a.getAttribute('href');
      if (!href || /^(https?:|mailto:|tel:|#)/.test(href)) return;
      var base = href.split('?')[0];
      a.setAttribute('href', en ? base + '?lang=en' : base);
    });
    if (push && window.history && history.replaceState) {
      var u = new URL(location.href);
      if (en) u.searchParams.set('lang', 'en'); else u.searchParams.delete('lang');
      history.replaceState(null, '', u.toString());
    }
  }

  // 首屏语言：URL 参数优先，其次本地记忆
  var saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) {}
  var startEn = fromUrl === 'en' || (fromUrl !== 'zh' && saved === 'en');
  setLang(startEn, false);

  var btn = document.getElementById('langToggle');
  if (btn) {
    btn.addEventListener('click', function () {
      setLang(!document.body.classList.contains('lang-en'), true);
    });
  }

  // 页脚年份
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
