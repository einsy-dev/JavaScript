import { useEffect } from 'react';

export default function useWorker(fn) {
	let worker;

	useEffect(() => {
		let code = fn.toString();
		code = code.substring(code.indexOf('{') + 1, code.lastIndexOf('}'));
		const blob = new Blob([code], { type: 'application/javascript' });
		const url = URL.createObjectURL(blob);
		worker = new Worker(url);
		URL.revokeObjectURL(url);

		return () => {
			worker.terminate();
		};
	}, []);

	return worker;
}
