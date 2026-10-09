export function bridgeDeckHalfWidth(spanX) {
  return Math.abs(spanX - 42.4) < .02 ? 3 : 2.25;
}

export function bridgeSpanAt(x, z, spanXs, padding = .22) {
  return spanXs.find((spanX) => Math.abs(x - spanX) < .72 && Math.abs(z) <= bridgeDeckHalfWidth(spanX) + padding);
}

export function mayEnterBridge({ currentlyOnDeck, signal }) {
  return currentlyOnDeck || signal !== 'red';
}
