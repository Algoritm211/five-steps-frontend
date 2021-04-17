import React from 'react'
import './CourseCard.css'

const CourseCard = (props) => {
	const course = props.course
	const {category, title, likesCount, authorAvatar, position, authorName} = course

	return (
		<div className="container card ">
			<div className="row mb-3 ms-0 me-0">
				<div className={`col-5 text-center rounded card-tag`}>
					<p className="text-center m-auto card-tag-text">{category}</p>
				</div>
			</div>
			<div className="row mb-5 ms-0 me-0">
				<div className="col-12 p-0">
					<h2 className="text-left card-title">{title}</h2>
				</div>
			</div>
			<div className="row position-absolute ms-0 me-0" style={{bottom: '40%', right: '5%'}}>
				<div className="d-flex flex-row-reverse col-12 align-items-end">
					<span className="like-text align-text-bottom">{likesCount}</span>
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
					<img src={authorAvatar} className="img-fluid" alt="" />
				</div>
				<div className="col-10">
					<h6 className={'author-info'}>{authorName}, <br /> {position}</h6>
				</div>
			</div>
		</div>
	)
}

export default CourseCard
