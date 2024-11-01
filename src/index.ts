import type { Plugin } from 'vite';
import fs from 'node:fs';
import path from 'node:path';

const defaults = {
	path: './packs',
};

export default function CompendiumSync(options: Partial<typeof defaults> = defaults): Plugin {
	return {
		name: 'vite-plugin-foundryvtt-sync',
		configureServer(server) {
			server.ws.on('foundryvtt-sync:update', (data, client) => {
				try {
					fs.writeFileSync(
						path.resolve(
							__dirname,
							`${options.path}/${data.json.name}.json`,
						),
						JSON.stringify(data.json, null, '\t'),
					);

					client.send(
						'foundryvtt-sync:response',
						{ data,

						},
					);
				} catch (err) {
					console.error(err);
					client.send(
						'foundryvtt-sync:error',
						{ data, err },
					);
				}
			});
		},
	};
};
