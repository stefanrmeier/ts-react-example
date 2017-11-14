import * as React from 'react';
import Select from 'react-select';

interface Props {
    input: { value: any, onChange: Function; onBlur: Function }
    addLabelText?: string;
    arrowRenderer?: any;
    autoBlur?: boolean;
    autofocus?: boolean;
    autoload?: boolean;
    autosize?: boolean;
    backspaceRemoves?: boolean;
    backspaceToRemoveMessage?: string;
    cache?: any;
    className?: string;
    clearable?: boolean;
    clearAllText?: string;
    clearRenderer?: () => void;
    clearValueText?: string;
    closeOnSelect?: boolean;
    deleteRemoves?: boolean;
    delimiter?: string;
    disabled?: boolean;
    filterOption?: any;
    filterOptions?: any;
    ignoreAccents?: boolean;
    ignoreCase?: boolean;
    inputProps: object
    isLoading?: boolean;
    joinValues?: boolean;
    labelKey?: string;
    loadOptions?: () => void;
    matchPos?: string;
    matchProp?: string;
    menuBuffer: number
    menuRenderer?: any;
    multi?: boolean;
    name?: string;
    noResultsText?: string;
    onBlur?: () => void;
    onBlurResetsInput?: boolean;
    onChange?: () => void;
    onClose?: () => void;
    onCloseResetsInput?: boolean;
    onFocus?: () => void;
    onInputChange?: () => void;
    onInputKeyDown?: () => void;
    onMenuScrollToBottom?: () => void;
    onOpen?: () => void;
    onSelectResetsInput?: boolean;
    onValueClick?: () => void;
    openOnClick?: boolean;
    openOnFocus?: boolean;
    optionRenderer?: any;
    options?: any;
    placeholder?: string;
    required?: boolean;
    resetValue?: any;
    scrollMenuIntoView?: boolean;
    searchable?: boolean;
    searchPromptText?: string;
    loadingPlaceholder?: string;
    tabSelectsValue?: boolean;
    value?: any;
    valueComponent?: any;
    valueKey?: string;
    valueRenderer?: any;
}


export interface OptionFormat {
    id: string;
    label: string
}



export class SelectType extends React.Component<Props, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        const { input, options } = this.props;

        const opt = options.map((option: OptionFormat) => {
            return { key: option.id, id: option.id, value: option.id, label: option.label };
        });

        return (
            <Select
                {...this.props}
                valueKey='id'
                labelKey='label'
                joinValues={true}
                delimiter={','}
                value={input.value}
                onChange={(value: any) => input.onChange(value)}
                onBlur={() => input.onBlur(input.value)}
                options={opt}
            />
        );
    }
}

