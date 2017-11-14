import * as React from 'react';
import { Field } from 'redux-form';

export interface ValueFormat {
    value: string;
    label: string;
}

interface Props {
    label: string;
    name: string;
    values: Array<ValueFormat>
    className: string;
    helpText?: string;
    required?: boolean;
    error: {
        isError: boolean;
        message?: string;
    }
}

export class RadioField extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const { label, name, className, values, helpText, required, error } = this.props;

        const fields = values.map((value: ValueFormat) => {
            return <div className={className} key={value.value}><Field component="input" type="radio" required={required || false} name={name} value={value.value} /> {value.label} </div>
        });

        return (
            <div className={`form-group ${required && 'required' || ''} ${error.isError && 'has-error' || ''}`}>
                <div style={{display: 'block'}}><label className="control-label" htmlFor={name}>{label}</label></div>
                {fields}
                {error.message && <span className="help-block">{error.message}</span>}
                {helpText && <small className="help-block">{helpText}</small>}
            </div>
        );
    }
}