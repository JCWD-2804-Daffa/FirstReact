import { useLocation } from "react-router-dom";

import ReusableText from "../../components/ReusableText";
import ReusableContainer from "../../components/ReusableContainer";
import Card from "../../components/card";

const LandingPage = () => {
  const location = useLocation();

  const handleCardClick = () => {
    alert("Card clicked");
  };

  return (
    <main className="container">
      <div>React App</div>
      <h4>Props from auth page: {location?.state?.text}</h4>
      <ReusableText description="this is a reusable text property" />
      <ReusableText description="can change twice" />
      <ReusableContainer>
        <button>This is a children</button>
      </ReusableContainer>
      <div className="card-layout">
        <Card
          title="Beautiful Sunset"
          description="A beautiful over the mountains"
          imageUrl="https://images.unsplash.com/photo-1604725333736-1f962a6218d0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwc3Vuc2V0fGVufDB8fDB8fHww"
          onClick={handleCardClick}
        />
        <Card
          title="Beautiful Sunset"
          description="A beautiful over the mountains"
          imageUrl="https://images.unsplash.com/photo-1604725333736-1f962a6218d0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwc3Vuc2V0fGVufDB8fDB8fHww"
          onClick={handleCardClick}
        />
        <Card
          title="Beautiful Sunset"
          description="A beautiful over the mountains"
          imageUrl="https://images.unsplash.com/photo-1604725333736-1f962a6218d0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwc3Vuc2V0fGVufDB8fDB8fHww"
          onClick={handleCardClick}
        />
      </div>
    </main>
  );
};

export default LandingPage;