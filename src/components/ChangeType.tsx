import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    // Initialize with "Short Answer"
    const [type, setType] = useState<QuestionType>("Short Answer");

    const toggleType = () => {
        setType((prev) =>
            prev === "Short Answer" ? "Multiple Choice" : "Short Answer"
        );
    };

    return (
        <div>
            <div>Type: {type}</div>
            <Button onClick={toggleType}>Change Type</Button>
        </div>
    );
}
