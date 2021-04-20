import React from 'react'
import { Link } from 'react-router-dom'
import articlePreview from '../../../assets/article/articlePrev.jpeg'
const ArticleCard = ({article}) => {


	const {title, body, category, views, releaseDate} = article

	return (
		<div className='col-md-4 col-sm-6 col-12 guid-card-item mb-5'>
			<Link to=''>
				<img className='guid-card-img mb-3'
						 src={articlePreview}
						 alt='guid-card-item' />
			</Link>
			<div className='d-flex mb-3 guid-card-article'>
				<i className='far fa-newspaper guid-card-ill' />
				<span className='guid-card-type'>{category}</span>
			</div>
			<div className='d-flex mb-3 '>
				<Link className='guid-card-title'>{title}</Link>
			</div>
			<div className='d-flex mb-3'>
				<Link to='#' className='guid-card-subtitle'>Прочитати</Link>
				<i className='fas fa-long-arrow-alt-right guid-card-ill'
					 style={{ fontSize: '12px', color: '#f26c4f' }} />
			</div>
		</div>
	)
}

export default ArticleCard
