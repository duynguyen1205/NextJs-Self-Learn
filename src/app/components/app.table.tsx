'use client'
import Table from 'react-bootstrap/Table';

import { Button } from 'react-bootstrap';
import ModalAddNewBlog from './create.model';
import { useState } from 'react';
interface IProps {
    blogs: IBlog[];
}
function AppTable(props: IProps) {
    const { blogs } = props;
    const [open, setOpen] = useState<boolean>(false);
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
                                    <Button>View</Button>
                                    <Button variant='warning' className='mx-3'>Edit</Button>
                                    <Button variant='danger'>Delete</Button>
                                </td>
                            </tr>
                        );
                    })}

                </tbody>
            </Table>
            <ModalAddNewBlog
                showModel={open}
                setShowModel={setOpen} />
        </>

    );
}

export default AppTable;