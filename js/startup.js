(() => {
    let e = !1;
    const t = () => {
      if (!e && window.innerWidth >= 600) {
        for (
          let e = 0,
          t = document.querySelectorAll(
            'head > link[href*="css"][media="screen and (min-width:37.5em)"]'
          );
          e < t.length;
          e++
        )
          t[e].removeAttribute('disabled');
        e = !0;
      }
    };
    t(),
      window.addEventListener('resize', t),
      'container' in document.documentElement.style ||
      fetch(
        document
          .querySelector('head > link[data-type="cq"]')
          .getAttribute('href')
      ).then((e) => {
        e.text().then((e) => {
          const t = document.createElement('style');
          document.head.appendChild(t),
            t.appendChild(document.createTextNode(e)),
            import(
              'https://d1di2lzuh97fh2.cloudfront.net/client/js.polyfill/container-query-polyfill.modern.js'
            ).then(() => {
              let e = setInterval(function () {
                document.body &&
                  (document.body.classList.add('cq-polyfill-loaded'),
                    clearInterval(e));
              }, 100);
            });
        });
      });
  })();

  window.checkAndChangeSvgColor = function (c) {
    try {
      var a = document.getElementById(c);
      if (a) {
        c = [
          ['border', 'borderColor'],
          ['outline', 'outlineColor'],
          ['color', 'color'],
        ];
        for (var h, b, d, f = [], e = 0, m = c.length; e < m; e++)
          if (
            (h = window
              .getComputedStyle(a)
            [c[e][1]].replace(/\s/g, '')
              .match(/^rgb[a]?\(([0-9]{1,3}),([0-9]{1,3}),([0-9]{1,3})/i))
          ) {
            b = '';
            for (var g = 1; 3 >= g; g++)
              b += ('0' + parseInt(h[g], 10).toString(16)).slice(-2);
            '0' === b.charAt(0) &&
              ((d = parseInt(b.substr(0, 2), 16)),
                (d = Math.max(16, d)),
                (b = d.toString(16) + b.slice(-4)));
            f.push(c[e][0] + '=' + b);
          }
        if (f.length) {
          var k = a.getAttribute('data-src'),
            l = k + (0 > k.indexOf('?') ? '?' : '&') + f.join('&');
          a.src != l && ((a.src = l), (a.outerHTML = a.outerHTML));
        }
      }
    } catch (n) { }
  };

//   Google tag manager
  window._gtmDataLayer = window._gtmDataLayer || [];
    (function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : '';
      j.async = true;
      j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, 'script', '_gtmDataLayer', 'GTM-542MMSL');