import WrapperBody from "../../layouts/wrapper";
import { FaProjectDiagram } from "react-icons/fa";

export default function Projects() {
  return (
    <div id="projects" className="w-full border-b border-dashed border-zinc-800">
      <WrapperBody>
        <div className="flex flex-col gap-4">
          <p className="flex gap-2 items-center font-['Geist'] font-bold text-2xl"><FaProjectDiagram />Projects</p>
          <div className="grid grid-cols-1 md:grid-cols-1 2xl:grid-cols-1 gap-4">
              <div
                className="flex flex-col justify-between items-center gap-2 p-6 rounded-lg overflow-hidden border border-zinc-800 hover:border-zinc-600 cursor-pointer"
              >
                <div className="flex flex-col justify-start items-center gap-2 w-full">
                  {/* <img src={project.logo} alt="logo" className=" max-w-36 max-h-18 w-full h-full py-2 object-contain" /> */}
                  <p className="w-full text-center text-md font-medium text-zinc-50 px-4 py-2 rounded-lg">Capstone Project</p>


                  <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-2 gap-4">
                    <img src="/images/1.png"  />
                    <img src="/images/2.png"  />
                    <img src="/images/3.png"  />
                    <img src="/images/4.png"  />
                  </div>
                  <div className="my-10"></div>
                  <div>
                    <div><a href="https://docs.google.com/document/d/115nQvJlTIFZxCVVinphWeGxZDtVrCFP4/edit?usp=sharing&ouid=111439221931648296533&rtpof=true&sd=true" target="_blank">•	Project Vision</a></div>
                    <div><a href="https://docs.google.com/document/d/1H-HG7rport2BxRddt7EymophShqfijNk/edit?usp=sharing&ouid=111439221931648296533&rtpof=true&sd=true" target="_blank">•	Project Plan</a></div>
                    <div><a href="https://docs.google.com/document/d/10vWBY670e6KNbuZdK9z3Hbnz8jZVel02/edit?usp=sharing&ouid=111439221931648296533&rtpof=true&sd=true" target="_blank">•	Requirements Analysis and Design </a></div>
                    <div><a href="https://docs.google.com/document/d/1SjNO3nl39Y4O5Xv7dRBMPXeF_2FHroyh/edit?usp=sharing&ouid=111439221931648296533&rtpof=true&sd=true" target="_blank">•	Project High Level Requirement</a></div>
                    <div><a href="https://docs.google.com/document/d/1D5VGg2O2BoLS42XQBaZr84gj0lBTPA9I/edit?usp=sharing&ouid=111439221931648296533&rtpof=true&sd=true" target="_blank">•	Status Reports</a></div>
                  </div>
                </div>

                
                {/* <div className="w-full flex flex-wrap justify-start gap-1">
                  {project.skills?.map((skill) => (
                    <p key={skill} className="text-[12px] border border-zinc-800 px-3 py-1 rounded-full">{skill}</p>
                  ))}
                </div> */}
              </div>
          </div>
        </div>
      </WrapperBody>
    </div>
  )
}