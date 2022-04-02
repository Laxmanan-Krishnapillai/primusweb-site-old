
import { fetchData } from '../lib/api'
import { content } from '../tailwind.config'
import Link from 'next/link'
import Layout from '../components/layout'
import { getStrapiMedia } from '../lib/media'
import Image from 'next/image';
export default function Blog({blogposts}) {
  return(
      <div className='flex p-8 flex-col lg:flex-row bg-white min-h-screen'>
      {blogposts.data.map((post)=>{
        var { title, slug } = post.attributes;
        var { thumbnail } = post.attributes.featuredImg.data.attributes.formats
        return (
          <Link className="cursor-pointer" href={'/posts/' + slug} key={post.id}>
            <div className='cursor-pointer lg:w-[400px] lg:h-[300px] bg-neutral-900 rounded-2xl overflow-hidden flex flex-col'>
              <Image className='w-full h-auto' src={getStrapiMedia(thumbnail.url)} width={thumbnail.width} height={thumbnail.height} objectFit="contain"></Image>
              <h1 className='font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-green-200 to-green-300 text-4xl'>{title}</h1>
            </div>
          </Link>  
          )
        })}
      </div>
  )
}


export async function getStaticProps() {
    const blogposts = await fetchData("/api/blogposts?fields=slug,title&populate=%2A");
    return {
      props: {
        blogposts
      },
      revalidate: 120
    }
}
