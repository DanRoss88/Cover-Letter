import Link from "next/link";
import React from "react";
import {AiOutlineGithub, AiOutlineGoogle, AiOutlineLinkedin} from "react-icons/ai";

export default function Socials(){

return (
<div className="socials">
  <div className="socials-links">
  <Link href="https://www.linkedin.com/in/dan-ross-webdev/">
  <AiOutlineLinkedin/>
</Link>
</div>
<div className="socials-links">
<Link href="https://www.github.com/danross88">
<AiOutlineGithub />
</Link>
</div>
<div className="socials-links">
  <Link href="mailto:danielmartinross@gmail.com">
  <AiOutlineGoogle/>
</Link>
</div>
</div>
);

}