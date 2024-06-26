import { getProfileAvatar } from '../../api/profile';

const workercode = () => {
	self.onmessage = function (e) {
		getProfileAvatar()
			.then(({ photo }) => self.postMessage(photo))
			.catch(() => self.postMessage(null));
	};
};

let code = workercode.toString();
code = code.substring(code.indexOf('{') + 1, code.lastIndexOf('}'));
const blob = new Blob([code], { type: 'application/javascript' });
const worker_script = URL.createObjectURL(blob);
export { worker_script };
