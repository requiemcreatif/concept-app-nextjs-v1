import { useState } from "react";
import { connectToDatabase } from "../../util/mongodb";
import Card from "@/components/card/Card";
import SearchBar from "@/components/searchBar/SearchBar";
import { CardContainer, MainWrapper, ContentWrapper } from "@/styledComponents/dashboardStyled";

const Dashboard = ({ properties }) => {
  const [searchResults, setSearchResults] = useState(properties);

  const handleSearch = async (data) => {
    setSearchResults(data);
  };

  const handleResetSearch = () => {
    setSearchResults(properties);
  };
  return (
    <MainWrapper>
      <ContentWrapper className="dashboard-content">
        <SearchBar
          onSearch={handleSearch}
          onReset={handleResetSearch}
          setSearchResults={setSearchResults}
        />
        <CardContainer className="card-container">
          {searchResults.map((property) => (
            <Card className="card" key={property._id} property={property} />
          ))}
        </CardContainer>
      </ContentWrapper>
    </MainWrapper>
  );
};

export default Dashboard;

export const getServerSideProps = async (context) => {
  const { db } = await connectToDatabase();
  const data = await db.collection("codes").find({}).toArray();

  const properties = JSON.parse(JSON.stringify(data));
  //console.log(properties);
  return {
    props: {
      properties: properties,
    },
  };
};
