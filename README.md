# VisibilityEvent
A small JavaScript module for call function when an element becomes visible or invisible

# Installation
Download the file [here](https://github.com/supersurviveur/visibilityEvent/releases/download/v1.0/visibleEvent.min.js) and add it on your project<br>
Then add it the `<head>` of your page with a `<script>` tag:<br>
```html
<script src="path/to/visibilityEvent.min.js" defer></script>
```

# Usage and example
First, create a HTML element and add some style:
```html
<div class="element"></div>

<style>
  .element{
    /* Add a margin for test the module */
    margin-top: 1000px;
    margin-bottom: 1000px;
  
    /* Set default background-color to gray */
    background-color: #333;
    /* Set size */
    width: 70vw;
    height: 300px;
  
    /* Add a transition on the bacground-color */
    transition: background-color 1s;
  }
</style>
```

Then, create a JavaScript function who change background-color:
```javascript
function changeColor(element){
  // Set background-color to red
  element.style.backgroundColor="#FF0000";
}
```
We add `element` in the arguments of the function because visibleEvent gives the element that becomes visible/invisible

We can now add this function on the HTML element:
```html
<!-- When the element becomes visible, we call the changeColor function -->
<div class="element" data-onvisible="changeColor">
</div>

<!-- Our style -->
<style>
  .element{
    /* Add a margin for test the module */
    margin-top: 1000px;
    margin-bottom: 1000px;
  
    /* Set default background-color to gray */
    background-color: #333;
    /* Set size */
    width: 70vw;
    height: 300px;
  
    /* Add a transition on the bacground-color */
    transition: background-color 1s;
  }
</style>
<!-- Our function -->
<script>
  function changeColor(element){
    // Set background-color to red
    element.style.backgroundColor="#FF0000";
  }
</script>
```
### Result:
![visibleEventExample (1)](https://user-images.githubusercontent.com/54775010/118239990-bafc6b00-b49a-11eb-8491-6ef84b3eeff2.gif)

# List of events
VisibleEvent | Action
------|-------
`data-onvisible`| Call the function when the element is entirely visible
`data-ontopvisible`| Call the function when the top of the element is visble
`data-onbottomvisible`| Call the function when the bottom of the element is visble

InvisibleEvent | Action
------|-------
`data-oninvisible`| Call the function when the element is entirely invisible
`data-ontopinvisible`| Call the function when the top of the element is invisble
`data-onbottominvisible`| Call the function when the bottom of the element is invisble

# Optional argument
You can add `data-recursive="true"` on your element if you want the function to be called **EVERY TIME** the element becomes visible/invisible <br>
If you want to give other arguments to your JavaScript function, add `data-arguments="[firstArgument,secondArgument]"` (arguments can be string, number, HTML element, etc...)

