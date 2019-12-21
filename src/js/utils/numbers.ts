export function formatNumber(n: number): string {
  let parts = [];
  while (n > 1000) {
    let res = (n % 1000).toString();
    parts.push(res.padStart(3, "0"));

    n = Math.round(n / 1000);
  }

  parts.push(n % 1000);

  return parts.reverse().join(" ");
}
