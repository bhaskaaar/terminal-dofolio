import {
  Cmd,
  HeroContainer,
  Link,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`        
BBBBB   hh                    kk                                    
BB   B  hh        aa aa  sss  kk  kk   aa aa   aa aa   aa aa rr rr  
BBBBBB  hhhhhh   aa aaa s     kkkkk   aa aaa  aa aaa  aa aaa rrr  r 
BB   BB hh   hh aa  aaa  sss  kk kk  aa  aaa aa  aaa aa  aaa rr     
BBBBBB  hh   hh  aaa aa     s kk  kk  aaa aa  aaa aa  aaa aa rr     
                         sss                                                                                                                         
          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
  ^    ^    ^    ^    ^    ^    ^    ^    ^  
  /B   /h   /a   /s   /k   /a   /a   /a   /r  
 <___><___><___><___><___><___><___><___><___> 
 
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to my terminal portfolio. (Version 0.1)</div>
        <Seperator>----</Seperator>
        <div>
          This project's source code can be found in this project's{" "}
          <Link href="https://github.com/bhaskaaar/terminal-dofolio">
            GitHub repo
          </Link>
          .
        </div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
