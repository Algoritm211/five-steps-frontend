import React from 'react'
import './Editor.css'
import {Editor} from '@tinymce/tinymce-react'
import withMainPageHOC from '../MainLayout/MainLayout'
import MainLayout from '../MainLayout/MainLayout'
import {Link} from "react-router-dom";

const CourseEditor = () => {

    const handleEditorChange = (content, editor) => {
        console.log('Content was updated:', content)
    }

    return (
        <MainLayout>
            <div className="row m-0">
                <div className="col-12 col-md-9 d-flex mb-3">
                    <Editor
                        apiKey={'j2rcg8qaqco0x9y81b1jn5dc0ze3phyfbapmnra5q59deqml'}
                        initialValue='<p>This is the initial content of the editor</p>'
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
                <div className="col-12 col-md-3 d-block pe-0">
                    <div className="container">
                        <h1 className='editor-title mt-3'>Професія</h1>
                        <h3 className='editor-subtitle mb-3'>Розробник програмного забезпечення</h3>
                    </div>

                    <div className="editor-menu">
                        <div className="container editor-select">
                            <Link to="#">
                            <p className="editor-step">Крок 1</p>
                            </Link>
                        </div>
                        <div className="container editor-task">
                            <Link to="#">
                                <p className="editor-step" style={{marginLeft: '20px'}}>Завдання</p>
                            </Link>
                        </div>
                        <div className="container editor-select">
                            <Link to="#">
                            <p className="editor-step">Крок 2</p>
                            </Link>
                        </div>
                        <div className="container editor-task">
                            <Link to="#">
                                <p className="editor-step" style={{marginLeft: '20px'}}>Завдання</p>
                            </Link>
                        </div>
                        <div className="container editor-select-active">
                            <Link to="#">
                            <p className="editor-step-active">Крок 3</p>
                            </Link>
                        </div>
                        <div className="container editor-task">
                            <Link to="#">
                                <p className="editor-step" style={{marginLeft: '20px'}}>Завдання</p>
                            </Link>
                        </div>
                        <div className="container editor-select">
                            <Link to="#">
                            <p className="editor-step">Крок 4</p>
                            </Link>
                        </div>
                        <div className="container editor-task">
                            <Link to="#">
                                <p className="editor-step" style={{marginLeft: '20px'}}>Завдання</p>
                            </Link>
                        </div>
                        <div className="container editor-select">
                            <Link to="#">
                                <p className="editor-step">Крок 5</p>
                            </Link>
                        </div>
                        <div className="container editor-task">
                            <Link to="#">
                                <p className="editor-step" style={{marginLeft: '20px'}}>Завдання</p>
                            </Link>
                        </div>
                    </div>
                    <div className="container d-flex justify-content-center mt-5">
                        <button className='preview-button mb-3'>
                            Зберегти
                        </button>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default CourseEditor
