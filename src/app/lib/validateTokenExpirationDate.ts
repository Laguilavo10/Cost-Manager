export function validateTokenExpirationDate(
  expDate: number | string | undefined
) {
  expDate = Number(expDate)
  if (isNaN(expDate)) return false
  const expirationDate = new Date(expDate * 1000) // El tiempo de expiración se almacena en segundos, se convierte a milisegundos
  const currentDate = new Date()

  return expirationDate > currentDate
}
