#  Theme

We provide 3 ways for custom theme. For now we only support custom of **color**, totally there are 5 colors, including `theme`.

## SCSS Variables

`better-datepicker` uses **SCSS** as a pre-compiled language for the selector, you can modify it by downloading  <a href="https://github.com/Js-Monkey/better-datepicker/blob/master/src/assets/date-picker.scss" target="_blank">scss code</a> directly.

Of course, you need to use *loader* to parse the code.

```scss
$theme-color: #2ECC71;
$range-color: #eafaf1;
$text-header-color: #858585;
$text-th-color: #969595;
$text-tbody-color: #5f5f5f;
```
## Style Configuration

After configuring the style on this page, you can download the css code and put it into your project file and import it.

<theme-card></theme-card>

## Options

```js
const input = document.querySelector('#input')
createDatePicker(input,{
  $theme: '#2a3a4a',
  $range: '#bbbbbb',
  $header: '#5f5f5f',
  $th: '#cccccc',
  $tbody: '#1a2a3a'
})

```
