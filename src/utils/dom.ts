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
 * @param direction 滚动方向
 * @param scrollTo 将要滚动的距离
 * @param duration 时间间距
 * @returns void
 */
export const scrollAnimation = (params: {
  el: HTMLElement;
  direction: 'vertical' | 'horizontal';
  scrollTo: number;
  duration: number;
}): void => {
  const { el, direction, scrollTo, duration } = params;
  const scrollAttr = direction === 'horizontal' ? 'scrollLeft' : 'scrollTop';
  const minInterval = 15;
  if (duration < minInterval) {
    el[scrollAttr] = scrollTo;
    return;
  }

  const scrollOffset = el[scrollAttr];
  const scrollHeight = scrollTo - scrollOffset;
  const cosParameter = scrollHeight / 2;
  const step = Math.floor(duration / minInterval);

  let count = 0;
  let margin = 0;
  const scrollInterval = window.setInterval(() => {
    if (count < step) {
      count++;
      margin = cosParameter * (1 - Math.cos(Math.PI * (count / step)));

      if (Math.abs(scrollTo - scrollOffset) < Math.abs(margin)) {
        el[scrollAttr] = scrollOffset;
      } else {
        el[scrollAttr] = screenTop + margin;
      }
    } else {
      clearInterval(scrollInterval);
    }
  }, minInterval);
};
