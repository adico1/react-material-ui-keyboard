import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import { Keyboard, InputHandler } from './../src/index';
import { extendedKeyboard } from './../src/layouts';

export interface DemoState {
    value?: string;
};

export interface TextEnterTarget {
    value?: string;
};

export interface TextEnterEvent {
    target: TextEnterTarget;
};

export default class Demo extends React.Component<{}, DemoState> {
    private _onInput: InputHandler;
    private _onInputChange: InputHandler;

    private _handleInput(input: string): void {
        this.setState({ value: input });
    }

    private _handleInputChange(value: string): void {
        console.warn(`change: ${value}`);
    }

    public constructor(props: any) {
        super(props);
        this.state = { value: '12' };
        this._onInput = this._handleInput.bind(this);
        this._onInputChange = this._handleInputChange.bind(this);
    }

    public componentDidMount(): void {
        setTimeout(() => this.setState({ value: '123456' }), 1000);
    }

    public render(): JSX.Element {
        const { state, _onInput, _onInputChange } = this;
        const { value } = state;
        const inputProps = {
            
        };

        const textField: JSX.Element = (
            <TextField
                id="field"
                value={value}
                style={{ width: 200, height: 60 }}
                inputProps={inputProps} />
        );

        return (
                <div>
                    <link href="https://fonts.googleapis.com/css?family=Roboto:400,300,500" rel="stylesheet" type="text/css"/>
                    <Keyboard
                        automatic
                        textField={textField}
                        onInput={_onInput}
                        onInputValueChange={_onInputChange}
                        keyboardKeyHeight={60}
                        keyboardKeySymbolSize={30}
                        layouts={[extendedKeyboard]}
                        disableEffects
                     />
                </div>
        );
    }
};