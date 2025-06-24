import React, { useState } from "react";
import { Button } from "react-bootstrap";

const holidays = [
    "New Year's Day",
    "Valentine's Day",
    "Independence Day",
    "Halloween",
    "Christmas"
];

const holidaysAlphabetical = [...holidays].sort();

export function CycleHoliday(): React.JSX.Element {
    const [year, setYear] = useState(2020);
    const [holiday, setHoliday] = useState<string>(holidays[0]);
    const [mode, setMode] = useState<"year" | "alphabet">("year");

    const nextYear = () => {
        setYear((prev) => prev + 1);
        setHoliday((prev) => {
            const currentIndex = holidays.indexOf(prev);
            return holidays[(currentIndex + 1) % holidays.length];
        });
        setMode("year");
    };

    const nextAlphabet = () => {
        setHoliday((prev) => {
            const currentIndex = holidaysAlphabetical.indexOf(prev);
            return holidaysAlphabetical[
                (currentIndex + 1) % holidaysAlphabetical.length
            ];
        });
        setMode("alphabet");
    };

    return (
        <div>
            <div>Cycle Holiday</div>
            <div>Year: {year}</div>
            <div>Holiday: {holiday}</div>
            <Button onClick={nextYear}>Year</Button>
            <Button onClick={nextAlphabet}>Alphabet</Button>
        </div>
    );
}
