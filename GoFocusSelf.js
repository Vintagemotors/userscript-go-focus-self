// ==UserScript==
// @name         GoFocusSelf
// @namespace    vintagemotors.github.io
// @version      1.4
// @description  Focus on the first text field when '/' key is pressed (excluding YouTube, Google Search, and GitHub)
// @author       Originally Terry - ported to UserScript by Vintagemotors 
// @match        *://*/*
// @exclude      *://www.youtube.com/*
// @exclude      *://www.google.com/search*
// @exclude      *://github.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function focusOnFirstTextField() {
        let bestNode;

        // Find all eligible text fields
        let nodes = document.querySelectorAll(
            "input:not([disabled]):not([readonly]):not([type=submit]):not([type=button]):not([type=reset]):not([type=hidden]):not([type=checkbox]):not([type=radio])"
        );

        let width = window.innerWidth;
        let height = window.innerHeight;

        let halfWidth = width / 2;
        let halfHeight = height / 2;

        let bestScore;

        // Determine the best text field based on position
        for (let n of nodes) {
            if (!("selectionStart" in n)) continue;

            let rect = n.getBoundingClientRect();
            let x = rect.left + rect.width / 2;
            let y = rect.top + rect.height / 2;

            if (x >= 0 && x <= width && y >= 0 && y <= height) {
                let score = Math.pow((halfWidth - x) / width, 2) + Math.pow((halfHeight - y) / height, 2);
                if (n.type === "password") score *= 1.5;

                if (!bestNode || score < bestScore) {
                    bestNode = n;
                    bestScore = score;
                }
            }
        }

        // Focus on the best text field or show an alert
        if (bestNode) {
            bestNode.focus();
        } else {
            alert("No eligible text fields found.");
        }
    }

    // Prevent the quick find bar on '/' key press
    window.addEventListener('keydown', function(e) {
        if (e.key === '/') {
            e.preventDefault();

            // Exclude YouTube, Google Search, and GitHub
            if (!location.hostname.includes('youtube.com') && 
                !location.href.includes('google.com/search') &&
                !location.hostname.includes('github.com')) {
                focusOnFirstTextField();
            }
        }
    });
})();
