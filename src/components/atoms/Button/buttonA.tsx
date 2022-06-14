import { Button } from "@mui/material";
import React from "react";

export interface ButtonIconProps {
    startIcon?: React.ReactNode,
    endIcon?: React.ReactNode,
    variant?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
}

export const ButtonComponent = (props: any) => {
    let {startIcon, endIcon, variant, style, children, onMouseEnter, onMouseLeave, onClick, className,disabe} = props
    return (
        <Button 
        startIcon={startIcon}
        endIcon={endIcon}
        variant={variant}
        style={style}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className={className}>
            {children}
        </Button>
    )
} 