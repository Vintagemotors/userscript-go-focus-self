## Go Focus Self UserScript 

### Summary
Forked to change to / when on a webpage with a text box to automatically focus the text box to match Google, GitHub, and YouTube. This works even when you have scrolled down the webpage as only visible text boxes get focused.

### Installation 
Click [here](https://raw.githubusercontent.com/Vintagemotors/userscript-go-focus-self/master/GoFocusSelf.js) or click "View raw" on [GoFocusSelf.js](https://github.com/Vintagemotors/userscript-go-focus-self/blob/master/GoFocusSelf.js) and then install with your UserScript manager. 

### Updates
If you have 1.4 please update to 1.5 so that you can type the ```/``` key in an already active text field instead of it being suppressed. 

### Compatibility 
Confirmed working on InterWebPPC! Also works on Firefox 123. Other versions not tested but it's *probably* fine. 

### Features
This UserScript is different than simply pressing Tab to move the focus to the webpage's form controls.

This UserScript has the following features:
- Only text boxes are focused, buttons and links are ignored.
- If multiple text boxes are present, the text box closest to the center of the screen is focused. This allows you to focus the login box instead of the search box.
- Only text boxes at the current scroll position are focused. This prevents focusing text boxes at the very top or very bottom of the page.
- If there is a password text box and a normal text box near each other, the password text box has less priority.
- If the webpage has a text box with the autofocus attribute, it is selected first.

### Updates 
As far as I am concerned, this is a full, stable release. If you frequently use a site that already has / support by default, add it to the excluded sites list in the 2 places where you find all of the other excluded sites (Ctrl+F google.com and match the formatting). If your UserScript manager supports it you can also just click on the script and in the dropdown exclude the current site you are on if it is not needed.

[Tampermonkey](https://www.tampermonkey.net/) Screenshot
<details>
<summary></summary>

![image](https://github.com/Vintagemotors/userscript-go-focus-self/assets/103160565/1f510952-6ffa-444f-b0f7-fbee325c30a1)

</details>
