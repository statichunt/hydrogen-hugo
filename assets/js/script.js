// Preloader js
window.addEventListener('load', (e) => {
  'use strict';
  document.querySelector(".preloader").style.display = "none";
});


// tab shortcode
function switchTab(tabGroup, tabId) {
  let allTabItems = document.querySelectorAll("[data-tab-group='" + tabGroup + "']");
  let targetTabItems = document.querySelectorAll("[data-tab-group='" + tabGroup + "'][data-tab-item='" + tabId + "']");

  allTabItems.forEach(item=>item.classList.remove("active"))
  targetTabItems.forEach(item=>item.classList.add("active"))
  var isButtonEvent = event != undefined;

  if (isButtonEvent) {
    var btn = event.target.getBoundingClientRect().top;
  }

  if (isButtonEvent) {
    var btnDiff = event.target.getBoundingClientRect().top - btn;
    window.scrollTo(window.scrollX, window.scrollY + btnDiff);

    if (window.localStorage) {
      var selectionsJSON = window.localStorage.getItem("tabSelections");
      if (selectionsJSON) {
        var tabSelections = JSON.parse(selectionsJSON);
      } else {
        var tabSelections = {};
      }
      tabSelections[tabGroup] = tabId;
      window.localStorage.setItem("tabSelections", JSON.stringify(tabSelections));
    }
  }
}

// restore tab shortcode from localStorage
function restoreTabSelections() {
  if (window.localStorage) {
    var selectionsJSON = window.localStorage.getItem("tabSelections");
    if (selectionsJSON) {
      var tabSelections = JSON.parse(selectionsJSON);
    } else {
      var tabSelections = {};
    }
    Object.keys(tabSelections).forEach(function (tabGroup) {
      var tabItem = tabSelections[tabGroup];
      switchTab(tabGroup, tabItem);
    });
  }
}