import { h } from "preact";

export default ({ value }: { value: string }) => (
    <input
        type="text" value={value} readOnly
        style={{ backgroundColor: 'inherit', color: 'inherit' }}
    />
);
