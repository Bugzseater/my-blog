import { createClient } from "next-sanity";
import  imageUrlBuilder  from "@sanity/image-url";

export const client = createClient({
    apiVersion:"2024-02-13",
    dataset:"production",
    projectId:"zbwe9s67",
    useCdn:false,
});

const builder =  imageUrlBuilder(client)

export function urlFor(source: any){
    return builder.image(source);
}

