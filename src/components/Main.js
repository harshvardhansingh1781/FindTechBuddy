// import styled from "styled-components";
import photoIcon from "../images/photo-icon.svg";
import videoIcon from "../images/video-icon.svg";
import eventIcon from "../images/event-icon.svg";
import articleIcon from "../images/article-icon.svg";
import sharedImage from "../images/shared-image.jpg";
import clappingHands from "../images/clappingHands.png";
import like from "../images/like.svg";
import comments from "../images/comments.svg";
import share from "../images/share-icon.svg";
import send from "../images/send-icon.svg";
import "./Main.css";

const Main = (props) => {
  return (
    <div className="Container CommonCard">
      <div className="ShareBox">
        Share
        <div className="profile-photo">
          <img src="../images/user.svg" alt="" />
          <button>Start a post</button>
        </div>
        <div className="addPostBtn">
          <button>
            <img src={photoIcon} alt="" />
            <span>Photo</span>
          </button>

          <button>
            <img src={videoIcon} alt="" />
            <span>Video</span>
          </button>
          <button>
            <img src={eventIcon} alt="" />
            <span>Event</span>
          </button>

          <button>
            <img src={articleIcon} alt="" />
            <span>Write Article</span>
          </button>
        </div>
      </div>
      <div className="article CommonCard">
        <div className="sharedActor">
          <a href="/">
            <img src="../images/user.svg" alt="" />
            <div>
              <span>Title</span>
              <span>Info</span>
              <span>Date</span>
            </div>
          </a>
          <button>
            <h2>
              <strong>...</strong>
            </h2>
            {/* <img src="../images/ellipsis.svg" alt="" /> */}
          </button>
        </div>
        <div className="discription">Desciption</div>
        <div className="sharedImage">
          <a href="/home">
            <img src={sharedImage} alt="" />
          </a>
        </div>
        <div className="socialCounts">
          <li>
            <button>
              <img
                src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb"
                alt=""
              />
              <img src={clappingHands} alt="" />
              <span>75</span>
            </button>
          </li>
          <li>
            <a href="/">2 comments</a>
          </li>
        </div>
        <div className="comment">
          <button>
            <img src={like} alt="" />
            <span>Like</span>
          </button>
          <button>
            <img src={comments} alt="" />
            <span>Comments</span>
          </button>
          <button>
            <img src={share} alt="" />
            <span>Share</span>
          </button>
          <button>
            <img src={send} alt="" />
            <span>Send</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
