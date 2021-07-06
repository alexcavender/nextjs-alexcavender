import Image from 'next/image'

export default function Project({name, link, imgSrc, imgAlt, description}) {
  return (
    <>
      <h3>{name}</h3>
      <p>
      {description}
      </p>
      <a href={link}  target="_blank" rel="noopener noreferrer">
        <Image
          className="project-image"
          src={imgSrc}
          height={938} 
          width={1899}
          alt={imgAlt}
        />
      </a>
    </>
  )
}