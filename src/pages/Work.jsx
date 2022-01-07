import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import projects from '../json/projects.json';

import projectImage from '../images/projectImage.png';
import { Layout, ProjectCard } from '../components';
import { useSize } from '../hooks';

function Work() {
  const [imageIndex, setImageIndex] = useState(0);
  const containerRef = useRef();
  const imageRef = useRef();
  const { height: imageHeight } = useSize(imageRef);

  const containerHeight = containerRef?.current?.clientHeight;

  const y = (((containerHeight - (imageHeight)) / (projects.length - 1)) * imageIndex) || 0;
  return (
    <Layout className="work">
      <div className="work-tagline">
        We design, build and ship digital products on time with written
        guarantees on quality & performance.
      </div>
      <div ref={containerRef} className="work-list">
        <motion.div ref={imageRef} className="work-list-image" animate={{ y, originY: '50%' }}>
          <img src={projectImage} alt="" />
        </motion.div>
        {projects.map((project, index) => (
          <>
            <ProjectCard
              key={project.id}
              sno={project.id}
              slug={project.slug}
              projectName={project.name}
              description={project.description}
              projectImage={projectImage}
              setImage={() => setImageIndex(index)}
            />
            <div className="work-list-empty" />
          </>
        ))}
      </div>
    </Layout>
  );
}

export default Work;
