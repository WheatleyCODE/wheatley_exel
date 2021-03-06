function toButton(button) {
  const json = JSON.stringify(button.value)
  const meta = `data-type="button"
    data-value='${json}'
  `
  return `
      <div ${meta} class="button ${button.active ? 'active' : ''}">
        <i ${meta} class="material-icons">${button.icon}</i>
      </div>
  `
}

export function createToolBar(state) {
  const buttons = [
    {
      icon: 'format_align_left',
      active: state['textAlign'] === 'left',
      value: { textAlign: 'left' },
    },
    {
      icon: 'format_align_center',
      active: state['textAlign'] === 'center',
      value: { textAlign: 'center' },
    },
    {
      icon: 'format_align_right',
      active: state['textAlign'] === 'right',
      value: { textAlign: 'right' },
    },
    {
      icon: 'format_bold',
      active: state['fontWeight'] === 'bold',
      value: { fontWeight: state['fontWeight'] === 'bold' ? 'normal' : 'bold' },
    },
    {
      icon: 'format_italic',
      active: state['fontStyle'] === 'italic',
      value: { fontStyle: state['fontStyle'] === 'italic' ? 'normal' : 'italic' },
    },
    {
      icon: 'format_underlined',
      active: state['textDecoration'] === 'underline',
      value: { textDecoration: state['textDecoration'] === 'underline' ? 'none' : 'underline' },
    },
  ]
  return buttons.map(toButton).join('')
}
