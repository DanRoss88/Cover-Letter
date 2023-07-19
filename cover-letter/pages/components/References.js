import references from "../lib/references";
import Link from "next/link";

export default function References() {
  const reference1 = references.find((reference) => reference.id === 1);
  const reference2 = references.find((reference) => reference.id === 4);
  const reference3 = references.find((reference) => reference.id === 5);
  return (
    <div className="references-container">
      <h1>References</h1>
      <div className="references-grid">
        <div className="references-card">
          <h2>{reference2.name}</h2>
          <p>{reference2.title}</p>
          <p>{reference2.company}</p>
          <Link href={`mailto:${reference2.email}`}>
            <p>{reference2.email}</p>
          </Link>
        </div>
        <div className="references-card">
          <h2>{reference3.name}</h2>
          <p>{reference3.title}</p>
          <p>{reference3.company}</p>
          <Link href={`mailto:${reference3.email}`}>
            <p>{reference3.email}</p>
          </Link>
        </div>
        <div className="references-card">
          <h2>{reference1.name}</h2>
          <p>{reference1.title}</p>
          <p>{reference1.company}</p>
          <Link href={`mailto:${reference1.email}`}>
            <p>{reference1.email}</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
