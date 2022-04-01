/// <reference types="react" />
import "./MyLabel.css";
export interface Props {
    /**
     * Label to show
     */
    label: string;
    /**
     * Size of label
     */
    size: "normal" | "h1" | "h2" | "h3";
    /**
     * Word on capital
     */
    allCaps: boolean;
    /**
     * Color of label
     */
    color: "primary" | "secondary" | "tertiary";
    /**
     * Color of font
     */
    fontColor?: string;
}
export declare const MyLabel: ({ label, size, color, allCaps, fontColor, }: Props) => JSX.Element;
