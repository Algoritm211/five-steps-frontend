
import React from 'react'
import Header from '../Header/Header'
import './CoursePage.css'
import styles from '../MainLayout/MainPage.module.css'
import ReactPaginate from 'react-paginate'


const CoursePage = () => {
	return (
		<React.Fragment>
			<div className='course-steps-pagination'>
				<ReactPaginate
					// onPageChange={onPageChange}
					// pageCount={Math.ceil(articlesCount / 6)}
					pageCount={5}
					pageClassName={'course-pagination-page'}
					pageLinkClassName={'course-pagination-link'}
					containerClassName={'course-pagination-container'}
					previousClassName={'course-pagination-disable'}
					nextClassName={'course-pagination-disable'}
					disabledClassName={'course-pagination-disable'}
					activeClassName={'course-pagination-active'} />
			</div>
			<div className={styles.header}>
				<Header />
			</div>
			<div className='container course-page mt-5'>
				<div className='col-12 col-sm-12 col-md-8 course-content'>
					<p className='courses-lecture mb-5'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do&nbsp;eiusmod tempor incididunt
						ut&nbsp;labore et&nbsp;dolore magna aliqua. Tristique senectus et&nbsp;netus et&nbsp;malesuada
						fames&nbsp;ac. Ut&nbsp;faucibus vitae nunc sed velit dignissim sodales pulvinar elementum
						integer enim. Tellus in&nbsp;hac habitasse
						platea dictumst vestibulum rhoncus est pellentesque.
						In&nbsp;dictum non consectetur a&nbsp;erat nam&nbsp;at. Aenean euismod elementum nisi quis
						eleifend. Varius morbi enim nunc faucibus a&nbsp;pellentesque. Congue eu&nbsp;consequat
						ac&nbsp;felis donec&nbsp;et. Egestas erat imperdiet sed euismod. Lobortis mattis aliquam
						faucibus purus in&nbsp;massa tempor.<br /><br />

						Quis imperdiet massa tincidunt nunc pulvinar sapien et&nbsp;ligula ullamcorper. Eget egestas
						purus viverra accumsan. Tortor consequat id&nbsp;porta nibh venenatis cras sed. Mauris
						a&nbsp;diam maecenas sed enim. Tincidunt ornare massa eget egestas purus viverra
						accumsan&nbsp;in. Dui ut&nbsp;ornare lectus sit amet. Enim nulla aliquet porttitor lacus luctus
						accumsan tortor posuere. Volutpat maecenas volutpat blandit aliquam etiam erat velit
						scelerisque. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat
						vivamus. Lacus viverra vitae congue eu&nbsp;consequat ac&nbsp;felis donec. Laoreet suspendisse
						interdum consectetur libero id&nbsp;faucibus nisl. Nibh tortor id&nbsp;aliquet lectus proin nibh
						nisl. Sagittis orci a&nbsp;scelerisque purus semper. Sed vulputate odio ut&nbsp;enim. Tellus
						id&nbsp;interdum velit laoreet id&nbsp;donec ultrices. Enim ut&nbsp;tellus elementum sagittis
						vitae&nbsp;et. Massa tincidunt nunc pulvinar sapien&nbsp;et. Rhoncus aenean vel elit scelerisque
						mauris. Suspendisse interdum consectetur libero id&nbsp;faucibus nisl. Tincidunt nunc pulvinar
						sapien et&nbsp;ligula ullamcorper malesuada.<br /><br />

						Nulla porttitor massa id&nbsp;neque aliquam vestibulum. Lobortis mattis aliquam faucibus purus
						in&nbsp;massa. Pretium lectus quam id&nbsp;leo in&nbsp;vitae. Tempus quam pellentesque nec nam
						aliquam sem&nbsp;et. Morbi tristique senectus et&nbsp;netus et&nbsp;malesuada fames.
						Ut&nbsp;eu&nbsp;sem integer vitae justo. Viverra aliquet eget sit amet tellus. Purus viverra
						accumsan in&nbsp;nisl nisi scelerisque&nbsp;eu. Sem et&nbsp;tortor consequat id&nbsp;porta nibh
						venenatis. Risus nec feugiat in&nbsp;fermentum posuere urna nec. At&nbsp;varius vel pharetra vel
						turpis nunc eget lorem. Iaculis eu&nbsp;non diam phasellus vestibulum lorem.
					</p>
					<div className='d-flex row'>
						<div className='d-flex justify-content-start mb-5'>
							<button className='guid-button'>
								Наступна сторінка
							</button>
						</div>
					</div>
				</div>
				<div className='col-12 col-sm-12 col-md-3 me-auto ms-auto course-info'>
					<h3 className='courses-subtitle'>Крок номер 1</h3>
					<h1 className='courses-title mb-5'>Назва професії</h1>
					<p className='course-description mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
						do&nbsp;eiusmod tempor incididunt ut&nbsp;labore et&nbsp;dolore magna aliqua. Tristique senectus
						et&nbsp;netus et&nbsp;malesuada fames&nbsp;ac.</p>
					{/*<audio*/}
					{/*    controls*/}
					{/*    className="course-audio"*/}
					{/*    src="../../assets/audio/test-step.mp3">*/}
					{/*    Your browser does not support the*/}
					{/*    <code>audio</code> element.*/}
					{/*</audio>*/}
					<iframe className='mb-3' style={{ width: '100%', height: '166px', scrolling: 'no', frameBorder: 'no' }}
									src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/639103986&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true' />
				</div>
			</div>
		</React.Fragment>
	)
}

export default CoursePage
