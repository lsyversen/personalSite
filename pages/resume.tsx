import siteMetadata from '@/data/siteMetadata';
import { PageSEO } from '@/components/SEO';
import PageTitle from '@/components/PageTitle';

export default function Resume() {
  return (
    <>
      <PageSEO
        title={`Resume - ${siteMetadata.author}`}
        description={`Resume - ${siteMetadata.author}`}
      />
      <div className="space-y-2 pb-6 pt-6 md:space-y-5">
        <PageTitle>Resume</PageTitle>
      </div>

      {/* Resume Text */}
      <div className="prose pb-20 pt-2 text-lg leading-relaxed dark:prose-dark">
        <h2>Experience</h2>Evenica Corp, Internship, Jan 2024 - Dec 2024
        <ul className="list-disc space-y-1">
          <li>Junior Application Developer</li>
        </ul>
        <h2>Education</h2>Eastern Michigan University, B.A. Computer Science, expected May 2026
        <ul className="list-disc space-y-1">
          <li>
            <span className="font-bold">Coursework: </span>Linux/UNIX I: Fundamentals, Advanced Java
            Concepts, Java Spring Framework, Web Programming Using PHP and MySQL
          </li>
        </ul>
        <h2>Skills</h2>
        <ul className="list-disc space-y-1">
          <li>
            <span className="font-bold">Languages: </span>Python, Java, Javascript, TypeScript, PHP
            HTML, CSS, Swift
          </li>
          <li>
            <span className="font-bold">Frameworks / Technologies: </span> Docker, React, Azure Data
            Studio, Tailwind CSS, Next.js, Git, GraphQL
          </li>
        </ul>
      </div>
    </>
  );
}
