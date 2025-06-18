'use client'
import Table from 'react-bootstrap/Table';

import { Button } from 'react-bootstrap';
import ModalAddNewBlog from './create.model';
import { useState } from 'react';
import ModalUpdateBlog from './update.model';
import Link from 'next/link';
interface IProps {
    blogs: IBlog[];
}
function AppTable(props: IProps) {
    const { blogs } = props;
    const [open, setOpen] = useState<boolean>(false);
    const [openUpdate, setOpenUpdate] = useState<boolean>(false);
    const [item, setItem] = useState<IBlog | null>(null);
    const handleOpen = () => {
        setOpen(true);
    }
    return (
        <>
            <div className='mb-3' style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h2>Blog List</h2>
                <Button variant='secondary' onClick={() => handleOpen()}>Add New</Button>
            </div >
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs?.map(blog => {
                        return (
                            <tr key={blog.id}>
                                <td>{blog.id}</td>
                                <td>{blog.title}</td>
                                <td>{blog.author}</td>
                                <td>
                                    <Link className='btn btn-primary' href={`blogs/${blog.id}`}>View</Link>
                                    <Button variant='warning' className='mx-3' onClick={() => {
                                        setOpenUpdate(true);
                                        setItem(blog);
                                    }}>Edit</Button>
                                    <Button variant='danger'>Delete</Button>
                                </td>
                            </tr>
                        );
                    })}

                </tbody>
            </Table>
            <ModalAddNewBlog
                showModel={open}
                setShowModel={setOpen}
            />
            <ModalUpdateBlog
                showModel={openUpdate}
                setShowModel={setOpenUpdate}
                item={item}
                setItem={setItem}
            />
        </>

    );
}

export default AppTable;