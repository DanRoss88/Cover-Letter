import Image from "next/image";
export default function Skills() {
  return (
    <div className="skills-container">
      <h1>Skills</h1>
      <div className="skills-grid">
        <div className="skills-card">
          <h3>Languages</h3>
          <div className="skill-icons1">
            <div className="skill">
              <Image src="/js.jpg" width={75} height={75} alt="JavaScript" />
            </div>
            <div className="skill">
              <Image src="/html5.jpg" width={75} height={75} alt="html" />
            </div>
            <div className="skill">
              <Image src="/css.jpg" width={75} height={75} alt="html" />
            </div>
            <div className="skill">
              <Image src="/ruby.jpg" width={75} height={75} alt="html" />
            </div>
            <div className="skill">
              <Image src="/java.jpg" width={75} height={75} alt="html" />
            </div>
          </div>
        </div>
        <div className="skills-card">
          <h3>Systems & Databases</h3>
          <div className="skill-icons2">
            <div className="skill">
              <Image src="/psql.jpg" width={75} height={75} alt="html" />
            </div>
            <div className="skill">
              <Image src="/git.jpg" width={75} height={75} alt="html" />
            </div>
            <div className="skill">
              <Image src="/mongodb.jpg" width={75} height={75} alt="html" />
            </div>
          </div>
        </div>
        <div className="skills-card">
          <h3>Frameworks & Libraries</h3>
          <div className="skill-icons3">
            <div className="skill">
              <Image src="/next-logo.png" width={75} height={75} alt="html" />
            </div>
            <div className="skill">
              <Image src="/react.jpg" width={75} height={75} alt="html" />
            </div>
            <div className="skill">
              <Image
                src="/react-native-logo.webp"
                width={75}
                height={75}
                alt="html"
              />
            </div>
            <div className="skill">
              <Image src="/expressjs.jpg" width={75} height={75} alt="html" />
            </div>
            <div className="skill">
              <Image src="/jquery.jpg" width={75} height={75} alt="html" />
            </div>
            <div className="skill">
              <Image src="/nodejs.jpg" width={75} height={75} alt="html" />
            </div>
            <div className="skill">
              <Image src="/nodemon.jpg" width={75} height={75} alt="html" />
            </div>
            <div className="skill">
              <Image src="/rails.jpg" width={75} height={75} alt="html" />
            </div>
            <div className="skill">
              <Image src="/tailwind.jpg" width={75} height={75} alt="html" />
            </div>
            <div className="skill">
              <Image src="/bootstrap.jpg" width={75} height={75} alt="html" />
            </div>
            <div className="skill">
              <Image src="/reactrouter.jpg" width={75} height={75} alt="html" />
            </div>
          </div>
        </div>
        <div className="skills-card">
          <h3>Testing</h3>
          <div className="skill-icons4">
            <div className="skill">
              <Image src="/mocha.jpg" width={75} height={75} alt="html" />
            </div>
            <div className="skill">
              <Image src="/chai.jpg" width={75} height={75} alt="html" />
            </div>
            <div className="skill">
              <Image src="/jest.jpg" width={75} height={75} alt="html" />
            </div>
            <div className="skill">
              <Image src="/cypress.jpg" width={75} height={75} alt="html" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
