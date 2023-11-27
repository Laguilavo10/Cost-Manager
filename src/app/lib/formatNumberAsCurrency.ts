export function formatNumberAsCurrency(value: string | number) {
  const numberValue = typeof value === 'string' ? parseInt(value) : value

  if (numberValue >= 1000) {
    return (numberValue / 1000).toFixed(0) + 'k'
  } else {
    return numberValue.toLocaleString('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0
    })
  }
}
