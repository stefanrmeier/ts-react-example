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
        message?: string;
    }
}

/**
 * Create a input field based on redux-form
 * 
 * <pre>
 * interface Props {
 *   label: string; //Label shown above the field
 *   name: string; //name, id of the html field
 *   type: string; //input type text, email, date
 *   className: string; //CSS classes
 *   placeholder: string; //Placeholder (e.g. Type to select)
 *   helpText?: string;
 *   required?: boolean; //mandatory field or not
 *   error: {
 *       isError: boolean; //if field should be marked as having an error
 *       message?: string; //error message
 *   }
 *  }
 *  </pre>
 */
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
                {helpText && <small className="help-block">{helpText}</small>}
            </div>
        );
    }
}