import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Test"
          timeAgo="Today at 1.45PM"
        />
      </ApprovalCard>
      <CommentDetail
        avatar={faker.image.avatar()}
        author="Test1"
        timeAgo="Today at 2.45PM"
      />
      <CommentDetail
        avatar={faker.image.avatar()}
        author="Test2"
        timeAgo="Today at 4.45PM"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
