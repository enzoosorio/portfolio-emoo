import type { Project } from '../../../../lib/projects-realized';

interface DescripcionPartProps {
  projectIsFixed: number;
  projects_realized: Project[];
}
export const DescripcionPart = ({projectIsFixed, projects_realized}: DescripcionPartProps) => {
  return (
    <div className="description-part opacity-0 px-2 relative flex translate-x-[-1000px] flex-col items-center justify-center w-full gap-2 lg:gap-4 rounded-lg">
            <p className="text-primary-purple font-bold text-left w-full font-space-grotesk text-lg 2xl:text-xl">
              Descripción
            </p>
            <div className="w-full h-[104px] bg-gray-200/10 shadow-xl rounded-lg ">
            {projects_realized.map((project) => (
              <p
                key={project.project_id}
                className={`absolute top-14 left-1 ${
                  projectIsFixed === project.project_id
                    ? "translate-x-0"
                    : "translate-x-[-2000px]"
                } font-space-grotesk  text-xs leading-5 md:leading-normal md:text-sm lg:text-base 2xl:text-lg font-semibold text-pretty text-left w-[90%] transition-all px-4`}
              >
                {project.project_description}
              </p>
            ))}
            </div>
          </div>
  )
}

