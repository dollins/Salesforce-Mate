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
    img.src =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAPCAYAAADd/14OAAAA40lEQVQoz2P4//8/AzpWzGj6L59U/V8urgxMg/g4FUn6J/+X9E38LxWc8V8htR67IpCkuGfMfxCQjSpENRFFkXvk/1+/foGxQloDSD0DVkVfvnyBY7hCdEVv3rxBwXCFIIdKh2WDFT1+/BgDo1qd2fL/1q1bWDFcoW5xz3/Xppn/oycu/X/x4kUMDFeoWdD136R8wn+f9rlgxSdOnEDBKFajK96/fz8coyjEpnj79u1gjKEQXXFE/+L/Gzdu/G9WMfG/am4HZlzDFAf3LPwfOWEJWBPIwwzYUg9MsXXNFDAN4gMAmASShdkS4AcAAAAASUVORK5CYII=";

    btn.appendChild(img);
    rootEl.appendChild(btn);
    document.body.appendChild(rootEl);

    btn.addEventListener("click", function clickListener() {
        btn.removeEventListener("click", clickListener);
        loadPopup(btn);
        console.log("button is clicked");
    });
    let popupSrc = chrome.runtime.getURL("popup.html");
    let popupEl = document.createElement("iframe");
    popupEl.className = "insext-popup";
    popupEl.src = popupSrc;
    addEventListener("message", (e) => {
        if (e.source != popupEl.contentWindow) {
            return;
        }
        if (e.data.insextInitRequest) {
            popupEl.contentWindow.postMessage(
                {
                    insextInitResponse: true,
                    sfHost,
                    inDevConsole: !!document.querySelector("body.ApexCSIPage"),
                    inLightning: !!document.querySelector("#auraLoadingBox"),
                    inInspector
                },
                "*"
            );
        }
        if (e.data.insextLoaded) {
            openPopup();
        }
        if (e.data.insextClosePopup) {
            closePopup();
        }
        if (e.data.insextShowStdPageDetails) {
            showStdPageDetails(e.data.insextData, e.data.insextAllFieldSetupLinks);
        }
    });
    rootEl.appendChild(popupEl);
}

function loadPopup(btn) {
    btn.addEventListener("click", () => {
        if (!rootEl.classList.contains("insext-active")) {
            openPopup();
        } else {
            closePopup();
        }
    });
}

function openPopup() {
    popupEl.contentWindow.postMessage({ insextUpdateRecordId: true, locationHref: location.href }, "*");
    rootEl.classList.add("insext-active");
    // These event listeners are only enabled when the popup is active to avoid interfering with Salesforce when not using the inspector
    addEventListener("click", outsidePopupClick);
    popupEl.focus();
}
function closePopup() {
    rootEl.classList.remove("insext-active");
    removeEventListener("click", outsidePopupClick);
    popupEl.blur();
}
function outsidePopupClick(e) {
    // Close the popup when clicking outside it
    if (!rootEl.contains(e.target)) {
        closePopup();
    }
}
