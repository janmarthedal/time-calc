import { h } from "preact";

export default ({ value, disable }: { value: string, disable: boolean }) => (
    <input
        className="pure-u-1 pure-u-md-3-5"
        type="text"
        value={value}
        readOnly={!disable}
        disabled={disable}
        style={!disable && { backgroundColor: 'inherit', color: 'inherit' }}
    />
);
