import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [inProgress, setInProgress] = useState<boolean>(false);

    const startQuiz = () => {
        if (attemptsLeft > 0) {
            setInProgress(true);
            setAttemptsLeft(attemptsLeft - 1);
        }
    };

    const stopQuiz = () => {
        setInProgress(false);
    };

    const mulligan = () => {
        setAttemptsLeft(attemptsLeft + 1);
    };

    return (
        <div>
            <div>Attempts Left: {attemptsLeft}</div>
            <Button
                onClick={startQuiz}
                disabled={inProgress || attemptsLeft <= 0}
            >
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={inProgress}>
                Mulligan
            </Button>
        </div>
    );
}
