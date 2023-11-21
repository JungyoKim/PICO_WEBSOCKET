import { c as create_ssr_component, e as escape } from './ssr-4bb1ebd1.js';
import 'socket.io-client';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let ultrasonic = 0;
  let cam_switch = 0;
  let play_switch = 0;
  return `<div id="log" style="height: 300px; overflow-y: auto;"><h1 data-svelte-h="svelte-yersm">ultrasonic</h1> <pre>${escape(JSON.stringify(ultrasonic.ultrasonic, null, 2))}</pre> <h1 data-svelte-h="svelte-xy37lw">cam_switch</h1> <pre>${escape(JSON.stringify(cam_switch.rtc, null, 2))}</pre> <h1 data-svelte-h="svelte-11i7ban">base64</h1> <pre>${escape(JSON.stringify(cam_switch.base64, null, 2))}</pre> <h1 data-svelte-h="svelte-14tikm3">play_switch</h1> <pre>${escape(JSON.stringify(play_switch.rtc, null, 2))}</pre> <h1 data-svelte-h="svelte-4vsjbs">level</h1> <pre>${escape(JSON.stringify(play_switch.playlist, null, 2))}</pre></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-95959d07.js.map
