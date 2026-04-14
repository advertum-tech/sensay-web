const YM_FALLBACK = 108549977;

export function getYmId(): number {
  return Number(process.env.NEXT_PUBLIC_YM_COUNTER_ID) || YM_FALLBACK;
}
