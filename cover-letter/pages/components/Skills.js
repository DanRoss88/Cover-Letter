import Image from "next/image";
export default function Skills() {
  return (
    <div className="skills-container">
      <h1>Skills</h1>
      <div className="skills-grid">
        <div className="skills-card">
          <h3>Languages</h3>
          <div className="skill">
            <Image src="/js.jpg" width={100} height={100} alt="JavaScript" />
          </div>
          <div className="skill">
            <Image src="/html5.jpg" width={100} height={100} alt="html" />
          </div>
          <div className="skill">
          <Image src="/html5.jpg" width={100} height={100} alt="html" />
          </div>
          <div className="skill">
          <Image src="/html5.jpg" width={100} height={100} alt="html" />
          </div>
        </div>
        <div className="skills-card">
          <h3>Systems & Databases</h3>
          <div className="skill">
          <Image src="/html5.jpg" width={100} height={100} alt="html" />
          </div>
          <div className="skill">
          <Image src="/html5.jpg" width={100} height={100} alt="html" />
          </div>
          <div className="skill">
          <Image src="/html5.jpg" width={100} height={100} alt="html" />
          </div>
          <div className="skill">
          <Image src="/html5.jpg" width={100} height={100} alt="html" />
          </div>
        </div>
        <div className="skills-card">
          <h3>Frameworks & Libraries</h3>
          <div className="skill">
          <Image src="/html5.jpg" width={100} height={100} alt="html" />
          </div>
          <div className="skill">
          <Image src="/html5.jpg" width={100} height={100} alt="html" />
          </div>
          <div className="skill">
          <Image src="/html5.jpg" width={100} height={100} alt="html" />
          </div>
          <div className="skill">
          <Image src="/html5.jpg" width={100} height={100} alt="html" />
          </div>
        </div>
        <div className="skills-card">
          <h3>Testing</h3>
          <div className="skill">
          <Image src="/html5.jpg" width={100} height={100} alt="html" />
          </div>
          <div className="skill">
          <Image src="/html5.jpg" width={100} height={100} alt="html" />
          </div>
          <div className="skill">
          <Image src="/html5.jpg" width={100} height={100} alt="html" />
          </div>
          <div className="skill">
          <Image src="/html5.jpg" width={100} height={100} alt="html" />
          </div>
        </div>
      </div>
    </div>
  );
}
