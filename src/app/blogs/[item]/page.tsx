'use client';
import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import useSWR, { Fetcher } from 'swr'

const BlogsPage = ({ params }: { params: { item: string } }) => {

    const fetcher: Fetcher<IBlog, string> = (url: string) => fetch(url).then((res) => res.json());
    const { data, error, isLoading } = useSWR
        (
            `http://localhost:8000/blogs/${params.item}`,
            fetcher,
            {
                revalidateIfStale: false,
                revalidateOnFocus: false,
                revalidateOnReconnect: false
            }
        );

    if (error) return <div> An error has occurred.</div>;
    if (isLoading) return <div>Loading ....</div>;
    return (
        <Card className="text-center">
            <Card.Header>Title: {data?.title}</Card.Header>
            <Card.Body>
                <Card.Title>Author: {data?.author}</Card.Title>
                <Card.Text>
                    {data?.content}
                </Card.Text>
                <Link className='btn btn-primary' href="/blogs">Back</Link>
            </Card.Body>
        </Card>
    )
}

export default BlogsPage;