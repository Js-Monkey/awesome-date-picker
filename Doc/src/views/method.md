Instance method

##  clear

::: **clear** date and InputElement value
```html
<div>
<Input id="clearInput" />
<b-button @click="clear" style="margin-left:20px" size="mini">clear</b-button>
</div>
<script>
    const input = document.querySelector('#clearInput')
    const picker = this.createDatePicker(input)
    this.clear = ()=> picker.clear()
</script>

```
:::


##  destroyed

::: **destroyed** the datepicker, Instance methods are not available except *update*
```html
<div>
<Input id="destroyedInput" />
<b-button @click="destroyed" style="margin-left:20px" size="mini">destroyed</b-button>
</div>
<script>
    const input = document.querySelector('#destroyedInput')
    const picker = this.createDatePicker(input)
    this.destroyed = ()=> picker.destroyed()
</script>

```
:::


##  update

::: **update** the datepicker, Instance methods are not available except *update*
```html
<div>
<Input id="updateInput" />
<b-button @click="clear" style="margin-left:20px" size="mini">clear</b-button>
</div>
<script>
    const input = document.querySelector('#updateInput')
    const picker = this.createDatePicker(input)
    this.clear = ()=> picker.clear()
</script>

```
:::


##  onChange

::: **onChange** 
```html
<div>
<Input id="onChangeInput" />
</div>
<script>
    const input = document.querySelector('#onChangeInput')
    const picker = this.createDatePicker(input)
    picker.onChange((date)=>{
        this.$Msg.success('The date is: ' + date)
    })
</script>

```
:::


##  getCurrentDate

::: **getCurrentDate** 
```html
<div>
<Input id="getCurrentDateInput" />
<b-button @click="getDate" style="margin-left:20px" size="mini">get date</b-button>
</div>
<script>
    const input = document.querySelector('#getCurrentDateInput')
    const picker = this.createDatePicker(input)
    this.getDate = ()=> {
        const date = picker.getCurrentDate()
        this.$Msg.info('The current date is '+ date)
    }
</script>

```
:::

##  open/close

::: **getCurrentDate** 
```html
<div>
<Input id="openInput" />
<b-button @click="open" style="margin-left:20px" size="mini">open</b-button>
</div>
<script>
    const input = document.querySelector('#openInput')
    const picker = this.createDatePicker(input)
    this.open = ()=> picker.open()
</script>

```
:::
