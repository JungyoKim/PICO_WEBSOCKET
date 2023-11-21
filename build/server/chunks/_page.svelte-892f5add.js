import { c as create_ssr_component, a as subscribe, b as add_attribute } from './ssr-4bb1ebd1.js';
import { s as spring } from './spring-a30f6c2e.js';
import 'socket.io-client';
import './index-265d7b58.js';

const css = {
  code: ".sensor-container.svelte-1mn3cys.svelte-1mn3cys{position:absolute;top:0;z-index:10;width:100%}.image-container.svelte-1mn3cys.svelte-1mn3cys{position:absolute;top:0;left:0;bottom:0;right:0;z-index:5}.image-container.svelte-1mn3cys img.svelte-1mn3cys{width:100%;height:100%;object-fit:cover}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_ultrasonicWidth;
  let imageSrc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL4AAAC+CAYAAACLdLWdAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAo0lEQVR4nO3BMQEAAADCoPVPbQsvoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAngY07AABPEnEPQAAAABJRU5ErkJggg==";
  let key = 0;
  let ultrasonicWidth = spring(0);
  $$unsubscribe_ultrasonicWidth = subscribe(ultrasonicWidth, (value) => value);
  $$result.css.add(css);
  $$unsubscribe_ultrasonicWidth();
  return `${``} <div class="image-container svelte-1mn3cys"><img${add_attribute("key", key, 0)}${add_attribute("src", imageSrc, 0)} alt="" class="svelte-1mn3cys"></div> ${`<div class="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center" aria-labelledby="modal-title" role="dialog" aria-modal="true"><div class="bg-gray-500" aria-hidden="true"></div> <div class="bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-lg sm:w-full"><div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4" data-svelte-h="svelte-1tyi84n"><div class="sm:flex sm:items-start"><div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"><h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">1조 정보 수행</h3> <div class="mt-2"><p class="text-sm text-gray-500">소리 API 허용 후 시작</p></div></div></div></div> <div class="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"><button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm" data-svelte-h="svelte-1y3m23v">시작</button></div></div></div>`}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-892f5add.js.map
