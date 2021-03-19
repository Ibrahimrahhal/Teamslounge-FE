import InputProps from "../../input/ts/props.d";

export default interface Props extends InputProps {
  iconName: string;
  onIconClicked: () => void;
  renderIcon?: () => ReactElement;
}
