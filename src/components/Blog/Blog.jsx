import React, { useEffect } from 'react'
import './Blog.css'
import Header from '../Header/Header'
import styles from '../MainPage/MainPage.module.css'
import { useDispatch, useSelector } from 'react-redux'
import {
	getArticles,
	getArticlesCount,
	getArticlesFilter,
	getPage,
} from '../../store/articles-reducer/articles-selector'
import { addNewArticles, loadPageArticles } from '../../store/articles-reducer/articles-thunks'
import ArticleCard from './ArticleCard/ArticleCard'
import ReactPaginate from 'react-paginate'
import { BooleanParam, NumberParam, StringParam, useQueryParams } from 'use-query-params'
import { setFilter, setPage } from '../../store/articles-reducer/articles-reducer'

const Blog = () => {
	const dispatch = useDispatch()
	const page = useSelector(getPage)
	let articles = useSelector(getArticles)
	const articlesCount = useSelector(getArticlesCount)
	const filter = useSelector(getArticlesFilter)
	// console.log(filter)

	const [query, setQuery] = useQueryParams({
		page: NumberParam,
		video: BooleanParam,
		podcast: BooleanParam,
		article: BooleanParam,
	})

	useEffect(() => {
		const queryParams = query
		console.log(query)
		const page = queryParams.page || 1
		dispatch(setPage(page))
		dispatch(setFilter({
			article: queryParams.article,
			video: queryParams.video,
			podcast: queryParams.podcast,
		}))
		dispatch(loadPageArticles(page))
	}, [])

	useEffect(() => {
		setQuery({ ...filter, page: page })
	}, [page, filter])

	const onLoadMore = () => {
		dispatch(addNewArticles(page + 1))
	}

	const onPageChange = (pageInfo) => {
		dispatch(loadPageArticles(pageInfo.selected + 1))
	}

	const onFilterChange = (event) => {
		const filterParam = event.target.getAttribute('name')
		dispatch(setFilter({ [filterParam]: event.target.checked }))
		setQuery({})
	}

	articles = filterArticles(articles, filter)
	const articlesBlock = articles.map((article) => {
		return <ArticleCard article={article} key={article._id} />
	})


	return (
		<React.Fragment>
			<div className={styles.header}>
				<Header />
			</div>
			<div className='container mt-5'>
				<h1 className='guid-title'>Профорієнтація</h1>
				<h3 className='guid-subtitle'>Цікаві статті для розвитку та пошуку себе</h3>
				<div className='guid-journal'>
					<div className='guid-journal-results mt-5 mb-3'>
						<div className='d-flex guid-journal-l'>
							<span className='guid-materials'>Показано матеріалів: {articles.length} з&nbsp;</span><span
							className='guid-materials'>{articlesCount}</span>
						</div>
						<div className='d-flex guid-journal-r'>
							<input className='guid-checkbox' type='checkbox' onChange={onFilterChange} checked={filter['article']}
										 id='articles'
										 name='article' />
							<label className='guid-label' htmlFor='article'>Статті</label>
							<input type='checkbox' id='podcasts' name='podcast' onChange={onFilterChange}
										 checked={filter['podcast']} />
							<label className='guid-label' htmlFor='podcast'>Подкасти</label>
							<input type='checkbox' id='video' name='video' onChange={onFilterChange} checked={filter['video']} />
							<label className='guid-label' htmlFor='video'>Відео</label>
						</div>
					</div>
					<div className='d-flex row'>
						{articlesBlock}
						<div className='d-flex justify-content-center mb-5'>
							<button className='guid-button' onClick={onLoadMore}>
								Показати більше
							</button>
						</div>
					</div>
					<div className='d-flex pagination-wrap mb-5'>
						<ReactPaginate
							// onPageChange={onPageChange}
							// pageCount={Math.ceil(articlesCount / 6)}
							onPageCount={7}
							pageRangeDisplayed={3}
							marginPagesDisplayed={3}
							pageClassName={'pagination-page'}
							pageLinkClassName={'pagination-link'}
							containerClassName={'pagination-container'}
							previousClassName={'pagination-prev'}
							previousLabel={<i className="fas fa-long-arrow-alt-left"/>}
							nextLabel={<i className="fas fa-long-arrow-alt-right"/>}
							breakLabel={<i className="fas fa-ellipsis-h pagination-break"/>}
							nextClassName={'pagination-next'}
							previousLinkClassName={'pagination-arrow'}
							nextLinkClassName={'pagination-arrow'}
							disabledClassName={'pagination-disabled'}
							activeClassName={'pagination-active'} />
					</div>
				</div>
			</div>
		</React.Fragment>

	)
}
export default Blog


function filterArticles(articlesArray, filterObj) {
	const newArticleArray = []
	articlesArray.forEach((article) => {
		if (filterObj[article.category]) {
			newArticleArray.push(article)
		}
	})
	return newArticleArray
}
