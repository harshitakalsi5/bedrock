/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function (Mozilla) {
    'use strict';

    function showAccountsForm() {
        document.querySelector('.main-content').classList.add('signed-out');

        Mozilla.Client.getFirefoxDetails(function(data) {
            Mozilla.FxaIframe.init({
                distribution: data.distribution,
                gaEventName: 'whatsnew-fxa'
            });
        });
    }

    function showMobilePromo() {
        document.querySelector('.main-content').classList.add('signed-in');
    }

    Mozilla.UITour.getConfiguration('sync', function(config) {
        if (config.setup) {
            showMobilePromo();
        } else {
            showAccountsForm();
        }
    });

})(window.Mozilla);
