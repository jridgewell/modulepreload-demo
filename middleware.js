const sleep = (ms) => new Promise((f) => setTimeout(f, ms));

export default async function middleware(request) {
	if (request.url.endsWith('.mjs')) {
		await sleep(1000);

		const response = new Response();
		response.headers.set('cache-control', 'public, max-age=60')
		response.headers.set('access-control-allow-origin', '*')
		response.headers.set('cross-origin-resource-policy', 'cross-origin')
		response.headers.set('x-middleware-next', '1');
		return response;
	}

	const response = new Response();
	// response.headers.set(
		// 'link',
		// ['a']
			// .map(
				// (x) =>
					// `<${new URL(`./${x}.mjs`, request.url)}>; rel="preload"; as="script"; crossorigin="anonymous"`
			// )
			// .join(', ')
	// );
	response.headers.set('x-middleware-next', '1');
	return response;
}
