import styles from './Account.module.scss';
import avatar from '@shared/assets/img/avatar.jpg';
import roleAdaptor from '../helpers/role.adaptor';
import { useEffect, useMemo, useState } from 'react';
import AvatarFrom from './avatar.form/Avatar.form';
import { worker_script } from './avatar.form/worker.js';

export const Account = ({ user }) => {
	const [form, setForm] = useState(false);
	const [userPhoto, setUserPhoto] = useState(null);
	const position = useMemo(() => roleAdaptor(user.role), [user]);

	useEffect(() => {
		let my_worker = new Worker(worker_script, { type: 'module' });
		my_worker.onmessage = (ev) => {
			setUserPhoto(ev.data);
		};
		my_worker.postMessage('');
	}, [user]);

	return (
		<div className={styles.accaunt_wrap}>
			<img
				src={userPhoto ? 'data:image/png;base64,' + userPhoto : avatar}
				className={styles.avatar}
				alt=""
				onClick={() => setForm(true)}
			/>
			<div>
				<p className={styles.profession}>{position}</p>
				<p className={styles.name}>{user.firstname}</p>
			</div>
			{form && (
				<AvatarFrom onHide={() => setForm(false)} userPhoto={userPhoto} />
			)}
		</div>
	);
};
