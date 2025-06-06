import React, { useEffect, useRef } from 'react'

type SkillType = "Frontend" | "Backend" | "Fullstack";

type Skill = {
  label: string;
  value: number;
  skillType: SkillType
};
export const TechChart = () => {

    const chartRef = useRef<HTMLDivElement | null>(null);

    const technologies : Skill[] = [
        {
            label: "React",
            value: 7,
            skillType: "Frontend"
        },
        {
            label: "CSS",
            value: 6,
            skillType: "Frontend"
        },
        {
            label: "JS",
            value: 5,
            skillType: "Frontend"
        },
        {
            label: "TS",
            value: 5,
            skillType: "Frontend"

        },
        {
            label: "SQL",
            value: 7,
            skillType: "Backend"
        },
        {
            label: "Supabase",
            value: 6,
            skillType: "Backend"
        },
        {
            label: "Github",
            value: 5,
            skillType: "Fullstack"
        }
    ]

    useEffect(() => {
        const initGrafica = () => {
            if(chartRef.current){
                const colors = {
                    Frontend: "#FF6384",
                    Backend: "#36A2EB",
                    Fullstack: "#4BC0C0"
                }
                const widtEachBar = 80;

                technologies.forEach((technology : Skill) => {
                    const heightBar = technology.value * 10;

                    const childParent = chartRef.current?.appendChild(document.createElement('div'));

                    if(childParent){

                        const bar = childParent.appendChild(document.createElement('div'));
                        bar.style.width = `${widtEachBar}px`;
                        bar.style.height = `${heightBar}px`;
                        bar.style.backgroundColor = colors[technology.skillType];

                        const label = childParent.appendChild(document.createElement('p'));
                        label.innerText = technology.label;
                        label.style.width = `${widtEachBar}px`;
                        label.style.backgroundColor = colors[technology.skillType];
                        label.style.padding = "5px";
                        label.style.textAlign = "center";
                        label.style.color = "black";
                    }
                })
            }
        }

         initGrafica();

  }, [])

  return (
    // container de la grafica
    <div
    ref={chartRef}
    className='w-full h-[500px] overflow-x-auto bg-amber-200  rounded-lg flex items-center justify-center'>

    </div>
  )
}
