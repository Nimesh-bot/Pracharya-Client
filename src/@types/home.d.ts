export interface CategoryCardProps {
    title: string;
    icon: JSX.Element;
    active?: boolean;
    onPress?: () => void;
}