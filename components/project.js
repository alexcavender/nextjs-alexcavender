import { loadGetInitialProps } from 'next/dist/next-server/lib/utils'
import Image from 'next/image'
import projectStyles from '../styles/project.module.scss'
import utilStyles from '../styles/utils.module.scss'

export default function Project({name, link, imgSrc, imgHeight, imgWidth, imgAlt, imgSide, description}) {
  return (
    <div className="project">
      <style jsx>{`
        .project {
          display: flex;
          padding: 1.5rem 0 3rem 0;
          flex-direction: column-reverse;
        }

        @media(min-width: 800px) {
          .project {
            flex-direction: ${imgSide == 'left' ? 'row-reverse' : 'row'};
            padding: 4rem 0;
          }
        }

        .projectContent {
          width: 100%;
        }

        @media(min-width:800px) {
          .projectContent {
            margin: ${imgSide == 'left' ? '0 0 0 60px' : '0 60px 0 0'};
            width: 50%;
          }
        }

        .projectImage {
          width: 100%;
          margin-bottom: 1.5rem;
          overflow: hidden;
        }

        @media(min-width:800px) {
          .projectImage {
            width: 50%;
            margin-bottom: 0;
            
          }

          .projectImage a {
            display: block;
            max-width: 390px;
            margin-left: ${imgSide == 'right' ? 'auto' : '0' };
            margin-right: ${imgSide == 'right' ? '0' : 'auto' };
          }
        }

      `}</style>
      <div className="projectContent">
        <h3 className={projectStyles.projectHeading}>
          {name}
        </h3>
        <p>{description}</p>
        { link && 
          <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className={utilStyles.primaryBtn}
          >
          View Project
          </a>
        }
        
      </div>
      <div className="projectImage">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Image
            layout="responsive"
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