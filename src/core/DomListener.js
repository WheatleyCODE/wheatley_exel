import { capitalize } from './utils'

export class DomListener {
  // Тут будет
  // 0) Какие либо общие методы для всех-всех потомков
  // 1) Добавление прослушек событий
  // 2) Удаление прослушек событий

  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error('No $root provided for DomListner')
    }
    // Элемент на который в будущем будем вешать прослушку событий
    this.$root = $root
    this.listeners = listeners
  }

  initDOMListeners() {
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener)

      // Проверка на соответствие прослушки и метода
      if (!this[method]) {
        throw new Error(`Метода ${method} нет в потомке Component => ${this.name}`)
      }

      // console.log(this) текущий частный случай Component (Formula или Header и тд...)

      // addEventListener
      // Привязываем к корневому элменту текущего Component потомка (Header и тд...)
      // его же методы (Заранее созданные) (onInput, onClick, onBlaBlaBla)
      this[method] = this[method].bind(this)
      this.$root.on(listener, this[method])
    })
  }
  removeDOMListeners() {
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener)
      this.$root.off(listener, this[method])
    })
  }
}

function getMethodName(eventName) {
  return 'on' + capitalize(eventName)
}
