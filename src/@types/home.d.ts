declare interface CategoryCardProps {
  title: string;
  icon: string;
  active?: boolean;
  onPress?: () => void;
  index?: number;
  additionalCss?: any;
}

declare interface CategoryProps {
  iconname: string;
  id: number;
  name: string;
}

declare type Contributors = {
  id: string;
  firstname: string;
  middlename: string;
  lastname: string;
  avatar: string;
};

declare type Category = {
  id: number;
  name: string;
  iconname: string;
};

declare type Post = {
  id: number;
  category: string;
  title: string;
  content: string;
  creators: Contributors[];
  _count: {
    like: number;
    comment: number;
  };
};
declare interface PostCardProps {
  post: Post;
  fullContent?: boolean;
}

declare namespace Threads {
  declare interface ThreadCreatorProps {
    firstname: string;
    middlename?: string;
    lastname: string;
    avatar: string;
  }
  declare interface ThreadsProps {
    id: number;
    title: string;
    content: string;
    createdAt: string;
    creatorid: number;
    creator: ThreadCreatorProps;
    categoryId: number;
    _count: {
      like: number;
      comment: number;
    };
  }
}
