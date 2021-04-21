import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import withMainPageHOC from '../MainLayout/MainLayout'
import MainLayout from '../MainLayout/MainLayout'

const CourseEditor = () => {

	const handleEditorChange = (content, editor) => {
		console.log('Content was updated:', content)
	}

	return (
		<MainLayout>
			<div>
				<Editor
					apiKey={'j2rcg8qaqco0x9y81b1jn5dc0ze3phyfbapmnra5q59deqml'}
					initialValue='<p>This is the initial content of the editor</p>'
					init={{
						height: 500,
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
		</MainLayout>
	)
}

export default CourseEditor
