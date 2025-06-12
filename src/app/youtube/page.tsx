'use client';
import { useRouter } from "next/navigation";

const YouTube = () => {
    const router = useRouter();
    const handleBack = () => {
        router.push('/');
    };
    return (
        <div>
            <h1>YouTube</h1>
            <p>Welcome to the YouTube page!</p>
            <p>This is a placeholder for YouTube content.</p>
            <button onClick={() => handleBack()}> Back home</button >
        </div>
    );
}

export default YouTube;