declare interface ReplyingProps {
    isReplying: boolean;
    replyingTo: any;
}

declare interface PostContext {
    post: any;
    setPost: (post: any) => void;
    isVisible: boolean;
    setIsVisible: any;
    replying: ReplyingProps;
    setReplying: Function;
}