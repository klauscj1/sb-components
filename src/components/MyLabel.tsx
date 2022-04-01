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

export const MyLabel = ({
  label = "no lable",
  size = "normal",
  color = "primary",
  allCaps = false,
  fontColor,
}: Props) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{
        color: fontColor,
      }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
