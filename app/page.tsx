import Image from "next/image";
import Navbar from "./components/Navbar";
import { client, urlFor } from "./lib/sanity";
import { simpleBlogCard } from "./lib/interface";
import { Card, CardContent } from "@/components/ui/card";
import { Key } from "react";
import { Button } from "@/components/ui/button";
import  Link  from "next/link";
import HeaderBanner from "./components/HeaderBanner";
import Footer from "./components/Footer";
// import { Link } from 'next/link';

export const revalidate = 30;

async function getData() {
  const Query = `
  *[_type == 'blog'] | order(_createdAt, desc){
    title,
      smallDescription,
      "currentSlug": slug.current,
      titleImage
  }`;

  const data = await client.fetch(Query);

  return data;
}

export default async function Home() {

  const data: simpleBlogCard = await getData();


  return (
    <div>
     
      <div className=" grid grid-cols-1 lg:grid-cols-2 mt-5 gap-6">

        {data.map((post: any, idx: Key | null | undefined) => (
          <Card key={idx}>
            <div className=" flex justify-center items-center">
              <Image src={urlFor(post.titleImage).url()} alt={"image"} width={500} height={500} className=" rounded-t-lg h-[200px] object-cover"/>
            </div>
            

            <CardContent className=" mt-5 ">
              <h3 className=" text-lg line-clamp-2 font-bold mx-6 ">{post.title}</h3>
              <p className=" line-clamp-2 mx-5 mt-2 text-sm text-gray-600 dark:text-gray-300"> {post.smallDescription}</p>
              <Button asChild className=" w-1/2 mt-2 mx-5">
              <Link href={`/blog/${post.currentSlug}`}>
                Read More
              </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
     
  );
}
