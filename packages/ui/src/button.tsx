export const Button = ({
  label,
  hoverBgColor,
  hoverTextColor,
  borderColor,
  textColor,
  bgColor,
  imageURL,
  onClick
}: {
  label: string;
  hoverBgColor: string;
  hoverTextColor: string;
  borderColor: string;
  textColor: string;
  bgColor: string;
  imageURL: string;
  onClick: () => void
}) => {
  const styles = `w-90 h-13 flex items-center justify-center mt-5 cursor-pointer border-2 rounded-3xl ${hoverBgColor} ${hoverTextColor} ${borderColor} ${textColor} ${bgColor}`;
  const iconStyles = `h-5 ${bgColor}`;
  return (
    <div>
      <button onClick={onClick} className={styles}>
        <span className="mr-2">
          <img
            src={imageURL}
            alt=""
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
            className={iconStyles}
          />
        </span>
        {label}
      </button>
    </div>
  );
};
