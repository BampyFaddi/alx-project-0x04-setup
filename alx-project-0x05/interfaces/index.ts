// Props for the reusable Button component
export interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

// Props for routing pages
export interface PageRouteProps {
  title: string;
  path: string;
}

// Props for the Layout component
export interface LayoutProps {
  children: React.ReactNode;
}

export interface ButtonProps {
  buttonLabel: string;
  buttonSize?: string;
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green';
  action?: () => void;
}

import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export interface PageRouteProps {
  pageRoute: string;
}
