import { h } from 'preact';
import { useState } from 'preact/hooks';

export default function Greeting({images}) {


    const [, setGreeting] = useState(images[0]);

    return (
        <div>
            <h3>! Thank you for visiting!</h3>
            <button onClick={() => setGreeting(randomMessage())}>
                New Greeting
            </button>
        </div>
    );
}
