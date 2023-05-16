import React from "react";

const commentsData = [
  {
    name: "Ayush kumawat",
    text: "Nice video",
    replies: [],
  },
  {
    name: "Ayush kumawat",
    text: "Nice video",
    replies: [
      {
        name: "Ayush kumawat",
        text: "Nice video",
        replies: [],
      },
      {
        name: "Ayush kumawat",
        text: "Nice video",
        replies: [],
      },
      {
        name: "Ayush kumawat",
        text: "Nice video",
        replies: [
          {
            name: "Ayush kumawat",
            text: "Nice video",
            replies: [
              {
                name: "Ayush kumawat",
                text: "Nice video",
                replies: [],
              },
              {
                name: "Ayush kumawat",
                text: "Nice video",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Ayush kumawat",
    text: "Nice video",
    replies: [],
  },
  {
    name: "Ayush kumawat",
    text: "Nice video",
    replies: [],
  },
  {
    name: "Ayush kumawat",
    text: "Nice video",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex cursor-pointer my-2">
      <img
        className="w-10 h-10"
        alt="user"
        src="https://cdn-icons-png.flaticon.com/512/64/64572.png?w=740&t=st=1679414595~exp=1679415195~hmac=46f7c938abf468d8260cb2497532b83d33bf4a102974c8d842fa6da824c8f345"
      />
      <div className="px-2 cursor-pointer">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommmentsList = ({ comments }) => {
  return (
    <>
      <div>
        {comments.map((comment, index) => (
          <div>
            <Comment key={index} data={comment} />
            <div className="pl-5 ml-5 border border-l-gray-200">
              <CommmentsList comments={comment.replies} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const CommentsContainer = () => {
  return (
    <div className="m-2 p-2">
      <h1 className="text-xl font-bold">Commets :</h1>
      <CommmentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
