import React from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Authorization = () => {
	const [loginInfo, setLoginInfo] = useState({ name: '', password: '' });
	const [errorLoginInfo, setErrorLoginInfo] = useState('');
	const navigate = useNavigate();

	const checkLoginInfo = () => {
		if (loginInfo.name === 'admin' && loginInfo.password === 'admin') {
			navigate('/list');
		} else {
			setErrorLoginInfo('Неверный пароль');
		}
	};

	return (
		<form className='authorization' onSubmit={(e) => e.preventDefault()}>
			<Typography
				sx={{
					margin: 'auto',
				}}
				variant='h5'>
				Авторизация
			</Typography>
			<TextField
				value={loginInfo.name}
				onChange={(e) => setLoginInfo({ ...loginInfo, name: e.target.value })}
				size='small'
				label='Имя'
				variant='outlined'
			/>
			<TextField
				value={loginInfo.password}
				onChange={(e) => setLoginInfo({ ...loginInfo, password: e.target.value })}
				size='small'
				type='password'
				label='Пароль'
				variant='outlined'
			/>
			<Button onClick={checkLoginInfo} variant='contained'>
				Войти
			</Button>
			{errorLoginInfo ? (
				<Typography
					sx={{
						margin: 'auto',
						color: 'red',
					}}>
					{errorLoginInfo}
				</Typography>
			) : (
				''
			)}
		</form>
	);
};

export default Authorization;
