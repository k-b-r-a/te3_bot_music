"use strict";const e=chrome.runtime.getManifest().version;function t(e){chrome.tabs.create({url:e})}chrome.runtime.setUninstallURL("https://apps.jeurissen.co/auto-hd-fps-for-youtube/uninstalled"),chrome.storage.local.get(["cj_landing_lastupdated","cj_landing_versionnumber"],(function({cj_landing_lastupdated:n,cj_landing_versionnumber:o}){const s=Date.now();let a=n;const r=o;if("string"!=typeof r?t("https://apps.jeurissen.co/auto-hd-fps-for-youtube/installed"):a||e===r||(a=s,chrome.storage.local.set({cj_landing_lastupdated:s})),a){const e=()=>{a&&(a=null,t("https://apps.jeurissen.co/auto-hd-fps-for-youtube/whatsnew?installed=1"),chrome.storage.local.remove("cj_landing_lastupdated")),chrome.windows.onFocusChanged.removeListener(e),chrome.tabs.onCreated.removeListener(e)};chrome.windows.onFocusChanged.addListener(e),chrome.tabs.onCreated.addListener(e)}r!==e&&chrome.storage.local.set({cj_landing_versionnumber:e})}));