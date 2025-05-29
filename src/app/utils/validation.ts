export function isValidPhone(phone: string): boolean {
  return /^\d{10}$/.test(phone)
}

export function isValidVIN(vin: string): boolean {
  // 17 caracteres alfanuméricos, sin I, O, Q, ó Ñ
  return /^[A-HJ-NPR-Z0-9]{17}$/i.test(vin)
}
