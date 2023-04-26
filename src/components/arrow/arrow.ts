import { logMessage } from '@/credentialsModule';

if (
    document.querySelector("body.sfdcBody, body.ApexCSIPage, #auraLoadingBox") ||
    location.host.endsWith("visualforce.com")
) {
    // We are in a Salesforce org
    // passing in location.href resulted in wrong cookies being retrieved for .mil domains.  location.hostname works for all salesforce domains.
    chrome.runtime.sendMessage({ message: "getSfHost", url: location.hostname }, (sfHost) => {
        if (sfHost) {
            console.log(JSON.stringify(sfHost));
            initButton(sfHost);
        }
    });
}

function initButton(sfHost) {
    const rootEl = document.createElement("div");
    const inInspector = false;
    rootEl.id = "arrow";

    const btn = document.createElement("div");
    btn.classList.add("arrow-btn");
    btn.tabIndex = 0;
    btn.accessKey = "i";
    btn.title = "Show Salesforce details (Alt+I / Shift+Alt+I)";

    const img = document.createElement("img");
    img.src =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAAxHpUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHjabVBBEsMgCLz7ij5BWFR8jmnSmf6gzy9GkolNd4YVWWZFwvZ5v8Kjg0mCpKK55hwNUqVys0TjQNuZouy8A+IazfVwCmwl9M5x1ez9R51Og3E0y9LFSJ8uLLNQ/QHWHyP2yfpEPV/dqLoReAjkBm18K+aq5fqFZYszdEToJDqPfbsX296a7B0wbyBEY4ylgNEDAc0SMSYkayQUy7vYkJDdzBbyb08HwhfnclkYa3fxnQAAAYRpQ0NQSUNDIHByb2ZpbGUAAHicfZE9SMNAGIbfppWKVDq0g4hDhupkFy3iWKtQhAqhVmjVweTSP2jSkqS4OAquBQd/FqsOLs66OrgKguAPiKuLk6KLlPhdUmgR4x3HPbz3vS933wFCu8Y0M5AENN0ysumUmC+sisFXBBCmGUFCZmZjTpIy8Bxf9/Dx/S7Os7zr/hzDatFkgE8kTrKGYRFvEM9sWg3O+8RRVpFV4nPiSYMuSPzIdcXlN85lhwWeGTVy2XniKLFY7mOlj1nF0IgTxDFV0ylfyLusct7irNWarHtP/sJQUV9Z5jqtMaSxiCVIEKGgiSpqsBCnXSfFRJbOUx7+UccvkUshVxWMHAuoQ4Ps+MH/4HdvzdL0lJsUSgEDL7b9MQ4Ed4FOy7a/j227cwL4n4Erveevt4HZT9JbPS12BIS3gYvrnqbsAZc7wMhTQzZkR/LTEkol4P2MvqkARG6BoTW3b91znD4AOepV5gY4OAQmypS97vHuwf6+/VvT7d8PoUVyuQOOO/QAAA16aVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA0LjQuMC1FeGl2MiI+CiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICB4bWxuczpHSU1QPSJodHRwOi8vd3d3LmdpbXAub3JnL3htcC8iCiAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgeG1wTU06RG9jdW1lbnRJRD0iZ2ltcDpkb2NpZDpnaW1wOjk3NTYzOTYwLTE3NTUtNDNhOS05M2IwLTZkOGNlN2ViM2FhZCIKICAgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDplZjUwNGE3MC1mMGRhLTQyNDQtOTdhZi0zN2UxYWE5OGE4NTYiCiAgIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphMjY0YWQ2MS1lZjFiLTRlOGEtODQwMi03NzAwYWJlNGE1Y2MiCiAgIEdJTVA6QVBJPSIyLjAiCiAgIEdJTVA6UGxhdGZvcm09Ik1hYyBPUyIKICAgR0lNUDpUaW1lU3RhbXA9IjE2ODE1NzIwNjk0NTIzMzYiCiAgIEdJTVA6VmVyc2lvbj0iMi4xMC4zNCIKICAgZGM6Rm9ybWF0PSJpbWFnZS9wbmciCiAgIHRpZmY6T3JpZW50YXRpb249IjEiCiAgIHhtcDpDcmVhdG9yVG9vbD0iR0lNUCAyLjEwIgogICB4bXA6TWV0YWRhdGFEYXRlPSIyMDIzOjA0OjE1VDE3OjIwOjU2KzAyOjAwIgogICB4bXA6TW9kaWZ5RGF0ZT0iMjAyMzowNDoxNVQxNzoyMDo1NiswMjowMCI+CiAgIDx4bXBNTTpIaXN0b3J5PgogICAgPHJkZjpTZXE+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InNhdmVkIgogICAgICBzdEV2dDpjaGFuZ2VkPSIvIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmQ1NzVkNWMyLWU2ZTQtNDBiMi05MWMzLTY1YWZlNTgxYjk1NSIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iR2ltcCAyLjEwIChNYWMgT1MpIgogICAgICBzdEV2dDp3aGVuPSIyMDIzLTA0LTE1VDE3OjIxOjA5KzAyOjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/PggB3vIAAAAGYktHRAD/AP8A/6C9p5MAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfnBA8PFQkvQy6BAAABI0lEQVRo3u3awQ3CMAwFUDtlMJbohWksMQYbMEX3Koq5cCkSUmgc+yfKX6B9SurGbolmZmZqwgg3oap6uClm7hb0jalFMSKmBrWgYj6g+7ZtCr9CJZizK5RQMV0UhX8w8EXBA+MG8sK4gDwxzUHemKagCEwzUBSmCSgSYw6KxpiCEDBmR59SzL6/bi0xZitTkpzzA77dLcVcRS7DYNb1uQyDEZFE+FEeZmWIiEQklYCINKSa8dktF/2+MX+xoqK4tjigoaovhIYyuQgSyv1w2hoV0j60RIU1ePD90DkUJSJWeFAkCmKMZYmCGTRaoaBGwRYouGF9LcqtASst06qUO2kMfbrd+UnSc/tBP0NdH30stl+XP178QsGPi0vTxbh4ZuaYN8YtumGaC8nZAAAAAElFTkSuQmCC";

    btn.appendChild(img);
    rootEl.appendChild(btn);
    document.body.appendChild(rootEl);

    let popupSrc = chrome.runtime.getURL("side-menu/side-menu.html");
    let popupEl = document.createElement("iframe");

    popupEl.className = "arrow-popup";
    popupEl.src = popupSrc;

    addEventListener("message", (e) => {
        if (e.source != popupEl.contentWindow) {
            return;
        }
        if (e.data.arrowInitRequest) {
            popupEl.contentWindow.postMessage(
                {
                    arrowInitResponse: true,
                    sfHost,
                    inDevConsole: !!document.querySelector("body.ApexCSIPage"),
                    inLightning: !!document.querySelector("#auraLoadingBox"),
                    inInspector
                },
                "*"
            );
        }
        if (e.data.arrowLoaded) {
            openPopup();
        }
        if (e.data.arrowClosePopup) {
            closePopup();
        }
        if (e.data.arrowShowStdPageDetails) {
            //showStdPageDetails(e.data.arrowData, e.data.arrowAllFieldSetupLinks);
        }
    });

    btn.addEventListener("click", function clickListener() {
        btn.removeEventListener("click", clickListener);
        loadPopup(btn);
        // Hack to open on the load of the page.
        openPopup();
    });

    rootEl.appendChild(popupEl);

    function loadPopup(btn) {
        btn.addEventListener("click", () => {
            if (!rootEl.classList.contains("arrow-active")) {
                openPopup();
            } else {
                closePopup();
            }
        });
    }

    function openPopup() {
        console.log("open the popup");
        console.log("LogMessage:", logMessage('runtime open POP-UP'));
        popupEl.contentWindow.postMessage({ arrowUpdateRecordId: true, locationHref: location.href }, "*");
        rootEl.classList.add("arrow-active");
        // These event listeners are only enabled when the popup is active to avoid interfering with Salesforce when not using the inspector
        addEventListener("click", outsidePopupClick);
        popupEl.focus();
    }

    function closePopup() {
        rootEl.classList.remove("arrow-active");
        removeEventListener("click", outsidePopupClick);
        popupEl.blur();
    }

    function outsidePopupClick(e) {
        // Close the popup when clicking outside it
        if (!rootEl.contains(e.target)) {
            closePopup();
        }
    }

    chrome.runtime.sendMessage({ message: "getSession", sfHost }, (message) => {
        console.log("Host name: ", message.hostname);
        console.log("Session Id: ", message.key);
        console.log("LogMessage:", logMessage('runtime sendMessage'));
    });
}
