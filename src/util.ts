
export function isNull(value: any): boolean {
  return value == null;
}

export function isNotNull(value: any): boolean {
  return !isNull(value);
}
