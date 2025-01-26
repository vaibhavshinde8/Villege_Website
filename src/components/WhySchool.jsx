import { whySchool } from "../constants";
import img1 from '../assets/image1.webp';
import img2 from '../assets/image11.jpg';
import img3 from '../assets/image17.jpg';
const data = [
  {
    name: "Leroy Jenkins",
    time: "4 hours ago",
    profileImage: "https://source.unsplash.com/100x100/?portrait",
    postImage: img1,
    postTitle: "Nam cu platonem posidonium sanctus debiti",
    postText: "Eu qualisque aliquando mel, id lorem detraxit nec, ad elit minimum pri. Illum ipsum detracto ne ",
    commentsCount: 30,
    likesCount: 283
  },
  {
    name: "John Doe",
    time: "2 hours ago",
    profileImage: "https://source.unsplash.com/100x100/?portrait",
    postImage: img2,
    postTitle: "Lorem ipsum dolor sit amet",
    postText: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    commentsCount: 15,
    likesCount: 120
  },
  {
    name: "Jane Smith",
    time: "1 hour ago",
    profileImage: "https://source.unsplash.com/100x100/?portrait",
    postImage: img3,
    postTitle: "Consectetur adipiscing elit",
    postText: "Nunc accumsan, elit ut consequat sollicitudin, turpis ante facilisis risus, vel condimentum libero risus eu nulla.",
    commentsCount: 42,
    likesCount: 540
  }
];

function WhySchool() {
  return (
    <div className="post-container px-4 sm:px-8 lg:px-16 max-w-screen-2xl mx-auto" style={{marginLeft:"10px",marginRight:"10px"}}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col p-4 w-full mt-8 space-y-4 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800"
          >
            <div className="flex items-center space-x-3">
              
              <div className="flex flex-col space-y-1">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-sm font-semibold"
                >
                  {item.name}
                </a>
             
              </div>
            </div>
            <div>
              <img
                src={item.postImage}
                alt=""
                className="object-cover w-full mb-2 h-48 sm:h-60 rounded-md dark:bg-gray-500"
              />
              <h2 className="mb-1 text-lg font-semibold">{item.postTitle}</h2>
              <p className="text-sm dark:text-gray-600">{item.postText}</p>
            </div>
            <div className="flex justify-between items-center space-x-4">
              {/* Share Button */}
              <div className="space-x-2">
                <button
                  aria-label="Share this post"
                  type="button"
                  className="p-2 text-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-6 h-6 fill-current dark:text-violet-600"
                  >
                    <path d="M404,344a75.9,75.9,0,0,0-60.208,29.7L179.869,280.664a75.693,75.693,0,0,0,0-49.328L343.792,138.3a75.937,75.937,0,1,0-13.776-28.976L163.3,203.946a76,76,0,1,0,0,104.108l166.717,94.623A75.991,75.991,0,1,0,404,344Zm0-296a44,44,0,1,1-44,44A44.049,44.049,0,0,1,404,48ZM108,300a44,44,0,1,1,44-44A44.049,44.049,0,0,1,108,300ZM404,464a44,44,0,1,1,44-44A44.049,44.049,0,0,1,404,464Z"></path>
                  </svg>
                </button>
              </div>
  
              {/* Read More Button */}
              <div className="w-40  text-center">
                <button
                  type="button"
                  className="w-full py-2 font-semibold tracking-wide rounded-md bg-violet-600 text-gray-50"
                  style={{padding:"10px",marginTop:"10px",marginBottom:"10px",margin:"14px"}}
                >
                  Read more
                </button>
              </div>
  
              {/* Comment and Like Buttons */}
              <div className="flex space-x-2 text-sm dark:text-gray-600">
                <button
                  type="button"
                  className="flex items-center p-1 space-x-1.5"
                  style={{margin:"14px"}}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    aria-label="Number of comments"
                    className="w-6 h-6 fill-current dark:text-violet-600"
                  >
                    <path d="M448.205,392.507c30.519-27.2,47.8-63.455,47.8-101.078,0-39.984-18.718-77.378-52.707-105.3C410.218,158.963,366.432,144,320,144s-90.218,14.963-123.293,42.131C162.718,214.051,144,251.445,144,291.429s18.718,77.378,52.707,105.3c33.075,27.168,76.861,42.13,123.293,42.13,6.187,0,12.412-.273,18.585-.816l10.546,9.141A199.849,199.849,0,0,0,480,496h16V461.943l-4.686-4.685A199.17,199.17,0,0,1,448.205,392.507ZM370.089,423l-21.161-18.341-7.056.865A180.275,180.275,0,0,1,320,406.857c-79.4,0-144-51.781-144-115.428S240.6,176,320,176s144,51.781,144,115.429c0,31.71-15.82,61.314-44.546,83.358l-9.215,7.071,4.252,12.035a231.287,231.287,0,0,0,37.882,67.817A167.839,167.839,0,0,1,370.089,423Z"></path>
                  </svg>
                  <span>{item.commentsCount}</span>
                </button>
                <button
                  type="button"
                  className="flex items-center p-1 space-x-1.5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    aria-label="Number of likes"
                    className="w-6 h-6 fill-current dark:text-violet-600"
                  >
                    <path d="M126.638,202.672H51.986a24.692,24.692,0,0,0-24.242,19.434,487.088,487.088,0,0,0-1.466,206.535l1.5,7.189a24.94,24.94,0,0,0,24.318,19.78h74.547a24.866,24.866,0,0,0,24.837-24.838V227.509A24.865,24.865,0,0,0,126.638,202.672ZM119.475,423.61H57.916l-.309-1.487a455.085,455.085,0,0,1,.158-187.451h61.71Z"></path>
                    <path d="M494.459,277.284l-22.09-58.906a24.315,24.315,0,0,0-22.662-15.706H332V173.137l9.573-21.2A88.117,88.117,0,0,0,296.772,35.025a24.3,24.3,0,0,0-31.767,12.1L184.693,222.937V248h23.731L290.7,67.882a56.141,56.141,0,0,1,21.711,70.885l-10.991,24.341L300,169.692v48.98l16,16H444.3L464,287.2v9.272L396.012,415.962H271.07l-86.377-50.67v37.1L256.7,444.633a24.222,24.222,0,0,0,12.25,3.329h131.6a24.246,24.246,0,0,0,21.035-12.234L492.835,310.5A24.26,24.26,0,0,0,496,298.531V285.783A24.144,24.144,0,0,0,494.459,277.284Z"></path>
                  </svg>
                  <span>{item.likesCount}</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  

}

export default WhySchool;
