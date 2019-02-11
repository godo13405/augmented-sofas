'use strict';

import getUserIP from "./JS/getIP.js";

const IP = getUserIP(x => {
    console.log(x);
    new QRCode(document.querySelector(".qrcode"), {
            text: `${x}:3000`,
            width: 128,
            height: 128,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.L
    });
    return x;
});