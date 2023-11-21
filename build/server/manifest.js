const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","piano/FX_piano01.mp3","piano/FX_piano02.mp3","piano/FX_piano03.mp3","piano/FX_piano04.mp3","piano/FX_piano05.mp3","piano/FX_piano06.mp3","piano/FX_piano07.mp3","piano/FX_piano08.mp3","piano/FX_piano09.mp3","piano/FX_piano10.mp3","piano/FX_piano11.mp3","piano/FX_piano12.mp3","piano/FX_piano13.mp3"]),
	mimeTypes: {".png":"image/png",".mp3":"audio/mpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.9adb69b9.js","app":"_app/immutable/entry/app.0a7d76d6.js","imports":["_app/immutable/entry/start.9adb69b9.js","_app/immutable/chunks/scheduler.19461008.js","_app/immutable/chunks/singletons.7fad595b.js","_app/immutable/chunks/index.66019cba.js","_app/immutable/entry/app.0a7d76d6.js","_app/immutable/chunks/scheduler.19461008.js","_app/immutable/chunks/index.b39ab371.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-af29be8c.js')),
			__memo(() => import('./chunks/1-52742d5f.js')),
			__memo(() => import('./chunks/2-ac198015.js')),
			__memo(() => import('./chunks/3-f9f7bd0e.js')),
			__memo(() => import('./chunks/4-0a277b03.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/admin",
				pattern: /^\/admin\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/test",
				pattern: /^\/test\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
