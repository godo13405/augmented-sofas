'use strict';

import detectmob from "./JS/detectMobile.js";

let redir = "desktop";

if (detectmob()) {
    redir = "mobile";
}

window.location.replace(`${redir}.html`);