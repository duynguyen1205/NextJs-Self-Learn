'use client';

import { useRouter } from "next/navigation";
const Instagram = () => {
    const router = useRouter();
    const handleBack = () => {
        router.push('/');
    };
    return (
        <div>
            <h1>Instagram</h1>
            <p>Welcome to the Instagram page!</p>
            <p>This is a placeholder for Instagram content.</p>
            <button onClick={() => handleBack()}> Back home</button >
        </div>
    );
}
export default Instagram;