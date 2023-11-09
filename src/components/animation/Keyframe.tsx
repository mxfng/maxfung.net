// this snippet allows me to dynamically create keyframe animations
// used in the tokamak visual in my about section

type IProps = {
  name: string;
  animationProps: Record<string, React.CSSProperties | string>;
};

const toCss = (cssObject: React.CSSProperties | string) =>
  typeof cssObject === "string"
    ? cssObject
    : Object.keys(cssObject).reduce((accumulator, key) => {
        const cssKey = key.replace(/[A-Z]/g, (v) => `-${v.toLowerCase()}`);
        const cssValue = (cssObject as any)[key].toString().replace("'", "");
        return `${accumulator}${cssKey}:${cssValue};`;
      }, "");

const Keyframe = ({ name, animationProps }: IProps) => {
  const cssRules = Object.entries(animationProps).map(
    ([key, value]) => `${key} { ${toCss(value)} }`
  );
  return (
    <style>
      {`@keyframes ${name} {
        ${cssRules.join("\n")}
      }`}
    </style>
  );
};

export default Keyframe;
