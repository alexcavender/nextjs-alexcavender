import Image from 'next/image'
import projectStyles from '../styles/project.module.scss'

export default function Project({name, link, imgSrc, imgAlt, description}) {
  return (
    <div className={projectStyles.project}>
      
      <div className={projectStyles.projectContent}>
        <h3 className={projectStyles.projectHeading}>
          {name}
          </h3>
        <p>
        {description}
        </p>

      </div>
      <div className={projectStyles.projectImage}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Image
            className="project-image"
            src={imgSrc}
            height={938} 
            width={1899}
            alt={imgAlt}
          />
        </a>
      </div>
      
    </div>
  )
}