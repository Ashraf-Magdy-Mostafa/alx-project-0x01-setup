// components/common/Button.tsx

import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    variant?: "primary" | "secondary" | "danger";
    className?: string;
    disabled?: boolean;
}

const baseClasses = "px-4 py-2 rounded font-medium transition duration-200";

const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700",
};

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    type = "button",
    variant = "primary",
    className = "",
    disabled = false,
}) => {
    const classes = `${baseClasses} ${variantClasses[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : ""
        } ${className}`;

    return (
        <button type={type} onClick={onClick} className={classes} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;
