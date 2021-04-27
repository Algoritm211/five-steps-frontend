import React from 'react'
import './CourseCard.css'
import {useDispatch, useSelector} from 'react-redux'
import {getUserData} from '../../store/auth-reducer/auth-selector'
import {countEntries} from '../util-funcs/entries-two-arr-counter'
import {Link} from 'react-router-dom'
import noUserPhoto from '../../assets/user/nouserphoto.png'
import {toggleDeleteCourse, toggleLikeCourse} from '../../store/courses-reducer/courses-thunks'

const categoryToUkr = {
    it: 'IT',
    design: 'Дизайн',
    business: 'Бізнес',
    education: 'Освіта',
    marketing: 'Маркетинг',
}

const colors = {
    it: '#39B065',
    design: '#CE437E',
    business: '#F2A44F',
    education: '#367D98',
    marketing: '#f26c4f',
}

const CourseCard = (props) => {

    const dispatch = useDispatch()
    const course = props.course
    const {category, title, rating, author} = course
    const userInfo = useSelector(getUserData)
    let courseCompletePercent = -1
    if (userInfo.lessonsCompleted) {
        courseCompletePercent = countEntries(userInfo.lessonsCompleted, course.lessons) * 20
    }

    const onLikeHandler = (event) => {
        event.stopPropagation()
        event.preventDefault()
        dispatch(toggleLikeCourse(course._id))
    }

    const onDeleteHandler = (event) => {
        event.stopPropagation()
        event.preventDefault()
        dispatch(toggleDeleteCourse(course._id))
    }

    return (
        <Link to={`/course/${course._id}`} style={{color: 'black'}}>
            <div className='container card '>
                <div className='row mb-3 ms-0 me-0'>
                    <div className={`col-7 col-sm-6 col-lg-5 text-center rounded card-tag`}
                         style={{backgroundColor: colors[category]}}>
                         {/*style={{backgroundColor: '#7e919f' }}>*/}
                        <p className='text-center m-auto card-tag-text'>{categoryToUkr[category]?.toUpperCase() || ''}</p>
                    </div>
                </div>
                <div className='row mb-0 ms-0 me-0'>
                    <div className='col-12 p-0'>
                        <h2 className='text-left card-title'>{title}</h2>
                    </div>
                </div>
                <div className='row ms-0 me-0'>
                    <div className='container d-flex flex-row-reverse col-12 align-items-end'>
                          {/*style={{color: userInfo?.likedCourses?.includes(course._id) && '#f26c4f'}}>*/}
                        <span className='like-text align-text-bottom' onClick={onLikeHandler}>{rating}</span>
                        <i title="Лайкнути кроки" className='fas fa-thumbs-up pe-2' style={{color: userInfo?.likedCourses?.includes(course._id) && '#f26c4f'}} onClick={onLikeHandler}/>
                        <i title="Редагувати створений курс" className="fas fa-edit pe-2" />
                        <i title="Видалити створений курс" className="fas fa-trash-alt pe-2" onClick={onDeleteHandler}/>
                    </div>
                </div>
                {courseCompletePercent !== -1 && userInfo?.courses?.includes(course._id) &&

                <div className='row ms-0 me-0'>
                    <span className='progress-text'>{`${courseCompletePercent}%`}</span>
                    <div className='progress'>
                        <div className='progress-bar'
                             style={{width: `${courseCompletePercent}%`, backgroundColor: '#39b54a'}}
                             role='progressbar'
                             aria-valuenow={`${courseCompletePercent}`} aria-valuemin='0'
                             aria-valuemax='100'/>
                    </div>
                </div>
                }
                {!userInfo?.courses?.includes(course._id) && (
                    <div className='row ms-0 me-0'>
                        <div className='col-12 p-0'>

                            <hr className='card-hr mt-4'/>
                        </div>
                    </div>
                )}

                {/*<div className='row ms-0 me-0'>*/}
                {/*    <div className='col-12 pe-0 ps-0'>*/}
                {/*        <div className="markerInProcess">*/}
                {/*            <p className="titleCourseState">Курс прийнято</p>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <div className='row ms-0 me-0'>
                    <div className='col-2 pe-0 ps-0'>
                        <img src={author?.avatar ? `${process.env.REACT_APP_URL}/${author.avatar}` : noUserPhoto}
                             className='img-avatar'
                             alt='' style={{borderRadius: '50%'}}/>
                    </div>
                    <div className='col-10 d-flex media-padding' style={{alignItems: 'center'}}>
                        <h6 className={'author-info mb-0'}>{author?.name}
                            , <br/> {author?.description || ''}</h6>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CourseCard
