'use client';

import { useRouter } from "next/navigation";
import { Button } from 'react-bootstrap';

const Facebook = () => {
    const router = useRouter();
    const handleBack = () => {
        router.push('/');
    };
    return (
        <div>
            <h1>Facebook Page</h1>
            <p>This is the Facebook page content.</p>
            <Button variant="danger"> Hoi Dan It</Button>
            <button onClick={() => handleBack()}> Back home</button >
        </div >
    );
}

export default Facebook;