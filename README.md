## Go Focus Self UserScript 

### Summary
Forked to change to / when on a webpage with a text box to automatically focus the text box to match Google, GitHub, and YouTube. This works even when you have scrolled down the webpage as only visible text boxes get focused.

### Installation 
Click "View raw" on [GoFocusSelf.js](https://github.com/Vintagemotors/userscript-go-focus-self/blob/master/GoFocusSelf.js) and then install with your UserScript manager. 

### Features
This UserScript is different than simply pressing Tab to move the focus to the webpage's form controls.

This UserScript has the following features:
- Only text boxes are focused, buttons and links are ignored.
- If multiple text boxes are present, the text box closest to the center of the screen is focused. This allows you to focus the login box instead of the search box.
- Only text boxes at the current scroll position are focused. This prevents focusing text boxes at the very top or very bottom of the page.
- If there is a password text box and a normal text box near each other, the password text box has less priority.
- If the webpage has a text box with the autofocus attribute, it is selected first.


