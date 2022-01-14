import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import projects from '../json/projects.json';
import transparentImage from '../images/transparent.png';

import { Layout, ProjectCard } from '../components';
import { projectImageMapper } from '../contants';

function Work() {
  const [imageIndex, setImageIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(projectImageMapper(projects[0]?.titleImage));
  const containerRef = useRef();
  const imageRef = useRef();

  const containerHeight = containerRef?.current?.clientHeight;
  const imageHeight = imageRef?.current?.clientHeight;

  const y = (((containerHeight - (imageHeight)) / (projects.length - 1)) * imageIndex) || 0;
  return (
    <Layout className="work">
      <div className="work-tagline">
        We design, build and ship digital products on time with written
        guarantees on quality & performance.
      </div>
      <div ref={containerRef} className="work-list">
        <motion.div ref={imageRef} className="work-list-image" animate={{ y, originY: '50%' }}>
          <img src={transparentImage} alt="" style={{ backgroundImage: `url(${currentImage})` }} />
        </motion.div>
        {projects.map((project, index) => (
          <React.Fragment key={project.id}>
            <ProjectCard
              sno={project.id}
              slug={project.slug}
              projectName={project.name}
              description={project.description}
              projectImage={projectImageMapper(project?.titleImage)}
              setImage={() => {
                setImageIndex(index);
                setCurrentImage(projectImageMapper(project?.titleImage));
              }}
            />
            <div className="work-list-empty" />
          </React.Fragment>
        ))}
      </div>
    </Layout>
  );
}

export default Work;
