export function showAlert(text: string, color: string) {
  document.querySelector('calcite-alert')?.remove();
  const alert = document.createElement('calcite-alert');
  const message = document.createElement('div');
  message.setAttribute('slot', 'alert-message');
  message.innerHTML = text;
  alert.setAttribute('color', color);
  alert.setAttribute('active', '');
  alert.setAttribute('icon', '');

  alert.appendChild(message);
  document.body.appendChild(alert);
}
