'use client';
import { Button, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import { mutate } from "swr";

interface IProps {
    showDeleteModel: boolean;
    setShowDeleteModel: (value: boolean) => void;
    item: IBlog | null;
    setItem: (value: IBlog | null) => void;
}
const ModalDelete = (props: IProps) => {
    const { showDeleteModel, setShowDeleteModel, item, setItem } = props;
    const handleClose = () => {
        setShowDeleteModel(false);
        setItem(null);
    }
    const handleDelete = (id: number | null) => {
        console.log("Item deleted:", item);
        fetch(`http://localhost:8000/blogs/${id}`,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success('Delete blog successfully!');
                    handleClose();
                    mutate("http://localhost:8000/blogs");
                }
            })
    }
    return (
        <Modal
            show={showDeleteModel}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Delete Item with id: {item?.id}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you sure you want to delete this item? This action cannot be undone.
                <br />
                <strong>Title:</strong> {item?.title}
                <br />
                <strong>Author:</strong> {item?.author}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => handleDelete(item?.id ?? null)}>Confirm</Button>
            </Modal.Footer>
        </Modal>
    )


}

export default ModalDelete;