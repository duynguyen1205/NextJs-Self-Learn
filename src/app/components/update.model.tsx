import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { mutate } from "swr"
import { toast } from 'react-toastify';
interface IProps {
    showModel: boolean;
    setShowModel: (value: boolean) => void;
    item: IBlog | null;
    setItem: (value: IBlog | null) => void;
}
function ModalUpdateBlog(props: IProps) {
    const { showModel, setShowModel, item, setItem } = props;
    const [id, setId] = useState<number>(0);
    const [title, setTitle] = useState<string>('');
    const [author, setAuthor] = useState<string>('');
    const [content, setContent] = useState<string>('');

    useEffect(() => {
        if (item && item.id) {
            console.log('item', item.title);
            setId(item.id);
            setTitle(item.title);
            setAuthor(item.author);
            setContent(item.content);
        }
    }, [item]);

    const handleClose = () => {
        setShowModel(false);
        setTitle('');
        setAuthor('');
        setContent('');
        setItem(null);
    }

    const handleSubmit = async () => {
        if (!title || !author || !content) {
            toast.error('Please fill in all fields!');
            return;
        }

        fetch(`http://localhost:8000/blogs/${id}`,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "PUT",
                body: JSON.stringify({ title, author, content })
            })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success('Update blog successfully!');
                    handleClose();
                    mutate("http://localhost:8000/blogs");
                }
            })
    }
    return (
        <>
            <Modal show={showModel} onHide={handleClose} backdrop="static" keyboard={false} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>Update blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="NextJs develop" value={title} onChange={(e) => setTitle(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Author</Form.Label>
                            <Form.Control type="text" placeholder="Hoi Dan It" value={author} onChange={(e) => setAuthor(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Content</Form.Label>
                            <Form.Control as="textarea" rows={3} value={content} onChange={(e) => setContent(e.target.value)} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="warning" onClick={() => handleSubmit()}>
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalUpdateBlog;