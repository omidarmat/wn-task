"use client";

import { Button as BaseUiButton } from "@base-ui/react";
import clsx from "clsx";
import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import { Spinner } from "../spinner/spinner";
import { ButtonSize, ButtonVariant } from "@/types/ui/button";
import "./module.index.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  classes?: string;
  children?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      isLoading = false,
      variant = ButtonVariant.contained,
      size = ButtonSize.regular,
      fullWidth = false,
      disabled,
      classes,
      className,
      type = "button",
      children,
      ...rest
    },
    ref,
  ) => {
    const isDisabled = Boolean(disabled || isLoading);

    const base = clsx(
      "font-semibold",
      "inline-flex items-center justify-center gap-2",
      "select-none whitespace-nowrap",
      "disabled:cursor-not-allowed",
      "cursor-pointer",
      "rounded-full",
      "transition-all duration-300",

      // Focus ring
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2",
      "focus-visible:ring-offset-white",
      "dark:focus-visible:ring-primary-400 dark:focus-visible:ring-offset-secondary-950",

      fullWidth ? "w-full" : "w-auto",
    );

    const sizes: Record<ButtonSize, string> = {
      small: variant === "icon" ? "h-8 w-8 px-1 text-sm" : "h-12 px-4 text-sm",
      regular:
        variant === "icon" ? "h-10 w-10 px-2 text-base" : "h-14 px-8 text-base",
      large:
        variant === "icon" ? "h-12 w-12 px-3 text-base" : "h-16 px-10 text-lg",
    };

    const variants: Record<ButtonVariant, string> = {
      contained: clsx(
        "button-linear-gradient text-white",
        "hover:button-linear-gradient",
        "disabled:bg-neutral-300",

        "dark:button-linear-gradient",
        "dark:hover:button-linear-gradient",
        "dark:disabled:button-linear-gradient",
      ),

      contained_error: clsx(
        // Light
        "bg-error-600 text-white",
        "hover:bg-error-700 active:bg-error-800",
        "disabled:bg-neutral-300 disabled:text-neutral-400",

        // Dark
        "dark:bg-error-600 dark:text-white",
        "dark:hover:bg-error-600 dark:active:bg-error-700",
        "dark:disabled:bg-bg-600 dark:disabled:text-neutral-500",
      ),

      contained_success: clsx(
        // Light
        "bg-success-600 text-white",
        "hover:bg-success-700 active:bg-success-800",
        "disabled:bg-neutral-300 disabled:text-neutral-400",

        // Dark
        "dark:bg-success-600 dark:text-white",
        "dark:hover:bg-success-700 dark:active:bg-success-700",
        "dark:disabled:bg-bg-600 dark:disabled:text-neutral-500",
      ),

      outlined: clsx(
        "bg-transparent border border-primary-500 text-primary-500",
        "hover:bg-primary-50 active:bg-primary-100",
        "disabled:border-neutral-300 disabled:text-neutral-400",

        "dark:border-primary-400 dark:text-primary-400",
        "dark:hover:bg-primary-400/10 dark:active:bg-primary-400/15",
        "dark:disabled:border-neutral-500 dark:disabled:text-neutral-500",
      ),

      outlined_error: clsx(
        // Light
        "bg-transparent border border-error-600 text-error-600",
        "hover:bg-error-400/10 active:bg-error-100",
        "disabled:border-neutral-300 disabled:text-neutral-400",

        // Dark
        "dark:border-error-600 dark:text-error-600",
        "dark:hover:bg-error-400/10 dark:active:bg-error-400/15",
        "dark:disabled:border-neutral-500 dark:disabled:text-neutral-500",
      ),

      outlined_info: clsx(
        // Light
        "bg-transparent border border-info-600 text-info-600",
        "hover:bg-info-50 active:bg-info-100",
        "disabled:border-neutral-300 disabled:text-neutral-400",

        // Dark
        "dark:border-info-600 dark:text-info-600",
        "dark:hover:bg-info-400/10 dark:active:bg-info-400/15",
        "dark:disabled:border-neutral-500 dark:disabled:text-neutral-500",
      ),

      text: clsx(
        "bg-transparent text-primary-600",
        "hover:bg-primary-100 active:bg-primary-200 ",
        "disabled:text-neutral-400  disabled:hover:bg-transparent",

        "dark:text-primary-400",
        "dark:hover:bg-primary-400/10 dark:active:bg-primary-400/15",
        "dark:disabled:text-bg-400",
      ),

      icon: clsx(
        "bg-transparent text-secondary-700",
        "hover:bg-secondary-50 active:bg-secondary-100",
        "disabled:text-secondary-500",

        "dark:text-secondary-300",
        "dark:hover:bg-secondary-400/10 dark:active:bg-secondary-400/15",
        "dark:disabled:text-secondary-500",
      ),
    };

    return (
      <BaseUiButton
        ref={ref}
        type={type}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        aria-busy={isLoading || undefined}
        className={clsx(
          base,
          sizes[size],
          variants[variant],
          classes,
          className,
        )}
        {...rest}
      >
        {isLoading && <Spinner size={12} />}
        {children}
      </BaseUiButton>
    );
  },
);

Button.displayName = "Button";
