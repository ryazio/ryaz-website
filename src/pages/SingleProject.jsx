import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import projects from '../json/projects.json';
import employees from '../json/employees.json';
import {
  employeeImageMapper, projectImageMapper, projectLogoMapper, projectVideoMapper,
} from '../contants';
import {
  CardSlider, CardStack, ColorScheme, FancyLabel, ProjectButton, Testinomial, UserPill,
} from '../components/common';
import { Layout } from '../components';
import { useRouter, useSize } from '../hooks';
import { ArrowIcon, CrossIcon } from '../icons';

const labelColors = {
  0: 'purple',
  1: 'orange',
  2: 'teal',
  3: 'purple',
  4: 'orange',
  5: 'teal',
  6: 'purple',
  7: 'orange',
  8: 'teal',
};

function SingleProject() {
  const router = useRouter();
  const params = useParams();
  const [projectData, setProjectData] = useState('');
  const [isOpen, setIsOpen] = useState('');
  const parentContainer = useRef();
  const { width } = useSize(parentContainer);
  useEffect(() => {
    // find project from slug in the url and set the data in the react state
    const res = projects.find((project) => project.slug === params.name);
    setProjectData(res);
    window.scrollTo({ top: 0 });
  }, []);

  const ProjectLogo = projectLogoMapper(projectData?.id);
  const projectLeaders = projectData?.leaders
    ?.map((leader) => employees.find((employee) => employee.id === leader));
  const projectTeam = projectData?.stakeholders
    ?.map((leader) => employees.find((employee) => employee.id === leader));
  const heightResolution = Number(projectData?.resolution?.height || 9)
    / Number(projectData?.resolution?.width || 16);
  return (
    <Layout className="project-page">
      <div className={isOpen ? 'layover' : ''}>
        <motion.div
          className="project-side"
          initial={{ x: '-100%' }}
          animate={{ x: isOpen ? '0%' : '-100%' }}
        >
          <div className="project-side-body">
            <section>
              <h4 style={(window.innerHeight <= 620) ? { paddingTop: '60px' } : {}}>TIME SPAN</h4>
              <p>{projectData?.timeSpan}</p>
            </section>
            <section>
              <h4>DELIEVERABLES</h4>
              {projectData?.delieverables?.map((delieverable) => (
                <p key={delieverable}>{delieverable}</p>
              ))}
            </section>
            <section>
              <h4>CLIENT</h4>
              <p>{projectData?.client}</p>
            </section>
            <section>
              <h4>PROJECT LEADER</h4>
              {projectLeaders?.map((user) => (
                <UserPill
                  key={user.id}
                  className="project-side-person"
                  image={employeeImageMapper(user.id)}
                  name={user.name}
                />
              ))}
            </section>
            <section>
              <h4>KEY STAKEHOLDERS</h4>
              {projectTeam?.map((user) => (
                <UserPill
                  key={user.id}
                  className="project-side-person"
                  image={employeeImageMapper(user.id)}
                  name={user.name}
                />
              ))}
            </section>
          </div>
          <button type="button" onClick={() => setIsOpen(false)}>
            <CrossIcon />
          </button>
        </motion.div>
      </div>
      <div className="project-details">
        <div className="project-info">
          <section className="project-information">
            <div className="project-info-name">
              <ArrowIcon className="project-info-back" onClick={() => router.navigate('/work')} />
              {ProjectLogo && <ProjectLogo className="project-info-icon" />}
              <span className="line-height-correction">{projectData?.name}</span>
            </div>
            <p className="project-info-description">
              {projectData?.description}
            </p>
            <div className="project-info-labels">
              {projectData?.labels?.map((label, index) => (
                <FancyLabel
                  type={labelColors[index]}
                  key={label}
                >
                  {label}
                </FancyLabel>
              ))}
            </div>
            <div className="project-info-people">
              <div className="project-info-section">
                <h4>Client</h4>
                <UserPill className="project-info-person" name={projectData.client} />
              </div>
              <div className="project-info-section">
                <h4>Project Leader</h4>
                {projectLeaders?.map((user) => (
                  <UserPill
                    key={user.id}
                    className="project-info-person"
                    image={employeeImageMapper(user.id)}
                    name={user.name}
                  />
                ))}
              </div>
              <div className="project-info-section">
                <h4>Key Stakeholders</h4>
                {projectTeam?.map((user) => (
                  <UserPill
                    key={user.id}
                    className="project-info-person"
                    image={employeeImageMapper(user.id)}
                    name={user.name}
                  />
                ))}
              </div>
            </div>
          </section>
          <ProjectButton className="project-info-button" onClick={() => setIsOpen(true)}>More Details</ProjectButton>
        </div>
        <div className="project-details-pic">
          <img className="correction" src={projectImageMapper(projectData?.titleImage)} alt={projectData?.name} />
        </div>
      </div>
      <ProjectButton className="project-more" onClick={() => setIsOpen(true)}>More Details</ProjectButton>

      <div className="project-sections">
        <h5>Designs</h5>
        {projectData.name === 'CWHQ' ? (
          <p>We design and develop the curriculum inside out.</p>
        ) : (
          <p>We reflect craftsmanship through our work.</p>
        )}
        <CardStack
          style={{ height: (width * heightResolution) || undefined }}
          className="project-sections-stack"
          data={projectData?.stackImages || []}
          forwardRef={parentContainer}
        >
          {(imageName) => (
            <img src={projectImageMapper(imageName)} alt={projectData.name} />
          )}
        </CardStack>
      </div>
      {projectData?.sliderImages?.length && (
        <div className="project-sections">
          <h5>Mobile Designs</h5>
          <p>Our projects are always fully responsive.</p>
          <CardSlider className="project-sections-slider" data={projectData?.sliderImages || ['PLACEHOLDER']}>
            {(imageName) => (
              <img src={projectImageMapper(imageName)} alt={projectData.name} />
            )}
          </CardSlider>
        </div>
      )}
      {(projectData?.videoLink)
        ? (
          <>
            <h5 className="project-video-title">Quick Glance</h5>
            <p className="project-video-text">A quick look of our project.</p>
            <div className="project-video-holder">
              {projectData?.videoLink.includes('http') ? (
                <iframe
                  width="560"
                  height="315"
                  src={projectData?.videoLink}
                  title="Video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; modestbranding; picture-in-picture"
                  allowFullScreen
                  className="project-video-embed"
                />
              ) : (
                <video
                  width="560"
                  height="315"
                  controls
                  className="project-video-embed"
                >
                  <source src={projectVideoMapper(projectData?.videoLink)} type="video/mp4" />
                  <track kind="captions" srcLang="en" label="English captions" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </>
        )
        : <> </>}
      {projectData?.colorScheme && (
        <div className="project-sections">
          <h5>Our Color Palette</h5>
          <p>Color Scheme plays a great role.</p>
          <ColorScheme className="project-sections-colors" colors={projectData?.colorScheme} />
        </div>
      )}
      {projectData?.clientReview?.stars && projectData?.clientReview?.message && (
        <Testinomial
          className="project-testinomial"
          star={projectData?.clientReview?.stars}
          review={projectData?.clientReview?.message}
          to="/"
        />
      )}
    </Layout>
  );
}

export default SingleProject;
