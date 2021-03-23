import Button from './button'
import ButtonGroup from './button-group'
import Input from './input'
import Icon from './icon'
import demoCard from './demo-card'
import themeCard from './theme-card'
import {App} from 'vue'
export function useComponent(app: App): void {
  app.use(Button)
  app.use(ButtonGroup)
  app.use(Icon)
  app.use(Input)
  app.use(demoCard)
  app.use(themeCard)
}
