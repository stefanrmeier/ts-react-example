import * as React from 'react';
import { Field } from 'redux-form';

interface Props {
    label: string;
    name: string;
    type: string;
    className: string;
    placeholder: string;
    helpText?: string;
    required?: boolean;
    error: {
        isError: boolean;
        message: string;
    }
}


export class TextField extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const { label, name, type, className, placeholder, helpText, required, error } = this.props;

        return (
            <div className={`form-group ${required && 'required' || ''} ${error.isError && 'has-error' || ''}`}>
                <label className="control-label" htmlFor={name}>{label}</label>
                <Field component="input" type={type} required={required && true} name={name} className={className} placeholder={placeholder && placeholder} />
                {error.message && <span className="help-block">{error.message}</span>}
                {helpText && <span className="help-block">{helpText}</span>}
            </div>
        );
    }
}