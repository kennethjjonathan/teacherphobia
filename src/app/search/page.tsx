import SchoolCard from "@/components/SchoolCard/SchoolCard";
import { ISchool } from "@/interface/ISchool";

const dummyData: ISchool[] = [
  {
    uuid: 1,
    name: "Universitas Pelita Harapan",
    address: "Jalan M.H. Thamrin Boulevard No.1100",
    web_url: "https://www.uph.edu/en/",
    rating_amount: 15,
    rating: {
      difficulty: 4.5,
      career_support: 3,
      hazing_culture: 4,
      worth_the_money: 3,
      experience_with_the_teacher: 5,
      curriculum: 3,
      school_area: 5,
    },
  },
];

const SearchPage = () => {
  return (
    <div className="container">
      {dummyData.map((item) => (
        <SchoolCard school={item} key={item.uuid} />
      ))}
    </div>
  );
};

export default SearchPage;
