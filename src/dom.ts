
export function getValueForEvent(e: Event) {
  const target = e.target;
  if (target == null) return null;
  if ("value" in target) {
    return (target as any).value;
  }
  return null;
}
