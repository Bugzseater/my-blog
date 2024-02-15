export interface simpleBlogCard{
    map(arg0: (post: any, idx: import("react").Key | null | undefined) => import("react").JSX.Element): import("react").ReactNode | Iterable<import("react").ReactNode>;
    
    title: string;
    smallDescription: string;
    currentSlug: string;
    titleImage: any;
}

export interface fullBlog{
    currentSlug: string;
    title: string;
    content: any;
    titleImage: any;
}