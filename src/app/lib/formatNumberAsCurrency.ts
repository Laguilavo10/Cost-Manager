export function formatNumberAsCurrency(value: string | number) {
  const valueFormated = value.toLocaleString('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0
  })
  return valueFormated
}
