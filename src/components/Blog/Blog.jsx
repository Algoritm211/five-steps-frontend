import React, { useEffect, useState } from 'react'
import './Blog.css'
import Header from '../Header/Header'
import styles from '../MainLayout/MainPage.module.css'
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
import { NumberParam, StringParam, useQueryParams } from 'use-query-params'
import { setFilter, setPage } from '../../store/articles-reducer/articles-reducer'

const Blog = () => {
	const dispatch = useDispatch()
	const page = useSelector(getPage)
	let articles = useSelector(getArticles)
	const articlesCount = useSelector(getArticlesCount)
	const filter = useSelector(getArticlesFilter)
	const [currentPage, setCurrentPage] = useState(1)

	const [query, setQuery] = useQueryParams({
		page: NumberParam,
		video: StringParam,
		podcast: StringParam,
		article: StringParam,
	})

	useEffect(() => {
		const queryParams = query
		const page = queryParams.page || 1
		dispatch(setPage(page))
		setCurrentPage(page)
		dispatch(setFilter({
			article: queryParams.article !== undefined ? Boolean(queryParams.article) : true,
			video: queryParams.video !== undefined ? Boolean(queryParams.video) : true,
			podcast: queryParams.podcast !== undefined ? Boolean(queryParams.podcast) : true,
		}))
		dispatch(loadPageArticles(filter, page))
	}, [])

	useEffect(() => {
		setQuery({ ...filter, page: currentPage })
	}, [page, filter, currentPage])

	const onLoadMore = () => {
		dispatch(addNewArticles(page + 1))
	}

	const onPageChange = (pageInfo) => {
		dispatch(loadPageArticles(filter, pageInfo.selected + 1))
		setCurrentPage(pageInfo.selected + 1)
	}

	const onFilterChange = (event) => {
		const filterParam = event.target.getAttribute('name')
		const newFilter = { ...filter }
		newFilter[filterParam] = event.target.checked
		dispatch(setFilter(newFilter))
		dispatch(loadPageArticles(newFilter, 1))
		setCurrentPage(1)
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
				<h1 className='guid-title'>????????????????????????????</h1>
				<h3 className='guid-subtitle'>???????????? ???????????? ?????? ???????????????? ???? ???????????? ????????</h3>
				<div className='guid-journal'>
					<div className='guid-journal-results mt-5 mb-3'>
						<div className='d-flex guid-journal-l'>
							<span className='guid-materials'>???????????????? ????????????????????: {articles.length} ??&nbsp;</span><span
							className='guid-materials'>{articlesCount}</span>
						</div>
						<div className='d-flex guid-journal-r'>
							<input className='guid-checkbox' type='checkbox' onChange={onFilterChange} checked={filter['article']}
										 id='articles'
										 name='article' />
							<label className='guid-label' htmlFor='article'>????????????</label>
							<input type='checkbox' id='podcasts' name='podcast' onChange={onFilterChange}
										 checked={filter['podcast']} />
							<label className='guid-label' htmlFor='podcast'>????????????????</label>
							<input type='checkbox' id='video' name='video' onChange={onFilterChange} checked={filter['video']} />
							<label className='guid-label' htmlFor='video'>??????????</label>
						</div>
					</div>
					<div className='d-flex row'>
						<div className='pagination-wrap mobile-pagination mb-5'>
							<ReactPaginate
								forcePage={currentPage - 1}
								onPageChange={onPageChange}
								pageCount={Math.ceil(articlesCount / 6)}
								pageRangeDisplayed={5}
								marginPagesDisplayed={5}
								pageClassName={'pagination-page'}
								pageLinkClassName={'pagination-link'}
								containerClassName={'pagination-container'}
								previousClassName={'pagination-prev'}
								previousLabel={<i className='fas fa-long-arrow-alt-left' />}
								nextLabel={<i className='fas fa-long-arrow-alt-right' />}
								breakLabel={<i className='fas fa-ellipsis-h pagination-break' />}
								nextClassName={'pagination-next'}
								previousLinkClassName={'pagination-arrow'}
								nextLinkClassName={'pagination-arrow'}
								disabledClassName={'pagination-disabled'}
								activeClassName={'pagination-active'} />
						</div>
						{articlesBlock}
					</div>
					<div className='d-flex pagination-wrap mb-5'>
						<ReactPaginate
							forcePage={currentPage - 1}
							onPageChange={onPageChange}
							pageCount={Math.ceil(articlesCount / 6)}
							pageRangeDisplayed={5}
							marginPagesDisplayed={5}
							pageClassName={'pagination-page'}
							pageLinkClassName={'pagination-link'}
							containerClassName={'pagination-container'}
							previousClassName={'pagination-prev'}
							previousLabel={<i className='fas fa-long-arrow-alt-left' />}
							nextLabel={<i className='fas fa-long-arrow-alt-right' />}
							breakLabel={<i className='fas fa-ellipsis-h pagination-break' />}
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
