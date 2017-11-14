import * as React from 'react';
import { Field } from 'redux-form';
import { SelectType, OptionFormat } from './SelectType'

interface Props {
    label: string;
    name: string;
    options: Array<OptionFormat>
    className: string;
    placeholder: string;
    multi: boolean;
    helpText?: string;
    required?: boolean;
    error: {
        isError: boolean;
        message?: string;
    }
}
/**
 * Create a select field (dropdown or tag input) based on redux-form
 * 
 * <pre>
 * interface Props {
 *   label: string; //Label shown above the field
 *   name: string; //name, id of the html field
 *   options: Array<OptionFormat> // option array for the tags, dropdwon
 *   className: string; //CSS classes
 *   placeholder: string; //Placeholder (e.g. Type to select)
 *   multi: boolean; //true = taginput, false = dropdown
 *   helpText?: string;
 *   required?: boolean; //mandatory field or not
 *   error: {
 *       isError: boolean; //if field should be marked as having an error
 *       message?: string; //error message
 *   }
 *  }
 *  </pre>
 */
class SelectField extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const { label, name, options, multi, className, placeholder, helpText, required, error } = this.props;

        return (
            <div className={`form-group ${required && 'required' || ''} ${error.isError && 'has-error' || ''}`}>
                <label className="control-label" htmlFor={name}>{label}</label>
                <Field
                    required={required && true}
                    name={name}
                    options={options}
                    component={SelectType}
                    placeholder={placeholder && placeholder}
                    multi={multi}
                />
                {error.message && <span className="help-block">{error.message}</span>}
                {helpText && <small className="help-block">{helpText}</small>}
            </div>
        );
    }
}

export {
    OptionFormat,
    SelectField
}