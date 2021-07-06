import Image from 'next/image'
import projectStyles from '../styles/project.module.scss'
import utilStyles from '../styles/utils.module.scss'

export default function Project({name, link, imgSrc, imgHeight, imgWidth, imgAlt, description}) {
  return (
    <div className={projectStyles.project}>
      
      <div className={projectStyles.projectContent}>
        <h3 className={projectStyles.projectHeading}>
          {name}
          </h3>
        <p>
        {description}
        </p>

        <a href=""
        target=""
        className={utilStyles.primaryBtn}
        >
          View Project
        </a>

      </div>
      <div className={projectStyles.projectImage}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Image
            className="project-image"
            src={imgSrc}
            height={imgHeight} 
            width={imgWidth}
            alt={imgAlt}
          />
        </a>
      </div>
      
    </div>
  )
}