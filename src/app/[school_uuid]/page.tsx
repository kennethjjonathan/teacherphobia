import CommentCard from "@/components/CommentCard/CommentCard";
import RatingGroup from "@/components/RatingGroup/RatingGroup";
import { IComment } from "@/interface/IComment";
import { ISchool } from "@/interface/ISchool";

const dummyData: ISchool = {
  uuid: 1,
  name: "Universitas Pelita Harapan",
  address: "Jalan M.H. Thamrin Boulevard No.1100",
  web_url: "https://www.uph.edu/en/",
  rating_amount: 15,
  rating: {
    difficulty: {
      score: 4.5,
    },
    career_support: {
      score: 3,
    },
    hazing_culture: {
      score: 4,
    },
    worth_the_money: {
      score: 4,
    },
    experience_with_the_teacher: {
      score: 5,
    },
    curriculum: {
      score: 4,
    },
    school_area: {
      score: 2,
    },
  },
};

const dummyComments: IComment[] = [
  {
    uuid: 1,
    school_uuid: 1,
    comment: "The school itself was great, but it was quite expensive.",
    major: "Law",
    rating: {
      difficulty: {
        score: 3.5,
        elaboration: "Not too difficult, somewhere in the middle.",
      },
      career_support: {
        score: 2,
        elaboration:
          "I don't think they provide a lot of career support for alumni",
      },
      curriculum: {
        score: 5,
        elaboration:
          "Can't say too muuch about it since I work in a whole different industry.",
      },
      experience_with_the_teacher: {
        score: 3,
        elaboration: "Overall teahcer experience was great",
      },
      hazing_culture: {
        score: 5,
        elaboration: "No hazing culture, ot was great",
      },
      school_area: {
        score: 3,
      },
      worth_the_money: {
        score: 1,
      },
    },
  },
  {
    uuid: 2,
    school_uuid: 1,
    comment: "The school itself was great, but it was quite expensive.",
    major: "Law",
    rating: {
      difficulty: {
        score: 3.5,
        elaboration: "Not too difficult, somewhere in the middle.",
      },
      career_support: {
        score: 2,
        elaboration:
          "I don't think they provide a lot of career support for alumni",
      },
      curriculum: {
        score: 5,
        elaboration:
          "Can't say too muuch about it since I work in a whole different industry.",
      },
      experience_with_the_teacher: {
        score: 3,
        elaboration: "Overall teahcer experience was great",
      },
      hazing_culture: {
        score: 5,
        elaboration: "No hazing culture, ot was great",
      },
      school_area: {
        score: 3,
      },
      worth_the_money: {
        score: 5,
      },
    },
  },
];

const SchoolDetailpage = ({ params }: { params: { school_uuid: string } }) => {
  return (
    <div className="container">
      <p>{params.school_uuid}</p>
      <RatingGroup rating={dummyData.rating} />
      <div className="space-y-3">
        {dummyComments.map((item) => (
          <CommentCard comment={item} key={item.uuid} />
        ))}
      </div>
    </div>
  );
};

export default SchoolDetailpage;
