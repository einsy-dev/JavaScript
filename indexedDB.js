export default class Cache {
	init(store, version) {
		return new Promise((resolve) => {
			// open the connection
			request = indexedDB.open('cacheDB', version);

			request.onupgradeneeded = () => {
				db = request.result;

				// if the data object store doesn't exist, create it
				if (!db.objectStoreNames.contains('cache')) {
					console.log('Creating users store');
					db.createObjectStore('cache', { keyPath: 'id' });
				}
				// no need to resolve here
			};

			request.onsuccess = () => {
				db = request.result;
				version = db.version;
				console.log('request.onsuccess - initDB', version);
				resolve(true);
			};

			request.onerror = () => {
				resolve(false);
			};
		});
	};
	set(key, value) {

	};
	get(key) {

	};
	delete(key) {

	};
}
