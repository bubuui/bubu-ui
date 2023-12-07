// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

export const loadIcon = () => {
  !(function (e) {
    let t,
      n,
      d,
      o,
      i,
      a,
      r =
        '<svg><symbol id="left" viewBox="0 0 48 48" fill="none"><path fill-opacity=".01" fill="#fff" d="M0 0h48v48H0z"/><path stroke-linejoin="round" stroke-linecap="round" stroke-width="4" stroke="currentColor" d="M31 36 19 24l12-12" data-follow-stroke="currentColor"/></symbol><symbol id="right" viewBox="0 0 48 48" fill="none"><path fill-opacity=".01" fill="#fff" d="M0 0h48v48H0z"/><path stroke-linejoin="round" stroke-linecap="round" stroke-width="4" stroke="currentColor" d="m19 12 12 12-12 12" data-follow-stroke="currentColor"/></symbol><symbol id="zoom-out" viewBox="0 0 48 48" fill="none"><path fill-opacity=".01" fill="#fff" d="M0 0h48v48H0z"/><path stroke-linejoin="round" stroke-width="4" stroke="currentColor" d="M21 38c9.389 0 17-7.611 17-17S30.389 4 21 4 4 11.611 4 21s7.611 17 17 17Z" data-follow-stroke="currentColor"/><path stroke-linejoin="round" stroke-linecap="round" stroke-width="4" stroke="currentColor" d="M15 21h12m6.222 12.222 8.485 8.485" data-follow-stroke="currentColor"/></symbol><symbol id="zoom-in" viewBox="0 0 48 48" fill="none"><path fill-opacity=".01" fill="#fff" d="M0 0h48v48H0z"/><path stroke-linejoin="round" stroke-width="4" stroke="currentColor" d="M21 38c9.389 0 17-7.611 17-17S30.389 4 21 4 4 11.611 4 21s7.611 17 17 17Z" data-follow-stroke="currentColor"/><path stroke-linejoin="round" stroke-linecap="round" stroke-width="4" stroke="currentColor" d="M21 15v12m-6-6h12m6.222 12.222 8.485 8.485" data-follow-stroke="currentColor"/></symbol><symbol id="download-four" viewBox="0 0 48 48" fill="none"><path stroke-linejoin="round" stroke-linecap="round" stroke-width="4" stroke="currentColor" d="M24 29 12 17h8V6h8v11h8L24 29Z" clip-rule="evenodd" data-follow-stroke="currentColor"/><path stroke-linecap="round" stroke-width="4" stroke="currentColor" d="M42 37H6m28 7H14" data-follow-stroke="currentColor"/></symbol><symbol id="full-screen" viewBox="0 0 48 48" fill="none"><path stroke-linejoin="round" stroke-linecap="round" stroke-width="4" stroke="currentColor" d="M33 6h9v9m0 18v9h-9m-18 0H6v-9m0-18V6h9" data-follow-stroke="currentColor"/></symbol><symbol id="close" viewBox="0 0 48 48" fill="none"><path fill-opacity=".01" fill="#fff" d="M0 0h48v48H0z"/><path stroke-linejoin="round" stroke-linecap="round" stroke-width="4" stroke="currentColor" d="m8 8 32 32M8 40 40 8" data-follow-stroke="currentColor"/></symbol></svg>';
    function c() {
      i || ((i = !0), d());
    }
    (t = function () {
      let e, t, n;
      ((n = document.createElement('div')).innerHTML = r),
        (r = null),
        (t = n.getElementsByTagName('svg')[0]) &&
          (t.setAttribute('aria-hidden', 'true'),
          (t.style.position = 'absolute'),
          (t.style.width = 0),
          (t.style.height = 0),
          (t.style.overflow = 'hidden'),
          (e = t),
          (n = document.body).firstChild
            ? (t = n.firstChild).parentNode.insertBefore(e, t)
            : n.appendChild(e));
    }),
      document.addEventListener
        ? ['complete', 'loaded', 'interactive'].indexOf(document.readyState) >
          -1
          ? setTimeout(t, 0)
          : ((n = function () {
              document.removeEventListener('DOMContentLoaded', n, !1), t();
            }),
            document.addEventListener('DOMContentLoaded', n, !1))
        : document.attachEvent &&
          ((d = t),
          (o = e.document),
          (i = !1),
          (a = function () {
            try {
              o.documentElement.doScroll('left');
            } catch (e) {
              return void setTimeout(a, 50);
            }
            c();
          })(),
          (o.onreadystatechange = function () {
            'complete' == o.readyState && ((o.onreadystatechange = null), c());
          }));
  })(window);
};
