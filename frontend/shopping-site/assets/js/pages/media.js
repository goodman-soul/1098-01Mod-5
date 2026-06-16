/*
  pages/media.js
  - JS 控制音频/视频播放：播放/暂停、停止、进度、倍速、音量
*/

import { toast } from "../app.js";

function initMedia(type) {
  const el = document.querySelector(`[data-role='${type}']`);
  const box = document.querySelector(`[data-role='${type}-box']`);
  if (!el || !box) return;

  const play = box.querySelector("[data-action='play']");
  const pause = box.querySelector("[data-action='pause']");
  const stop = box.querySelector("[data-action='stop']");
  const seek = box.querySelector("[data-role='seek']");
  const vol = box.querySelector("[data-role='volume']");
  const rate = box.querySelector("[data-role='rate']");
  const time = box.querySelector("[data-role='time']");

  function updateTime() {
    const cur = Number(el.currentTime || 0);
    const dur = Number(el.duration || 0);
    if (seek && dur > 0) seek.value = String(Math.floor((cur / dur) * 1000));
    if (time) time.textContent = `${fmt(cur)} / ${dur ? fmt(dur) : "--:--"}`;
  }

  play?.addEventListener("click", async () => {
    try {
      await el.play();
    } catch (err) {
      toast("播放失败", "可能是浏览器限制自动播放或资源不可用");
      console.warn(err);
    }
  });

  pause?.addEventListener("click", () => el.pause());
  stop?.addEventListener("click", () => {
    el.pause();
    el.currentTime = 0;
  });

  seek?.addEventListener("input", () => {
    const v = Number(seek.value || 0);
    const dur = Number(el.duration || 0);
    if (!dur) return;
    el.currentTime = (v / 1000) * dur;
  });

  vol?.addEventListener("input", () => {
    const v = Math.max(0, Math.min(1, Number(vol.value || 1)));
    el.volume = v;
  });

  rate?.addEventListener("change", () => {
    const v = Number(rate.value || 1);
    el.playbackRate = Math.max(0.5, Math.min(2, v));
  });

  el.addEventListener("timeupdate", updateTime);
  el.addEventListener("loadedmetadata", updateTime);
  el.addEventListener("ended", () => toast("播放结束", type === "audio" ? "音频播放完毕" : "视频播放完毕"));

  updateTime();
}

function fmt(sec) {
  const s = Math.floor(Number(sec || 0));
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${String(m).padStart(2, "0")}:${String(r).padStart(2, "0")}`;
}

initMedia("audio");
initMedia("video");

