import React, { createContext, useContext, useState } from 'react';

export const PostDetailContext = createContext<PostContext>({} as PostContext);

type Props = {
    children: React.ReactNode
}

export const PostDetailContextProvider = ({ children }: Props) => {
    const [post, setPost] = useState<any>({});
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [replying, setReplying] = useState<ReplyingProps>({
        isReplying: false,
        replyingTo: ''
    });

    return (
        <PostDetailContext.Provider value={{ post, setPost, isVisible, setIsVisible, replying, setReplying }}>
            {children}
        </PostDetailContext.Provider>
    )
}

export const usePostDetailContext = () => useContext(PostDetailContext);