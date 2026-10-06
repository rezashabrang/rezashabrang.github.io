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
                <Link className="navbar-brand" to="#">Reza Shabrang Maryaan</Link>
              </div>


              <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                  <li className=" smooth-menu active"></li>
                  <li className="smooth-menu"><a href="#experience">experience</a></li>
                  <li className="smooth-menu"><a href="#skills">skills</a></li>
                  <li className="smooth-menu"><a href="#projects">projects</a></li>
                  <li className="smooth-menu"><a href="#papers">publication</a></li>
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
                <h2>Reza Shabrang Maryaan <br /> ML Software Engineer</h2>
              </div>
            </div>
          </div>
        </div>

      </section>



      <section id="about" className="about">
        <div className="section-heading text-center"><h2>about me</h2></div>
        <div className="container">
          <div className="about-content">
            <div className="row">
              <div className="col-sm-6">
                <div className="single-about-txt">
                  <p className="font-weight-bold text-justify"><b>ML Software Engineer with 5+ years delivering production AI, data and distributed software systems end to end. Built multi-tenant AI products, NLP and computer-vision services, 100B-record analytics backends and high-throughput APIs using Python, FastAPI, Node.js, React, Kubernetes, Kafka, ClickHouse and GCP. Combines applied ML and MLOps depth (RAG, transformers, embeddings, forecasting, anomaly detection) with ownership from system design through deployment and observability.</b></p>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="single-about-add-info">
                        <h3>email</h3>
                        <p>rezashabrang.m@gmail.com</p>
                      </div>
                    </div>
                  </div>
                  <p><a className="btn btn-primary" href="/cv.pdf" download>Download CV (PDF)</a></p>
                </div>
              </div>
              <div className="col-sm-offset-1 col-sm-5">
                <div className="single-about-img"><img src="assets/images/about/me.png" alt="profile_image" /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="experience">
        <div className="section-heading text-center"><h2>Working experience</h2></div>
        <div className="container"><div className="experience-content"><div className="main-timeline"><ul>
                <li>
                  <div className="single-timeline-box fix">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="experience-time text-right">
                          <h2>2021 - Present</h2>
                          <h3>Data Scientist, ML Software Engineer, Team Lead</h3>
                        </div>
                      </div>
                      <div className="col-md-offset-1 col-md-5">
                        <div className="timeline">
                          <div className="timeline-content">
                            <h4 className="title">
                              <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                              Asam
                            </h4>
                            <p className="description">Built and operated 20+ production systems across AI products, NLP/ML services, data platforms and distributed APIs for media and fintech clients. Lead a four-person delivery group while staying hands-on in Python/FastAPI, Node.js, React, PostgreSQL, Redis, Kafka, Docker and Kubernetes on GCP. Standardize ML delivery with MLflow and Metaflow.</p>
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
                            <p className="description">Researched the US electricity market and designed ETL workflows to collect, transform and load market data for downstream analytics.</p>
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
                          <h3>BI Developer</h3>
                        </div>
                      </div>
                      <div className="col-md-offset-1 col-md-5">
                        <div className="timeline">
                          <div className="timeline-content">
                            <h4 className="title">
                              <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                              AhanOnline
                            </h4>
                            <p className="description">Built BI workflows, dashboards and data integrations with SQL Server, Power BI, SSIS, SSRS and Python; delivered customer analytics and an ARIMA model for steel and iron price forecasting.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul></div></div></div>
      </section>

      <section id="skills" className="education">
        <div className="section-heading text-center"><h2>Skills</h2></div>
        <br />
        <div className="container">
        <div className="section-heading text-center"><h3>ML and AI</h3></div>
        <div className="row"><div className="badge-container">
              <span className="badge-gpt blue">Python</span>
              <span className="badge-gpt blue">PyTorch</span>
              <span className="badge-gpt blue">TensorFlow</span>
              <span className="badge-gpt blue">Transformers</span>
              <span className="badge-gpt blue">BERT</span>
              <span className="badge-gpt blue">RAG</span>
              <span className="badge-gpt blue">LangGraph</span>
              <span className="badge-gpt blue">Vector Search</span>
              <span className="badge-gpt blue">Milvus</span>
              <span className="badge-gpt blue">Isolation Forest</span>
              <span className="badge-gpt blue">Darts</span>
              <span className="badge-gpt blue">XGBoost</span>
        </div></div>
        <div className="section-heading text-center"><h3>Software Engineering</h3></div>
        <div className="row"><div className="badge-container">
              <span className="badge-gpt blue">FastAPI</span>
              <span className="badge-gpt blue">Node.js</span>
              <span className="badge-gpt blue">React</span>
              <span className="badge-gpt blue">TypeScript</span>
              <span className="badge-gpt blue">REST APIs</span>
              <span className="badge-gpt blue">System Design</span>
              <span className="badge-gpt blue">Distributed Systems</span>
        </div></div>
        <div className="section-heading text-center"><h3>Data and Messaging</h3></div>
        <div className="row"><div className="badge-container">
              <span className="badge-gpt blue">PostgreSQL</span>
              <span className="badge-gpt blue">MySQL</span>
              <span className="badge-gpt blue">ClickHouse</span>
              <span className="badge-gpt blue">MongoDB</span>
              <span className="badge-gpt blue">Redis</span>
              <span className="badge-gpt blue">Kafka</span>
              <span className="badge-gpt blue">NATS</span>
              <span className="badge-gpt blue">RabbitMQ</span>
              <span className="badge-gpt blue">Airflow</span>
        </div></div>
        <div className="section-heading text-center"><h3>MLOps and DevOps</h3></div>
        <div className="row"><div className="badge-container">
              <span className="badge-gpt blue">Kubernetes</span>
              <span className="badge-gpt blue">Docker</span>
              <span className="badge-gpt blue">CI/CD</span>
              <span className="badge-gpt blue">GCP</span>
              <span className="badge-gpt blue">MLflow</span>
              <span className="badge-gpt blue">Metaflow</span>
              <span className="badge-gpt blue">Observability</span>
        </div></div>
        <div className="section-heading text-center"><h3>Architecture</h3></div>
        <div className="row"><div className="badge-container">
              <span className="badge-gpt blue">Multi-Tenancy</span>
              <span className="badge-gpt blue">Event-Driven Architecture</span>
              <span className="badge-gpt blue">Microservices</span>
              <span className="badge-gpt blue">RAG Systems</span>
              <span className="badge-gpt blue">Workflow Orchestration</span>
        </div></div>

        <div className="section-heading text-center"><br /><h3>Languages</h3></div>
        <div className="row"><div className="text-center">English (C1, Duolingo English Test 140, January 2025)<br />French (beginner)</div></div>
        <br /><br />
        </div>
      </section>

      <section id="projects" className="about">
        <div className="section-heading text-center"><h2>Projects</h2></div>
        <br /><br />
        <div className="container">
          <div className="list-group text-left">
            <div className="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
              <div className="w-100 justify-content-between"><h5 className="mb-1">Toocka: Multi-tenant AI Assistant and News Generation</h5></div>
              <p className="mb-1">Multi-tenant AI product suite on shared Kubernetes infrastructure. A LangGraph agentic assistant with per-tenant RAG knowledge bases (30+ workspaces), and a research, draft, review and publishing pipeline for automated news generation (hundreds of articles per day across 10+ media clients). <a href="https://toocka.io/" target="_blank" rel="noreferrer">toocka.io</a></p>
              <p className="mb-1"><span className="badge badge-pill">FastAPI</span> <span className="badge badge-pill">LangGraph</span> <span className="badge badge-pill">RAG</span> <span className="badge badge-pill">Postgres</span> <span className="badge badge-pill">Redis</span> <span className="badge badge-pill">Kubernetes</span></p>
            </div>
            <div className="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
              <div className="w-100 justify-content-between"><h5 className="mb-1">Kifpool: Cryptocurrency Exchange Data Platform</h5></div>
              <p className="mb-1">Event-driven data stack for a crypto exchange: Kafka, NATS and RabbitMQ messaging, Airflow orchestration, MySQL to ClickHouse CDC replication of tens of millions of daily events, Metabase and Streamlit BI, plus anomaly detection (Isolation Forest, Darts). <a href="https://kifpool.me/" target="_blank" rel="noreferrer">kifpool.me</a></p>
              <p className="mb-1"><span className="badge badge-pill">Kafka</span> <span className="badge badge-pill">ClickHouse</span> <span className="badge badge-pill">Airflow</span> <span className="badge badge-pill">CDC</span> <span className="badge badge-pill">Metabase</span> <span className="badge badge-pill">Anomaly Detection</span></p>
            </div>
            <div className="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
              <div className="w-100 justify-content-between"><h5 className="mb-1">Shahin: ClickHouse Observability Platform</h5></div>
              <p className="mb-1">Real-time analytics and observability platform for news publishers. Built the ClickHouse backbone with replication and sharding serving 100B+ records, plus ingestion and query APIs and a Vue dashboard. <a href="https://shahin.live" target="_blank" rel="noreferrer">shahin.live</a></p>
              <p className="mb-1"><span className="badge badge-pill">ClickHouse</span> <span className="badge badge-pill">FastAPI</span> <span className="badge badge-pill">Node.js</span> <span className="badge badge-pill">Vue</span> <span className="badge badge-pill">PostgreSQL</span></p>
            </div>
            <div className="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
              <div className="w-100 justify-content-between"><h5 className="mb-1">Penguin Keyword Mapper</h5></div>
              <p className="mb-1">Graph-based keyword intelligence service: large keyword sets modelled as weighted graphs and clustered with spectral methods, using NATS-connected Node.js and Python microservices over ArangoDB.</p>
              <p className="mb-1"><span className="badge badge-pill">Spectral Clustering</span> <span className="badge badge-pill">ArangoDB</span> <span className="badge badge-pill">NetworkX</span> <span className="badge badge-pill">NATS</span> <span className="badge badge-pill">Node.js</span></p>
            </div>
            <div className="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
              <div className="w-100 justify-content-between"><h5 className="mb-1">Persian Comment Classification</h5></div>
              <p className="mb-1">Fine-tuned a Persian BERT model with transfer learning to classify offensive comments for content moderation, reaching 90% accuracy.</p>
              <p className="mb-1"><span className="badge badge-pill">BERT</span> <span className="badge badge-pill">Transformers</span> <span className="badge badge-pill">Transfer Learning</span> <span className="badge badge-pill">NLP</span></p>
            </div>
            <div className="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
              <div className="w-100 justify-content-between"><h5 className="mb-1">Image and Content De-duplication</h5></div>
              <p className="mb-1">Embedding-based image and text de-duplication with vector search; benchmarked ResNet and VGG-16 for images and BGE-M3 and Sentence-BERT for text.</p>
              <p className="mb-1"><span className="badge badge-pill">Milvus</span> <span className="badge badge-pill">BGE-M3</span> <span className="badge badge-pill">Sentence-BERT</span> <span className="badge badge-pill">ResNet</span> <span className="badge badge-pill">VGG-16</span></p>
            </div>
            <div className="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
              <div className="w-100 justify-content-between"><h5 className="mb-1">COVID Density Forecasting</h5></div>
              <p className="mb-1">Research project on regional COVID density forecasting comparing Prophet, RNN and LSTM models in Darts with backtesting, reaching 5% MAPE.</p>
              <p className="mb-1"><span className="badge badge-pill">Darts</span> <span className="badge badge-pill">Prophet</span> <span className="badge badge-pill">RNN</span> <span className="badge badge-pill">LSTM</span> <span className="badge badge-pill">Time Series</span></p>
            </div>
            <div className="list-group-item list-group-flush list-group-item-action flex-column align-items-start academic-proj border-top border-bottm">
              <div className="w-100 justify-content-between"><h5 className="mb-1">Bachelor Thesis: Construction Project Cost Prediction</h5></div>
              <p className="mb-1">Extracted structured features from Microsoft Project files and compared decision trees, random forests, XGBoost and neural networks, improving on traditional forecasting by 20%. <a href="https://github.com/rezashabrang/construction-prediction">GitHub</a></p>
              <p className="mb-1"><span className="badge badge-pill">Decision Trees</span> <span className="badge badge-pill">Random Forest</span> <span className="badge badge-pill">XGBoost</span> <span className="badge badge-pill">Neural Networks</span></p>
            </div>
          </div>
        </div>
      </section>

      <section id="papers" className="education">
        <div className="section-heading text-center"><h2>Publication</h2></div>
        <br />
        <div className="container text-center">
          <p><b>Automated LOINC Mapping of Persian-English Mixed-Language Clinical Laboratory Test Names</b><br />
          Co-author. Studies in Health Technology and Informatics, 2026.<br />
          <a href="https://doi.org/10.3233/SHTI260091" target="_blank" rel="noreferrer">DOI: 10.3233/SHTI260091</a></p>
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
                        Amirkabir University of Technology
                      </h4>
                      <p className="description">
                        Overall: 16.77/20<br />
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
                <div className="col-sm-4">
                  <div className="single-profile">
                    <a href='https://www.linkedin.com/in/reza-shabrang-maryaan-35466b9b/' target="_blank">
                      <div className="profile-txt">
                        <i className="fa fa-linkedin"></i>
                        <div className="profile-icon-name">LinkedIn</div>
                      </div>
                      <div className="single-profile-overlay">
                        <div className="profile-txt">
                          <a href='https://www.linkedin.com/in/reza-shabrang-maryaan-35466b9b/' target="_blank"><i className="fa fa-linkedin"></i></a>
                          <div className="profile-icon-name">LinkedIn</div>
                        </div>
                      </div>
                    </a>
                  </div>

                </div>
                <div className="col-sm-4">
                  <div className="single-profile">
                    <a href='https://medium.com/@rezashabrang.m' target="_blank">
                      <div className="profile-txt">
                        <i className="fa fa-medium"></i>
                        <div className="profile-icon-name">Medium</div>
                      </div>
                      <div className="single-profile-overlay">
                        <div className="profile-txt">
                          <a href='https://medium.com/@rezashabrang.m' target="_blank"><i className="fa fa-medium"></i></a>
                          <div className="profile-icon-name">Medium</div>
                        </div>
                      </div>
                    </a>

                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="single-profile profile-no-border">
                    <a href='https://github.com/rezashabrang' target="_blank">
                      <div className="profile-txt">
                        <i className="flaticon-github-logo"></i>
                        <div className="profile-icon-name">github</div>
                      </div>
                      <div className="single-profile-overlay">
                        <div className="profile-txt">
                          <a href='https://github.com/rezashabrang' target="_blank"><i className="flaticon-github-logo"></i></a>
                          <div className="profile-icon-name">github</div>
                        </div>
                      </div>
                    </a>
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
