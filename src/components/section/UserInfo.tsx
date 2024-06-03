import Card from "@/components/ui/card/Card";
import { formatDate } from "@/lib/functions";
import { Patient } from "@/lib/types";
import Image from "next/image";

type UserInfoProps = {
  className?: string;
  user: Patient;
};

export default function UserInfo({ user, className }: UserInfoProps) {
  const formattedDate = formatDate(user.date_of_birth);

  return (
    <Card className={className}>
      <section className="h-[740px] w-[367px] p-5">
        <Image
          src={user.profile_picture}
          alt={user.name}
          height="200"
          width="200"
          className="mx-auto my-3"
        />
        <h1 className="card-title-24pt mt-6 text-center">{user.name}</h1>
        <div className="mb-10 mt-8 space-y-6">
          <ListItem
            icon="BirthIcon"
            text="Date Of Birth"
            subtext={formattedDate}
          />
          <ListItem icon="FemaleIcon" text="Gender" subtext={user.gender} />
          <ListItem
            icon="PhoneIcon"
            text="Contact Info."
            subtext={user.phone_number}
          />
          <ListItem
            icon="PhoneIcon"
            text="Emergency Contacts"
            subtext={user.emergency_contact}
          />
          <ListItem
            icon="InsuranceIcon"
            text="Insurance Provider"
            subtext={user.insurance_type}
          />
        </div>
        <div className="flex justify-center">
          <button className="body-emphasized-14pt h-[41px] w-[220px] rounded-[41px] bg-[--activestate_bg_1]">
            Show All Information
          </button>
        </div>
      </section>
    </Card>
  );
}

type ListItemProps = {
  icon: string;
  text: string;
  subtext: string;
};

function ListItem({ icon, text, subtext }: ListItemProps) {
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
