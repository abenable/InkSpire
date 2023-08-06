import './button.css';

const Button = ({ ...props }) => {
  const { btn } = props;
  return <button className={btn}>{btn}</button>;
};

export default Button;
