import { useState } from "react";
import { connectToDatabase } from "../../util/mongodb";
import Card from "@/components/card/Card";
import SearchBar from "@/components/searchBar/SearchBar";

const Dashboard = ({ properties }) => {
  const [searchResults, setSearchResults] = useState(properties);

  const handleSearch = async (data) => {
    setSearchResults(data);
  };

  const handleResetSearch = () => {
    setSearchResults(properties);
  };
  return (
    <div>
      <div className="dashboard-content p-5 max-w-screen-2xl mx-auto">
        <SearchBar
          onSearch={handleSearch}
          onReset={handleResetSearch}
          setSearchResults={setSearchResults}
        />
        <div className=" h-full px-6 py-12 xl:flex xl:justify-center">
          <div className=" grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 ">
            {searchResults.map((property) => (
              <div key={property._id} className=" w-full max-w-md mx-auto">
                <Card className="card" property={property} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

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
