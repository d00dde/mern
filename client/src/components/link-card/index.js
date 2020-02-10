import React from 'react';

export default ({ link }) => {
	return(
		<>
			<h2>Информация о ссылке.</h2>
			<p>Исходная ссылка: <a href={link.from} target='_blank' rel='noopener noreferrer'>{link.from}</a></p>
			<p>Короткая ссылка: <a href={link.to} target='_blank' rel='noopener noreferrer'>{link.to}</a></p>
			<p>Дата создания: <strong>{new Date(link.date).toLocaleDateString()}</strong></p>
			<p>Количество переходов: <strong>{link.clicks}</strong></p>
		</>
	);
}