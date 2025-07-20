// pages/posts/index.tsx

import { useState } from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import PostModal from "@/components/common/PostModal";
import { PostData, PostProps } from "@/interfaces"; // ✅ Required import

interface PostsPageProps {
    posts: PostProps[];
}

const Posts: React.FC<PostsPageProps> = ({ posts }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [newPost, setNewPost] = useState<PostData | null>(null);
    const [postList, setPostList] = useState<PostProps[]>(posts); // ✅ local list for updated re-render

    const handleAddPost = (newPost: PostData) => {
        const completePost: PostProps = {
            ...newPost,
            id: postList.length + 1,
        };
        setPostList([completePost, ...postList]);
        setModalOpen(false);
    };

    return (
        <div className="flex flex-col h-screen">
            <Header />
            <main className="p-4">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-semibold">Post Content</h1>
                    <button
                        onClick={() => setModalOpen(true)}
                        className="bg-blue-700 px-4 py-2 rounded-full text-white"
                    >
                        Add Post
                    </button>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    {postList.map((post: PostProps) => (
                        <PostCard
                            key={post.id}
                            title={post.title}
                            body={post.body}
                            userId={post.userId}
                            id={post.id}
                        />
                    ))}
                </div>
            </main>

            {isModalOpen && (
                <PostModal
                    onClose={() => setModalOpen(false)}
                    onSubmit={handleAddPost}
                />
            )}
        </div>
    );
};

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts: PostProps[] = await response.json();

    return {
        props: {
            posts,
        },
    };
}

export default Posts;
