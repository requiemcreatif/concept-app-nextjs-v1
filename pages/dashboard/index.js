import axios from "axios";
import { connectToDatabase } from "../../util/mongodb";
import Card from "@/components/card/Card";
import styled from "styled-components";

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1rem;
  background-color: #fff;
  margin: 0 auto;
  max-width: 1200px;
`;

const dashboard = ({ properties }) => {
  return (
    <div>
      <CardContainer>
        {properties.map((property) => (
          <Card className="card" key={property._id} property={property} />
        ))}
      </CardContainer>
      <div className="footer">
        <p>2023 Concept App. All Rights reserved | Requiem Creatif | Omeruta</p>
      </div>
    </div>
  );
};

export default dashboard;

export const getServerSideProps = async (context) => {
  const { db } = await connectToDatabase();
  const data = await db.collection("codes").find({}).limit(20).toArray();

  const properties = JSON.parse(JSON.stringify(data));
  //console.log(properties);
  return {
    props: {
      properties: properties,
    },
  };
};
