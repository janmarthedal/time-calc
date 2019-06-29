import { h } from "preact";

export default ({ value }: { value: string }) => (
    <input
        class="pure-u-1 pure-u-md-3-5"
        type="text"
        value={value}
        readOnly
        style={{ backgroundColor: 'inherit', color: 'inherit' }}
    />
);
