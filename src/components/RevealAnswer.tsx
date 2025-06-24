import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => setVisible((v) => !v);

    return (
        <div>
            <Button onClick={toggleVisible}>Reveal Answer</Button>
            {visible && <div>42</div>}
        </div>
    );
}
