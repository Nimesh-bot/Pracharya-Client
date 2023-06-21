import React, { createContext, useContext, useState } from 'react';
import { PostContext } from '../@types/post.context';

export const PostDetailContext = createContext<PostContext>({} as PostContext);

type Props = {
    children: React.ReactNode
}

export const PostDetailContextProvider = ({ children }: Props) => {
    const [post, setPost] = useState<any>({});
    const [isVisible, setIsVisible] = useState<boolean>(false);

    return (
        <PostDetailContext.Provider value={{ post, setPost, isVisible, setIsVisible }}>
            {children}
        </PostDetailContext.Provider>
    )
}

export const usePostDetailContext = () => useContext(PostDetailContext);