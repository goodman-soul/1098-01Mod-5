/*
  pages/about.js
  - 无缝滚动图片/Logo：复制一份轨道内容实现 seamless
*/

function initMarquee() {
  const track = document.querySelector("[data-role='marquee-track']");
  if (!track) return;
  if (track.dataset.cloned === "1") return;
  track.dataset.cloned = "1";

  const nodes = Array.from(track.children).map((n) => n.cloneNode(true));
  nodes.forEach((n) => track.appendChild(n));
}

initMarquee();

