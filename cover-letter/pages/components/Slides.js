import Image from 'next/image'
import Link from 'next/link'

export default function Slides ({ item }) {

return (
  <div>
  <Link href={item.url1}>
    <Image src={item.image} alt={item.title} width={300} height={300} />
  </Link>
  <Link href={item.url2 || '#'}>
    <h1>{item.title}</h1>
  </Link>
  <p>{item.description}</p>
</div>
);
}