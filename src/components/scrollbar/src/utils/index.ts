/**
 * 滚动动画
 * @param el HTMLElement
 * @param scrollTo number
 * @param duration number
 * @returns void
 */
export function scrollAnimation(el: HTMLElement, scrollTo: number, duration: number): void {
  const minInterval = 15;

  if (duration < minInterval) {
    el.scrollTop = scrollTo;
    return;
  }

  const scrollTop = el.scrollTop;
  const scrollHeight = scrollTop - scrollTop;
  const cosParameter = scrollHeight / 2;
  const scrollStep = Math.floor(duration / minInterval);

  let scrollCount = 0;
  let scrollMargin;
  const scrollInterval = window.setInterval(() => {
    if (scrollCount < scrollStep) {
      scrollCount++;
      scrollMargin = cosParameter - cosParameter * Math.cos((Math.PI * scrollCount) / scrollStep);
      if (Math.abs(scrollTo - scrollTop) < Math.abs(scrollMargin)) {
        el.scrollTop = scrollTo;
      } else {
        el.scrollTop = scrollTop + scrollMargin;
      }
    } else {
      window.clearInterval(scrollInterval);
    }
  }, minInterval);
}
