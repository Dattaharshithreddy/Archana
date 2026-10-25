const seen = new Set<string>();

/** Puja vidhanams and deity pages always open with the ceremony; other texts only once per app session per deity. */
export function shouldPlayIntro(deityId: string, always: boolean) {
  if (always) {
    seen.add(deityId);
    return true;
  }
  if (seen.has(deityId)) return false;
  seen.add(deityId);
  return true;
}
