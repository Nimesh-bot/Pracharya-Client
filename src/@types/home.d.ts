declare interface CategoryCardProps {
    title: string;
    icon: string;
    active?: boolean;
    onPress?: () => void;
    index?: number;
    additionalCss?: any;
}

declare type Contributors = {
    id: string;
    firstname: string;
    middlename: string;
    lastname: string;
    avatar: string;
}

declare type Category = {
    id: number;
    name: string;
    iconname: string;
}

declare type Post = {
    id: number;
    category: string;
    title: string;
    content: string;
    creators: Contributors[];
    _count: {
        like: number;
        comment: number;
    }
}
declare interface PostCardProps {
    post: Post;
    fullContent?: boolean;
}