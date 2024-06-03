import Image from "next/image";

type LabResultListItemProps = {
  result: string;
};

export default function LabResultListItem({ result }: LabResultListItemProps) {
  return (
    <li className="mr-1 flex h-10 w-full cursor-pointer items-center justify-between p-4 hover:bg-[#F6F7F8]">
      <span className="body-regular-14">{result}</span>
      <Image
        src="/assets/icons/download_FILL0_wght300_GRAD0_opsz24 (1).svg"
        alt="download icon"
        height="20"
        width="20"
      />
    </li>
  );
}
