import ResumeAbout from "./ResumeAbout";
import ResumeEducationAndLanguages from "./ResumeEducationAndLanguages";
import ResumeHeader from "./ResumeHeader";
import ResumeProjects from "./ResumeProjects";
import ResumeSkills from "./ResumeSkills";

function Resume () {
  return (
    <div className="mx-auto max-w-7xl">
      <ResumeHeader />
      <ResumeSkills />
      <ResumeProjects />
      <ResumeAbout />
      <ResumeEducationAndLanguages />
    </div>
  );
};

export default Resume;


