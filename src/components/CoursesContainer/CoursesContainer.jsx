import React, { useEffect, useState } from 'react'
import CourseCard from '../CourseCard/CourseCard'
import './CoursesContainer.css'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCourses } from '../../store/courses-reducer/courses-thunks'
import { getCoursesCount, getFilters, getIsLoading, getPage } from '../../store/courses-reducer/courses-selector'
import { getAllCourses as getAllCoursesSelector } from '../../store/courses-reducer/courses-selector'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate'
import { StringParam, useQueryParams } from 'use-query-params'
import { setFilters } from '../../store/courses-reducer/courses-reducer'
import { setPage } from '../../store/articles-reducer/articles-reducer'
import MainLayout from '../MainLayout/MainLayout'

const allFiltersOnPage = ['design', 'all', 'business', 'education', 'marketing', 'it']

const CoursesContainer = () => {
	const dispatch = useDispatch()
	const allCourses = useSelector(getAllCoursesSelector)
	const isLoading = useSelector(getIsLoading)
	const [isSmall, setIsSmall] = useState(false)
	const filters = useSelector(getFilters)
	const coursesCount = useSelector(getCoursesCount)
	const page = useSelector(getPage)
	const [currentPage, setCurrentPage] = useState(1)
	const [query, setQuery] = useQueryParams({ all: StringParam, filters: StringParam })

	useEffect(() => {
		const page = query.page || 1
		const filters = query.filters ? query.filters.split(',') : allFiltersOnPage
		dispatch(setFilters(filters))
		setCurrentPage(page)
		dispatch(getAllCourses(page, filters))
	}, [])

	useEffect(() => {
		setQuery({ filters: filters.join(','), page: page })
	}, [filters])

	// const course = {
	// 	category: 'IT',
	// 	title: 'Тестувальник програмного забезпечення',
	// 	likesCount: '135',
	// 	authorAvatar: 'https://image.flaticon.com/icons/png/512/147/147144.png',
	// 	position: 'Экс-Эдуард-президент в компании PashelNahui Corp.',
	// 	author: { name: 'Наталья Горбенко' },
	// }
	const onFilterChange = (event) => {
		const category = event.target.getAttribute('name')
		let newFilters = [...filters]
		if (category === 'all') {
			if (filters.includes('all')) {
				dispatch(setFilters([]))
			} else {
				dispatch(setFilters(allFiltersOnPage))
			}
			dispatch(getAllCourses(page, allFiltersOnPage))
			return
		} else if (filters.includes(category)) {
			newFilters = newFilters.filter(item => item !== category)
			if (newFilters.length !== allFiltersOnPage.length) {
				newFilters = newFilters.filter(item => item !== 'all')
			}
		} else {
			newFilters.push(category)
			if (newFilters.length === allFiltersOnPage.length - 1) {
				newFilters.push('all')
			}
		}

		dispatch(setFilters(newFilters))
		dispatch(getAllCourses(page, newFilters))
	}

	const onClearFilter = () => {
		dispatch(setFilters([]))
		dispatch(getAllCourses(page, []))
	}

	const onPageChange = (pageInfo) => {
		setCurrentPage(pageInfo.selected)
		dispatch(setPage(pageInfo.selected + 1))
		dispatch(getAllCourses(pageInfo.selected + 1, filters))
	}
	const allCoursesBlock = allCourses.map((course, index) => {
		return <CourseCard course={course} key={index} />
	})

	return (
		<MainLayout>
			<div className='container mt-5'>
				<h1 className='courses-title'>Професії</h1>
				<h3 className='courses-subtitle'>Знайди свою професію</h3>
				<div className='container d-flex courses-journal mt-5'>
					<div
						className={`col-md-3 col-lg-3 col-xl-2 ${isSmall ? 'container courses-sidebar-mobile' : 'courses-sidebar'}`}>
						<div className='d-block mb-3'>
							<span className='course-zapyt'>Популярні&nbsp;запити</span>
						</div>
						<div className='d-block courses-journal-sidebar'>
							<div className='courses-filters mb-5 mt-3'>
								<div className='d-flex courses-filter'>
									<input className='d-flex courses-checkbox'
												 type='checkbox'
												 onChange={onFilterChange} checked={filters.includes('all')}
												 id='all'
												 name='all' />
									<label className='d-flex courses-label' htmlFor='all'>Усі теми</label>
								</div>
								<div className='d-flex courses-filter'>
									<input className='courses-checkbox'
												 type='checkbox'
												 onChange={onFilterChange} checked={filters.includes('design')}
												 id='design'
												 name='design' />
									<label className='courses-label' htmlFor='design'>Дизайнер</label>
								</div>
								<div className='d-flex courses-filter'>
									<input className='courses-checkbox'
												 type='checkbox'
												 onChange={onFilterChange} checked={filters.includes('business')}
												 id='business'
												 name='business' />
									<label className='courses-label' htmlFor='business'>Бізнес</label>
								</div>
								<div className='d-flex courses-filter'>
									<input className='courses-checkbox'
												 type='checkbox'
												 onChange={onFilterChange} checked={filters.includes('education')}
												 id='education'
												 name='education' />
									<label className='courses-label' htmlFor='education'>Освіта</label>
								</div>
								<div className='d-flex courses-filter'>
									<input className='courses-checkbox'
												 type='checkbox'
												 onChange={onFilterChange} checked={filters.includes('marketing')}
												 id='marketing'
												 name='marketing' />
									<label className='courses-label' htmlFor='marketing'>Маркетинг</label>
								</div>
								<div className='d-flex courses-filter'>
									<input className='courses-checkbox'
												 type='checkbox'
												 onChange={onFilterChange} checked={filters.includes('it')}
												 id='it'
												 name='it' />
									<label className='courses-label' htmlFor='it'>IT</label>
								</div>
							</div>
							<div className='d-block justify-content-center mb-5'>
								<button className='courses-button mb-1' onClick={onClearFilter}>
									Скинути
								</button>
							</div>
						</div>
					</div>
					<div className='col-12 col-md-9 col-lg-9 col-xl-10'>
						<div className='d-flex mb-3'>
							<span className='course-materials'>Показано матеріалів: {allCourses.length} з&nbsp;</span><span
							className='course-materials'>{coursesCount}</span>
							<Link className='mobile-filter-toggle' onClick={() => setIsSmall(prev => !prev)}>
								<i className={`${!isSmall ? 'fas fa-sliders-h' : 'fa fa-times'}`} />
								<span style={{ marginLeft: '5px' }}>Фільтри</span>
							</Link>
						</div>
						<div className='pagination-wrap mobile-pagination mb-5'>
							<ReactPaginate
								forcePage={currentPage}
								onPageChange={onPageChange}
								pageCount={Math.ceil(coursesCount / 6)}
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
						<div className={'courseContainer mb-5'}>
							{allCoursesBlock}
						</div>
						<div className='d-flex pagination-wrap mb-5'>
							<ReactPaginate
								forcePage={currentPage}
								onPageChange={onPageChange}
								pageCount={Math.ceil(coursesCount / 6)}
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

			</div>
		</MainLayout>
	)
}

export default CoursesContainer
