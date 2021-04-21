import React, {useEffect, useState} from 'react'
import CourseCard from '../CourseCard/CourseCard'
import './CoursesContainer.css'
import {useDispatch, useSelector} from 'react-redux'
import {getAllCourses} from '../../store/courses-reducer/courses-thunks'
import {getIsLoading} from '../../store/courses-reducer/courses-selector'
import {getAllCourses as getAllCoursesSelector} from '../../store/courses-reducer/courses-selector'
import {Link} from "react-router-dom";
import ReactPaginate from "react-paginate";

const CoursesContainer = () => {
    const dispatch = useDispatch()
    const allCourses = useSelector(getAllCoursesSelector)
    const isLoading = useSelector(getIsLoading)
    const [isSmall, setIsSmall] = useState(false)

    console.log(allCourses)

    // useEffect(() => {
    // 	dispatch(getAllCourses())
    // }, [])

    const course = {
        category: 'IT',
        title: 'Тестувальник програмного забезпечення',
        likesCount: '135',
        authorAvatar: 'https://image.flaticon.com/icons/png/512/147/147144.png',
        position: 'Экс-Эдуард-президент в компании PashelNahui Corp.',
        author: {name: 'Наталья Горбенко'}
    }

    // const allCoursesBlock = allCourses.map((course, index) => {
    // 	return <CourseCard course={course} key={index}/>
    // })

    return (
        <React.Fragment>
            <div className="container mt-5">
                <h1 className="courses-title">Професії</h1>
                <h3 className="courses-subtitle">Знайди свою професію</h3>
                <div className="container d-flex courses-journal mt-5">
                    <div className={`col-md-3 col-lg-3 col-xl-2 ${isSmall ? 'container courses-sidebar-mobile' : 'courses-sidebar'}`}>
                        <div className="d-block mb-3">
                            <span className="course-zapyt">Популярні&nbsp;запити</span>
                        </div>
                        <div className="d-block courses-journal-sidebar">
                            <div className="courses-filters mb-5 mt-3">
                                <div className="d-flex courses-filter">
                                    <input className='d-flex courses-checkbox'
                                           type='checkbox' /*onChange={onFilterChange} checked={filter['article']}*/
                                           id='all'
                                           name='all'/>
                                    <label className='d-flex courses-label' htmlFor='all'>Усі теми</label>
                                </div>
                                <div className="d-flex courses-filter">
                                    <input className='courses-checkbox'
                                           type='checkbox' /*onChange={onFilterChange} checked={filter['article']}*/
                                           id='designer'
                                           name='designer'/>
                                    <label className='courses-label' htmlFor='designer'>Дизайнер</label>
                                </div>
                                <div className="d-flex courses-filter">
                                    <input className='courses-checkbox'
                                           type='checkbox' /*onChange={onFilterChange} checked={filter['article']}*/
                                           id=''
                                           name=''/>
                                    <label className='courses-label' htmlFor='article'>Cum коллекціонер</label>
                                </div>
                                <div className="d-flex courses-filter">
                                    <input className='courses-checkbox'
                                           type='checkbox' /*onChange={onFilterChange} checked={filter['article']}*/
                                           id=''
                                           name=''/>
                                    <label className='courses-label' htmlFor='article'>Dungeon master</label>
                                </div>
                                <div className="d-flex courses-filter">
                                    <input className='courses-checkbox'
                                           type='checkbox' /*onChange={onFilterChange} checked={filter['article']}*/
                                           id=''
                                           name=''/>
                                    <label className='courses-label' htmlFor='article'>Slave</label>
                                </div>
                                <div className="d-flex courses-filter">
                                    <input className='courses-checkbox'
                                           type='checkbox' /*onChange={onFilterChange} checked={filter['article']}*/
                                           id=''
                                           name=''/>
                                    <label className='courses-label' htmlFor='article'>Cum enjoyer</label>
                                </div>
                                <div className="d-flex courses-filter">
                                    <input className='courses-checkbox'
                                           type='checkbox' /*onChange={onFilterChange} checked={filter['article']}*/
                                           id=''
                                           name=''/>
                                    <label className='courses-label' htmlFor='article'>Бізнес</label>
                                </div>
                                <div className="d-flex courses-filter">
                                    <input className='courses-checkbox'
                                           type='checkbox' /*onChange={onFilterChange} checked={filter['article']}*/
                                           id=''
                                           name=''/>
                                    <label className='courses-label' htmlFor='article'>Освіта</label>
                                </div>
                                <div className="d-flex courses-filter">
                                    <input className='courses-checkbox'
                                           type='checkbox' /*onChange={onFilterChange} checked={filter['article']}*/
                                           id=''
                                           name=''/>
                                    <label className='courses-label' htmlFor='article'>Маркетинг</label>
                                </div>
                            </div>
                            <div className='d-block justify-content-center mb-5'>
                                <button className='courses-button mb-1' /*onClick={onLoadMore}*/>
                                    Скинути
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-9 col-lg-9 col-xl-10">
                        <div className="d-flex mb-3">
                            <span className="course-materials">Показано матеріалів: 6 з&nbsp;</span><span
                            className="course-materials">12 578</span>
                            <Link className="mobile-filter-toggle" onClick={() => setIsSmall(prev => !prev)}>
                                <i className={`${!isSmall ? 'fas fa-sliders-h' : 'fa fa-times'}`} />
                                <span style={{marginLeft: '5px'}}>Фільтри</span>
                            </Link>
                        </div>
                        <div className={'courseContainer mb-5'}>
                            <CourseCard course={course}/>
                            <CourseCard course={course}/>
                            <CourseCard course={course}/>
                            <CourseCard course={course}/>
                            <CourseCard course={course}/>
                            <CourseCard course={course}/>
                            {/*<CourseCard course={course} />*/}
                            {/*{allCoursesBlock}*/}
                        </div>
                        <div className='d-flex pagination-wrap mb-5'>
                            <ReactPaginate
                                // onPageChange={onPageChange}
                                // pageCount={Math.ceil(articlesCount / 6)}
                                pageCount={7}
                                pageRangeDisplayed={5}
                                marginPagesDisplayed={5}
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

            </div>
        </React.Fragment>
    )
}

export default CoursesContainer
