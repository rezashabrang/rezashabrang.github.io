import { Link } from 'react-router-dom';

import './App.css';

function JobResume() {
	return (
		<div className="App">
			<header className="top-area">
				<div className="header-area">
					<nav className="navbar navbar-default bootsnav navbar-fixed dark no-background">

						<div className="container">
							<div className="navbar-header">
								<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
									<i className="fa fa-bars"></i>
								</button>
								<Link className="navbar-brand" to="#">Reza Shabrang</Link>
							</div>


							<div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
								<ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
									<li className=" smooth-menu active"></li>
									<li className="smooth-menu"><a href="#experience">experience</a></li>
									<li className="smooth-menu"><a href="#skills">skills</a></li>
									<li className="smooth-menu"><a href="#projects">projects</a></li>
									<li className="smooth-menu"><a href="#courses">courses</a></li>
									<li className="smooth-menu"><a href="#interests">interests</a></li>
									<li className="smooth-menu"><a href="#education">education</a></li>
									<li className="smooth-menu"><a href="#profiles">profile</a></li>
								</ul>
							</div>
						</div>
					</nav>
				</div>

				<div className="clearfix"></div>

			</header>

			<section id="welcome-hero" className="welcome-hero">
				<div className="container">
					<div className="row">
						<div className="col-md-12 text-center">
							<div className="header-text">
								<h2>Reza Shabrang <br /> Resume</h2>
							</div>
						</div>
					</div>
				</div>

			</section>



			<section id="about" className="about">
				<div className="section-heading text-center">
					<h2>about me</h2>
				</div>
				<div className="container">
					<div className="about-content">
						<div className="row">
							<div className="col-sm-6">
								<div className="single-about-txt">
									<p className='font-weight-bold text-justify'>
										<b>I am a Python developer working in the field of data science and machine learning. I always try to be up to date with state of art problems and models in AI like GANs, Transformers, Stable Diffusion, and Few-Shot Learning. I am looking for a position to extract insights from data and create fairly accurate predictive models and also handle the MLOps part for deploying & monitoring ML products. I'm eager to close the gap between research and product in Machine Learning world by creating robust and scalable APIs for ML models. </b>
									</p>
									<div className="row">
										<div className="col-sm-6">
											<div className="single-about-add-info">
												<h3>phone</h3>
												<p>+98-937-820-4977</p>
											</div>
										</div>
										<div className="col-sm-6">
											<div className="single-about-add-info">
												<h3>email</h3>
												<p>rezashabrang.m@gmail.com</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-sm-offset-1 col-sm-5">
								<div className="single-about-img">
									<img src="assets/images/about/me.png" alt="profile_image" />
								</div>

							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="experience" className="experience">
				<div className="section-heading text-center">
					<h2>Working experience</h2>
				</div>
				<div className="container">
					<div className="experience-content">
						<div className="main-timeline">
							<ul>
								<li>
									<div className="single-timeline-box fix">
										<div className="row">
											<div className="col-md-5">
												<div className="experience-time text-right">
													<h2>2021 - Present</h2>
													<h3>Data Scientist</h3>
												</div>
											</div>
											<div className="col-md-offset-1 col-md-5">
												<div className="timeline">
													<div className="timeline-content">
														<h4 className="title">
															<span><i className="fa fa-circle" aria-hidden="true"></i></span>
															Aasaam
														</h4>
														<p className="description">
															Working with healthcare data, processing and creating data pipelines, Time Series prediction for Covid Density, Working with Transformers, Word Vectors, Performing Transfer Learning & Sentiment Analysis ,Image Processing (Explicit Content Detection, Scale Up models)
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</li>

								<li>
									<div className="single-timeline-box fix">
										<div className="row">
											<div className="col-md-5">
												<div className="experience-time text-right">
													<h2>2020 - 2021</h2>
													<h3>Data Engineer</h3>
												</div>
											</div>
											<div className="col-md-offset-1 col-md-5">
												<div className="timeline">
													<div className="timeline-content">
														<h4 className="title">
															<span><i className="fa fa-circle" aria-hidden="true"></i></span>
															QuantRisk
														</h4>
														<h5>Remote, USA</h5>
														<p className="description">
															Researching US electric market, Identifying data and Extracting, Transforming and Loading market data.
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</li>

								<li>
									<div className="single-timeline-box fix">
										<div className="row">
											<div className="col-md-5">
												<div className="experience-time text-right">
													<h2>2019 - 2020</h2>
													<h3>Business Intelligence Developer</h3>
												</div>
											</div>
											<div className="col-md-offset-1 col-md-5">
												<div className="timeline">
													<div className="timeline-content">
														<h4 className="title">
															<span><i className="fa fa-circle" aria-hidden="true"></i></span>
															AhanOnline
														</h4>
														<p className="description">
															Working with sql-server, power BI and python, writing complex queries, API handling and Python Scraping, Implementing an ARIMA model for predicting Steel and Iron price, Building Dashboards and Analyzing customer data, working with SSMS, SSIS and SSRS.
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>

			</section>


			<section id="skills" className="education">
				<div className="section-heading text-center">
					<h2>Skills</h2>
				</div>
				<br></br>
				<div className="container">
					<div class="row">
						<div class="badge-container">
							<span class="badge-gpt blue">Experienced</span>
							<span class="badge-gpt yellow">Minor Experience</span>

						</div>

						<div class="badge-container">
						</div>
					</div>
					<div className="section-heading text-center">
						<h3>Tools & Libraries</h3>
					</div>

					<div class="row">
						<div class="badge-container">
							<span class="badge-gpt blue">Python</span>
							<span class="badge-gpt blue">Tensorflow</span>
							<span class="badge-gpt blue">Transformers (Huggingface Library)</span>
							<span class="badge-gpt blue">Sklearn</span>
							<span class="badge-gpt blue">NetworkX</span>
							<span class="badge-gpt blue">OpenCV</span>
							<span class="badge-gpt blue">DARTS</span>
							<span class="badge-gpt blue">PROPHET</span>
						</div>
					</div>
					<div class="row">
						<div class="badge-container">
							<span class="badge-gpt blue">ArangoDB</span>
							<span class="badge-gpt blue">MongoDB</span>
							<span class="badge-gpt blue">MySQL</span>
							<span class="badge-gpt blue">PostgreSQL</span>
							<span class="badge-gpt blue">Power BI</span>
							<span class="badge-gpt blue">Pytest</span>
						</div>
					</div>
					<div class="row">
						<div class="badge-container">
							<span class="badge-gpt blue">Linux</span>
							<span class="badge-gpt blue">Git</span>
							<span class="badge-gpt blue">Docker</span>
							<span class="badge-gpt blue">FastAPI</span>
							<span class="badge-gpt blue">Flask</span>
							<span class="badge-gpt blue">NiFi</span>
							<span class="badge-gpt blue">Github Actions</span>
							<span class="badge-gpt blue">Gitlab CI/CD</span>
						</div>
					</div>

					<div class="row">
						<div class="badge-container">
							<span class="badge-gpt yellow">NATS</span>
							<span class="badge-gpt yellow">Django</span>
							<span class="badge-gpt yellow">PyCaret</span>
							<span class="badge-gpt yellow">NodeJS</span>
						</div>
					</div>
					<br></br>


					<div className="section-heading text-center">
						<h3>Concepts & Models</h3>
					</div>

					<div class="row">
						<div class="badge-container">
							<span class="badge-gpt blue">Machine Learning</span>
							<span class="badge-gpt blue">Transfer Learning</span>
							<span class="badge-gpt blue">Computer Vision</span>
							<span class="badge-gpt blue">CNNs</span>
							<span class="badge-gpt blue">NLP</span>
							<span class="badge-gpt blue">Transformers</span>
							<span class="badge-gpt blue">Word Vectorization</span>
							<span class="badge-gpt blue">Sentiment Analysis</span>
						</div>
					</div>
					<div class="row">
						<div class="badge-container">
							<span class="badge-gpt blue">BERT</span>
							<span class="badge-gpt blue">Graph Theory</span>
							<span class="badge-gpt blue">Timeseries Prediction</span>
							<span class="badge-gpt blue">Data Visualization</span>
							<span class="badge-gpt blue">SQL</span>
							<span class="badge-gpt blue">NoSQL</span>
							<span class="badge-gpt blue">CI/CD</span>
						</div>
					</div>
					<div class="row">
						<div class="badge-container">
							<span class="badge-gpt blue">XGBoost</span>
							<span class="badge-gpt blue">Ensemble Models</span>
						</div>
					</div>
					<div class="row">
						<div class="badge-container">
							<span class="badge-gpt yellow">MLOPS</span>
							<span class="badge-gpt yellow">Microservices</span>
							<span class="badge-gpt yellow">Cryptocurrencies</span>
							<span class="badge-gpt yellow">Algorithmic Trading</span>
							<span class="badge-gpt yellow">TDD</span>
							<span class="badge-gpt yellow">SOLID</span>
							<span class="badge-gpt yellow">Backend Developement</span>
							<span class="badge-gpt yellow">Scraping</span>
						</div>
					</div>
				</div>

				<div className="section-heading text-center">
					<br></br>
					<br></br>

					<h3>Languages</h3>
				</div>
				<br></br>
				<div className='row'>
					<span class="text-center">English (Professional Proficiency)</span>
					<div className='text-center'><small class="text-center">TOEFL Results -{'>'} Reading: 26, Listening: 26, Speaking: 22, Writing: 23</small></div>
				</div>
				<br></br>
				<div className='row'>
					<span class="text-center">French (Elementry)</span>
				</div>
				<br></br>
				<br></br>

			</section>


			<section id="projects" className="about">
				<div className="section-heading text-center">
					<h2>Projects</h2>
				</div>
				<br></br><br></br>
				<div className="container">
					<div class="list-group text-left">
						<div class="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
							<div class="w-100 justify-content-between">
								<h5 class="mb-1">Finding Intents and Topics of a List of Keywords</h5>
							</div>
							<p class="mb-1">Using graph theory and unsupervised learning to cluster a list of keywords.</p>
							<p class="mb-1"><span class="badge badge-pill">Graph Theory</span> <span class="badge badge-pill">Spectral Clustering</span> <span class="badge badge-pill">ArangoDB</span> <span class="badge badge-pill">NetworkX</span></p>
						</div>

						<div class="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
							<div class="w-100 justify-content-between">
								<h5 class="mb-1">Transfer learning & Sentiment Analysis (Comment Classification) Using Transformers Models (BERT)</h5>
							</div>
							<p class="mb-1">Re-Training a BERT persian Language model on comment data and classifying offensive comments with an accuracy of 79%. </p>
							<p class="mb-1"><span class="badge badge-pill">Transfer Learning</span> <span class="badge badge-pill">Word Vectorization</span> <span class="badge badge-pill">BERT</span> <span class="badge badge-pill">Sentiment Analysis</span> <span class="badge badge-pill">Transformers</span> <span class="badge badge-pill">NLP</span></p>
						</div>

						<div class="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
							<div class="w-100 justify-content-between">
								<h5 class="mb-1">Covid Density Prediction per Region using Various Time Series Models (PROPHET, RNN, LSTM, Naïve Bayes)</h5>
							</div>
							<p class="mb-1"><span class="badge badge-pill">Time Series</span> <span class="badge badge-pill">PROPHET</span> <span class="badge badge-pill">RNN</span> <span class="badge badge-pill">LSTM</span> <span class="badge badge-pill">DARTS</span></p>
						</div>

						<div class="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
							<div class="w-100 justify-content-between">
								<h5 class="mb-1">Predicting Project Cost Using Decision Tree Regressor, Random Forest, XGBoost & Neural Networks Using MSP Files Database</h5>
							</div>
							<p class="mb-1">In this thesis data was extracted from msp files, preprocessed, analyzed and after extracting insights several models were trained on it. The results shows that using ML methods in cost prediction outperforms traditional predictions.<br /> <a href='https://github.com/rezashabrang/construction-prediction'>GITHUB LINK</a></p>
							<p class="mb-1"><span class="badge badge-pill">Bachelor Thesis</span> <span class="badge badge-pill">Decision Tree</span> <span class="badge badge-pill">XGBoost</span> <span class="badge badge-pill">Neural Networks</span></p>
						</div>

						<div class="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
							<div class="w-100 justify-content-between">
								<h5 class="mb-1">Simulating a POS Company Using MATLAB and Developing a GUI for Analyzing Results</h5>
							</div>
							<p class="mb-1"><span class="badge badge-pill">Simulation</span> <span class="badge badge-pill">MATLAB</span> <span class="badge badge-pill">GUI</span></p>
						</div>
						<div class="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
							<div class="w-100 justify-content-between">
								<h5 class="mb-1">House Price Prediction (kaggle competition)</h5>
							</div>
							<p class="mb-1"><span class="badge badge-pill">kaggle</span> <span class="badge badge-pill">prediction</span></p>
						</div>
						<div class="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
							<div class="w-100 justify-content-between">
								<h5 class="mb-1">Predicting Stock Market using ARIMA Model</h5>
							</div>
							<p class="mb-1"><span class="badge badge-pill">Time Series</span> <span class="badge badge-pill">ARIMA</span></p>
						</div>
					</div>
				</div>

			</section>


			<section id="courses" className="education">
				<div className="section-heading text-center">
					<h2>Courses & Certificates</h2>
				</div>
				<br></br><br></br>
				<div className="container">
					<div class="list-group text-left">
						<div class="list-group text-left">
							<div class="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
								<div class="w-100 justify-content-between">
									<h5 class="mb-1">Advanced Computer Vision With Tensorflow</h5>
									<small>2022-2023</small><br />
									<small>Ongoing</small><br />
									<small>Coursera/Deeplearning.ai</small>
								</div>
							</div>
							<div class="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
								<div class="w-100 justify-content-between">
									<h5 class="mb-1">MLOps Specialization</h5>
									<small>2022-2023</small><br />
									<small>2 months (Audit)</small><br />
									<small>Coursera/Deeplearning.ai</small>
								</div>
							</div>
							<div class="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
								<div class="w-100 justify-content-between">
									<h5 class="mb-1">Deep Learning Specialization</h5>
									<small>2021</small><br />
									<small>3 months (Audit)</small><br />
									<small>Coursera/Deeplearning.ai</small>
								</div>
							</div>
							<div class="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
								<div class="w-100 justify-content-between">
									<h5 class="mb-1">Advanced Algorithmic Thinking and Data Structures</h5>
									<small>2020</small><br />
									<small>3 months</small><br />
									<small>Quera.ir</small>
								</div>
							</div>
							<div class="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
								<div class="w-100 justify-content-between">
									<h5 class="mb-1"><a href="https://quera.org/certificate/Vyos8FV5/">AI & Machine learning Problem-Based Course</a></h5>
									<small>2018</small><br />
									<small>3 months</small><br />
									<small>Quera.ir</small>
								</div>
							</div>
							<div class="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
								<div class="w-100 justify-content-between">
									<h5 class="mb-1"><a href="https://quera.org/certificate/gLshE6uR/">Advanced Python Programming</a></h5>
									<small>2018</small><br />
									<small>3 months</small><br />
									<small>Quera.ir</small>
								</div>
							</div>
							<div class="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
								<div class="w-100 justify-content-between">
									<h5 class="mb-1">Android and Java Programming Course</h5>
									<small>2019</small><br />
									<small>56 hours</small><br />
									<small>Tehran Univeristy</small>
								</div>
							</div>

						</div>
					</div>
				</div>

			</section>


			<section id="interests" className="profiles">
				<div className="profiles-details">
					<div className="section-heading text-center">
						<h2>Interests</h2>
					</div>
					<div className="container">
						<div className="profiles-content">
							<div className="row">
								<div className="col-sm-4">
									<div className="single-profile">
										<div className="profile-txt">
											<div className="profile-icon-name"><b>Machine Learning</b></div>
										</div>
										<div className="single-profile-overlay">
											<div className="profile-txt">
												<div className="profile-icon-name"><b>Machine Learning</b></div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-sm-4">
									<div className="single-profile">
										<div className="profile-txt">
											<div className="profile-icon-name"><b>Deep Learning</b></div>
										</div>
										<div className="single-profile-overlay">
											<div className="profile-txt">
												<div className="profile-icon-name"><b>Deep Learning</b></div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-sm-4">
									<div className="single-profile profile-no-border">
										<div className="profile-txt">
											<div className="profile-icon-name"><b>NLP</b></div>
										</div>
										<div className="single-profile-overlay">
											<div className="profile-txt">
												<div className="profile-icon-name"><b>NLP</b></div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="profile-border"></div>
							<div className="row">
								<div className="col-sm-4">
									<div className="single-profile">
										<div className="profile-txt">
											<div className="profile-icon-name"><b>Computer Vision</b></div>
										</div>
										<div className="single-profile-overlay">
											<div className="profile-txt">
												<div className="profile-icon-name"><b>Computer Vision</b></div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-sm-4">
									<div className="single-profile">
										<div className="profile-txt">
											<div className="profile-icon-name"><b>Optimization</b></div>
										</div>
										<div className="single-profile-overlay">
											<div className="profile-txt">
												<div className="profile-icon-name"><b>Optimization</b></div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-sm-4">
									<div className="single-profile profile-no-border">
										<div className="profile-txt">
											<div className="profile-icon-name"><b>Graph Networks</b></div>
										</div>
										<div className="single-profile-overlay">
											<div className="profile-txt">
												<div className="profile-icon-name"><b>Graph Networks</b></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</section>


			<section id="education" className="education">
				<div className="section-heading text-center">
					<h2>education</h2>
				</div>
				<div className="container">
					<div className="education-horizontal-timeline">
						<div className="row">
							<div className="col-sm-6">
								<div className="single-horizontal-timeline">
									<div className="experience-time">
										<h2>2016 - 2021</h2>
										<h3>bachelor <span>of </span> Industrial Engineering</h3>
									</div>
									<div className="timeline-horizontal-border">
										<i className="fa fa-circle" aria-hidden="true"></i>
										<span className="single-timeline-horizontal"></span>
									</div>
									<div className="timeline">
										<div className="timeline-content">
											<h4 className="title">
												Amirkabir Univeristy of Technology
											</h4>
											<p className="description">
												Cumulative GPA: 3.5/4 <br />
												Last 56 Units GPA: 3.7/4
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="single-horizontal-timeline">
									<div className="experience-time">
										<h2>2012 - 2016</h2>
										<h3>Diploma <span>of </span> Mathematics & Physics</h3>
									</div>
									<div className="timeline-horizontal-border">
										<i className="fa fa-circle" aria-hidden="true"></i>
										<span className="single-timeline-horizontal"></span>
									</div>
									<div className="timeline">
										<div className="timeline-content">
											<h4 className="title">
												Imam Jafar Sadegh High School
											</h4>
											<p className="description">
												Cumulative GPA: 4/4
											</p>
										</div>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>


			</section>


			<section id="profiles" className="profiles">
				<div className="profiles-details">
					<div className="section-heading text-center">
						<h2>profiles</h2>
					</div>
					<div className="container">
						<div className="profiles-content">
							<div className="row">
								<div className="col-sm-6">
									<div className="single-profile">
										<div className="profile-txt">
											<a href='https://www.linkedin.com/in/reza-shabrang-maryaan-35466b9b/' target="_blank"><i className="fa fa-linkedin"></i></a>
											<div className="profile-icon-name">LinkedIn</div>
										</div>
										<div className="single-profile-overlay">
											<div className="profile-txt">
												<a href='https://www.linkedin.com/in/reza-shabrang-maryaan-35466b9b/' target="_blank"><i className="fa fa-linkedin"></i></a>
												<div className="profile-icon-name">LinkedIn</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-sm-6">
									<div className="single-profile profile-no-border">
										<div className="profile-txt">
											<a href='https://github.com/rezashabrang' target="_blank"><i className="flaticon-github-logo"></i></a>
											<div className="profile-icon-name">github</div>
										</div>
										<div className="single-profile-overlay">
											<div className="profile-txt">
												<a href='https://github.com/rezashabrang' target="_blank"><i className="flaticon-github-logo"></i></a>
												<div className="profile-icon-name">github</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</section>


			<footer id="footer-copyright" className="footer-copyright">
				<div className="container">
					<div className="hm-footer-copyright text-center">
						<p>
							&copy; copyright <i>Reza Shabrang</i>. design and developed by <i>Reza Shabrang</i>
						</p>
					</div>
				</div>

				<div id="scroll-Top">
					<div className="return-to-top">
						<i className="fa fa-angle-up " id="scroll-top" ></i>
					</div>

				</div>

			</footer>

		</div>
	);
}

export default JobResume;

