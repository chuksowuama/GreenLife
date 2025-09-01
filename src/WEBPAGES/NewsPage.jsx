import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SideFilterComponent from "../COMPONENTS/SideFilterComponent";
import { newsUpdatesData } from "../assets/Data";
import NewsSliderComponent from "../COMPONENTS/NewsSliderComponent";

const NewsPage = () => {
  const { newsId } = useParams();
  const [newdata, setnewsdata] = useState(null);
  const[successfull,setsuccessfull]=useState(false);
  const[erros,seterror]=useState("")
  const [newsformDetails, setNewsformDetails] = useState({
    subject: "",
    comment: "",
  });
  useEffect(() => {
    const fetchnews = newsUpdatesData.find(
      (item) => item.id === Number(newsId)
    );
    setnewsdata(fetchnews);
  }, [newsId]);

  function handleformchange(e) {
    const { name, value } = e.target;
    setNewsformDetails((prev) => ({ ...prev, [name]: value }));
  }

  function newsValidation(){
    const newsErroor={}
    if(!newsformDetails.subject.trim()){
        newsErroor.subject="please input your subject"
    }
    if(!newsformDetails.comment.trim()){
        newsErroor.comment="please input your comment"
    }
    return newsErroor
  }

  function handleSubmit(e) {
    e.preventDefault();
    const Newsformerror=newsValidation()
    if(Object.keys(Newsformerror).length===0){
      alert("comment submitted successfully")
      seterror("")
      setsuccessfull(true)
      setNewsformDetails({
        subject:"",
        comment:""
      })
    }else{
      seterror(Newsformerror)
    }
  }

  return (
    <>
      <div>
        <div>
          <div className="pageMargin grid md:grid-cols-1 lg:grid-cols-5 sm:px-3 lg:px-15 gap-4">
            <div className=" sm:order-2 lg:order-1 w-full">
              <SideFilterComponent />
            </div>
            <div className=" md:col-span-4 sm:order-1 lg:order-2 space-y-3 p-3">
              {newdata && (
                <div className="flex flex-col gap-3">
                  <div className="border-b pb-3 w-full">
                    <img
                      src={newdata.image}
                      alt=""
                      className="w-full object-cover"
                    />
                  </div>
                  <h3 className="text-texted sm:text-[0.9rem] md:text-2xl">
                    {newdata.title}
                  </h3>
                  <span className="flex gap-3.5 items-center">
                    <i class="fa-solid fa-calendar text-gray-500 text-[0.8rem]">
                      {newdata.date}
                    </i>{" "}
                    <p className="text-gray-500 text-[0.8rem]">
                      {newdata.author}
                    </p>{" "}
                  </span>
                  <p className="mt-3 space-y-3  text-gray-500">
                    {newdata.description}
                  </p>
                  <form action="" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-3 mt-5 border border-gray-400 rounded-[0.5rem]">
                      <h3 className="py-3 border-b-1 border-gray-500 px-4">
                        leave a comment
                      </h3>
                      <div className="px-4 py-2 flex flex-col gap-3">
                        <label htmlFor="">
                          subject:
                          <input
                            type="text"
                            name="subject"
                            id=""
                            value={newsformDetails.subject}
                            onChange={handleformchange}
                            className="w-full text-2xl p-1.5 outline-0 border rounded-[0.5rem] border-gray-500"
                          />
                          {erros.subject&& <p className="text-red-600">Empty subject </p> }
                        </label>
                        comment
                        <label htmlFor="">
                          <textarea
                            name="comment"
                            id=""
                            cols="30"
                            rows="10"
                            value={newsformDetails.Comment}
                            onChange={handleformchange}
                            className="w-full outline-0 border border-gray-400 pl-2.5 pt-2.5 rounded-[0.5rem]"
                            placeholder="write your comment here"
                          ></textarea>
                           {erros.comment&& <p className="text-red-600">Empty Comment </p> }
                        </label>
                      </div>
                    </div>
                    <input
                      type="submit"
                      name=""
                      id=""
                      className="button2 sm:w-full md:w-40"
                    />
                  </form>
                  <div>
                    <h3>Related Post</h3>
                    <NewsSliderComponent />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsPage;
// onClick={() => addToCart(curentAdded)}
