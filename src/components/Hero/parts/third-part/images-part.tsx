import { type RefObject } from 'react'
import type { Project } from '../../../../lib/projects-realized';
import { Translation } from 'react-i18next';

interface ImagesPartProps {
  projectIsFixed: number;
  projects_realized: Project[];
  divImagesParents: RefObject<(HTMLDivElement | null)[]>;
  divImagesInner: RefObject<(HTMLDivElement | null)[]>;
  divImagesChildren: RefObject<(HTMLDivElement | null)[]>;
}

export const ImagesPart = ({projectIsFixed, projects_realized, divImagesChildren,divImagesInner, divImagesParents}: ImagesPartProps) => {
  return (
    <Translation ns={["projects_realized"]}>
      {(t) => (
        <div 
              className="relative images-part bg-gray-200/10 shadow-xl min-h-[300px] h-auto lg:h-full translate-x-[-1000px] overflow-auto w-full p-1 rounded-lg">
    
                {projects_realized.map((project, index) => (
                  <div 
                  key={project.project_id}
                  ref={(el) => {
                        divImagesParents.current[index] = el;
                      }}
                  className={`custom-scroll absolute top-0 left-0 w-full h-full overflow-y-hidden lg:overflow-y-auto overflow-x-auto lg:overflow-x-hidden ${projectIsFixed === project.project_id ? "translate-x-0" : "translate-x-[-2000px]"} transition-all`}
                  >
                    <div 
                    ref={(el) => {
                        divImagesInner.current[index] = el;}} 
                    className="w-full h-full">
                      <div
                      ref={
                        (el) => {
                          divImagesChildren.current[index] = el;
                        }
                      }
                        className="flex h-full w-full items-center justify-start"
                      >
                        {project.project_images.map((img, index) => (
                          <img
                            key={index}
                            src={img}
                            alt={`${t(`${project.i18n_key} ${index + 1}` as any)}`}
                            className="w-auto h-full p-1 bg-gray-200 object-cover md:object-contain xl:object-cover "
                          />
                        ))}
                
                      </div>
                    </div>
                  </div>
                ))}
                
              </div>
      )}
    </Translation>
  )
}
