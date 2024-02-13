## Go Focus Self UserScript 

### Summary
Forked to change to / when on a webpage with a text box to automatically focus the text box to match Google, GitHub, and YouTube. This works even when you have scrolled down the webpage as only visible text boxes get focused.

### Why
Many webpages require typing as the first thing you do. This includes entering your username to login or typing text to perform a search. Sometimes the webpage won't focus the main text box for the user, which means the user needs to click it with the mouse which is an extra step.

Sometimes your hands are already on the keyboard ready to type and moving your hand back to the mouse to click and then move your hand back to the keyboard is simply too much work.

### Features
This UserScript is different than simply pressing Tab to move the focus to the webpage's form controls.

This UserScript has the following features:
- Only text boxes are focused, buttons and links are ignored.
- If multiple text boxes are present, the text box closest to the center of the screen is focused. This allows you to focus the login box instead of the search box.
- Only text boxes at the current scroll position are focused. This prevents focusing text boxes at the very top or very bottom of the page.
- If there is a password text box and a normal text box near each other, the password text box has less priority.
- If the webpage has a text box with the autofocus attribute, it is selected first.


