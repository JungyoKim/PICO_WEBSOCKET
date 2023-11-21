import { c as create_ssr_component, a as subscribe, e as escape, b as add_attribute } from './ssr-4bb1ebd1.js';
import 'socket.io-client';
import { s as spring } from './spring-a30f6c2e.js';
import './index-265d7b58.js';

const css = {
  code: ":root{--ultrasonic-width:0%;--island-height:240px}.container.svelte-1fcslti{max-width:1200px;margin:auto;padding:0 20px}@media(min-width: 768px){.flex-container.svelte-1fcslti{display:flex;justify-content:space-between}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $ultrasonicWidth, $$unsubscribe_ultrasonicWidth;
  let ultrasonic = 0;
  let colorClass = "bg-blue-500";
  let playSwitchColor = "bg-white";
  let camSwitchColor = "bg-white";
  let ultrasonicWidth = spring(0);
  $$unsubscribe_ultrasonicWidth = subscribe(ultrasonicWidth, (value) => $ultrasonicWidth = value);
  let video;
  let canvas;
  $$result.css.add(css);
  $$unsubscribe_ultrasonicWidth();
  return `<div class="bg-gray-800 text-white p-4 mb-4"><div class="container svelte-1fcslti"><div class="flex items-center justify-between"><h1 class="text-2xl font-bold" data-svelte-h="svelte-zeosup">Admin</h1> <button class="px-4 py-2 bg-blue-500 text-white rounded-xl" data-svelte-h="svelte-1nb7sup">기기에 연결</button></div></div></div> <div class="container max-w-screen mx-auto px-4 sm:px-6 md:px-8 svelte-1fcslti"><div class="bg-white p-4 rounded-xl shadow w-full"><div class="flex items-center justify-between"><h2 class="text-xl font-bold" data-svelte-h="svelte-hkgn8g">Ultrasonic Sensor</h2> <span>${escape(ultrasonic)}cm</span></div> <div id="output" class="${"h-5 w-full rounded-lg " + escape(colorClass, true) + " svelte-1fcslti"}" style="${"width: " + escape($ultrasonicWidth, true) + "%; max-width: 100%;"}"></div></div></div> <div class="container flex-container flex-col-reverse md:flex-row svelte-1fcslti"><div class="flex-1 ml-0"><div class="${"my-4 p-4 " + escape(playSwitchColor, true) + " rounded-xl shadow svelte-1fcslti"}"><div class="flex items-center justify-between mb-2"><h2 class="text-xl font-bold" data-svelte-h="svelte-i9ihni">Play Switch</h2> <span>${escape("Pressed")}</span></div></div> <div class="${"my-4 p-4 " + escape(camSwitchColor, true) + " rounded-xl shadow svelte-1fcslti"}"><div class="flex items-center justify-between mb-2"><h2 class="text-xl font-bold" data-svelte-h="svelte-4o5s8h">Cam Switch</h2> <span>${escape("Pressed")}</span></div></div></div> <div class="my-4 md:ml-4"><video autoplay playsinline class="w-full rounded-xl shadow"${add_attribute("this", video, 0)}></video> <canvas style="display: none;"${add_attribute("this", canvas, 0)}></canvas></div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-6797635d.js.map
