export const on = (
  element: HTMLElement | Document | Window,
  eventName: string,
  handler: EventListenerOrEventListenerObject,
  useCapture = false
): void => {
  if (element && eventName && handler) {
    element?.addEventListener(eventName, handler, useCapture);
  }
};

/**
 * scroll animation: ease-in-out
 * @param el 滚动的元素
 * @param scrollTo 将要滚动的距离
 * @param duration 时间间距
 * @returns void
 */
export const scrollAnimation = (el: HTMLElement, scrollTo: number, duration: number): void => {
  const minInterval = 15;
  if (duration < minInterval) {
    el.scrollTop = scrollTo;
    return;
  }

  const scrollTop = el.scrollTop;
  const scrollHeight = scrollTo - scrollTop;
  const cosParameter = scrollHeight / 2;
  const step = Math.floor(duration / minInterval);

  let count = 0;
  let margin = 0;
  const scrollInterval = window.setInterval(() => {
    if (count < step) {
      count++;
      margin = cosParameter * (1 - Math.cos(Math.PI * (count / step)));

      if (Math.abs(scrollTo - scrollTop) < Math.abs(margin)) {
        el.scrollTop = scrollTop;
      } else {
        el.scrollTop = screenTop + margin;
      }
    } else {
      clearInterval(scrollInterval);
    }
  }, minInterval);
};
