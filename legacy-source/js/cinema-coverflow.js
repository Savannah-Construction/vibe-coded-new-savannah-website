/**
 * 3D Cover Flow gallery for .cinema-scroll-section (arrows, auto-advance, item click).
 * Pointer drag and wheel are disabled so page scroll and cursor stay normal.
 * Call from DOMContentLoaded after markup exists.
 *
 * @param {object} [options]
 * @param {function(string): void} [options.onActivateCenter] — fired when user activates the
 *   centered slide (data-project-index string). Default: navigate to projects.html?p=
 */
(function (window) {
    'use strict';

    window.initSavannahCinemaCoverflow = function initSavannahCinemaCoverflow(options) {
        options = options || {};
        var onActivateCenter = typeof options.onActivateCenter === 'function'
            ? options.onActivateCenter
            : function (dataProjectIndexAttr) {
                window.location.href = 'projects.html?p=' + encodeURIComponent(String(dataProjectIndexAttr));
            };

        var section = document.getElementById('cinemaScrollSection');
        var viewport = document.getElementById('cinemaCoverflowViewport');
        var cinemaTrack = document.getElementById('cinemaTrack');
        if (!section || !viewport || !cinemaTrack) return;

        var items = Array.prototype.slice.call(cinemaTrack.querySelectorAll(':scope > .cinema-item'));
        if (!items.length) return;

        var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        var currentIndex = 0;
        var SPACING = 232;
        var Z_STEP = 72;
        var ROT_Y = 48;
        var SCALE_CENTER = 1.08;
        var SCALE_MIN = 0.72;
        var AUTO_MS = 3000;
        var autoIntervalId = null;
        var autoResumeId = null;

        function mod(n, m) {
            return ((n % m) + m) % m;
        }

        function stopAutoAdvance() {
            if (autoIntervalId) {
                clearInterval(autoIntervalId);
                autoIntervalId = null;
            }
            if (autoResumeId) {
                clearTimeout(autoResumeId);
                autoResumeId = null;
            }
        }

        function beginAutoAdvance() {
            stopAutoAdvance();
            if (reduceMotion) return;
            autoIntervalId = setInterval(function () {
                go(1);
            }, AUTO_MS);
        }

        function userEngaged() {
            stopAutoAdvance();
            if (reduceMotion) return;
            autoResumeId = setTimeout(function () {
                autoResumeId = null;
                beginAutoAdvance();
            }, AUTO_MS);
        }

        function go(delta) {
            currentIndex = mod(currentIndex + delta, items.length);
            layout();
        }

        function layout() {
            var n = items.length;
            items.forEach(function (el, i) {
                var d = i - currentIndex;
                var ad = Math.abs(d);
                if (reduceMotion) {
                    var flatX = d * 56;
                    el.style.opacity = ad > 4 ? '0' : '1';
                    el.style.pointerEvents = ad > 4 ? 'none' : 'auto';
                    el.style.transform = 'translateX(' + flatX + 'px) translateZ(0) rotateY(0deg) scale(' + (d === 0 ? 1 : 0.82) + ')';
                    el.style.zIndex = String(120 - ad);
                    el.classList.toggle('is-coverflow-center', d === 0);
                    return;
                }
                if (ad > 6) {
                    el.style.opacity = '0';
                    el.style.pointerEvents = 'none';
                    el.style.transform = 'translateX(' + (d * SPACING) + 'px) translateZ(-340px) rotateY(' + (d < 0 ? ROT_Y : -ROT_Y) + 'deg) scale(' + SCALE_MIN + ')';
                    el.style.zIndex = '0';
                    el.classList.remove('is-coverflow-center');
                    return;
                }
                var tx = d * SPACING;
                var tz = -ad * Z_STEP;
                var ry = d === 0 ? 0 : (d < 0 ? ROT_Y : -ROT_Y);
                var sc = d === 0 ? SCALE_CENTER : Math.max(SCALE_MIN, SCALE_CENTER - ad * 0.06);
                el.style.opacity = '1';
                el.style.pointerEvents = 'auto';
                el.style.transform = 'translateX(' + tx + 'px) translateZ(' + tz + 'px) rotateY(' + ry + 'deg) scale(' + sc + ')';
                el.style.zIndex = String(120 - ad);
                el.classList.toggle('is-coverflow-center', d === 0);
            });
            items.forEach(function (el, i) {
                el.setAttribute('tabindex', i === currentIndex ? '0' : '-1');
            });
            var st = document.getElementById('cinemaCoverflowStatus');
            if (st) {
                var cen = items[currentIndex];
                var tEl = cen && cen.querySelector('.cinema-item-title');
                var name = tEl ? tEl.textContent.trim() : '';
                st.textContent = name ? (name + ', ' + (currentIndex + 1) + ' of ' + n) : '';
            }
        }

        /* -1: not in tab order; arrows still call focus() so keyboard works without trapping scroll UX */
        viewport.setAttribute('tabindex', '-1');

        viewport.addEventListener('keydown', function (e) {
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                userEngaged();
                go(-1);
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                userEngaged();
                go(1);
            }
        });

        cinemaTrack.addEventListener('click', function (e) {
            var item = e.target.closest('.cinema-item[data-project-index]');
            if (!item) return;
            userEngaged();
            var i = items.indexOf(item);
            if (i === -1) return;
            if (i === currentIndex) {
                var idx = item.getAttribute('data-project-index');
                if (idx === null) return;
                onActivateCenter(idx);
            } else {
                currentIndex = i;
                layout();
            }
        });

        cinemaTrack.addEventListener('keydown', function (e) {
            if (e.key !== 'Enter' && e.key !== ' ') return;
            var item = e.target.closest('.cinema-item[data-project-index]');
            if (!item) return;
            var i = items.indexOf(item);
            if (i !== currentIndex) return;
            e.preventDefault();
            userEngaged();
            var idx = item.getAttribute('data-project-index');
            if (idx === null) return;
            onActivateCenter(idx);
        });

        var leftBtn = document.getElementById('cinemaArrowLeft');
        var rightBtn = document.getElementById('cinemaArrowRight');
        function wireArrow(btn, delta) {
            if (!btn) return;
            btn.addEventListener('pointerdown', function (e) {
                e.stopPropagation();
            });
            btn.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                userEngaged();
                go(delta);
                viewport.focus({ preventScroll: true });
            });
        }
        wireArrow(leftBtn, -1);
        wireArrow(rightBtn, 1);

        window.addEventListener('resize', function () {
            layout();
        });

        layout();
        beginAutoAdvance();
    };
})(typeof window !== 'undefined' ? window : this);
