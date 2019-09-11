import * as React from 'react';
import './Hello.css';

export interface Props {
    name: string;
    enthusiasmLevel?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

class Hello extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div className="hello">
                <div className="greeting">
                    Hello {this.props.name + getExclamationMarks(this.props.enthusiasmLevel || 1)}
                </div>
                <div>
                    <button onClick={this.props.onDecrement}>-</button>
                    <button onClick={this.props.onIncrement}>+</button>
                </div>
            </div>
        );
    }
}

export default Hello;

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}
