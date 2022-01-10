import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import projects from '../json/projects.json';
import { projectLogoMapper } from '../contants';
import {
  CardSlider, CardStack, ColorScheme, FancyLabel, ProjectButton, Testinomial, UserPill,
} from '../components/common';
import { Layout } from '../components';
import projectImage from '../images/projectImage.png';
import { useRouter, useSize } from '../hooks';
import { ArrowIcon, CrossIcon } from '../icons';

const DATA = [
  {
    id: 1,
    image: projectImage,
  },
  {
    id: 2,
    image: projectImage,
  },
  {
    id: 3,
    image: projectImage,
  },
  {
    id: 4,
    image: projectImage,
  },
];

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
  }, []);

  const ProjectLogo = projectLogoMapper(projectData?.id);

  return (
    <Layout className="project-page">
      <motion.div
        className="project-side"
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? '0%' : '-100%' }}
      >
        <div className="project-side-body">
          <section>
            <h4>TIME SPAN</h4>
            <p>{projectData.timeSpan}</p>
          </section>
          <section>
            <h4>PROJECT BUDGET</h4>
            <p>{projectData.projectBudget}</p>
          </section>
          <section>
            <h4>DELIEVERABLES</h4>
            {projectData?.delieverables?.map((delieverable) => (
              <p>{delieverable}</p>
            ))}
          </section>
          <section>
            <h4>CLIENT</h4>
            <p>{projectData.client}</p>
          </section>
          <section>
            <h4>PROJECT LEADER</h4>
            <UserPill className="project-side-person" image={projectImage} name="Nandini Prashar" />
          </section>
          <section>
            <h4>KEY STAKEHOLDERS</h4>
            <UserPill className="project-side-person" image={projectImage} name="Nandini Prashar" />
            <UserPill className="project-side-person" image={projectImage} name="Khushboo Dhiman" />
          </section>
        </div>
        <button type="button" onClick={() => setIsOpen(false)}>
          <CrossIcon />
        </button>
      </motion.div>
      <div className="project-details">
        <div className="project-info">
          <section>
            <div className="project-info-name">
              <ArrowIcon className="project-info-back" onClick={() => router.navigate('/work')} />
              <ProjectLogo className="project-info-icon" />
              <span>{projectData.name}</span>
            </div>
            <p className="project-info-description">
              {projectData.description}
            </p>
            <div className="project-info-labels">
              <FancyLabel type="purple">Designing</FancyLabel>
              <FancyLabel type="orange">Frontend Development</FancyLabel>
              <FancyLabel type="teal">Backend Development</FancyLabel>
            </div>
            <div className="project-info-people">
              <div className="project-info-section">
                <h4>Client</h4>
                <UserPill className="project-info-person" name={projectData.client} />
              </div>
              <div className="project-info-section">
                <h4>Project Leader</h4>
                <UserPill className="project-info-person" image={projectImage} name="Sam Scheziku" />
                <UserPill className="project-info-person" image={projectImage} name="Sam Scheziku" />
              </div>
              <div className="project-info-section">
                <h4>Key Stakeholders</h4>
                <UserPill className="project-info-person" image={projectImage} name="Sam Scheziku" />
                <UserPill className="project-info-person" image={projectImage} name="Sam Scheziku" />
              </div>
            </div>
          </section>
          <ProjectButton className="project-info-button" onClick={() => setIsOpen(true)}>More Details</ProjectButton>
        </div>
        <div className="project-details-pic">
          <img src={projectImage} alt={projectData.name} />
        </div>
      </div>
      <ProjectButton className="project-more" onClick={() => setIsOpen(true)}>More Details</ProjectButton>

      <div
        ref={parentContainer}
        className="project-sections"
      >
        <h5>Designs</h5>
        <p>We reflect craftsmanship through our work.</p>
        <CardStack style={{ height: (width * (725 / 1135)) || undefined }} className="project-sections-stack" dataKey="id" data={DATA}>
          {({ image }) => (
            <img src={image} alt="" />
          )}
        </CardStack>
      </div>
      <div className="project-sections">
        <h5>Mobile Designs</h5>
        <p>Our projects are always fully responsive.</p>
        <CardSlider className="project-sections-slider" dataKey="id" data={DATA}>
          {({ image }) => (
            <img src={image} alt="" />
          )}
        </CardSlider>
      </div>
      <div className="project-sections">
        <h5>Our Color Palette</h5>
        <p>Color Scheme plays a great role.</p>
        <ColorScheme className="project-sections-colors" colors={projectData?.colorScheme} />
      </div>
      <Testinomial
        className="project-testinomial"
        star={projectData?.clientReview?.stars}
        review={projectData?.clientReview?.message}
        to="/"
      />
    </Layout>
  );
}

export default SingleProject;
