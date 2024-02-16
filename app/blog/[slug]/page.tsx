import About from "@/app/components/About";
import { fullBlog } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";


export const revalidate = 30;


async function getData(slug: string) {

    const Query = `
    *[_type == "blog" && slug.current == '${slug}']{
        "currentSlug": slug.current,
            title,
            content,
            titleImage
      }[0]`;

      const data = await client.fetch(Query);
      return data;
      
}

export default async function BlogArticle({
     params,
     }: { 
        params: { slug: string };
     }) {

    const data: fullBlog = await getData(params.slug);
    
    return(
        <div className=" w-full">
            <h1>
                <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">pasindu - blog</span>
                <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">{data.title}</span>
            </h1>
            <div className=" flex justify-center items-center">
                <Image src={urlFor(data.titleImage).url()} alt={"image"} priority width={500} height={500} className=" rounded-lg mt-5 border"/>
            </div>
            <div className=" w-full flex justify-center items-center">
                <div className=" mt-6 border-red-500 border p-6 prose prose-blue prose-lg dark:prose-invert prose-a:text-primary">
                    <PortableText value={data.content}/>
                </div>
            </div>    
        </div>
    );
}
