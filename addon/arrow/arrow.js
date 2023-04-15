"use strict";

if (
    document.querySelector("body.sfdcBody, body.ApexCSIPage, #auraLoadingBox") ||
    location.host.endsWith("visualforce.com")
) {
    // Salesforce ORG
    initButton();
}

function initButton() {
    const rootEl = document.createElement("div");
    rootEl.id = "insext";

    const btn = document.createElement("div");
    btn.classList.add("insext-btn");
    btn.tabIndex = 0;
    btn.accessKey = "i";
    btn.title = "Show Salesforce details (Alt+I / Shift+Alt+I)";

    const img = document.createElement("img");
    img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAPCAYAAADd/14OAAAA40lEQVQoz2P4//8/AzpWzGj6L59U/V8urgxMg/g4FUn6J/+X9E38LxWc8V8htR67IpCkuGfMfxCQjSpENRFFkXvk/1+/foGxQloDSD0DVkVfvnyBY7hCdEVv3rxBwXCFIIdKh2WDFT1+/BgDo1qd2fL/1q1bWDFcoW5xz3/Xppn/oycu/X/x4kUMDFeoWdD136R8wn+f9rlgxSdOnEDBKFajK96/fz8coyjEpnj79u1gjKEQXXFE/+L/Gzdu/G9WMfG/am4HZlzDFAf3LPwfOWEJWBPIwwzYUg9MsXXNFDAN4gMAmASShdkS4AcAAAAASUVORK5CYII=";

    btn.appendChild(img);
    rootEl.appendChild(btn);
    document.body.appendChild(rootEl);

    btn.addEventListener("click", function clickListener() {
        btn.removeEventListener("click", clickListener);
        console.log("button is clicked");
    });
}
