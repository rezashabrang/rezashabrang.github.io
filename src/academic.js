import {Link} from 'react-router-dom';

import './App.css';

function AcademicResume() {
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
								<li className="smooth-menu"><a href="#interests">Research Interests</a></li>
			                    <li className="smooth-menu"><a href="#education">education</a></li>
			                    <li className="smooth-menu"><a href="#projects">projects</a></li>
			                    <li className="smooth-menu"><a href="#teaching">experience</a></li>
			                    <li className="smooth-menu"><a href="#skills">skills</a></li>
			                    <li className="smooth-menu"><a href="#honors">honors</a></li>
			                    <li className="smooth-menu"><a href="#courses">courses</a></li>
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
							<h2>Reza Shabrang <br/> Resume</h2>
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
								<b>I have recently graduated from Amir Kabir university of technology with a QS ranking of 443. My bachelor thesis is a machine learning project about predicting construction project costs which I have passed with a grade of 4/4 (Details can be found below).<br></br>Also, I am currently working as a Data Scientist in the medical data and Natural Language Processing (NLP) fields.<br></br>I am very enthusiastic about learning, and I always try to be up to date with state of the art machine learning models and problems like meta-learning, image processing, GANs, Transformers, etc. <br></br>Currently, I am looking for a graduate position in Computer Science or Industrial & System Engineering Major to work and research in data science and machine learning fields & projects.</b>
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
											<p>reza.shm70@aut.ac.ir</p>
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


		<section id="interests" className="profiles">
			<div className="profiles-details">
				<div className="section-heading text-center">
					<h2>Research Interests</h2>
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
										<div className="profile-icon-name"><b>Image Processing</b></div>
									</div>
									<div className="single-profile-overlay">
										<div className="profile-txt">
											<div className="profile-icon-name"><b>Image Processing</b></div>
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
										<div className="profile-icon-name"><b>Industrial & System Engineering</b></div>
									</div>
									<div className="single-profile-overlay">
										<div className="profile-txt">
											<div className="profile-icon-name"><b>Industrial & System Engineering</b></div>
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
										<h5>Tehran, Iran</h5>
										<p className="description">
											Cumulative GPA: 3.5/4 <br/>
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
										<h5>Tehran, Iran</h5>
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
		<section id="projects" className="about">
			<div className="section-heading text-center">
				<h2>Academic Projects</h2>
			</div>
			<br></br><br></br>
			<div className="container">
					<div class="list-group text-left">
						<div class="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
							<div class="w-100 justify-content-between">
							<h5 class="mb-1">Predicting Project Cost Using Decision Tree Regressor, Random Forest, XGBoost & Neural Networks Using MSP Files Database</h5>
							</div>
							<p class="mb-1">In this thesis data was extracted from msp files, preprocessed, analyzed and after extracting insights several models were trained on it. The results shows that using ML methods in cost prediction outperforms traditional predictions.<br/> <a href='https://github.com/rezashabrang/construction-prediction'>GITHUB LINK</a></p>
							<p class="mb-1"><span class="badge badge-pill">Bachelor Thesis</span> <span class="badge badge-pill">Decision Tree</span> <span class="badge badge-pill">XGBoost</span> <span class="badge badge-pill">Neural Networks</span></p>
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
							<p class="mb-1"><span class="badge badge-pill">Time Series</span> <span class="badge badge-pill">PROPHET</span> <span class="badge badge-pill">RNN</span> <span class="badge badge-pill">LSTM</span></p>
						</div>
						<div class="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
							<div class="w-100 justify-content-between">
							<h5 class="mb-1">Simulating a POS Company Using MATLAB and Developing a GUI for Analyzing Results</h5>
							</div>
							<p class="mb-1"><span class="badge badge-pill">Simulation</span> <span class="badge badge-pill">MATLAB</span> <span class="badge badge-pill">GUI</span></p>
						</div>
						<div class="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
							<div class="w-100 justify-content-between">
							<h5 class="mb-1">Used Gams to Solve a Dynamic Programming Problem</h5>
							</div>
							<p class="mb-1">Operation Research II Course Project</p>
							<p class="mb-1"><span class="badge badge-pill">GAMS</span> <span class="badge badge-pill">DP</span> <span class="badge badge-pill">OR</span></p>
						</div>
						<div class="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
							<div class="w-100 justify-content-between">
							<h5 class="mb-1">Data Visualization and Processing on Titanic Database and Implementing Machine Learning algorithms and Models</h5>
							</div>
							<p class="mb-1">Discovering connection between features, correlation heat map, tree of the survivors, classification</p>
							<p class="mb-1"><span class="badge badge-pill">Classification</span> <span class="badge badge-pill">Visualization</span> <span class="badge badge-pill">EDA</span></p>
						</div>
						<div class="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
							<div class="w-100 justify-content-between">
							<h5 class="mb-1">Analyzing a Factory, A Selected Product and Step by Step Facility Planning Using Algorithms like CRAFT, ALDEP, CORELAP</h5>
							</div>
							
							<p class="mb-1">Facility Planning Course Project</p>
							<p class="mb-1"><span class="badge badge-pill">Facility Planning</span></p>
						</div>
						<div class="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
							<div class="w-100 justify-content-between">
							<h5 class="mb-1">House Price Prediction (kaggle competition)</h5>
							</div>
							<p class="mb-1"><span class="badge badge-pill">kaggle</span> <span class="badge badge-pill">prediction</span></p>
						</div>
						<div class="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
							<div class="w-100 justify-content-between">
							<h5 class="mb-1">Predicting Stock Market using ARIMA Model (Iran Bourse)</h5>
							</div>
							<p class="mb-1"><span class="badge badge-pill">Time Series</span> <span class="badge badge-pill">ARIMA</span></p>
						</div>
						<div class="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
							<div class="w-100 justify-content-between">
							<h5 class="mb-1">Step by Step Analyzing the Process of a Complex Piece Production </h5>
							</div>
							<p class="mb-1">Manufacturing Processes Course Project</p>
							<p class="mb-1"><span class="badge badge-pill">Manufacturing Processes</span></p>
						</div>
						<div class="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
							<div class="w-100 justify-content-between">
							<h5 class="mb-1">Implementing a Database system for a Railing-contractor Company</h5>
							</div>
							<p class="mb-1">Management Information System Course Project</p>
							<p class="mb-1"><span class="badge badge-pill">MIS</span> <span class="badge badge-pill">SQL</span> <span class="badge badge-pill">Database</span></p>
						</div>
						<div class="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
							<div class="w-100 justify-content-between">
							<h5 class="mb-1">Implementing a Regression and Classifier model for Boston Database in R</h5>
							</div>
							<p class="mb-1"><span class="badge badge-pill">Prediction</span></p>
						</div>
					</div>
			</div>

		</section>


		<section id="teaching" className="education">
			<div className="section-heading text-center">
				<h2>Teaching experience</h2>
			</div>
			<div className="container">
				<div className="education-horizontal-timeline">
					<div className="row">
					<div className="col-sm-4">
							<div className="single-horizontal-timeline">
								<div className="experience-time">
									<h2>2021</h2>
									<h3>Teaching Python for Data Science</h3>
								</div>
								<div className="timeline-horizontal-border">
									<i className="fa fa-circle" aria-hidden="true"></i>
									<span className="single-timeline-horizontal spacial-horizontal-line
									"></span>
								</div>
								<div className="timeline">
									<div className="timeline-content">
										<h4 className="title">
											Amirkabir Univeristy of Technology
										</h4>
										<h5>Tehran, Iran</h5>
										<p className="description">
											Python libraries for Machine Learning (Scikit-Learn & Tensorflow)
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-4">
							<div className="single-horizontal-timeline">
								<div className="experience-time">
									<h2>2019 - 2020</h2>
									<h3>Teaching Assistant</h3>
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
										<h5>Tehran, Iran</h5>
										<p className="description">
											For Information & Data Analysis (Data Mining) Course. Responsibilities included teaching and grading.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-4">
							<div className="single-horizontal-timeline">
								<div className="experience-time">
									<h2>2018 - 2019</h2>
									<h3>Sub-Teaching Assistant</h3>
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
										<h5>Tehran, Iran</h5>
										<p className="description">
											Management Information Systems (MIS) course
										</p>
									</div>
								</div>
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
														<h5>Tehran, Iran</h5>
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
														<h5>Tehran, Iran</h5>
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
				<h2>Technical Skills</h2>
			</div>
			<br></br>
			<div className="container">
				<div class="row">
					<div class="col-sm-6">
						<h3 class="text-left">Python</h3>
						<div class="progress">
							<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
						</div>
					</div>
					<div class="col-sm-6">
						<h3 class="text-left">ML & DL Libraries (Tensorflow, PyTorch, Scikit-Learn, etc)</h3>
						<div class="progress">
							<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-sm-6">
						<h3 class="text-left">SPSS</h3>
						<div class="progress">
							<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
						</div>
					</div>
					<div class="col-sm-6">
						<h3 class="text-left">SQL</h3>
						<div class="progress">
							<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-sm-6">
						<h3 class="text-left">C/C++</h3>
						<div class="progress">
							<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
						</div>
					</div>
					<div class="col-sm-6">
						<h3 class="text-left">Linux</h3>
						<div class="progress">
							<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-sm-6">
						<h3 class="text-left">MATLAB</h3>
						<div class="progress">
							<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
						</div>
					</div>
					<div class="col-sm-6">
						<h3 class="text-left">GAMS</h3>
						<div class="progress">
							<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-sm-6">
						<h3 class="text-left">Arena Simulation Software</h3>
						<div class="progress">
							<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
						</div>
					</div>
					<div class="col-sm-6">
						<h3 class="text-left">Microsoft Office (Word, Excel, Visio), LATEX</h3>
						<div class="progress">
							<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
						</div>
					</div>
				</div>
			</div>

		</section>


		<section id="languages" className="education">
			<div className="section-heading text-center">
				<h2>Languages</h2>
			</div>
			<br></br>
			<div className="container">
					<div className='row'>
						<h3 class="text-center">English (Professional Proficiency)</h3>
						<div className='text-center'><small class="text-center">TOEFL Results: Reading: 26, Listening: 26, Speaking: 22, Writing: 23</small></div>
					</div>
					<br></br>
					<div className='row'>
						<h3 class="text-center">French (elementry)</h3>
					</div>
					<br></br>
					<div className='row'>
						<h3 class="text-center">Perisan (Native)</h3>
					</div>
			</div>
			<br></br>
			<br></br>
			<br></br>

		</section>


		<section id="honors" className="about">
			<div className="section-heading text-center">
				<h2>Honors & Awards</h2>
			</div>
			<br></br><br></br>
			<div className="container">
					<div class="list-group text-left">
						<div class="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
							<div class="w-100 justify-content-between">
							<h5 class="mb-1">Among Top 20 student in Amirkabir Industrial Engineering Faculty</h5>
							<small>2020</small>
							</div>
						</div>
						<div class="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
							<div class="w-100 justify-content-between">
							<h5 class="mb-1">Ranked in top 0.2% (Ranked 857th) Nationwide University Entrance Exam 2017, among more than 320,000 participants</h5>
							<small>2016</small>
							</div>
						</div>
						<div class="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
							<div class="w-100 justify-content-between">
							<h5 class="mb-1">Passed the first Level in national Chemistry Olympiad</h5>
							<small>2014</small>
							</div>
						</div>
						<div class="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
							<div class="w-100 justify-content-between">
							<h5 class="mb-1">Participated in Top Researcher Elite Competition, Kharazmi Competitions, Tehran University</h5>
							<small>2013</small>
							</div>
						</div>

					</div>
			</div>

		</section>


		<section id="courses" className="about">
			<div className="section-heading text-center">
				<h2>Courses & Certificates</h2>
			</div>
			<br></br><br></br>
			<div className="container">
					<div class="list-group text-left">
					<div class="list-group text-left">
						<div class="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
							<div class="w-100 justify-content-between">
							<h5 class="mb-1">Machine Learning Specialization (Andrew Ng)</h5>
							<small>2021</small><br/>
							<small>3 months</small><br/>
							<small>coursera (Audit)</small>
							</div>
						</div>
						<div class="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
							<div class="w-100 justify-content-between">
							<h5 class="mb-1">Advanced algorithmic thinking and data structures</h5>
							<small>2020</small><br/>
							<small>3 months</small><br/>
							<small>Quera.ir</small>
							</div>
						</div>
						<div class="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
							<div class="w-100 justify-content-between">
							<h5 class="mb-1">Android and Java Programming Course</h5>
							<small>2019</small><br/>
							<small>56 hours</small><br/>
							<small>Tehran Univeristy</small>
							</div>
						</div>
						<div class="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
							<div class="w-100 justify-content-between">
							<h5 class="mb-1"><a href="https://quera.org/certificate/Vyos8FV5/">AI & Machine learning Problem-Based Course</a></h5>
							<small>2018</small><br/>
							<small>3 months</small><br/>
							<small>Quera.ir</small>
							</div>
						</div>
						<div class="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
							<div class="w-100 justify-content-between">
							<h5 class="mb-1"><a href="https://quera.org/certificate/gLshE6uR/">Advanced Python Programming</a></h5>
							<small>2018</small><br/>
							<small>3 months</small><br/>
							<small>Quera.ir</small>
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
										<a href='https://github.com/rezashabrang'  target="_blank"><i className="flaticon-github-logo"></i></a>
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

export default AcademicResume;

