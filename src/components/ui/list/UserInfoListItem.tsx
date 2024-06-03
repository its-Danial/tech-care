import Image from "next/image";

type UserInfoListItemProps = {
  icon: string;
  text: string;
  subtext: string;
};

export default function UserInfoListItem({
  icon,
  text,
  subtext,
}: UserInfoListItemProps) {
  return (
    <div className="flex items-center space-x-4">
      <Image
        src={`/assets/icons/${icon}.svg`}
        alt={`${text} icon`}
        height="42"
        width="42"
      />
      <div className="flex flex-col space-y-1">
        <h5 className="body-regular-14">{text}</h5>
        <h6 className="body-emphasized-14pt">{subtext}</h6>
      </div>
    </div>
  );
}
