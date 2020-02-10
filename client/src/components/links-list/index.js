import React from 'react';
import {Link} from 'react-router-dom';

export default ({ links }) => {
	if(!links.length) {
		return <h2 className='center'>Ссылок пока нет.</h2>
	}
	return(
		<table>
			<thead>
				<tr>
					<th>№</th>
					<th>Исходная ссылка</th>
					<th>Сокращённая ссылка</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{links.map((link, index) => {
					return(
						<tr key={link._id}>
							<td>{index + 1}</td>
							<td>{link.from}</td>
							<td>{link.to}</td>
							<td>
								<Link to={`detail/${link._id}`}>Подробно</Link>
							</td>
						</tr>
					)
				})}
			</tbody>
		</table>
	);
}