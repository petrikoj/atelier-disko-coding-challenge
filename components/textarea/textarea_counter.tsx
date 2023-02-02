import styles from "./textarea.module.css";

type InputCounterProps = {
  currentValue: number;
  maxValue: number;
  thresholdValue: number;
};

export function TextAreaInputCounter({
  currentValue,
  maxValue,
  thresholdValue,
}: InputCounterProps) {
  return (
    <div
      className={
        currentValue < thresholdValue ? styles.counter : styles.counterWarning
      }
      id="counter"
    >
      {maxValue - currentValue} characters left
    </div>
  );
}
