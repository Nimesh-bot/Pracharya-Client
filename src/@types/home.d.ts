declare interface CategoryCardProps {
    title: string;
    icon: JSX.Element;
    active?: boolean;
    onPress?: () => void;
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
}