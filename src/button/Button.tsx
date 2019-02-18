import * as  React from 'react';
import classNames from 'classnames';
import './button.less';

export interface ButtonOption {
    text?: string;
    icon?: string;
    onClick?: () => void;
    type?: 'normal' | 'default' | 'danger';
    size?: 'sm' | 'xm' | 'lg';
    href?: string;
    target?: string;
    defalutCls?: string;
    loading?: boolean;
    style?: React.CSSProperties;
    className?: string;
}



export default class Button extends React.Component<ButtonOption, any>{
    static defaultProps = {
        defalutCls: 'keep-btn',
        loading: false,
        type: 'default',
        size: 'xm'
    }
    constructor(props: ButtonOption) {
        super(props);

    }
    render() {
        console.log(1)
        const {
            defalutCls, className, size, type, onClick, text
          } = this.props;
        const isAny: any = {};
        const classes = classNames({
            [`${defalutCls}`]: defalutCls,
            [`${defalutCls}-${size}`]: size,
            [`${defalutCls}-${type}`]: type,
            '': isAny
        })
        return <button className={classes} type='button' onClick={onClick}  >{text}</button>
    }
}