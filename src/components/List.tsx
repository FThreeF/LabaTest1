import { Button, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

let selectedId: number | null = null;

const List = () => {
	const [users, setUsers] = useState([
		{ id: 0, name: 'ads', phone: '234', select: false },
		{ id: 1, name: 'ads', phone: '234', select: false },
	]);

	const [editUser, setEditUser] = useState({ name: '', phone: '' });

	const selectedUser = (id: number) => {
		selectedId = id;
		setUsers([...users.map((user) => (user.id === selectedId ? { ...user, select: true } : { ...user, select: false }))]);
		users.forEach((user) => {
			if (user.id === selectedId) {
				setEditUser({ name: user.name, phone: user.phone });
			}
		});
	};
	const updateUserEdit = () => {
		users.forEach((user) => {
			if (user.id === selectedId) {
				setEditUser({ name: user.name, phone: user.phone });
			}
		});
	};

	useEffect(() => {
		updateUserEdit();
	}, [users]);

	const removeUser = () => {
		setUsers([...users.filter((user) => user.id !== selectedId)]);
		setEditUser({ name: '', phone: '' });
        selectedId = null;
	};

	const addUser = () => {
		setUsers([...users, { id: Date.now(), name: editUser.name, phone: editUser.phone, select: false }]);
	};

	return (
		<div className='list'>
			<div className='block'>
				<Typography variant='h5'>Коррекция</Typography>
				<TextField
					value={editUser.name}
					onChange={(e) => {
						setEditUser({ ...editUser, name: e.target.value });
						setUsers([...users.map((user) => (user.id === selectedId ? { ...user, name: e.target.value } : user))]);
					}}
					size='small'
					label='Имя'
					variant='filled'
				/>
				<TextField
					value={editUser.phone}
					onChange={(e) => {
						setEditUser({ ...editUser, phone: e.target.value });
						setUsers([...users.map((user) => (user.id === selectedId ? { ...user, phone: e.target.value } : user))]);
					}}
					size='small'
					label='Телефон'
					variant='filled'
				/>
			</div>
			<div className='block'>
				<Button onClick={addUser} variant='contained'>Добавить</Button>
				<Button onClick={removeUser} variant='contained'>
					Удалить
				</Button>
				<Button variant='contained'>Найти</Button>
			</div>
			<div className='block'>
				<Typography variant='h5'>Список</Typography>
				<ul className='listItem'>
					{users.map((user) => (
						<li onClick={() => selectedUser(user.id)} className={['item', user.select ? 'itemGray' : ''].join(' ')}>
							{user.name} {user.phone}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default List;
