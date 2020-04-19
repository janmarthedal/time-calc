import { h } from "preact";

export default ({ value, invalid }: { value: string, invalid: boolean }) => (
    <input
        class="pure-u-1 pure-u-md-3-5"
        type="text"
        value={value}
        readOnly={!invalid}
        disabled={invalid}
        style={!invalid && { backgroundColor: 'inherit', color: 'inherit' }}
    />
);
