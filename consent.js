/**
 * Analytics consent bar for WordleAZ.
 *
 * Why this file exists
 * --------------------
 * index.html loads Google Analytics 4 with Consent Mode v2 and sets every
 * consent flag to "denied" by default, so nothing is stored and no event leaves
 * the browser until the visitor explicitly agrees.  This script is what asks
 * for that agreement.
 *
 * The decision is remembered in localStorage under `analyticsConsent`:
 *
 *   "granted"  -> analytics storage is granted on every later visit
 *   "denied"   -> nothing is stored; the bar is never shown again
 *   (missing)  -> the bar is displayed and the visitor has to choose
 *
 * Failure behaviour: if the bar element is missing, or if localStorage is not
 * available (Safari private mode), the script does nothing at all.  The site
 * keeps working and analytics simply stays denied.
 *
 * Withdrawing consent: delete the `analyticsConsent` key from localStorage and
 * reload the page - the bar will be shown again.
 */

(function () {
  'use strict';

  /** localStorage key holding the visitor's decision. */
  var STORAGE_KEY = 'analyticsConsent';

  /** @type {!Array<string>} possible values of STORAGE_KEY */
  var GRANTED = 'granted';
  var DENIED = 'denied';

  var bar = document.getElementById('consent-bar');
  if (!bar) {
    return;
  }

  /**
   * Read the saved decision.  Wrapped because some browsers throw on
   * localStorage access instead of returning null.
   *
   * @return {?string}
   */
  function readDecision() {
    try {
      return window.localStorage.getItem(STORAGE_KEY);
    } catch (error) {
      return null;
    }
  }

  /**
   * Persist the decision.  Errors are ignored on purpose: a visitor who cannot
   * store the choice will simply be asked again next time.
   *
   * @param {string} value
   * @return {undefined}
   */
  function saveDecision(value) {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch (error) {
      /* nothing we can do - not worth breaking the page over */
    }
  }

  /**
   * Tell Google Analytics that the visitor agreed.  Only `analytics_storage`
   * is granted: the game uses no advertising features at all.
   *
   * @return {undefined}
   */
  function grantAnalytics() {
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied'
      });
    }
  }

  /**
   * Keep analytics denied.  Called explicitly on refusal so the state is
   * recorded even if the default was only applied by the earlier script tag.
   *
   * @return {undefined}
   */
  function denyAnalytics() {
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied'
      });
    }
  }

  var decision = readDecision();

  // A returning visitor already made a choice: apply it without showing the bar.
  if (decision === GRANTED) {
    grantAnalytics();
    return;
  }
  if (decision === DENIED) {
    return;
  }

  // First visit - ask.
  bar.hidden = false;

  var acceptButton = document.getElementById('consent-accept');
  var declineButton = document.getElementById('consent-decline');

  if (acceptButton) {
    acceptButton.addEventListener('click', function () {
      saveDecision(GRANTED);
      grantAnalytics();
      bar.hidden = true;
    });
  }

  if (declineButton) {
    declineButton.addEventListener('click', function () {
      saveDecision(DENIED);
      denyAnalytics();
      bar.hidden = true;
    });
  }
})();
