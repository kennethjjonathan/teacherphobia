"use client"

import { ISchool } from "@/interface/ISchool";
import { Card, CardBody } from "@nextui-org/react";
import { useRouter } from "next/navigation";

type SchoolCardProps = {
  school: ISchool;
};

const SchoolCard = ({ school }: SchoolCardProps) => {
  const router = useRouter();
  return (
    <Card isPressable onPress={() => router.push(`/${school.uuid}`)}>
      <CardBody>
        <p className="text-large font-semibold">{school.name}</p>
        <p className="text-small text-default-500">{school.address}</p>
      </CardBody>
    </Card>
  );
};

export default SchoolCard;
