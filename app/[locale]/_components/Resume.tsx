import ResumeAbout from "./ResumeAbout";
import ResumeEducationAndLanguages from "./ResumeEducationAndLanguages";
import ResumeExperience from "./ResumeExperience";
import ResumeHeader from "./ResumeHeader";
import ResumeProjects from "./ResumeProjects";
import ResumeSkills from "./ResumeSkills";
import ResumeActions from "./ResumeActions";

function Resume() {
  return (
    <div className="mx-auto max-w-7xl">
      {/* <ResumeActions /> */}
      <ResumeHeader />
      <ResumeAbout />
      <ResumeSkills />
      <ResumeExperience />
      <ResumeProjects />
      <ResumeEducationAndLanguages />
    </div>
  );
}

export default Resume;
