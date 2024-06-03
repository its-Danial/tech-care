import Card from "@/components/ui/card/Card";
import { formatDate } from "@/lib/functions";
import { Patient } from "@/lib/types";
import Image from "next/image";
import UserInfoListItem from "@/components/ui/list/UserInfoListItem";

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
          <UserInfoListItem
            icon="BirthIcon"
            text="Date Of Birth"
            subtext={formattedDate}
          />
          <UserInfoListItem
            icon="FemaleIcon"
            text="Gender"
            subtext={user.gender}
          />
          <UserInfoListItem
            icon="PhoneIcon"
            text="Contact Info."
            subtext={user.phone_number}
          />
          <UserInfoListItem
            icon="PhoneIcon"
            text="Emergency Contacts"
            subtext={user.emergency_contact}
          />
          <UserInfoListItem
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
