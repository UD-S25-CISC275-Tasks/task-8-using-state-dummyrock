import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(1);
    const [rightDie, setRightDie] = useState<number>(6);

    const rollLeft = () => setLeftDie(d6());
    const rollRight = () => setRightDie(d6());

    return (
        <div>
            <div data-testid="left-die">{leftDie}</div>
            <div data-testid="right-die">{rightDie}</div>
            <Button onClick={rollLeft} data-testid="roll-left">
                Roll Left
            </Button>
            <Button onClick={rollRight} data-testid="roll-right">
                Roll Right
            </Button>
            {leftDie === 1 && rightDie === 1 && <div>Lose</div>}
            {leftDie === rightDie && leftDie !== 1 && <div>Win</div>}
        </div>
    );
}
