import { GetStaticProps } from 'next'
// import Link from 'next/link'
import {Post} from 'interfaces'
import {samplePostData} from "repository/sample-data";
import Layout from '@components/Layout'
import * as React from "react";

type Props = {
    items: Post[]
}
const PostList = ({items}: Props) => {
    return (
        <ul>
            {items.map((item) => (
                <li key={item.id}>
                    <p>{item.title}</p>
                    <p>{item.content}</p>
                </li>
            ))}
        </ul>
    )
};

const WithStaticProps = ({ items }: Props) => (
    <Layout title="Users List | Next.js + TypeScript Example">
        <h1>Post List</h1>
        <PostList items={items} />
    </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
    const items: Post[] = samplePostData
    return { props: { items } }
}

export default WithStaticProps;
