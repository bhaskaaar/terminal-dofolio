import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1"]) ? <Usage cmd="projects" /> : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't misss
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Bhaskar Datta's Blog",
    desc: "My personal blog where I pen down my thoughts and experiences. Coming Soon!",
    url: "https://bhaskaaar.dev/blog/",
  },
  // {
  //   id: 2,
  //   title: "billing dashboad test",
  //   desc: "pspspspsps",
  //   url: "https://bhaskaaar.dev/blog/",
  // },
  // {
  //   id: 3,
  //   title: "",
  //   desc: "pspspspsps",
  //   url: "https://bhaskaaar.dev/blog/",
  // },
  // {
  //   id: 4,
  //   title: "",
  //   desc: "pspspspsps",
  //   url: "https://bhaskaaar.dev/blog/",
  // }
];

export default Projects;
