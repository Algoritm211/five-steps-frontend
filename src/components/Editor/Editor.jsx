import React, { useEffect, useState } from 'react'
import './Editor.css'
import { Editor } from '@tinymce/tinymce-react'
import MainLayout from '../MainLayout/MainLayout'
import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentCourse, getCurrentLesson } from '../../store/lesson-reducer/lesson-selector'
import { createLesson, loadLesson } from '../../store/lesson-reducer/lesson-thunks'
import Loader from '../Loader/Loader'


const CourseEditor = () => {
	const dispatch = useDispatch()
	const currentLesson = useSelector(getCurrentLesson)
	const course = useSelector(getCurrentCourse)
	const [lessonNumber, setLessonNumber] = useState(1)
	const [lessonBody, setLessonBody] = useState('')

	useEffect(() => {
		if (course?._id) {
			dispatch(loadLesson(course?._id, lessonNumber))
		}
	}, [lessonNumber])

	if (!course) {
		return <Loader />
	}

	const handleEditorChange = (content, editor) => {
		console.log('Content was updated:', content)
		setLessonBody(content)
	}

	const onSaveLesson = () => {
		if (!currentLesson) {
			dispatch(createLesson({ body: lessonBody, homeWork: 'Editor', courseId: course._id }))
		}


		const lessonBlock = [1, 2, 3, 4, 5].map((lNumber) => {
			return (
				<React.Fragment key={lNumber}>
					<div className={`container ${lNumber === lessonNumber ? 'editor-select-active' : 'editor-select'}`}>
						<NavLink to='#' onClick={() => setLessonNumber(lNumber)}>
							<p className='editor-step'>Крок {lNumber}</p>
						</NavLink>
					</div>
					<div className='container editor-task'>
						<NavLink to='#'>
							<p className='editor-step' style={{ marginLeft: '20px' }}>Завдання</p>
						</NavLink>
					</div>
				</React.Fragment>
			)
		})

		return (
			<MainLayout>
				<div className='row m-0'>
					<div className='col-12 col-md-9 d-flex mb-3'>
						<Editor
							apiKey={'j2rcg8qaqco0x9y81b1jn5dc0ze3phyfbapmnra5q59deqml'}
							value={lessonBody}
							initialValue={currentLesson?.body || ''}
							init={{
								height: 500,
								width: '100%',
								selector: 'textarea',
								plugins: [
									'advlist autolink lists link image charmap print preview hr anchor pagebreak',
									'searchreplace visualblocks code fullscreen',
									'insertdatetime media table paste code help wordcount',
								],
								toolbar:
									`undo redo | formatselect | bold italic backcolor | \
						alignleft aligncenter alignright alignjustify | \
						bullist numlist outdent indent | removeformat | help`,
							}}
							onEditorChange={handleEditorChange}
						/>
					</div>
					<div className='col-12 col-md-3 d-block pe-0'>
						<div className='container'>
							<h1 className='editor-title mt-3'>Професія</h1>
							<h3 className='editor-subtitle mb-3'>{course.title}</h3>
						</div>

						<div className='editor-menu'>
							{lessonBlock}
						</div>
						<div className='container d-flex justify-content-center mt-5'>
							<button className='preview-button mb-3' onClick={onSaveLesson}>
								Зберегти
							</button>
						</div>
					</div>
				</div>
			</MainLayout>
		)
	}
}


export default CourseEditor
