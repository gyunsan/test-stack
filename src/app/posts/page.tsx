import { db } from "@/server/db";
import { posts } from "@/server/db/schema";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

export const runtime = "edge";

export default async function PostsPage() {
    const allPosts = await db
        .select({
            id: posts.id,
            title: posts.title,
            content: posts.content,
        })
        .from(posts);

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-2xl font-bold mb-5">Posts</h1>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Content</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {allPosts.map((post) => (
                        <TableRow key={post.id}>
                            <TableCell className="font-medium">{post.title}</TableCell>
                            <TableCell>{post.content}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}