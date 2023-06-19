declare interface CategoryCardProps {
    title: string;
    icon: string;
    active?: boolean;
    onPress?: () => void;
    index?: number;
}

interface ContributorsProps {
    id: string;
    name: string;
    avatar: string;
}
declare interface PostCardProps {
    id?: string;
    tag: string;
    description: HTMLSource;
    contributors: ContributorsProps[]; 
    fullContent?: boolean;
}