import React, { useEffect, useState } from 'react'
import './CourseCard.css'
import axios from 'axios'
import { instanceAxios } from '../../api/api-config'

const CourseCard = (props) => {
	const [authorName, setAuthorName] = useState('')
	const course = props.course
	const {category, title, rating, authorAvatar, author} = course

	const getAuthorInfo = async () => {
		const authorInfo = await instanceAxios.get(`/course/author?id=${author}`).then(data => data.data)
		setAuthorName(authorInfo.name)
	}

	useEffect(() => {
		getAuthorInfo()
	}, [])

	return (
		<div className="container card ">
			<div className="row mb-3 ms-0 me-0">
				<div className={`col-5 text-center rounded card-tag`}>
					<p className="text-center m-auto card-tag-text">{category || 'IT'}</p>
				</div>
			</div>
			<div className="row mb-0 ms-0 me-0">
				<div className="col-12 p-0">
					<h2 className="text-left card-title">{title}</h2>
				</div>
			</div>
			<div className="row ms-0 me-0" style={{bottom: '40%', right: '5%'}}>
				<div className="container d-flex flex-row-reverse col-12 align-items-end">
					<span className="like-text align-text-bottom">{rating}</span>
					<img src="https://pngimg.com/uploads/like/like_PNG39.png" className="" alt="" width="11%" />
				</div>
			</div>
			<div className="row ms-0 me-0">
				<div className="col-12 p-0">
					<hr />
				</div>
			</div>
			<div className="row ms-0 me-0">
				<div className="col-2 pe-0 ps-0">
					<img src={authorAvatar || 'https://image.flaticon.com/icons/png/512/147/147144.png'} className="img-fluid" alt="" />
				</div>
				<div className="col-10 d-flex" style={{alignItems: 'center'}}>
					<h6 className={'author-info mb-0'}>{authorName}, <br /> {'position'}</h6>
				</div>
			</div>
		</div>
	)
}

export default CourseCard
