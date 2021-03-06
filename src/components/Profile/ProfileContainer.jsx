import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReposContainer from "../Repos/ReposContainer";
import ProfileContainerStyled from "./ProfileContainer.styled";

function ProfileContainer({ data }) {
  const [isLoading, setIsLoading] = useState(true);
  const [userRepos, setUserRepos] = useState([]);
  const navigate = useNavigate();
  const { avatar_url, bio, followers, following, name, login, public_repos } =
    data;

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}/repos`)
      .then((res) => res.json())
      .then((data) => setUserRepos(data))
      .then(() => setIsLoading(false))
      .catch((error) => console.log(error));
  }, []);

  return (
    <section>
      <header>
        <ProfileContainerStyled>
          <button title="Go back to" onClick={() => navigate("/")}>
            Back to home
          </button>
          <img src={avatar_url} alt="" />
          <div className="details">
            <h2>{name}</h2>
            <span className="fs-md">@{login}</span>
            {bio && <p className="fs-md w-md">{bio}</p>}
            <div className="grid w-md">
              <div>
                <span className="fs-xmd">{public_repos} </span>
                <span>Respositories</span>
              </div>
              <div>
                <span className="fs-xmd">{followers} </span>
                <span>Followers</span>
              </div>
              <div>
                <span className="fs-xmd">{following} </span>
                <span>Following</span>
              </div>
            </div>
          </div>
        </ProfileContainerStyled>
      </header>
      {!isLoading && <ReposContainer data={userRepos} />}
    </section>
  );
}

export default ProfileContainer;
